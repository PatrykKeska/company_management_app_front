import React from "react";
import {Paragraph} from "../../Components/Paragraphs/Paragraph";
import {Img} from "../../Components/Img/Img";
import {SinglePlaceTypes} from "../../types/Places.types";
import {Strong} from "../../Components/Strong/Strong";


interface Props extends SinglePlaceTypes {
    name: string,
    city: string,
    street: string,
    buildNumber: string,

}



export const InventoryPlaceSummary = (props: Props) => {
    const {img, name, city, street, buildNumber} = props
    return (
        <>
            {props.img ? <>
                <Paragraph>Picked Place:<Strong> {name} </Strong></Paragraph>
                <Paragraph>City: <Strong>{city} </Strong></Paragraph>
                <Paragraph>Adress: <Strong>{street + '/' + buildNumber}</Strong></Paragraph>
                <Img src={img} height={'120px'} width={'200px'}/></> : null}

        </>
    )
}