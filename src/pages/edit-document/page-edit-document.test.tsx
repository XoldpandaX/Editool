import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PageEditDocument } from './page-edit-document';

describe('<PageEditDocument />', () => {
  test('it should mount', () => {
    render(<PageEditDocument />);

    const pageEditDocument = screen.getByTestId('PageEditDocument');

    expect(pageEditDocument).toBeInTheDocument();
  });
});
