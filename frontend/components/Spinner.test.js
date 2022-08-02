// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react';
import { render, screen } from '@testing-library/react';
import Spinner from './Spinner'

test('spinner acitive when true', () => {
  render(<Spinner on={true}/>)

  const spinner = screen.queryByText(/please wait/i)

  expect(spinner).not.toBeNull()
})

test('spinner inacitive when false', () => {
  render(<Spinner on={false}/>)

  const spinner = screen.queryByText(/please wait/i)

  expect(spinner).toBeNull()
})

