import React from 'react';
import GenericCheckbox from './common-components/genericCheckbox';
function App() {

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <GenericCheckbox />
      <p>This is the Shared App 👋</p>
    </React.Suspense>
  );
}
export default App;