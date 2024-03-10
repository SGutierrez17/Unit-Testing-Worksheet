import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputField from '../input-field'; 

test('renders "Enter your name" message to inputfield', () => {
    render (<InputField />);

    const buttonText = screen.queryByText(/enter/i);
    expect(buttonText).toBeInTheDocument(); 

    const inputField = screen.getByPlaceholderText('Enter your name');
    expect(inputField).toBeInTheDocument(); 
});

test('renders message to inputfield', () => {
    render (<InputField />);

    const inputField = screen.getByRole('textbox');
    userEvent.type(inputField, 'sergio');

    const button = screen.getByText('Enter');

    act(() => {
        userEvent.click(button);
    });

    const changedMessage = screen.getByText('Hello, Ing sergio!');
    expect(changedMessage).toBeInTheDocument();
});

