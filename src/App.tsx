import React from 'react';
import Counter from './Counter';

interface AppProps {
  message?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;

App.defaultProps = {
  message: 'Hello,defaultProps',
};
