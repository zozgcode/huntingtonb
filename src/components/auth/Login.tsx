"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import usersData from "./users.json";
import Header from "../header/Header";
import Image from "next/image";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const user = usersData.users.find(
      (user: any) => user.username === username
    );
    if (!user) {
      setError("User not found");
      setLoading(false);
      return;
    }
    if (user.password !== password) {
      setError("Invalid password");
      setLoading(false);
      return;
    }
    // Store user data in localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    router.push("/accounts");
    setLoading(false);
  };

  return (
    <div className="">
      <div className="h-screen bg-white">
        <div className="pt-10">
          <div className="flex items-center justify-center mb-2">
            <Image
              src="https://i.imgur.com/RnHokht.png"
              width={100}
              height={100}
              className="w-[35%]"
              alt="logo"
            />
          </div>
          {error && (
            <p className="text-[20px] my-4 text-center mx-auto max-w-[200px] rounded-md min-h-[50px] flex items-center justify-center bg-[#2d1a47] text-white">
              {error}
            </p>
          )}
          <div className="mt-10 p-4 sm:p-0">
          4216297703
          </div>
        </div>
      </div>
    </div>
  );
}
