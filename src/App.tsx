import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee, faBars} from '@fortawesome/free-solid-svg-icons'
import {Wrapper} from "./Components/Wrapper /Wrapper";
import {Img} from "./Components/Img/Img";
import pencil from '../src/assets /img/pencil.webp'
import {NavLink} from "./Components/NavLink/NavLink";
import {Route, Routes} from "react-router-dom";
import {Home_Page} from "./Pages/Home_Page/Home_Page";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home_Page/>}/>
        </Routes>

    );
}

export default App;
