import React from 'react';

import { render, screen } from '@testing-library/react';

import Farewell from '../../molecules/farewell'

describe('Test Farewell', () => {
    it('displays correct farewell message', () => {
        const name = 'sergio'; 
        render(<Farewell name={name} />); 

        const farewellMessage = screen.getByText(`Goodbye, ${name}!`); 
        expect(farewellMessage).toBeInTheDocument(); 
    });
});
