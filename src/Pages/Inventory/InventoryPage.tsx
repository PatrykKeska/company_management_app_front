import React, {FormEvent, useEffect, useState} from "react";
import {Nav} from "../../Layouts/GeneralUse/Nav/Nav";
import {Wrapper} from "../../Components/Wrapper /Wrapper";
import axios from "axios";
import {SingleProductTypes} from "../../types/Product.types";
import {SinglePlaceTypes} from "../../types/Places.types";
import {InventoryPlaceSummary} from "../../Layouts/inventory /InventoryPlaceSummary";
import {InventoryItemSummary} from "../../Layouts/inventory /InventoryItemSummary";
import {InventoryFormLayout} from "../../Layouts/inventory /InventoryFormLayout";
import {InventoryTableItem} from "../../Layouts/inventory /InventoryTableItem";
import {InventoryTablePlace} from "../../Layouts/inventory /InventoryTablePlace";


export const InventoryPage = () => {
    const [items, setItems] = useState(Array<SingleProductTypes>);
    const [places, setPlaces] = useState(Array<SinglePlaceTypes>);
    const [isPicked, setIsPicked] = useState({pickedItem: false, pickedPlace: false});
    const [itemsBasket, setItemBasket] = useState({} as SingleProductTypes);
    const [pickedPlace, setPickedPlace] = useState({} as SinglePlaceTypes);

    useEffect(() => {
        (async () => {
            const items = await axios('http://localhost:3001/storage')
            setItems(items.data.message)
            const places = await axios('http://localhost:3001/places')
            setPlaces(places.data.message)
        })()
    }, [isPicked])


    const handleItems = (item: SingleProductTypes) => {
        setItemBasket({
            ...item,
            amount: 0
        })
        setIsPicked({...isPicked, pickedItem: true})
    }

    const handlePlaces = (place: SinglePlaceTypes) => {
        setPickedPlace({
            ...place
        })
        setIsPicked({...isPicked, pickedPlace: true})

    }


    const handleSubbmit = async (e: FormEvent) => {
        e.preventDefault();
        if (isPicked.pickedItem && isPicked.pickedPlace) {
            try {
                await axios.post('http://localhost:3001/inventory/check', {items: itemsBasket, place: pickedPlace}, {
                    headers: {"Content-type": "application/json"}
                })
            } catch (err) {
                console.log(err)
            } finally {
                setIsPicked({pickedItem: false, pickedPlace: false});
            }
        }
    }

    const handleAmountInput = (e: any) => {
        setItemBasket({
            ...itemsBasket,
            amount: Number(e.target.value),
        })

    }


    return (
        <Wrapper>
            <Nav/>
            <InventoryTablePlace
                place={places}
                onClick={handlePlaces}/>

            <InventoryTableItem
                onClick={handleItems}
                items={items}/>


            {isPicked.pickedPlace &&

            <InventoryPlaceSummary
                img={pickedPlace.img}
                name={pickedPlace.name}
                city={pickedPlace.city}
                street={pickedPlace.street}
                buildNumber={pickedPlace.buildNumber}/>}

            {isPicked.pickedItem && (
                <>
                    <InventoryItemSummary
                        name={itemsBasket.name}
                        price={itemsBasket.price}
                        amount={itemsBasket.amount}
                        dateOfBuy={itemsBasket.dateOfBuy}
                        img={itemsBasket.img}/>

                    <InventoryFormLayout
                        onSubmit={handleSubbmit}
                        onChange={handleAmountInput}
                        amount={itemsBasket.amount}/> </>)
            }

        </Wrapper>
    )

}