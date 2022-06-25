import React, {FormEvent, useState} from "react";
import styled from "styled-components";
import {Input} from "../../Components/Input/Input";
import {Button} from "../../Components/Button /Button";
import {Img} from "../../Components/Img/Img";
import {SendingPopUp} from "../../Components/SendingPopUP/SendingPopUp";
import item from '../../assets /img/item.jpeg'
import {SingleProductTypes} from "../../types/Product.types";
import {InputOnChange} from "../../types/common.types";


const StyledForm = styled.form`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const AddProductForm = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        price: 0,
        pieces: 0,
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
            setFormValues({name: '', price: 0, pieces: 0, dateOfBuy: '', img: ''})
        }
    }


    return (

        loading ? <SendingPopUp/> : (
            <StyledForm onSubmit={addNewProduct}>
                {formValues.img === '' ? <Img src={item}/> : <Img src={formValues.img}/>}


                <StyledLabel htmlFor="name">
                    Nazwa:
                    <Input onChange={(e: InputOnChange) => setFormValues({
                        ...formValues,
                        name: e.target.value
                    })}
                           value={formValues.name}
                           name={'name'}
                           type={'text'}/>
                </StyledLabel>

                <StyledLabel>
                    Cena:
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
                    Ilość sztuk:
                    <Input

                        onChange={(e: InputOnChange) => setFormValues({
                            ...formValues,
                            pieces: Number(e.target.value)
                        })}
                        value={formValues.pieces}
                        name={'pieces'}
                        type={'number'}/>
                </StyledLabel>

                <StyledLabel>
                    Data Zakupu:
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
                    Link do Zdjęcia:
                    <Input
                        onChange={(e: InputOnChange) => setFormValues({
                            ...formValues,
                            img: e.target.value
                        })}
                        value={formValues.img}
                        name={'img'}
                        type={'string'}/>
                </StyledLabel>
                <Button>Dodaj</Button>
            </StyledForm>
        ))
}

