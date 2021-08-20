import React, { Component } from 'react';
import { Header } from '../../typography';

export class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(
      'ERROR with Iris PopOver component',
      error,
      errorInfo
    );
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Header size="3">Something went wrong.</Header>;
    }

    return this.props.children;
  }
}
