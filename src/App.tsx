import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./Pages/HomePage/HomePage";
import {StoragePage} from "./Pages/StoragePage/StoragePage";
import {PlacesPage} from "./Pages/PlacesPage/PlacesPage";
import {AddItemPage} from "./Pages/AddItemPage/AddItemPage";
import {AddPlacePage} from "./Pages/AddPlacePage/AddPlacePage";
import {EditSinglePlace} from "./Pages/EditSinglePlace/EditSinglePlace";
import {SinglePlaceContext} from "./context/SinglePlace/singlePlace.context";
import {SinglePlaceTypes} from "./types/Places.types";
import {NavContext} from "./context/nav/nav.context";


function App() {
    const [details, setDetails] = useState({} as SinglePlaceTypes);
    const [isNavOpen, setIsNavOpen] = useState(true);


    return (
        <NavContext.Provider value={{isNavOpen: isNavOpen, setIsNavOpen}}>
            <SinglePlaceContext.Provider value={{details, setDetails}}>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/storage' element={<StoragePage/>}/>
                    <Route path='/places' element={<PlacesPage/>}/>
                    <Route path='/add-items' element={<AddItemPage/>}/>
                    <Route path='/add-places' element={<AddPlacePage/>}/>
                    <Route path='/places/:id' element={<EditSinglePlace/>}/>
                </Routes>
            </SinglePlaceContext.Provider>
        </NavContext.Provider>
    );
}

export default App;
