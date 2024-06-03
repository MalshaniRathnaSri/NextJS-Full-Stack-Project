import { connect } from "@/dbConfig/dbConfig";
import User from '@/models/userModel';
import {NextRequest, NextResponse} from "next/server";
import bcryptjs from 'bcryptjs';
connect()

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        //trigger the data from frontend
        const reqBody = await request.json();
        const {firstName, lastName, email, contactNumber, address, password } = reqBody;

        console.log(reqBody);

        const user = await User.findOne({ email });

        //check whether the user is already existing or not
        if(user){
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }
        //Hash Password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        //create new User to database
        const newUser = new User({
            firstName,
            lastName,
            email,
            contactNumber,
            address,
            password: hashedPassword
        });

        const saveUser = await newUser.save();
        console.log(saveUser);

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            saveUser
        });

    } catch (error: any) {
        console.error("Error creating user:", error);
        return NextResponse.json({ error: error.message }, 
        { status: 500 });
    }
}
