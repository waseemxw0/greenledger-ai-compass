import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

// Simple smoke test to ensure the component tree renders without throwing.

describe('<App />', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toBeTruthy();
  });
});