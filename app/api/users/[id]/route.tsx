import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';
import prisma from '@/prisma/client';

export const GET = async (request : NextRequest, { params }: {params : { id : string } }) => {
    
    const user = await prisma.user.findUnique({ where : {id : params.id}});

    if(!user){
        NextResponse.json({error : "User Not Found"}, {status : 404});
    };

    return NextResponse.json(user);
};

export const PUT = async (request : NextRequest, {params} : {params : {id : string}}) => {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if(!validation?.success){
        return NextResponse.json(validation.error.errors, {status : 404});
    };

    const user = await prisma.user.findUnique({where : {id : params?.id}}); 
    
    if(!user){
        return NextResponse.json({error : "User Not Found"}, {status : 404});
    };

    const changeData = await prisma.user.update({
        where : {
            id : user.id
        },
        data : {
            name : body.name,
            email : body.email
        }
    });

    return NextResponse.json(changeData);
}; 

export const DELETE = async(request : NextRequest, {params} : {params : {id: string}}) => {
    
    const user = await prisma.user.findUnique({where : {id : params.id}});

    if(!user){
        return NextResponse.json({error : "User Not Found"}, {status : 404});
    };

    const deleteUser = await prisma.user.delete({where : {id : params.id}});

    return NextResponse.json(deleteUser);
}