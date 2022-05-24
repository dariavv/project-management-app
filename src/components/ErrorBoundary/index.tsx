import { Component, ErrorInfo, ReactNode } from 'react';
import { BoundryContainer } from './BoundryContainer';

interface Props {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, ErrorBoundaryState> {
  state = { error: null, errorInfo: null };

  static getDerivedStateFromError(error: Error, errorInfo: ErrorInfo) {
    return { error, errorInfo };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  handleReload() {
    location.reload();
  }

  render() {
    const { children } = this.props;

    if (this.state.errorInfo) {
      return <BoundryContainer handleReload={this.handleReload} />;
    }

    return children;
  }
}
