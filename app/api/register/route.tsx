import { NextRequest, NextResponse } from "next/server";
import { schema } from "./schema";
import prisma from "@/prisma/client";
import bcrypt from "bcrypt";

export const POST = async (request : NextRequest) => {
    const body = await request.json();

    const validation = schema.safeParse(body);

    if(!validation.success){
        return NextResponse.json(validation.error.errors, {status : 404});
    };

    const user = await prisma.user.findUnique({where : {email : body.email}});
  
    if(user){
        return NextResponse.json({error : 'Aleady Exists User'}, {status : 404});
    };
    
    const hashedPassword = await bcrypt.hash(body.password, 10);

    const newUser = await prisma.user.create({
        data : {
            email : body.email,
            hashedPassword
        }
    })

    return NextResponse.json({email : newUser.email});
}