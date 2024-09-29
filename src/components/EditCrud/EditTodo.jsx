'use client';
import { useEffect, useState } from 'react';
import './edit.css';
const EditCrud = (props) => {

    const {tId}=props;


    const [data,setData]=useState({
        title:'',
        body:''
    });
    const {title,body}=data;

    useEffect(()=>{
        fetch(`http://localhost:1618/api/crudapi/${tId}`)
        .then(res=>res.json())
        .then(res=>setData({
            title:res.title,
            body:res.body,
        }));
    },[tId])

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]:e.target.value
        });
    };
    const handleSubmit =async(e)=>{
        e.preventDefault();
        // console.log(data);
        const res = await fetch(`http://localhost:1618/api/crudapi/${tId}`,{
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
            
        });
         const items = await res.json();
        location.href=`http://localhost:1618/crudapp/${items._id}`;

        // console.log(items);
    }

    return (
        <>
            <section className="todoCreate" >
                <form onSubmit={handleSubmit} >
                    <input onChange={handleChange} value={title} type="text" name="title" placeholder="Write your todo TITLE" required/>
                    <textarea onChange={handleChange} value={body}  type="text" name="body" placeholder="Write your todo DESCRIPTION" required></textarea>
                    <button type='submit'>UPDATE TODO</button>
                </form>
            </section>
        </>
    );
};

export default EditCrud;