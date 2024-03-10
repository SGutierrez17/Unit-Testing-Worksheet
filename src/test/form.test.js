import React from 'react';

import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Form from '../form';

test('renders greeting message on form submission', () => {
    render(<Form />);

    const inputField = screen.getByPlaceholderText('Enter your name');
    expect(inputField).toBeInTheDocument();

    userEvent.type(inputField, 'sergio');

    const button = screen.getByText('Enter');
    expect(button).toBeInTheDocument();

    act(() => {
        userEvent.click(button);
    });
    
    const greetingMessage = screen.getByText('Welcome, Ing sergio!');
    expect(greetingMessage).toBeInTheDocument();
});
