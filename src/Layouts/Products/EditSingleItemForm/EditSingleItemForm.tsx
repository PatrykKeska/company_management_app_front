import React, {FormEvent, useContext, useState} from "react";
import styled from "styled-components";
import {Input} from "../../../Components/Input/Input";
import {InputOnChange} from "../../../types/common.types";
import {Button} from "../../../Components/Button /Button";
import {Img} from "../../../Components/Img/Img";
import {Checkbox} from "../../../Components/Input/Checkbox";
import {useNavigate} from "react-router-dom";
import {StyledLabel} from "../../../Components/StyledLabel/StyledLabel";
import {SingleItemContext} from "../../../context/SingleItem/SingleItem.context";
import {apiURL} from "../../../utils/api";
import {FileInput} from "../../../Components/Input/FileInput";

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
    const [preview,setPreview] = useState({src:''});
    const [toUpdateImg, setToUpdateImg] = useState(false);
    const [toDelete, setToDelete] = useState(false);

    const handleFile = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setItemDetails({...itemDetails, file: e.target.files![0]})
        setPreview({src: URL.createObjectURL(e.target.files![0])})

    }
    const handleToUpdateImg = () => {
        setToUpdateImg(!toUpdateImg)
        setPreview({src:''})
    }
    const handleToDelete = () => {
        setToDelete(!toDelete)
    }


    const [loading, setLoading] = useState(false);

// @TODO Create API endpoints for handleSubmit !!!
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            if (!toDelete) {
                (async () => {

                    const formData = new FormData();
                    formData.append('name', itemDetails.name)
                    formData.append('id', itemDetails.id!)
                    formData.append('price', String(itemDetails.price))
                    formData.append('amount', String(itemDetails.amount))
                    formData.append('dateOfBuy', itemDetails.dateOfBuy)
                    formData.append('file', itemDetails.file!)
                    await fetch(`${apiURL}/products/update`, {
                        method: "PATCH",
                        credentials: 'include',
                        body: formData
                    })

                })()
            } else {
                (async () => {
                    await fetch(`${apiURL}/products/remove`, {
                        method: "DELETE",
                        body: JSON.stringify({id: itemDetails.id}),
                        credentials: 'include',
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
        navigate('/storage')
    }


    return (

        <StyledForm onSubmit={handleSubmit}>
            <Img width={'200px'} height={'150px'} src={preview.src ? preview.src : itemDetails.img}/>
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

            {toUpdateImg ? (<><FileInput
                onChange={handleFile}
                name='file'
            /> </>) : null}



            <StyledLabel row>
                Delete from database
                <Checkbox checked={toDelete} onChange={handleToDelete}/>
            </StyledLabel>
            {toDelete ? <Button small={true}>Delete</Button> : <Button small={true}>Update</Button>}


        </StyledForm>
    )
}