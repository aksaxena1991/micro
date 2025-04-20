import React from 'react';
function App() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <p>This is the Auth App 👋</p>
        </React.Suspense>
    );
}
export default App;