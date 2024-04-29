"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AuthProvider from "@/tool/clientAuthProvider";
import { useCallback, useState } from "react";
import { post } from "@/api/api";
import { useRouter } from 'next/navigation'

export default function LoginBox() {
  const router = useRouter()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState();
  

  const postData = useCallback(async (e) => {
    console.log('user name',username);
    console.log('pass',password);
    e.preventDefault();
    // try {
    //   const res = await post(`users/login/`, {
    //     username: username,
    //     password: password
    //   });
    //   console.log('res',res);
    //   // console.log(res.data.access_token);
    //   // console.log(res.data.uid);
    //   if (res.status === 200) {
    //     AuthProvider.login(res.data.access_token, res.data.uid);
    //     alert("Login Success");
    //     Router.push("/");
    //     //console.log(res.data.access_token)
    //     //console.log(res.data.uid)
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    try {
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        username: username,
        password: password
      })
      });

      const data = await response.json(); 

      if (!response.ok) {
        alert("Username or password incorrect")
        throw new Error('Failed to submit form');
        
      }
      
     // Convert response to JSON
      console.log("token: ", data.access_token);
      alert("Login Success");
      router.push('/')
      // AuthProvider.login(data.access_token, data.uid);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      
      
      
    }
  }, [username, password]);
 

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
            Welcome to SuperKick Store
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 ">
            Sign in to your account
          </p>
        </div>
        <form action="#" className="space-y-6" method="POST">
          <div>
            <Label className="sr-only" htmlFor="username">
              Username
            </Label>
            <Input
              autoComplete="username"
              className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
              id="username"
              name="username"
              placeholder="Username"
              required
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              autoComplete="current-password"
              className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
              id="password"
              name="password"
              placeholder="Password"
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <Button
              className="w-full rounded-none"
              onClick={(e) => {
                postData(e)
              }}
            >
              Sign in
            </Button>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
              Or
              <Link
                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                href="register"
              >
                sign up for a new account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
