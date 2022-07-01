import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage, Tablepage } from "./pages";
import "./App.scss";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Homepage />}></Route>
            {/* <Route path="/settings" element={<Settingspage />}></Route> */}
            {/* <Route path="/*" element={<NotFound />}></Route> */}
        </Routes>
    </BrowserRouter>
);
export default Router;
