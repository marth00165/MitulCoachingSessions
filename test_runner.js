#!/usr/bin/env node
/**
 * Node.js Test Runner for algorithms and data structures
 *
 * Usage:
 *   node test_runner.js                    # Run all Node.js tests
 *   node test_runner.js --category arrays  # Run specific category
 *   node test_runner.js --file two-sum     # Run specific file
 */

const fs = require('fs');
const path = require('path');

function findJSTestFiles(rootDir, category = null, filePattern = null) {
  const testFiles = [];
  const searchDirs = ['algorithms', 'data-structures'];

  function searchDirectory(dir) {
    const dirPath = path.join(rootDir, dir);
    if (!fs.existsSync(dirPath)) return;

    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const subDir = path.join(dir, entry.name);
        if (entry.name === 'nodejs' || entry.name.includes('js')) {
          // Look for JS files in this directory
          const jsDir = path.join(rootDir, subDir);
          if (fs.existsSync(jsDir)) {
            const jsFiles = fs
              .readdirSync(jsDir)
              .filter((file) => file.endsWith('.js') && !file.startsWith('.'));

            for (const file of jsFiles) {
              if (filePattern && !file.includes(filePattern)) continue;
              if (category && !subDir.includes(category)) continue;

              const fullPath = path.join(jsDir, file);
              // Check if file has test functionality
              const content = fs.readFileSync(fullPath, 'utf-8');
              if (
                content.includes('function test') ||
                content.includes('require.main === module')
              ) {
                testFiles.push(fullPath);
              }
            }
          }
        } else {
          searchDirectory(subDir);
        }
      }
    }
  }

  for (const searchDir of searchDirs) {
    searchDirectory(searchDir);
  }

  return testFiles;
}

function runJSTest(filePath) {
  return new Promise((resolve) => {
    const { spawn } = require('child_process');
    const child = spawn('node', [filePath], { stdio: 'pipe' });

    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (data) => {
      stdout += data.toString();
    });

    child.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    child.on('close', (code) => {
      if (code === 0 && (stdout.includes('✅') || stdout.includes('passed'))) {
        resolve({ success: true, output: stdout.trim() });
      } else {
        resolve({ success: false, output: stderr.trim() || stdout.trim() });
      }
    });

    child.on('error', (error) => {
      resolve({
        success: false,
        output: `Failed to run ${filePath}: ${error.message}`,
      });
    });
  });
}

async function main() {
  const args = process.argv.slice(2);
  const categoryArg = args.find((arg) => arg.startsWith('--category='));
  const fileArg = args.find((arg) => arg.startsWith('--file='));
  const verbose = args.includes('--verbose') || args.includes('-v');

  const category = categoryArg ? categoryArg.split('=')[1] : null;
  const filePattern = fileArg ? fileArg.split('=')[1] : null;

  const repoRoot = __dirname;
  const testFiles = findJSTestFiles(repoRoot, category, filePattern);

  if (testFiles.length === 0) {
    console.log('❌ No JavaScript test files found matching criteria');
    process.exit(1);
  }

  console.log(`🧪 Running Node.js tests for ${testFiles.length} files...\n`);

  let passed = 0;
  let failed = 0;

  for (const testFile of testFiles) {
    const relativePath = path.relative(repoRoot, testFile);

    if (verbose) {
      console.log(`Running ${relativePath}...`);
    }

    const result = await runJSTest(testFile);

    if (result.success) {
      passed++;
      const status = '✅ PASSED';
      if (verbose) {
        console.log(`  ${status}`);
        if (result.output) {
          console.log(`  Output: ${result.output}`);
        }
      } else {
        console.log(`✅ ${relativePath}`);
      }
    } else {
      failed++;
      const status = '❌ FAILED';
      console.log(`❌ ${relativePath}`);
      if (result.output) {
        console.log(`  Error: ${result.output}`);
      }
    }
  }

  // Summary
  console.log(`\n📊 Node.js Test Summary:`);
  console.log(`   Passed: ${passed}`);
  console.log(`   Failed: ${failed}`);
  console.log(`   Total:  ${testFiles.length}`);

  if (failed > 0) {
    console.log(`\n❌ ${failed} test(s) failed`);
    process.exit(1);
  } else {
    console.log(`\n🎉 All Node.js tests passed!`);
  }
}

if (require.main === module) {
  main().catch(console.error);
}
