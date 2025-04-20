import React from 'react';

const GenericInput = React.lazy(() => import('shared/genericInput'));

function App() {
  
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <GenericInput />
      <p>This is the Host App 👋</p>
    </React.Suspense>
  );
}
export default App;