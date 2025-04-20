import React from 'react';
import GenericInput from './common-components/genericInput';



function App() {
  
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <GenericInput />
      <p>This is the Host App 👋</p>
    </React.Suspense>
  );
}
export default App;