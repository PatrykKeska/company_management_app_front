import React, {FormEvent, useState} from "react";
import styled from "styled-components";
import {Input} from "../../Components/Input/Input";
import {Button} from "../../Components/Button /Button";
import {Img} from "../../Components/Img/Img";
import office from '../../assets /img/office.jpeg'
import {SinglePlaceTypes} from "../../types/Places.types";
import {InputOnChange} from "../../types/common.types";
import {stringify} from "querystring";


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


export const AddPlaceForm = () => {

    const [formValues, setFormValues] = useState({
        name: '',
        city: '',
        street: '',
        buildNumber: '',
        img: '',

    } as SinglePlaceTypes);

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            (async () => {
                const response = await fetch('http://localhost:3001/add-new-place', {
                    method: "POST",
                    body: JSON.stringify({
                        ...formValues
                    }),
                    headers: {'Content-Type': 'application/json'},

                })

            })()
        } finally {
            setLoading(false)
            setFormValues({
                name: '',
                city: '',
                street: '',
                buildNumber: '',
                img: '',

            })

        }
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            {formValues.img === '' ? <Img src={office}/> : <Img  src={formValues.img}/> }


            <StyledLabel>
                Nazwa:
                <Input
                    type={'text'} name={'name'}
                    value={formValues.name}
                    onChange={(event: InputOnChange) => setFormValues({
                        ...formValues,
                        name: event.target.value

                    })}/>
            </StyledLabel>

            <StyledLabel>
                Miasto:
                <Input
                    type={'text'}
                    name={'city'}
                    value={formValues.city}
                    onChange={(event: InputOnChange) => setFormValues({
                        ...formValues,
                        city: event.target.value

                    })}/>
            </StyledLabel>

            <StyledLabel>
                Ulica:
                <Input
                    type={'text'}
                    name={'street'}
                    value={formValues.street}
                    onChange={(event: InputOnChange) => setFormValues({
                        ...formValues,
                        street: event.target.value

                    })}/>
            </StyledLabel>

            <StyledLabel>
                Number Budynku:
                <Input
                    type={'text'}
                    name={'buildNumber'}
                    value={formValues.buildNumber}
                    onChange={(event: InputOnChange) => setFormValues({
                        ...formValues,
                        buildNumber: event.target.value,

                    })}
                />
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
    )
}