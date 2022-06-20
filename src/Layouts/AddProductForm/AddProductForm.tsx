import React, {FormEvent, useState} from "react";
import styled from "styled-components";
import {Input} from "../../Components/Input/Input";
import {Button} from "../../Components/Button /Button";
import {Img} from "../../Components/Img/Img";
import pencil from '../../assets /img/pencil.webp'
import {set} from "react-hook-form";
import {SendingPopUp} from "../../Components/SendingPopUP/SendingPopUp";


type FormData = {
    name: string,
    price: number,
    pieces: number,
    dateOfBuy: string,
    img: '',
}

const StyledForm = styled.form`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const AddProductForm = () => {
    const [formValues, setFormValues] = useState<FormData>({name: '', price: 0, pieces: 0, dateOfBuy: '', img: ''});
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
                <Img src={pencil}/>

                <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormValues({
                    ...formValues,
                    name: e.target.value
                })}
                       value={formValues.name}
                       name={'name'}
                       placeholder={'Nazwa...'}
                       type={'text'}/>

                <Input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormValues({
                        ...formValues,
                        price: Number(e.target.value)
                    })}
                    value={formValues.price}
                    name={'price'} placeholder={'Cena...'}
                    type={'number'}/>

                <Input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormValues({
                        ...formValues,
                        pieces: Number(e.target.value)
                    })}
                    value={formValues.pieces}
                    name={'pieces'} placeholder={'Ilość...'}
                    type={'number'}/>

                <Input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormValues({
                        ...formValues,
                        dateOfBuy: e.target.value
                    })}
                    value={formValues.dateOfBuy}
                    name={'date'}
                    placeholder={'Data Zakupu...'}
                    type={'date'}/>
                <Button>Dodaj</Button>
            </StyledForm>
        ))
}