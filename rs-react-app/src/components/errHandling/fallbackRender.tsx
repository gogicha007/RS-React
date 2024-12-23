
function ErrFallbackComponent() {
    return (
      <div role="alert">
        <div>
          An error was thrown: 
        </div>
        <p>Something went wrong...</p>
        <pre>{'error'}</pre>
      </div>
    )
  }

export default ErrFallbackComponent