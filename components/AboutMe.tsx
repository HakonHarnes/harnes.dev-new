import React from 'react'
import { useTheme } from 'next-themes'

type Props = {}

function AboutMe({}: Props) {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Switch</button>
    </>
  )
}

export default AboutMe
