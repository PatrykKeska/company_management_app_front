import React, {FormEvent, useState} from "react";
import styled from "styled-components";
import {Input} from "../../Components/Input/Input";
import {Button} from "../../Components/Button /Button";
import {Img} from "../../Components/Img/Img";
import {SendingPopUp} from "../../Components/SendingPopUP/SendingPopUp";
import photo from '../../assets /img/photo.jpeg'


declare module  "*.jpeg"{
    const img: string
    export default img
}
type FormData = {
    name: string,
    price: number,
    pieces: number,
    dateOfBuy: string,
    img: any
}

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
    const [formValues, setFormValues] = useState<FormData>({name: '', price: 0, pieces: 0, dateOfBuy: '', img: photo});
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
            setFormValues({name: '', price: 0, pieces: 0, dateOfBuy: '', img: photo})
        }
    }
    return (
        loading ? <SendingPopUp/> : (
            <StyledForm onSubmit={addNewProduct}>
                <Img src={formValues.img}/>

                <StyledLabel htmlFor="name">
                    Nazwa:
                <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormValues({
                    ...formValues,
                    name: e.target.value
                })}
                       value={formValues.name}
                       name={'name'}
                       placeholder={'Nazwa...'}
                       type={'text'}/>
                </StyledLabel>

                <StyledLabel>
                    Cena:
                <Input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormValues({
                        ...formValues,
                        price: Number(e.target.value)
                    })}
                    value={formValues.price}
                    name={'price'} placeholder={'Cena...'}
                    type={'number'}/>
                </StyledLabel>

                <StyledLabel>
                    Ilość sztuk:
                <Input

                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormValues({
                        ...formValues,
                        pieces: Number(e.target.value)
                    })}
                    value={formValues.pieces}
                    name={'pieces'} placeholder={'Ilość...'}
                    type={'number'}/>
                </StyledLabel>

                <StyledLabel>
                    Data Zakupu:
                <Input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormValues({
                        ...formValues,
                        dateOfBuy: e.target.value
                    })}
                    value={formValues.dateOfBuy}
                    name={'date'}
                    placeholder={'Data Zakupu...'}
                    type={'date'}/>

                </StyledLabel>

                <StyledLabel>
                    Link do Zdjęcia:
                <Input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormValues({
                        ...formValues,
                        img: e.target.value
                    })}
                    value={formValues.img}
                    name={'img'} placeholder={'Zdjęcie...'}
                    type={'string'}/>
                <Button>Dodaj</Button>
                </StyledLabel>
            </StyledForm>
        ))
}

