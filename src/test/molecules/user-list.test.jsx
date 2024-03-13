import React from 'react';

import { render, screen } from '@testing-library/react';

import UserList from '../../molecules/user-list';

describe('<UserList />', () => {
  it('renders all names in the list', () => {
    const users = ['Alice', 'Bob', 'Charlie'];
    render(<UserList users={users} />);
    
    users.forEach(user => {
      const userElement = screen.getByText(user);
      expect(userElement).toBeInTheDocument();
    });
  });
});
