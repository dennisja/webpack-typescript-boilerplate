import type { VFC } from 'react';

const App: VFC = () => {
  console.log({ env: process.env.TEST_ENV_VAR });
  return <>Hello World</>;
};

export default App;
