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
      path.join(basePath, `${fileName}${extension}`),
      path.join(basePath, 'nodejs', `${fileName}${extension}`),
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
