import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useTheme } from 'next-themes'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

type Props = {}

function ThemeToggle({}: Props) {
  const [isDarkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    setDarkMode(theme === 'dark')
  }, [])

  if (!mounted) {
    return null
  }

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked)
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={28} />
}

export default ThemeToggle
