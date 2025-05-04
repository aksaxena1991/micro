import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
const AuthRouting = React.lazy(() => {
    return new Promise((resolve) => setTimeout(() => resolve(import("./pages/auth.routing")), 500))
})
function App() {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <p>This is the Auth App 👋</p>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" exact element={<AuthRouting />} />
                </Routes>
            </BrowserRouter>
        </React.Suspense>
    );
}
export default App;