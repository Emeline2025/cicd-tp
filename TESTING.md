# Testing Strategy

## Test Types

1. **Unit Tests**: Test individual functions
- Files: `tests/unit/*.test.js`

- Example: `greeting.test.js`

2. **Integration Tests**: Test the interaction between components
- Files: `tests/integration/*.test.js`

- Example: `app.test.js`

3. **End-to-End Tests**: Test the entire API
- Files: `tests/e2e/*.test.js`

- Example: `e2e.test.js`

## Running Tests

```bash
# All Tests
npm test

# Unit Tests Only
npm test -- tests/unit/

# Integration Tests Only
npm test -- tests/integration/

# e2e Tests only
npm test --tests/e2e/

# With code coverage
npm test --coverage
```

## Best Practices

1 Each source file should have a corresponding test file
2 Tests should be independent and reproducible
3 Use clear descriptions for tests
4 Test edge cases and errors