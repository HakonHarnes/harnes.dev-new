import React from 'react'
import styled from 'styled-components'

type Props = {
  onClick: () => void
  children: React.ReactNode
}

function Button({ onClick, children }: Props) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default Button

const StyledButton = styled.button`
  background: var(--color-secondary);
  color: #fff;
  padding: 0.8rem 2rem;
  font-size: 1.2rem;
  font-weight: 500;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background: var(--color-secondary-light);
  }
`
