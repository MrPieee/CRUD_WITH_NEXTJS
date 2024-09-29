import CRUD from "@/models/crudModel";

const { NextResponse } = require("next/server")

// Single data get section
export const GET =async (req,{params}) => {
    try {
        const {pid}=params;
        const singleData = await CRUD.findById({_id:pid});
            if (singleData) { 
                return NextResponse.json(singleData, {status:200});
            } else {
                return NextResponse.json({message:`Your Post isn't found`}, {status:404});
            }

    } catch (error) {
        return NextResponse.json({message: `Error : ${error.message}`},{status:500});
    };  
};



// Update Data section

export const PATCH =async (req,{params})=>{
    try {
        const {pid}=params;
        const theData = await CRUD.findOne({_id:pid});
            if (theData) { 
                const {title,body} = await req.json();
               if (title||body) {
                    const updateData = await CRUD.findByIdAndUpdate({_id:pid},{
                            $set:{
                                title: title ,
                                body:body
                            }
                        });
                        return NextResponse.json(updateData, {status:200});
                } else {
                    return NextResponse.json({message:`Please add your update data`}, {status:404});
                };
            } else {
                return NextResponse.json({message:`Your Post isn't found`}, {status:404});
            }

    } catch (error) {
        return NextResponse.json({message: `Error : ${error.message}`},{status:500});
    };
};


// Data Delete section

export const DELETE =async (req,{params}) => {
    try {
        const {pid}=params;
        const theData = await CRUD.findOne({_id:pid});
        console.log(theData);
            if (theData) { 
                const deleteData = await CRUD.findByIdAndDelete(pid);
                if(deleteData){
                    return NextResponse.json({message:`Your Data has been deleted`}, {status:200});
                }
            } else {
                return NextResponse.json({message:`Your Post isn't found`}, {status:404});
            }

    } catch (error) {
        return NextResponse.json({message: `Error : ${error.message}`},{status:500});
    };  
};




