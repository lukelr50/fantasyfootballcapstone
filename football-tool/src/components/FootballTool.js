import { Route, Routes } from "react-router-dom"
import { ApplicationViews } from "./views/applicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const FootballTool = () => {
    return <Routes>
        <Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />
        

         <Route path="*" element={
			// <Authorized>
			// 	<>
			// 		<NavBar />
					<ApplicationViews />
			// 	</>
			// </Authorized>


        } /> 
    </Routes>
}

