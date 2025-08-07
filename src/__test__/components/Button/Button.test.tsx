// Button.test.tsx
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Button from './Button';

test('renders button', () => {
  render(<Button>Click</Button>);
  expect(screen.getByText('Click')).toBeInTheDocument();
});
