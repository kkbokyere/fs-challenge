// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
class LocalStorageMock {
    private store: any;
    constructor() {
        this.store = {};
    }

    clear() {
        this.store = {};
    }

    getItem(key: string | number) {
        return this.store[key] || null;
    }

    setItem(key: string | number, value: { toString: () => any; }) {
        this.store[key] = value.toString();
    }

    removeItem(key: string | number) {
        delete this.store[key];
    }
};

// @ts-ignore
global.localStorage = new LocalStorageMock;
