import React from 'react';

interface AppProps {
  message?: string;
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return <div>{message}</div>;
};

export default App;

App.defaultProps = {
  message: 'Hello,defaultProps',
};
