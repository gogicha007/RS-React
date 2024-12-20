function ErrFallbackComponent(errorMessage: string) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{errorMessage}</pre>
      </div>
    )
  }

export default ErrFallbackComponent