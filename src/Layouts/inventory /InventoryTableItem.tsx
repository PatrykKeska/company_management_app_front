import React, {EventHandler} from "react";
import {StyledTable} from "../../Components/Table/Table";
import {TbodyLayoutItem} from "./TbodyLayoutItem";
import {SingleProductTypes} from "../../types/Product.types";
import {StyledTbody} from "../../Components/Tbody/Tbody";
import {StyledTd} from "../../Components/Td/Td";
import {InventoryButton} from "../../Components/InventoryButton/InventoryButton";


interface Props {
    onClick: EventHandler<any>
    items: SingleProductTypes[];
}

export const InventoryTableItem = (props:Props)=>{

    const {items, onClick} = props


    return(

        <>
            <StyledTable>
                <TbodyLayoutItem/>
                {items.map((item: SingleProductTypes) => (
                        <StyledTbody key={item.id}>
                            <tr>
                                <StyledTd>{item.name}</StyledTd>
                                <StyledTd>{item.price}</StyledTd>
                                <StyledTd>{item.amount}</StyledTd>
                                <StyledTd>
                                    <InventoryButton
                                        value={item.id}
                                        onClick={()=>onClick(item as SingleProductTypes)}
                                    >Pick</InventoryButton>

                                </StyledTd>
                            </tr>
                        </StyledTbody>
                    )
                )}
            </StyledTable>
        </>
    )
}