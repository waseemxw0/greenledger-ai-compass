import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<React.PropsWithChildren, ErrorBoundaryState> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center gap-4">
          <h1 className="text-2xl font-semibold text-red-600">Something went wrong</h1>
          <p className="mb-2 text-gray-700">
            {this.state.error?.message || 'An unexpected error occurred. Please try reloading.'}
          </p>
          <button
            className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
            onClick={this.handleReload}
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}