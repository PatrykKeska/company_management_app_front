import React, {FormEvent, useState} from "react";
import styled from "styled-components";
import {Input} from "../../../Components/Input/Input";
import {Button} from "../../../Components/Button /Button";
import {Img} from "../../../Components/Img/Img";
import {SendingPopUp} from "../../../Components/SendingPopUP/SendingPopUp";
import item1 from '../../../assets /img/item1.jpeg'
import {SingleProductTypes} from "../../../types/Product.types";
import {InputOnChange} from "../../../types/common.types";
import {StyledLabel} from "../../../Components/StyledLabel/StyledLabel";
import {useNavigate} from "react-router-dom";
import {Checkbox} from "../../../Components/Input/Checkbox";
import {apiURL} from "../../../utils/api";


const StyledForm = styled.form`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`


export const AddProductForm = () => {
    const navigate = useNavigate();
    const [changeImg, toSetChangeImg] = useState(false);
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
            if (formValues.img === '') {
                formValues.img = item1
            }
            await fetch(`${apiURL}/add-new-item`, {
                method: "POST",
                body: JSON.stringify({
                    ...formValues
                }),
                headers: {'Content-Type': 'application/json'},
            })
        } finally {
            setLoading(false)
            setFormValues({name: '', price: 0, amount: 0, dateOfBuy: '', img: ''})
            navigate('/storage')
        }
    }


    return (

        loading ? <SendingPopUp/> : (
            <StyledForm onSubmit={addNewProduct}>
                {formValues.img === '' ? <Img width={'200px'} height={'120px'} src={item1}/> :
                    <Img width={'200px'} height={'120px'} src={formValues.img}/>}


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

                <StyledLabel row>
                    Change default image
                    <Checkbox checked={changeImg} onChange={() => toSetChangeImg(!changeImg)}/>
                </StyledLabel>
                {changeImg ? (<StyledLabel>
                    Link to your image
                    <Input
                        onChange={(e: InputOnChange) => setFormValues({
                            ...formValues,
                            img: e.target.value
                        })}
                        value={formValues.img}
                        name={'img'}
                        type={'string'}/>
                </StyledLabel>) : null}
                <Button>Add</Button>
            </StyledForm>
        ))
}

