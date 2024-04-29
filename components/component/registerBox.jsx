"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useCallback, useState } from "react";
import { post } from "@/api/api";

export default function RegisterBox() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const postData = useCallback(async () => {
    try {
      const res = await post(`users/login/`, {
        username: username,
        email: email,
        password: password,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Welcome to SuperKick Store
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 ">
            Create a new account
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
              onChange={(e) => setEmail(e.target.value)}
            />
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <Button className="w-full rounded-none" onClick={(e) => {
                postData(), e.preventDefault();
              }}>
              Sign up
            </Button>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
              Already have an account?
              <Link
                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                href="userlogin"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
