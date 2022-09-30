import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";import SharedLayout from "./pages/SharedLayout";

function App () {
    return (<BrowserRouter>
        {/* // ensure to keep external components outside of our <Routes/> */ }
        {/* <Navbar/> */}
        <Routes>
            <Route path={ '/' } element={ <SharedLayout/> }>
                <Route index element={<Home/>}/>
                <Route path={ 'about' } element={ <About/> }/>
                <Route path={ 'products' } element={ <Products/> }/>
                <Route path={ '*' } element={ <Error/> }/>
            </Route>
        </Routes>
        <footer>foot in the mouth</footer>
    </BrowserRouter>)
}

export default App;
