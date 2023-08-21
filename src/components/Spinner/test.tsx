import { render } from '@testing-library/react'
import Spinner from './'

describe('Spinner component', () => {
  it('should be render corretly', () => {
    const { container } = render(<Spinner />)

    expect(container).toBeTruthy()
  })

  it('should be override some classname', () => {
    const { container } = render(<Spinner className="text-red-500" />)

    const svgElement = container.firstElementChild!

    expect(svgElement.classList.contains('text-white')).toBeFalsy()
    expect(svgElement.classList.contains('text-red-500')).toBeTruthy()
  })
})
