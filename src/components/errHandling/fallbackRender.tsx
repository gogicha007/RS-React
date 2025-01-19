function ErrFallbackComponent() {
  console.log('error');
  return (
    <div role="alert">
      <div>An error was thrown:</div>
      <p>Something went wrong...</p>
    </div>
  );
}

export default ErrFallbackComponent;
