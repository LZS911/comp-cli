"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const index_1 = require("../index");
const react_2 = require("react");
describe('test demo', () => {
    test(`test exits 'start first component'`, () => {
        react_1.render(<index_1.default />);
        const linkElement = react_1.screen.getByText(/start first component/i);
        expect(linkElement.textContent).toContain('start first component');
    });
});
