import React, {FormEvent, useContext, useState} from "react";
import styled from "styled-components";
import {Input} from "../../Components/Input/Input";
import {InputOnChange} from "../../types/common.types";
import {Button} from "../../Components/Button /Button";
import {ImgInput} from "../../Components/Input/ImgInput";
import {Img} from "../../Components/Img/Img";
import {Checkbox} from "../../Components/Input/Checkbox";
import {useNavigate} from "react-router-dom";
import {StyledLabel} from "../../Components/StyledLabel/StyledLabel";
import {SingleItemContext} from "../../context/SingleItem/SingleItem.context";
import item from '../../assets /img/item.jpeg';

const StyledForm = styled.form`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`


export const EditSingleItemForm = () => {
    const navigate = useNavigate();
    const {itemDetails, setItemDetails} = useContext(SingleItemContext);
    const [toUpdateImg, setToUpdateImg] = useState(false);
    const [toDelete, setToDelete] = useState(false);
    const handleToUpdateImg = () => {
        setToUpdateImg(!toUpdateImg)
    }
    const handleToDelete = () => {
        setToDelete(!toDelete)
    }

// @TODO Create loading Component !!!
    const [loading, setLoading] = useState(false);

// @TODO Create API endpoints for handleSubmit !!!
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            if (!toDelete) {
                (async () => {

                    if (itemDetails.img === '') {
                        itemDetails.img = item
                    }
                    await fetch('http://localhost:3001/storage/update', {
                        method: "PATCH",
                        body: JSON.stringify({
                            ...itemDetails
                        }),
                        headers: {'Content-Type': 'application/json'},

                    })

                })()
            } else {
                (async () => {
                    await fetch('http://localhost:3001/storage/delete', {
                        method: "DELETE",
                        body: JSON.stringify({
                            ...itemDetails
                        }),
                        headers: {'Content-Type': 'application/json'},

                    })

                })()
            }
        } finally {
            setLoading(false)

            setItemDetails({
                name: '',
                price: 0,
                amount: 0,
                dateOfBuy: '',
                img: '',

            })

        }
        navigate('/places')
    }


    return (

        <StyledForm onSubmit={handleSubmit}>
            <Img width={'200px'} height={'150px'} src={itemDetails.img}/>
            <StyledLabel>
                Name:
                <Input
                    type={'text'} name={'name'}
                    value={itemDetails.name}
                    onChange={(event: InputOnChange) => setItemDetails({
                        ...itemDetails,
                        name: event.target.value

                    })}/>
            </StyledLabel>

            <StyledLabel>
                Price:
                <Input
                    type={'number'}
                    name={'price'}
                    value={itemDetails.price}
                    onChange={(event: InputOnChange) => setItemDetails({
                        ...itemDetails,
                        price: Number(event.target.value)

                    })}/>
            </StyledLabel>

            <StyledLabel>
                Amount:
                <Input
                    type={'number'}
                    name={'amount'}
                    value={itemDetails.amount}
                    onChange={(event: InputOnChange) => setItemDetails({
                        ...itemDetails,
                        amount: Number(event.target.value)

                    })}/>
            </StyledLabel>

            <StyledLabel>
                Date Of Buy:
                <Input
                    type={'text'}
                    name={'dateOfBuy'}
                    value={itemDetails.dateOfBuy}
                    onChange={(event: InputOnChange) => setItemDetails({
                        ...itemDetails,
                        dateOfBuy: event.target.value,

                    })}
                />
            </StyledLabel>
            <StyledLabel row>

                Change image
                <Checkbox checked={toUpdateImg} onChange={handleToUpdateImg}/>
            </StyledLabel>

            {toUpdateImg ? (<ImgInput
                onChange={(e: InputOnChange) => setItemDetails({
                    ...itemDetails,
                    img: e.target.value
                })}
                value={itemDetails.img}
                name={'img'}
                placeholder={'Pozostaw Puste jeżeli nie chcesz zmieniać zdjęcia'}
                type={'string'}/>) : null}


            <StyledLabel row>
                Delete from database
                <Checkbox checked={toDelete} onChange={handleToDelete}/>
            </StyledLabel>
            {toDelete ? <Button small={true}>Delete</Button> : <Button small={true}>Update</Button>}


        </StyledForm>
    )
}