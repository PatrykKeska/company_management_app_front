import React, {FormEvent, useContext, useState} from "react";
import styled from "styled-components";
import {Input} from "../../../Components/Input/Input";
import {InputOnChange} from "../../../types/common.types";
import {Button} from "../../../Components/Button /Button";
import {ImgInput} from "../../../Components/Input/ImgInput";
import {SinglePlaceContext} from "../../../context/SinglePlace/singlePlace.context";
import {Img} from "../../../Components/Img/Img";
import {Checkbox} from "../../../Components/Input/Checkbox";
import {useNavigate} from "react-router-dom";
import {StyledLabel} from "../../../Components/StyledLabel/StyledLabel";
import office from '../../../assets /img/office.jpeg'



const StyledForm = styled.form`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`


export const EditSinglePlaceForm = () => {
    const navigate = useNavigate();
    const {placeDetails, setPlaceDetails} = useContext(SinglePlaceContext);
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


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            if (!toDelete) {
                (async () => {

                    if (placeDetails.img === '') {
                        placeDetails.img = office
                    }
                     await fetch('http://localhost:3001/places/update', {
                        method: "PATCH",
                        body: JSON.stringify({
                            ...placeDetails
                        }),
                        headers: {'Content-Type': 'application/json'},
                    })
                })()
            } else {
                (async () => {
                    await fetch('http://localhost:3001/places/delete', {
                        method: "DELETE",
                        body: JSON.stringify({
                            ...placeDetails
                        }),
                        headers: {'Content-Type': 'application/json'},

                    })

                })()
            }
        } finally {
            setLoading(false)

            setPlaceDetails({
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
            <Img width={'200px'} height={'150px'} src={placeDetails.img}/>
            <StyledLabel>
                Name:
                <Input
                    type={'text'} name={'name'}
                    value={placeDetails.name}
                    onChange={(event: InputOnChange) => setPlaceDetails({
                        ...placeDetails,
                        name: event.target.value

                    })}/>
            </StyledLabel>

            <StyledLabel>
                City:
                <Input
                    type={'text'}
                    name={'city'}
                    value={placeDetails.city}
                    onChange={(event: InputOnChange) => setPlaceDetails({
                        ...placeDetails,
                        city: event.target.value

                    })}/>
            </StyledLabel>

            <StyledLabel>
                Street:
                <Input
                    type={'text'}
                    name={'street'}
                    value={placeDetails.street}
                    onChange={(event: InputOnChange) => setPlaceDetails({
                        ...placeDetails,
                        street: event.target.value

                    })}/>
            </StyledLabel>

            <StyledLabel>
                Number of the building:
                <Input
                    type={'text'}
                    name={'buildNumber'}
                    value={placeDetails.buildNumber}
                    onChange={(event: InputOnChange) => setPlaceDetails({
                        ...placeDetails,
                        buildNumber: event.target.value,

                    })}
                />
            </StyledLabel>
            <StyledLabel row>

                Change image
                <Checkbox checked={toUpdateImg} onChange={handleToUpdateImg}/>
            </StyledLabel>
            {toUpdateImg ? (<ImgInput
                onChange={(e: InputOnChange) => setPlaceDetails({
                    ...placeDetails,
                    img: e.target.value
                })}
                value={placeDetails.img}
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