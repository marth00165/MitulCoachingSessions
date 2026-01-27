#!/usr/bin/env node
/**
 * Simple API server for the progress tracker
 * Checks file existence and runs tests to determine implementation status
 */

const express = require('express');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

/**
 * Get all existing implementation files
 */
app.get('/api/list-implementations', async (req, res) => {
  try {
    const implementations = await getAllImplementations();
    res.json(implementations);
  } catch (error) {
    console.error('Error listing implementations:', error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * Check if tests pass for a specific file
 */
app.post('/api/check-tests', async (req, res) => {
  const { fileName, language, filePath } = req.body;

  try {
    const testsPass = await runTests(filePath, language);
    res.json({ testsPass, filePath });
  } catch (error) {
    console.error(`Error running tests for ${fileName}:`, error);
    res.json({ testsPass: false, error: error.message });
  }
});

/**
 * Check if a problem implementation exists and if its tests pass
 */
app.post('/api/check-implementation', async (req, res) => {
  const { fileName, language, paths } = req.body;

  try {
    const result = await checkImplementationStatus(fileName, language, paths);
    res.json(result);
  } catch (error) {
    console.error(`Error checking ${fileName}:`, error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * Get all existing implementation files from the workspace
 */
async function getAllImplementations() {
  const implementations = {};
  const algorithmPaths = [
    'algorithms/arrays',
    'algorithms/strings',
    'algorithms/trees',
    'algorithms/graphs',
    'algorithms/dynamic-programming',
    'algorithms/backtracking',
    'algorithms/searching',
    'algorithms/sorting',
    'algorithms/math',
    'algorithms/greedy',
    'data-structures/linked-lists',
    'data-structures/stacks',
    'data-structures/queues',
    'data-structures/hash-tables',
    'data-structures/heaps',
    'data-structures/tries',
  ];

  for (const dirPath of algorithmPaths) {
    try {
      // Check main directory for both .js and .py files
      if (fs.existsSync(dirPath)) {
        const files = fs.readdirSync(dirPath);
        for (const file of files) {
          if (file.endsWith('.py') || file.endsWith('.js')) {
            const fileName = path.basename(file, path.extname(file));
            if (!implementations[fileName]) {
              implementations[fileName] = {};
            }
            const language = file.endsWith('.py') ? 'python' : 'nodejs';
            implementations[fileName][language] = {
              path: path.join(dirPath, file),
              category: dirPath.split('/')[1],
            };
          }
        }
      }

      // Also check nodejs subdirectory (for backward compatibility)
      const nodejsPath = path.join(dirPath, 'nodejs');
      if (fs.existsSync(nodejsPath)) {
        const files = fs.readdirSync(nodejsPath);
        for (const file of files) {
          if (file.endsWith('.js')) {
            const fileName = path.basename(file, '.js');
            if (!implementations[fileName]) {
              implementations[fileName] = {};
            }
            // Don't overwrite if already exists in main directory
            if (!implementations[fileName].nodejs) {
              implementations[fileName].nodejs = {
                path: path.join(nodejsPath, file),
                category: dirPath.split('/')[1],
              };
            }
          }
        }
      }
    } catch (error) {
      // Directory doesn't exist, skip
      continue;
    }
  }

  return implementations;
}

/**
 * Check implementation status for a specific file and language
 */
async function checkImplementationStatus(fileName, language, possiblePaths) {
  const extensions = {
    nodejs: '.js',
    python: '.py',
  };

  const extension = extensions[language];
  if (!extension) {
    return { exists: false, testsPass: false };
  }

  // Look for the file in possible paths
  let filePath = null;
  for (const basePath of possiblePaths) {
    const candidates = [
      // Check main directory first (new structure)
      path.join(basePath, `${fileName}${extension}`),
      // Then check nodejs subdirectory (legacy structure)
      path.join(basePath, 'nodejs', `${fileName}${extension}`),
      // Also check python subdirectory for completeness
      path.join(basePath, 'python', `${fileName}${extension}`),
    ];

    for (const candidate of candidates) {
      if (fs.existsSync(candidate)) {
        filePath = candidate;
        break;
      }
    }

    if (filePath) break;
  }

  if (!filePath) {
    return { exists: false, testsPass: false };
  }

  // File exists, now check if tests pass
  const testsPass = await runTests(filePath, language);

  return {
    exists: true,
    testsPass,
    filePath: path.relative(process.cwd(), filePath),
  };
}

/**
 * Run tests for a specific file
 */
function runTests(filePath, language) {
  return new Promise((resolve) => {
    let command, args;

    if (language === 'nodejs') {
      command = 'node';
      args = [filePath];
    } else if (language === 'python') {
      command = 'python3';
      args = [filePath];
    } else {
      resolve(false);
      return;
    }

    const child = spawn(command, args, {
      stdio: 'pipe',
      cwd: process.cwd(),
    });

    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (data) => {
      stdout += data.toString();
    });

    child.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    child.on('close', (code) => {
      // Check if tests passed based on output and exit code
      const output = stdout + stderr;
      const testsPass =
        code === 0 &&
        (output.includes('✅') ||
          output.includes('All test') ||
          output.includes('passed') ||
          output.includes('PASSED')) &&
        !output.includes('FAILED') &&
        !output.includes('❌');

      resolve(testsPass);
    });

    child.on('error', (error) => {
      console.error(`Failed to run ${filePath}:`, error);
      resolve(false);
    });

    // Timeout after 10 seconds
    setTimeout(() => {
      child.kill('SIGKILL');
      resolve(false);
    }, 10000);
  });
}

/**
 * Get all implementations and their test status
 */
app.get('/api/all-implementations', async (req, res) => {
  const categories = [
    'algorithms/arrays',
    'algorithms/trees',
    'algorithms/graphs',
    'algorithms/strings',
    'algorithms/dynamic-programming',
    'algorithms/backtracking',
    'algorithms/searching',
    'algorithms/sorting',
    'data-structures/linked-lists',
    'data-structures/stacks',
    'data-structures/queues',
    'data-structures/hash-tables',
    'data-structures/heaps',
    'data-structures/tries',
  ];

  const results = {};

  for (const category of categories) {
    const categoryPath = path.join(process.cwd(), category);
    if (!fs.existsSync(categoryPath)) continue;

    const files = getAllJSFiles(categoryPath);

    for (const file of files) {
      const fileName = path.basename(file, path.extname(file));
      if (!results[fileName]) {
        const testsPass = await runTests(file, 'nodejs');
        results[fileName] = {
          exists: true,
          testsPass,
          filePath: path.relative(process.cwd(), file),
        };
      }
    }
  }

  res.json(results);
});

/**
 * Recursively get all .js files in a directory
 */
function getAllJSFiles(dir) {
  let files = [];

  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        files = files.concat(getAllJSFiles(fullPath));
      } else if (
        entry.isFile() &&
        entry.name.endsWith('.js') &&
        !entry.name.startsWith('.')
      ) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error);
  }

  return files;
}

app.listen(PORT, () => {
  console.log(`🚀 Progress Tracker API running on http://localhost:${PORT}`);
  console.log(
    `📊 Visit http://localhost:${PORT}/progress-tracker.html to view the tracker`,
  );
});

module.exports = app;
