import { Component } from 'react';

interface ICFollbackProps {
  errorMsg?: string
}
class ErrFallbackComponent extends Component<ICFollbackProps> {
  constructor(props: ICFollbackProps){
    super(props)
  }

  render() {
    return (
      <div role="alert">
        <div>An error was thrown:</div>
        <p>Something went wrong...</p>
      </div>
    );
  }
}

export default ErrFallbackComponent;
