import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '../../molecules/button';

describe('render message', () => {
    it('renders message to "Hello, World!"', () => {
        render (<Button />);

        const Message = screen.getByText('Hello, World!');
        expect(Message).toBeInTheDocument(); 
    });
})

describe('message when button is clicked', () => {  
    test('renders message to "Hello, User!" when button is clicked', async() => {
        render(<Button />);

        const button = screen.getByText('Change message');

        await userEvent.click(button);
        
        const changedMessage = screen.getByText('Hello, User!');
        expect(changedMessage).toBeInTheDocument();
    });
})

