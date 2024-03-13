import React from 'react';

import { render, screen } from '@testing-library/react';

import GreetingMessage from '../../molecules/greeting-message'; 

describe('GreetingMessage', () => {
    it('displays "Buenos días" when timeOfDay is "morning"', () => {
        render(<GreetingMessage timeOfDay="morning" />);
        const greetingMessage = screen.getByText(/Buenos días/i);
        expect(greetingMessage).toBeInTheDocument();
    });
});

describe('Test evening', () => {
    it('displays "Buenas noches" when timeOfDay is "evening"', () => {
        render(<GreetingMessage timeOfDay="evening" />);
        
        const greetingMessage = screen.getByText(/buenas noches/i);
        expect(greetingMessage).toBeInTheDocument();
    });
});


