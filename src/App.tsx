import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./Pages/HomePage/HomePage";
import {StoragePage} from "./Pages/StoragePage/StoragePage";
import {PlacesPage} from "./Pages/PlacesPage/PlacesPage";
import {AddItemPage} from "./Pages/AddItemPage/AddItemPage";
import {AddPlacePage} from "./Pages/AddPlacePage/AddPlacePage";


function App() {

    // @ts-ignore
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/storage' element={<StoragePage/>}/>
            <Route path='/places' element={<PlacesPage/>}/>
            <Route path='/add-items' element={<AddItemPage/>}/>
            <Route path='/add-places' element={<AddPlacePage/>}/>
        </Routes>
    );
}

export default App;
