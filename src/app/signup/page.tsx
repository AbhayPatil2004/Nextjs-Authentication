"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {axios} from "axios";
import { link } from "node:fs";


export default function SignupPage(){

    const [user,setUser] = React.useState({
        email : "" ,
        password : "",
        username : ""
    })

    const onSignup = async () => {

    }

    return(
        <div>
            <h1>SignUp</h1>
            <br />
            <label htmlFor="username">Username</label>
            <input type="text"
                id = "username" 
                value = {user.username}
                onChange={(e) => {
                    setUser({...user , username : e.target.value})
                }}
                placeholder="username"
            />

            <label htmlFor="email">Email</label>
            <input type="text"
                id = "email" 
                value = {user.email}
                onChange={(e) => {
                    setUser({...user , email : e.target.value})
                }}
                placeholder="email"
            />

            <label htmlFor="password">Email</label>
            <input type="text"
                id = "password" 
                value = {user.password}
                onChange={(e) => {
                    setUser({...user , password : e.target.value})
                }}
                placeholder="password"
            />

            <button
                onClick={onSignup}
            >
                SignUp
            </button>
            <Link href="/login">Visit login page</Link>
        </div>   
    )
}