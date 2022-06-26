import React, {FormEvent, useState} from "react";
import styled from "styled-components";
import {Input} from "../../Components/Input/Input";
import {Button} from "../../Components/Button /Button";
import {Img} from "../../Components/Img/Img";
import {SendingPopUp} from "../../Components/SendingPopUP/SendingPopUp";
import item from '../../assets /img/item.jpeg'
import {SingleProductTypes} from "../../types/Product.types";
import {InputOnChange} from "../../types/common.types";
import {StyledLabel} from "../../Components/StyledLabel/StyledLabel";


const StyledForm = styled.form`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`


export const AddProductForm = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        price: 0,
        amount: 0,
        dateOfBuy: '',
        img: ''
    } as SingleProductTypes);
    const [loading, setLoading] = useState(false)
    const addNewProduct = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true)

        try {
            await fetch(`http://localhost:3001/add-new-item`, {
                method: "POST",
                body: JSON.stringify({
                    ...formValues
                }),
                headers: {'Content-Type': 'application/json'},
            })
        } finally {
            setLoading(false)
            setFormValues({name: '', price: 0, amount: 0, dateOfBuy: '', img: ''})
        }
    }


    return (

        loading ? <SendingPopUp/> : (
            <StyledForm onSubmit={addNewProduct}>
                {formValues.img === '' ? <Img width={'150px'} height={'120px'} src={item}/> : <Img  width={'150px'} height={'120px'}src={formValues.img}/>}


                <StyledLabel htmlFor="name">
                    Name:
                    <Input onChange={(e: InputOnChange) => setFormValues({
                        ...formValues,
                        name: e.target.value
                    })}
                           value={formValues.name}
                           name={'name'}
                           type={'text'}/>
                </StyledLabel>

                <StyledLabel>
                    Price:
                    <Input
                        onChange={(e: InputOnChange) => setFormValues({
                            ...formValues,
                            price: Number(e.target.value)
                        })}
                        value={formValues.price}
                        name={'price'}
                        type={'number'}/>
                </StyledLabel>

                <StyledLabel>
                    Amount:
                    <Input

                        onChange={(e: InputOnChange) => setFormValues({
                            ...formValues,
                            amount: Number(e.target.value)
                        })}
                        value={formValues.amount}
                        name={'pieces'}
                        type={'number'}/>
                </StyledLabel>

                <StyledLabel>
                    Date of buy:
                    <Input
                        onChange={(e: InputOnChange) => setFormValues({
                            ...formValues,
                            dateOfBuy: e.target.value
                        })}
                        value={formValues.dateOfBuy}
                        name={'date'}
                        type={'date'}/>

                </StyledLabel>

                <StyledLabel>
                    Link to your image
                    <Input
                        onChange={(e: InputOnChange) => setFormValues({
                            ...formValues,
                            img: e.target.value
                        })}
                        value={formValues.img}
                        name={'img'}
                        type={'string'}/>
                </StyledLabel>
                <Button>Add</Button>
            </StyledForm>
        ))
}

