import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import path from "path";
//import ip from 'ip';

//const PRIVATE_IP =  ip.address();
const pump = promisify(pipeline);
const path_upload = path.join(__dirname,'..', '..', '..', 'upload/');

export const POST = async (request : NextRequest) => {
    try{
        const formData = await request.formData();
        const file = formData.getAll('files')[0];

        console.log('path_upload => ', path_upload)
        if(!fs.existsSync(path_upload)) {
            fs.mkdirSync(path_upload),  { recursive: true };
        };

        const filePath = path_upload.concat((file as File).name);

        await pump((file as any).stream(), fs.createWriteStream(filePath));
        return NextResponse.json({status:"success",data:(file as File).name})
    }
    catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
};

export const GET = async () => {
   // const body = await request.json;
    try {
        // 파일 경로 설정
        const filePath = path_upload.concat('test.jpeg');

        // 파일 존재 여부 확인
        if(!fs.existsSync(filePath)){
            return NextResponse.json({error : 'Not Found File'}, {status : 404});
        }

        // 파일 읽기
        const fileBuffer = fs.readFileSync(filePath);

        // 파일 읽기
        //const fileStream = fs.createReadStream(filePath);

        // 파일 다운로드를 위한 응답 설정
        const response = new NextResponse(fileBuffer, {
            status: 200,
            headers: {
                'Content-Type': 'image/jpeg',
                'Content-Disposition': `attachment; filename="test.jpeg"`,
            },
        });
  
      return response;
  
    } catch (e) {
      // 에러 처리
      return NextResponse.json({ status: "download fail", data: e });
    }
  }