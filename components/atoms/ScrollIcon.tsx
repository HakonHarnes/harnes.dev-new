import React from 'react'
import styled, { keyframes } from 'styled-components'

type Props = {
  href: string
  color: string
}

function ScrollIcon({ href, color }: Props) {
  return <Scroll href={href} color={color}></Scroll>
}

export default ScrollIcon

const animation = keyframes`
  0% { opacity: 1; height: 8px;}
  20% { opacity: 1; height: 8px;}
  30% { transform: translateY(0); opacity: 1; height: 19px;}
  40% { opacity: 1;}
  80% { transform: translateY(19px); opacity: 0; height: 0;}
  81% { transform: translateY(0); opacity: 0; height: 8px;}
  100% { opacity: 1; height: 8px;}
`

const Scroll = styled.a<{ color: string }>`
  position: relative;
  display: block;
  width: 24px;
  height: 40px;
  color: ${({ color }) => color};
  text-decoration: none;

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid ${({ color }) => color};
    border-radius: 50vw;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 10px;
    left: 11px;
    width: 2px;
    height: 8px;
    background: ${({ color }) => color};
    border-radius: 1px;
    animation-name: ${animation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-delay: 5s;
  }
`
