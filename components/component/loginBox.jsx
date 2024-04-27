import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LoginBox() {
  return (
    (<div
      className="flex min-h-screen items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2
            className="mt-6 text-center text-3xl font-bold tracking-tight">
            Welcome to SuperKick Store
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 ">Sign in to your account</p>
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
              type="text" />
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
              type="password" />
          </div>
          <div>
            <Button className="w-full rounded-none" type="submit">
              Sign in
            </Button>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
              Or 
              <Link
                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                href="register">
                sign up for a new account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>)
  );
}