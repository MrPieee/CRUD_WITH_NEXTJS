'use client';
import { useState } from 'react';
import './crudstyle.css';
import { getData } from '@/utilities/getData';
const CreateCrud = () => {

    const [data,setData]=useState({
        title:'',
        body:''
    });
    const {title,body}=data;

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]:e.target.value
        });
    };
    const handleSubmit =async(e)=>{
        e.preventDefault();
        console.log(data);
        const res = await fetch('http://localhost:1618/api/crudapi',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
            
        });
         const {message} = await res.json();
        location.reload();

        console.log(message);
    }

    return (
        <>
            <section className="todoCreate" >
                <form onSubmit={handleSubmit} >
                    <input onChange={handleChange} value={title} type="text" name="title" placeholder="Write your todo TITLE" required/>
                    <textarea onChange={handleChange} value={body}  type="text" name="body" placeholder="Write your todo DESCRIPTION" required></textarea>
                    <button type='submit'>ADD TODO</button>
                </form>
            </section>
        </>
    );
};

export default CreateCrud;