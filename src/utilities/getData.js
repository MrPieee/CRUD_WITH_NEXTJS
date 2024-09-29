export const getData = async ()=>{
    const res = await fetch('http://localhost:1618/api/crudapi',{
        cache:'no-store'
    });
    return await res.json();
};