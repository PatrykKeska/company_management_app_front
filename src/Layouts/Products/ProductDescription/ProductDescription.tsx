import React, {useContext} from "react";
import {Paragraph} from "../../../Components/Paragraphs/Paragraph";
import {Img} from "../../../Components/Img/Img";
import {SingleProductTypes} from "../../../types/Product.types";
import {LinkButton} from "../../../Components/LinkButton/LinkButton";
import {SingleItemContext} from "../../../context/SingleItem/SingleItem.context";
import {ProductPlaceDescriptionWrapper} from "../../../Components/Product-Place-Description/ProductPlaceDescriptionWrapper";




export const ProductDescription = (props: SingleProductTypes) => {
    const {setItemDetails} = useContext(SingleItemContext);
    const setContextForSingleProduct = () => {
        setItemDetails(props)
    }
    return (

        <ProductPlaceDescriptionWrapper key={props.id}>
            <Img width={'150px'} height={'120px'} src={props.img}/>
            <Paragraph positionStart={2} positionEnd={2}>{`${props.name}`}</Paragraph>
            <Paragraph positionStart={3} positionEnd={3}>{`Price: ${props.price}`}</Paragraph>
            <Paragraph positionStart={4} positionEnd={4}>{`Amount:${props.amount}`}</Paragraph>
            <Paragraph positionStart={5} positionEnd={5}>{`Date of buy: ${props.dateOfBuy}`}</Paragraph>
            <LinkButton small={'true'} onClick={setContextForSingleProduct}
                        to={`/storage/${props.id}`}>Edit</LinkButton>
        </ProductPlaceDescriptionWrapper>
    )
}