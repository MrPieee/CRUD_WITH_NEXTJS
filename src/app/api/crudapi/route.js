import { DBCONNECT } from "@/connect/DB_Connection";
import CRUD from "@/models/crudModel";
import { NextResponse } from "next/server"


export  const GET =async (req)=>{
    try {
        await DBCONNECT();
        const data = await CRUD.find();
        if (data) {
        return NextResponse.json({data},{status:200});
        } else {
        return NextResponse.json({message:`Todos hasn't found`},{status:200});
        };
    } catch (error) {
        return NextResponse.json({message:`Error: ${error.message} `},{status:500});
    };
};


export  const POST =async (req)=>{
    try {
        await DBCONNECT();
        const {title,body} = await req.json();

        if (title && body) {
            const dataAdd = await CRUD({
                title: title,
                body: body
            });
            await dataAdd.save();
        return NextResponse.json({message:'Your Data is added'},{status:200});
        } else {
        return NextResponse.json({message :`Please fill the form`}, {status:200});
        }
    } catch (error) {
        return NextResponse.json({message:`Error: ${error.message} `},{status:500});
    }
}





