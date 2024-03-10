import { render, screen } from '@testing-library/react';

import Greet from '../greet'; 

test('renders "Hello, World!" message', () => {
  render (<Greet>Hello, World!</Greet>);

  const helloWorldText = screen.getByText('Hello, World!');
  expect(helloWorldText).toBeInTheDocument(); 
});
