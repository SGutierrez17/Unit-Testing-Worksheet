import React from 'react';

import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Form from '../../molecules/form';

const mockHandleButtonClick = jest.fn()
const mockHandleChange = jest.fn()

describe('first test', () => { 
    it('renders greeting message on form submission', async () => {
        render(<Form />);

        const inputField = screen.getByPlaceholderText('Enter your name');
        expect(inputField).toBeInTheDocument();

        userEvent.type(inputField, 'sergio');

        const button = screen.getByText('Enter');
        expect(button).toBeInTheDocument();

        await userEvent.click(button);
        
        const greetingMessage = screen.getByText('Welcome, Ing sergio!');
        expect(greetingMessage).toBeInTheDocument();
    });
})

describe('second test', () => { 
    it('calls submit function', async() => {
        render(<Form handleSubmit={mockHandleButtonClick} handleChange={mockHandleChange} name='Sergio'/>);
        
                const button = screen.getByRole("button", { name: "Submit" });

                await userEvent.click(button);
        
                expect(mockHandleButtonClick).toHaveBeenCalledTimes(1);
        });

    it('calls handle function', async () => {
        render(<Form name='sergio' handleSubmit={mockHandleButtonClick} handleInputText={mockHandleChange} />);
    
            const input = screen.getByRole('textbox', { name: 'sergio' }); 
            const button = screen.getByRole('button', { name: 'submit' });
        
            await userEvent.type(input, 'example text');
        
            await userEvent.click(button);
        
            expect(mockHandleButtonClick).toHaveBeenCalledTimes(1);
            expect(mockHandleChange).toHaveBeenCalledTimes(1);
    });
    
})
