"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {axios} from "axios";
// import { link } from "node:fs";


export default function LoginPage(){

    const [user,setUser] = React.useState({
        email : "" ,
        password : ""
    })

    const onLogin = async () => {

    }

    return(
        <div>
            <h1>Lgin</h1>
            <br />

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
                onClick={onLogin}
            >
                Login
            </button>
            <Link href="/login">Visit signup page</Link>
        </div>   
    )
}