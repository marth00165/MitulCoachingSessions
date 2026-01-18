#!/usr/bin/env python3
"""
Test runner for all algorithms and data structures

Usage:
    python test_runner.py                    # Run all tests
    python test_runner.py --category arrays  # Run specific category
    python test_runner.py --file two-sum     # Run specific file
    python test_runner.py --verbose          # Verbose output
"""

import os
import sys
import importlib.util
import argparse
from pathlib import Path

def discover_test_files(root_dir, category=None, file_pattern=None):
    """Discover all Python files with test functions"""
    test_files = []
    
    # Define search directories
    search_dirs = ['algorithms', 'data-structures']
    if category:
        search_dirs = [d for d in search_dirs if category in d or 
                      any(category in subdir for subdir in os.listdir(os.path.join(root_dir, d)))]
    
    for search_dir in search_dirs:
        dir_path = Path(root_dir) / search_dir
        if not dir_path.exists():
            continue
            
        for py_file in dir_path.rglob('*.py'):
            if py_file.name.startswith('__'):
                continue
                
            if file_pattern and file_pattern not in py_file.name:
                continue
                
            # Check if file has test functions
            try:
                with open(py_file, 'r') as f:
                    content = f.read()
                    if 'def test_' in content or 'if __name__ == "__main__"' in content:
                        test_files.append(py_file)
            except Exception:
                continue
    
    return test_files

def run_test_file(file_path, verbose=False):
    """Run tests in a specific file"""
    try:
        # Load the module
        spec = importlib.util.spec_from_file_location("test_module", file_path)
        module = importlib.util.module_from_spec(spec)
        
        # Capture output
        import io
        from contextlib import redirect_stdout, redirect_stderr
        
        stdout_capture = io.StringIO()
        stderr_capture = io.StringIO()
        
        with redirect_stdout(stdout_capture), redirect_stderr(stderr_capture):
            spec.loader.exec_module(module)
        
        stdout_content = stdout_capture.getvalue()
        stderr_content = stderr_capture.getvalue()
        
        # Check for test functions and run them
        test_functions = [attr for attr in dir(module) if attr.startswith('test_')]
        
        if test_functions:
            for test_func_name in test_functions:
                test_func = getattr(module, test_func_name)
                if callable(test_func):
                    try:
                        test_func()
                    except Exception as e:
                        return False, f"Test function {test_func_name} failed: {str(e)}"
        
        # If no explicit test functions, check if main block ran successfully
        if not test_functions and "__main__" in module.__dict__:
            if stderr_content and "Error" in stderr_content:
                return False, stderr_content.strip()
        
        success_indicators = ["✅", "passed", "success"]
        if any(indicator in stdout_content.lower() for indicator in success_indicators):
            return True, stdout_content.strip()
        elif not stderr_content:
            return True, "Tests completed successfully"
        else:
            return False, stderr_content.strip()
            
    except Exception as e:
        return False, f"Failed to run {file_path}: {str(e)}"

def main():
    parser = argparse.ArgumentParser(description='Run algorithm and data structure tests')
    parser.add_argument('--category', help='Run tests for specific category (e.g., arrays, strings)')
    parser.add_argument('--file', help='Run tests for specific file pattern')
    parser.add_argument('--verbose', '-v', action='store_true', help='Verbose output')
    
    args = parser.parse_args()
    
    # Get repository root
    repo_root = os.path.dirname(os.path.abspath(__file__))
    
    # Discover test files
    test_files = discover_test_files(repo_root, args.category, args.file)
    
    if not test_files:
        print("❌ No test files found matching criteria")
        sys.exit(1)
    
    print(f"🧪 Running tests for {len(test_files)} files...\n")
    
    passed = 0
    failed = 0
    results = []
    
    for test_file in test_files:
        relative_path = os.path.relpath(test_file, repo_root)
        
        if args.verbose:
            print(f"Running {relative_path}...")
        
        success, output = run_test_file(test_file, args.verbose)
        
        if success:
            passed += 1
            status = "✅ PASSED"
            if args.verbose:
                print(f"  {status}")
                if output:
                    print(f"  Output: {output}")
        else:
            failed += 1
            status = "❌ FAILED"
            print(f"  {status}")
            if output:
                print(f"  Error: {output}")
        
        results.append((relative_path, status, output))
        
        if not args.verbose:
            status_char = "✅" if success else "❌"
            print(f"{status_char} {relative_path}")
    
    # Summary
    print(f"\n📊 Test Summary:")
    print(f"   Passed: {passed}")
    print(f"   Failed: {failed}")
    print(f"   Total:  {len(test_files)}")
    
    if failed > 0:
        print(f"\n❌ {failed} test(s) failed")
        sys.exit(1)
    else:
        print(f"\n🎉 All tests passed!")

if __name__ == "__main__":
    main()