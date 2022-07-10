import React from "react";
import {Paragraph} from "../../Components/Paragraphs/Paragraph";
import {Img} from "../../Components/Img/Img";
import {SingleProductTypes} from "../../types/Product.types";
import {Strong} from "../../Components/Strong/Strong";


export const InventoryItemSummary = (props: SingleProductTypes) => {
    const {img, name, price, amount} = props
    return (
        <>
            <Paragraph>Summary: </Paragraph>
            <Paragraph>Product:<Strong>{name}</Strong></Paragraph>
            <Paragraph>Price per one:<Strong>{price}</Strong></Paragraph>
            <Paragraph>Total Cost :<Strong>{price * amount}</Strong></Paragraph>
            <Img src={img} height={'120px'} width={'200px'}/>


        </>
    )
}