import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { PageError } from './page-error';

describe('<PageError />', () => {
  test('it should mount', () => {
    render(<PageError />);

    const page404Error = screen.getByTestId('Page404Error');

    expect(page404Error).toBeInTheDocument();
  });
});
