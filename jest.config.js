export default {
    testEnvironment: 'node',
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    testMatch: [
        '**/tests/unit/**/*.test.js',
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
        '/tests/e2e/*',
    ],
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    
    },
};

