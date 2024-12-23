import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  fallback?: ReactNode;
  children?: ReactNode;
}

interface ErrorBoundaryState {
  errMessage: string;
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      errMessage: '',
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      errMessage: error.toString(),
      hasError: true,
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log('an error occured');
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
      // return <h1>Sorry.. there was an error</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
