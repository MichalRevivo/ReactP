import { Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import { About } from "./About"
import PostsComponent from "./PostsComponent"
export const Routing = () => {
    return <>
        <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="HomePage" element={<HomePage></HomePage>}></Route>
        <Route path="About" element={<About></About>}></Route>
        <Route path="PostsComponent" element={<PostsComponent></PostsComponent>}></Route>


            {/* <Route path="HomePage" element={<HomePage></HomePage>}></Route>
            <Route path="About" element={<About></About>}></Route>
            <Route path="MyPackage" element={<MyPackage></MyPackage>}></Route>
            <Route path="Artical" element={<Artical></Artical>}></Route>
            <Route path="Contact" element={<Contact></Contact>}>
                <Route path="Login" element={<Login></Login>}></Route>
                <Route path="Signin" element={<Signin></Signin>}></Route>
            </Route> */}
        </Routes>
    </>
}