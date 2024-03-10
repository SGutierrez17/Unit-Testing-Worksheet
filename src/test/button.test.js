import React from 'react';

import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '../button';

test('renders message to "Hello, World!"', () => {
    render (<Button />);

    const Message = screen.getByText('Hello, World!');
    expect(Message).toBeInTheDocument(); 
});

test('renders message to "Hello, User!" when button is clicked', () => {
    render(<Button />);

    const button = screen.getByText('Change message');

    act(() => {
        userEvent.click(button);
    });
    
    const changedMessage = screen.getByText('Hello, User!');
    expect(changedMessage).toBeInTheDocument();
});