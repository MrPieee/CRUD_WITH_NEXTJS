'use client';

const Delete = (props) => {
    const {id}=props;
    const DeleteData = async (id)=>{
        const res = await fetch(`http://localhost:1618/api/crudapi/${id}`,{method:'DELETE'});
        const {message} = await res.json();
        alert(message);
        location.href='http://localhost:1618/crudapp';
    };
    return (
        <>
            <button onClick={()=>DeleteData(id)} style={{backgroundColor:'red',borderRadius:'.6rem',fontWeight:'700',cursor:'pointer'}}>DELETE</button>
        </>
    );
};

export default Delete;