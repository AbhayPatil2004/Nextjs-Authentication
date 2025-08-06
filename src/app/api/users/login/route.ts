import { connect } from "@/dbConfig/dbCofig";
import User from "@/models/userModel";
import { NextRequest , NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"

connect()

export async function POST(request:NextResponse){
    try{
        const reqBody = await request.json()
        const { email , password } = reqBody;

        const user = await User.findOne({email})
        if( !user ){
            return NextResponse.json({error:"User does not exist"} , {status:400})
        }

        const validPassword = await bcryptjs.compare(password,user.password);
        if( !validPassword ){
            return NextResponse.json({error:"Invalid Password"} , {status:400})
        }

        const tokenData = {
            id : user._id ,
            username : user._username ,
            email : user.email
        }

        const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET!,{ expiresIn : "1d"})

        const response = NextResponse.json({
            message : "Login Succesfull",
            success : true
        }
        response.cookies.set("token" , token , {
            httpOnly : true
        })
        return response
    ) 
    }

}