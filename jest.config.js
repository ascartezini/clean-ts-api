module.exports = {
    coverageDirectory: 'coverage',
    coverageProvider: 'babel',
    moduleNameMapper: {
        '@/tests/(.+)': '<rootDir>/tests/$1',
        '@/(.+)': '<rootDir>/src/$1'
    },
    roots: [
        '<rootDir>/src',
        '<rootDir>/tests'
    ],
    transform: {
        '\\.ts$': 'ts-jest'
    },
    testMatch: ['**/*.test.ts'],
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.ts'],
    coverageThreshold: {
        global: { lines: 85, functions: 85, branches: 85, statements: 85 }
    },
    maxWorkers: "80%",
    testPathIgnorePatterns: [
        'node_modules',
        '.build'
    ],
    globals: {
        'ts-jest': {
            isolatedModules: true
        }
    }
}
