import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputField from '../../molecules/input-field'; 

describe('message to inputfield', () => {
    it('renders "Enter your name" message to inputfield', () => {
        render (<InputField />);

        const buttonText = screen.queryByText(/enter/i);
        expect(buttonText).toBeInTheDocument(); 

        const inputField = screen.getByPlaceholderText('Enter your name');
        expect(inputField).toBeInTheDocument(); 
    });
})

describe('message when button is clicked', () => {
    it('renders message to inputfield', async () => {
        render (<InputField />);

        const inputField = screen.getByRole('textbox');
        userEvent.type(inputField, 'sergio');

        const button = screen.getByText('Enter');

        await userEvent.click(button);

        const changedMessage = screen.getByText('Hello, Ing sergio!');
        expect(changedMessage).toBeInTheDocument();
    });
})
