import React, {FormEvent, useContext, useState} from "react";
import styled from "styled-components";
import {Input} from "../../Components/Input/Input";
import {InputOnChange} from "../../types/common.types";
import {Button} from "../../Components/Button /Button";
import {ImgInput} from "../../Components/Input/ImgInput";
import {SinglePlaceContext} from "../../context/SinglePlace/singlePlace.context";
import {Img} from "../../Components/Img/Img";
import {Checkbox} from "../../Components/Input/Checkbox";
import {useNavigate} from "react-router-dom";
import {StyledLabel} from "../../Components/StyledLabel/StyledLabel";

interface Props {
    row?: boolean;
}

const StyledForm = styled.form`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`


export const EditSinglePlaceForm = () => {
    const navigate = useNavigate();
    const {details, setDetails} = useContext(SinglePlaceContext);
    const [toUpdateImg, setToUpdateImg] = useState(false);
    const [toDelete, setToDelete] = useState(false);
    const [formValues, setFormValues] = useState(details);
    const handleToUpdateImg = () => {
        setToUpdateImg(!toUpdateImg)
    }
    const handleToDelete = () => {
        setToDelete(!toDelete)
    }


    const [loading, setLoading] = useState(false);


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            if (toDelete === false) {
                (async () => {

                    if (formValues.img === '') {
                        formValues.img = 'http://localhost:3000/static/media/office.929e7651334293b5e310.jpeg'
                    }
                    const response = await fetch('http://localhost:3001/places/update', {
                        method: "PATCH",
                        body: JSON.stringify({
                            ...formValues
                        }),
                        headers: {'Content-Type': 'application/json'},

                    })

                })()
            } else {
                (async () => {

                    const response = await fetch('http://localhost:3001/places/delete', {
                        method: "DELETE",
                        body: JSON.stringify({
                            ...formValues
                        }),
                        headers: {'Content-Type': 'application/json'},

                    })

                })()
            }
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
        navigate('/places')
    }


    return (

        <StyledForm onSubmit={handleSubmit}>
            <Img width={'200px'} height={'150px'} src={formValues.img}/>
            <StyledLabel>
                Name:
                <Input
                    type={'text'} name={'name'}
                    value={formValues.name}
                    onChange={(event: InputOnChange) => setFormValues({
                        ...formValues,
                        name: event.target.value

                    })}/>
            </StyledLabel>

            <StyledLabel>
                City:
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
                Street:
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
                Number of the building:
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
            <StyledLabel row>

                Change image
                <Checkbox checked={toUpdateImg} onChange={handleToUpdateImg}/>
            </StyledLabel>
            {toUpdateImg ? (<ImgInput
                onChange={(e: InputOnChange) => setFormValues({
                    ...formValues,
                    img: e.target.value
                })}
                value={formValues.img}
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