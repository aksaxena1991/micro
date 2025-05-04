import { Route, Routes } from "react-router-dom"
const Login  = React.lazy(()=> import("./login"))
const AuthRouting = () =>{
    return (<Routes>
            <Route path="/" element={<Login />} />
            </Routes>)
}
export default AuthRouting