import React from 'react'
import styled from 'styled-components'

type Props = {
  href: string
  children: React.ReactNode
}

function Link({ href, children }: Props) {
  return <StyledLink href={href}>{children}</StyledLink>
}

export default Link

const StyledLink = styled.a`
  font-size: 1.2rem;
  font-weight: 600;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 0.2rem;
    margin-top: 0.25rem;
    border-radius: 50vw;
    background: var(--color-primary-light);
    transition: background 0.1s linear;
  }

  &:hover::after {
    background: var(--color-secondary);
  }
`
