import React, {useState} from "react";
import axios from "axios";

export const FileUploader = () => {

    const [file, setFile] = useState('');

    const onInputChange = (e: any) => {
        setFile(e.target.files[0])
    }

    const submitHandler = (e: any) => {
        e.preventDefault()
        const data = new FormData();
        data.append('file', file);

        axios.post('http://localhost:3001/test', data).then((e) => {
            console.log('success')
        }).catch((e) => {
            console.log(e.error)
        })
    }


    return (
        <form onSubmit={submitHandler} method={'post'}>
            <input onChange={onInputChange} type="file"/>
            <button>Submit</button>
        </form>)
}