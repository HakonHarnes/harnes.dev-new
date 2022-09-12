import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

type Props = {
  href: string
  color: string
}

function ScrollIcon({ href, color }: Props) {
  return (
    <StyledA href={href}>
      <svg width='30' height='65' viewBox='0 0 40 77'>
        <g id='scroll' transform='translate(-253 -787)'>
          <g
            id='Rectangle_12'
            data-name='Rectangle 12'
            transform='translate(253 787)'
            fill='none'
            stroke={color}
            strokeWidth='4'
          >
            <rect width='40' height='77' rx='20' stroke='none' />
            <rect x='2' y='2' width='36' height='73' rx='18' fill='none' />
          </g>
          <Circle
            className='circle'
            id='Ellipse_1'
            data-name='Ellipse 1'
            cx='11'
            cy='11'
            r='11'
            transform='translate(262 798)'
            fill={color}
          />
        </g>
      </svg>
    </StyledA>
  )
}

export default ScrollIcon

const StyledA = styled.a`
  cursor: pointer;
`

const scrollAnimation = keyframes`
    from {
        transform: translate(262px, 798px);
        z-index: 5;
    }
    to {
        transform: translate(262px, 830px);
        z-index: 5;
      }
        `

const Circle = styled.circle`
  animation: ${scrollAnimation} 1s infinite alternate-reverse;
`
