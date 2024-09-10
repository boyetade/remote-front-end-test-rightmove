import React from 'react';
import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import PropertyListing from '../PropertyListing';

global.fetch = jest.fn(() => 
  Promise.resolve({
    json: () => 
        Promise.resolve([
            { id: 1, title: 'Property 1' },
            { id: 2, title: 'Property 2' },
            { id: 3, title: 'Property 3' },
            { id: 4, title: 'Property 4' },
            { id: 5, title: 'Property 5' },
        ]),
  })
);

describe('PropertyListing', () => {
    it('should render five property cards', async () => {
        render(<PropertyListing />);
        const propertiesList = screen.getByRole('list');
        const propertyCards = await within(propertiesList).findAllByRole('listitem');
        expect(propertyCards).toHaveLength(5);
    });
});
