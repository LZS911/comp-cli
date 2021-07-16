import { render, screen } from '@testing-library/react';
import Demo from '../index';
describe('test demo', () => {
  test(`test exits 'start first component'`, () => {
    render(<Demo />);
    const linkElement = screen.getByText(/start first component/i);
    expect(linkElement.textContent).toContain('start first component');
  });
});
