import { Route, Routes } from "react-router-dom"
import { ApplicationViews } from "./views/applicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Authorized } from "./views/Authorized"
import { UserNav } from "./nav/UserNav"



export const FootballTool = () => {
    return <Routes>
        <Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />
        

         <Route path="*" element={
			 <Authorized>
			 	<>
                    <UserNav/>
			
					<ApplicationViews />
			</>
			 </Authorized>


        } /> 
    </Routes>
}

