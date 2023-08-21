import { render, screen, fireEvent } from '@testing-library/react'
import Button from './'

const mockClick = jest.fn()

describe('Button component', () => {
  it('should be render corretly', () => {
    render(<Button>Custom text</Button>)

    const buttonElement = screen.getByText('Custom text')

    expect(buttonElement).toBeTruthy()
  })

  it('should called the click callback', () => {
    render(<Button onClick={mockClick}>Custom text</Button>)

    const buttonElement = screen.getByText('Custom text')

    fireEvent.click(buttonElement)

    expect(mockClick).toBeCalled()
  })
})