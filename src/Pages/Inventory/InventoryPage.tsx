import React, {FormEvent, useEffect, useState} from "react";
import {Nav} from "../../Layouts/GeneralUse/Nav/Nav";
import {Wrapper} from "../../Components/Wrapper /Wrapper";
import {StyledInput} from "../../Components/Input/Input";
import {StyledLabel} from "../../Components/StyledLabel/StyledLabel";
import axios from "axios";
import {SingleProductTypes} from "../../types/Product.types";
import {SinglePlaceTypes} from "../../types/Places.types";
import {Paragraph} from "../../Components/Paragraphs/Paragraph";
import {Img} from "../../Components/Img/Img";
import {StyledTable} from "../../Components/Table/Table";
import {StyledTh} from "../../Components/Th/Th";
import {StyledTd} from "../../Components/Td/Td";
import {InventoryButton} from "../../Components/InventoryButton/InventoryButton";
import {StyledTbody} from "../../Components/Tbody/Tbody";
import {InventoryForm} from "../../Components/InventoryForm/InventoryForm";


export const InventoryPage = () => {
    const [items, setItems] = useState(Array<SingleProductTypes>);
    const [isPicked, setIsPicked] = useState({picked: false});
    const [places, setPlaces] = useState(Array<SinglePlaceTypes>);
    const [itemsBasket, setItemBasket] = useState({} as SingleProductTypes);
    const [pickedPlace, setPickedPlace] = useState({} as SinglePlaceTypes);

    useEffect(() => {
        (async () => {
            const items = await axios('http://localhost:3001/storage')
            setItems(items.data.message)
            const places = await axios('http://localhost:3001/places')
            setPlaces(places.data.message)
        })()
    }, [])


    const handleItems = (item: SingleProductTypes) => {
        setItemBasket({
            ...item

        })
        setIsPicked({picked: true})
    }

    const handlePlaces = (place: SinglePlaceTypes) => {
        setPickedPlace({
            ...place
        })
    }

    const handleReset = () => {
        setIsPicked({picked: false});
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/inventory/check', {items: itemsBasket, place: pickedPlace}, {
                headers: {"Content-type": "application/json"}

            });
        } catch (err) {
            console.log(err)
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
            <StyledTable>
                <StyledTbody>
                    <tr>
                        <StyledTh>Name</StyledTh>
                        <StyledTh>Price</StyledTh>
                        <StyledTh>Amount</StyledTh>
                        <StyledTh>Edit</StyledTh>
                    </tr>
                </StyledTbody>

                {items.map((item: SingleProductTypes) => (
                        <StyledTbody key={item.id}>
                            <tr>
                                <StyledTd>{item.name}</StyledTd>
                                <StyledTd>{item.price}</StyledTd>
                                <StyledTd>{item.amount}</StyledTd>
                                <StyledTd>
                                    <InventoryButton
                                        value={item.id}
                                        onClick={() => handleItems(item)}
                                    >Pick</InventoryButton>

                                </StyledTd>
                            </tr>
                        </StyledTbody>
                    )
                )}
            </StyledTable>

            {isPicked.picked && (
                <>
                    <Img src={itemsBasket.img} height={'120px'} width={'200px'}/>
                    <Paragraph>Summary: </Paragraph>
                    <Paragraph>Product: {itemsBasket.name}</Paragraph>
                    <Paragraph>Price per one: {itemsBasket.price}</Paragraph>
                    <Paragraph>Total Cost :{itemsBasket.price * itemsBasket.amount}</Paragraph>


                    <InventoryForm onSubmit={handleSubmit}>
                        <StyledLabel>
                            Amount:
                            <StyledInput
                                onChange={handleAmountInput}
                                value={itemsBasket.amount}
                                type={"number"}/>
                        </StyledLabel>
                        <StyledTable>
                            <StyledTbody>
                                <tr>
                                    <StyledTh>Name</StyledTh>
                                    <StyledTh>City</StyledTh>
                                    <StyledTh>Street</StyledTh>
                                    <StyledTh>Edit</StyledTh>
                                </tr>
                            </StyledTbody>

                            {places.map((place: SinglePlaceTypes) => (
                                    <StyledTbody key={place.id}>
                                        <tr>
                                            <StyledTd>{place.name}</StyledTd>
                                            <StyledTd>{place.city}</StyledTd>
                                            <StyledTd>{place.street}</StyledTd>
                                            <StyledTd>

                                                <InventoryButton
                                                    value={place.id}
                                                    onClick={() => handlePlaces(place)}
                                                >Pick</InventoryButton>
                                            </StyledTd>
                                        </tr>
                                    </StyledTbody>
                                )
                            )}
                        </StyledTable>
                        <Paragraph>Place to assign:{pickedPlace.name}</Paragraph>
                        <Img src={pickedPlace.img} height={'120px'} width={'200px'}/>
                        <InventoryButton onClick={handleReset}>Save</InventoryButton>
                    </InventoryForm>
                </>)}
        </Wrapper>
    )

}