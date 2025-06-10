"use client"

import {useForm} from "react-hook-form"
import { useSignUp } from "@clerk/nextjs"
import {z} from "zod"


//zod custom schema
import { signUpSchema } from "@/schemas/signUpSchema"
import { useState } from "react"
import { email } from "zod/v4-mini"



export default function signUpForm(){
    const [verifying, setVerifiying] = useState(false);

    const {signUp, isLoaded, setActive} = useSignUp();

    const {
        register,
        handleSubmit,
        formState: {errors},

    } = useForm<z.infer<typeof signUpSchema >>  ({
        resolver: zodResolver (signUpSchema),
        defaultValues: {
            email: "",
            password: "",
            passwordConfirmation: "",
        },
    });

    const onSubmit = async (data: z.infer<typekf signUpSchema) => {};
    
    const handleVerificationSumbit = async () => {};

    if(verifying) {
        return 
            <h1>this is OTP entering field</h1>;
        
    }
    return <h1>signup form with email and other fields</h1>;

}