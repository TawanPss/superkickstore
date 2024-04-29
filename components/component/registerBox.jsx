"use client";

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useCallback, useState } from "react";
import { useRouter } from 'next/navigation'


export default function RegisterBox() {

  const router = useRouter()

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();

  const postData = useCallback(async (e) => {
    console.log('user name',username);
    console.log('email',email);
    console.log('pass',password);
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8080/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        username: username,
        email: email,
        password: password,

      })
      });

      const data = await response.json(); 

      if (!response.ok) {
        alert("alert")
        // throw new Error('Failed to submit form');
        
      }
      
     // Convert response to JSON
      alert("Register Success");
      router.push('/userlogin')
      // AuthProvider.login(data.access_token, data.uid);
      
    } catch (error) {
      console.error('Error', error);
      
      
      
    }
  }, [username,email, password]);
 
  return (
    (<div
      className="flex min-h-screen items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2
            className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Welcome to SuperKick Store
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 ">Create a new account</p>
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
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              autoComplete="email"
              className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
              id="email"
              name="email"
              placeholder="Email"
              required
              type="email" 
              onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              autoComplete="new-password"
              className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
              id="password"
              name="password"
              placeholder="Password"
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <Button className="w-full rounded-none" type="submit" onClick={(e) => {
                postData(e)
              }}>
              Sign up
            </Button>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
              Already have an account?
              <Link
                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                href="userlogin">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>)
  );
}
