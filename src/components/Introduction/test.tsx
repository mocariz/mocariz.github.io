import { render, screen } from '@testing-library/react'

import Introduction from '.'

describe('<Introduction />', () => {
  it('should render the heading', () => {
    const { container } = render(<Introduction />)

    expect(
      screen.getByRole('heading', { name: /Olá, meu nome é Mônica e eu sou Desenvolvedora Front-end./i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
