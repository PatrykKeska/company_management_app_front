import React from 'react';
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
