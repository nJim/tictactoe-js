export const preset = "jest-preset-preact";
export const setupFiles = [
    "<rootDir>/src/tests/__mocks__/setupTests.js",
    "<rootDir>/src/tests/__mocks__/browserMocks.js"
];
export const testURL = "http://localhost:8080";
export const moduleNameMapper = {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
        "<rootDir>/src/tests/__mocks__/fileMocks.js"
};
