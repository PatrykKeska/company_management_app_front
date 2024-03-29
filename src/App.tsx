import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { HomePage } from './Pages/HomePage/HomePage'
import { StoragePage } from './Pages/Products/StoragePage/StoragePage'
import { PlacesPage } from './Pages/Places/PlacesPage/PlacesPage'
import { AddItemPage } from './Pages/Products/AddItemPage/AddItemPage'
import { AddPlacePage } from './Pages/Places/AddPlacePage/AddPlacePage'
import { EditSinglePlacePage } from './Pages/Places/EditSinglePlacePage/EditSinglePlacePage'
import { SinglePlaceContext } from './context/SinglePlace/singlePlace.context'
import { SinglePlaceTypes } from './types/Places.types'
import { NavContext } from './context/nav/nav.context'
import { SingleItemContext } from './context/SingleItem/SingleItem.context'
import { SingleProductTypes } from './types/Product.types'
import { EditSingleItemPage } from './Pages/Products/EditSingleItemPage/EditSingleItemPage'
import { InventoryPage } from './Pages/Inventory/InventoryPage'
import { FinalizedPage } from './Pages/FInalized/FinalizedPage'
import { FinalizedPlace } from './Pages/FInalized/FinalizedPlace'
import { AuthProvider } from './context/AuthProvider/AuthProvider'

function App() {
  const [isLogged, setIsLogged] = useState(false)
  const [placeDetails, setPlaceDetails] = useState({} as SinglePlaceTypes)
  const [itemDetails, setItemDetails] = useState({} as SingleProductTypes)
  const [isNavOpen, setIsNavOpen] = useState(true)

  return (
    <AuthProvider.Provider
      value={{ loginStatus: isLogged, setLoginStatus: setIsLogged }}
    >
      <NavContext.Provider value={{ isNavOpen: isNavOpen, setIsNavOpen }}>
        <SingleItemContext.Provider value={{ itemDetails, setItemDetails }}>
          <SinglePlaceContext.Provider
            value={{ placeDetails, setPlaceDetails }}
          >
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/storage' element={<StoragePage />} />
              <Route path='/places' element={<PlacesPage />} />
              <Route path='/inventory' element={<InventoryPage />} />
              <Route path='/finalized' element={<FinalizedPage />} />
              <Route path='/finalized/:id' element={<FinalizedPlace />} />
              <Route path='/add-items' element={<AddItemPage />} />
              <Route path='/add-places' element={<AddPlacePage />} />
              <Route path='/places/:id' element={<EditSinglePlacePage />} />
              <Route path='/storage/:id' element={<EditSingleItemPage />} />
            </Routes>
          </SinglePlaceContext.Provider>
        </SingleItemContext.Provider>
      </NavContext.Provider>
    </AuthProvider.Provider>
  )
}

export default App
