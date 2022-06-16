import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home_Page} from "./Pages/Home_Page/Home_Page";
import {Storage_Page} from "./Pages/Storage_Page/Storage_Page";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home_Page/>}/>
            <Route path='/storage' element={<Storage_Page/>}/>
        </Routes>

    );
}

export default App;
