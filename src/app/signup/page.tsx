"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios"; // ✅ FIXED: use default import
import toast from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup Successful", response.data);
      toast.success("Signup successful!");
      router.push("/login");
    } catch (error: any) {
      console.error("Signup failed", error);
      toast.error(error.response?.data?.error || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(
      !(user.email.length > 0 && user.password.length > 0 && user.username.length > 0)
    );
  }, [user]);

  return (
    <div>
      <h1>{loading ? "Processing..." : "Sign Up"}</h1>

      <br />
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />

      <button onClick={onSignup} disabled={buttonDisabled}>
        {buttonDisabled ? "Fill all fields" : "Sign Up"}
      </button>

      <br />
      <Link href="/login">Visit login page</Link>
    </div>
  );
}
