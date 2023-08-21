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

  it('should be override some classname', () => {
    render(<Button className="bg-red-500">Custom text</Button>)

    const buttonElement = screen.getByText('Custom text')

    expect(buttonElement.classList.contains('bg-lime-600')).toBeFalsy()
    expect(buttonElement.classList.contains('bg-red-500')).toBeTruthy()
  })

  it('should be have a xs size variant', () => {
    render(<Button size="xs">Custom text</Button>)

    const buttonElement = screen.getByText('Custom text')

    expect(buttonElement.classList.contains('h-6')).toBeTruthy()
  })

  it('should be have a sm size variant', () => {
    render(<Button size="sm">Custom text</Button>)

    const buttonElement = screen.getByText('Custom text')

    expect(buttonElement.classList.contains('h-8')).toBeTruthy()
  })

  it('should be have a md size variant', () => {
    render(<Button size="md">Custom text</Button>)

    const buttonElement = screen.getByText('Custom text')

    expect(buttonElement.classList.contains('h-10')).toBeTruthy()
  })

  it('should be have a full width', () => {
    render(<Button fullWidth>Custom text</Button>)

    const buttonElement = screen.getByText('Custom text')

    expect(buttonElement.classList.contains('w-full')).toBeTruthy()
  })

  it('should be disabled ', () => {
    render(<Button disabled>Custom text</Button>)

    const buttonElement = screen.getByText('Custom text')

    expect(
      buttonElement.classList.contains('disabled:bg-zinc-400')
    ).toBeTruthy()
  })
})
