import React from 'react'
import './src/styles/global.css'
import ErrorBoundary from './src/components/ErrorBoundary/ErrorBoundary'

export const wrapRootElement = ({ element }) => {
  return <ErrorBoundary>{element}</ErrorBoundary>
}
