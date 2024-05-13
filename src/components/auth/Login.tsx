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
            <div className="bg-white border mx-auto rounded-xl max-w-[400px] p-7">
              <form onSubmit={handleLogin}>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <label
                      htmlFor="Username"
                      className="text-[#5c5c5c] text-[16px]"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      value={username}
                      className="p-5 rounded-[10px] text-[#5c5c5c] bg-transparent py-3 border border-gray-300 outline-none"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label
                      htmlFor="password"
                      className="text-[#5c5c5c] text-[16px]"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      className="p-5 rounded-[10px] text-[#5c5c5c] bg-transparent py-3 border border-gray-300 outline-none"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="text-base">
                    Remember Me
                    <input type="checkbox" className="ml-2" />
                    <span className="checkmark"></span>
                  </label>
                </div>

                <div className="flex flex-col gap-2 mt-6">
                  <button
                    type="submit"
                    className="p-4 py-3 bg-[#394048] text-base flex items-center justify-center gap-1 font-bold w-full rounded-[50px] text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-7 h-7 fill-white"
                      focusable="false"
                      role="presentation"
                      aria-hidden="true"
                    >
                      <path d="M16.2641,10.283V7.7381a4.2987,4.2987,0,1,0-8.5973,0v2.5474a1.7624,1.7624,0,0,0-1.6594,1.7591v6.7536A1.7623,1.7623,0,0,0,7.77,20.5608h8.46a1.762,1.762,0,0,0,1.7626-1.7626V12.0446A1.762,1.762,0,0,0,16.2641,10.283Zm-3.3768,5.7476V17.96H11.1357V16.044a1.717,1.717,0,1,1,1.7516-.0134Zm1.6689-5.7485H9.3746V7.66a2.5383,2.5383,0,0,1,2.5383-2.5383h.1051A2.5382,2.5382,0,0,1,14.5562,7.66Z"></path>
                    </svg>
                    Log in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
