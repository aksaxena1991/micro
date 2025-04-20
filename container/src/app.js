import React from 'react';
import OBJ from 'shared/fr.json';
const GenericInput = React.lazy(() => import('shared/genericInput'));
import {createAccountService} from 'shared/account';
function App() {
  console.log(OBJ,createAccountService)
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <GenericInput />
      <p>This is the Host App 👋</p>
    </React.Suspense>
  );
}
export default App;
