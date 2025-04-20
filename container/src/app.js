import React from 'react';
import { createAccountService } from 'shared/account';
import OBJ from 'shared/fr.json';
import OB from 'shared/store';
const selectors = await import("shared/store/selectors");
const GenericInput = React.lazy(() => import('shared/genericInput'));
function App() {
  console.log(OBJ, createAccountService, OB, selectors)
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <GenericInput />
      <p>This is the Host App 👋</p>
    </React.Suspense>
  );
}
export default App;
