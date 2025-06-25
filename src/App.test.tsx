import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App root', () => {
  it('renders without crashing', () => {
    render(<App />);
    // check for a known text from Index page navigation route not loaded yet, so just ensure container exists
    expect(screen.getByRole('main', { hidden: true })).toBeDefined();
  });
});