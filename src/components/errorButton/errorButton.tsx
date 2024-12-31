import { useEffect, useState } from 'react';

function ErrorButton() {
  const [shouldThrowError, setShouldThrowError] = useState(false);

  const errorThrown = () => {
    setShouldThrowError(true);
  };

  useEffect(() => {
    if (shouldThrowError) throw new Error('Error throwing button clicked');
  }, [shouldThrowError]);

  return (
    <button type="button" onClick={errorThrown}>
      Error Thrower
    </button>
  );
}

export default ErrorButton;
