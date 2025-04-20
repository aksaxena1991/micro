import { createAccountService } from 'app_store/account';
import * as re from 'app_store/regular-expressions';
import OB from 'app_store/store';
import React from 'react';
import OBJ from 'shared/fr.json';
const selectors = await import("app_store/store/selectors");
const GenericInput = React.lazy(() => import('shared/genericInput'));
function App() {
  console.log( re)
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <GenericInput />
      <p>This is the Host App 👋</p>
    </React.Suspense>
  );
}
export default App;
