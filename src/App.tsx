import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./Pages/HomePage/HomePage";
import {StoragePage} from "./Pages/StoragePage/StoragePage";
import {PlacesPage} from "./Pages/PlacesPage/PlacesPage";
import {AddItemPage} from "./Pages/AddItemPage/AddItemPage";
import {AddPlacePage} from "./Pages/AddPlacePage/AddPlacePage";
import {EditSinglePlacePage} from "./Pages/EditSinglePlacePage/EditSinglePlacePage";
import {SinglePlaceContext} from "./context/SinglePlace/singlePlace.context";
import {SinglePlaceTypes} from "./types/Places.types";
import {NavContext} from "./context/nav/nav.context";
import {SingleItemContext} from "./context/SingleItem/SingleItem.context";
import {SingleProductTypes} from "./types/Product.types";
import {EditSingleItemPage} from "./Pages/EditSingleItemPage/EditSingleItemPage";
import {AuthProvider} from "./context/AuthProvider/AuthProvider";


function App() {
    const [placeDetails, setPlaceDetails] = useState({} as SinglePlaceTypes);
    const [itemDetails, setItemDetails] = useState({} as SingleProductTypes);
    const [isNavOpen, setIsNavOpen] = useState(true);
    const [loginStatus, setLogginStatus] = useState(false);

    return (
        <AuthProvider.Provider value={{loginStatus, setLogginStatus}}>
            {loginStatus ?( <NavContext.Provider value={{isNavOpen: isNavOpen, setIsNavOpen}}>
                <SingleItemContext.Provider value={{itemDetails, setItemDetails}}>
                    <SinglePlaceContext.Provider value={{placeDetails, setPlaceDetails}}>
                        <Routes>
                            <Route path='/' element={<HomePage/>}/>
                            <Route path='/storage' element={<StoragePage/>}/>
                            <Route path='/places' element={<PlacesPage/>}/>
                            <Route path='/add-items' element={<AddItemPage/>}/>
                            <Route path='/add-places' element={<AddPlacePage/>}/>
                            <Route path='/inventory/' element={<PlacesPage/>}/>
                            <Route path='/places/:id' element={<EditSinglePlacePage/>}/>
                            <Route path='/storage/:id' element={<EditSingleItemPage/>}/>
                        </Routes>
                    </SinglePlaceContext.Provider>
                </SingleItemContext.Provider>
            </NavContext.Provider>):<Routes>
                <Route path='/' element={<HomePage/>}/>

            </Routes>}
        </AuthProvider.Provider>
    );
}

export default App;
