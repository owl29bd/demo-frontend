import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => (
  <div className="h-full flex align-middle">
    <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212] dark:bg-black my-auto">
      <h1 className="text-center font-bold text-xl">Welcome Back!</h1>
      <p className="text-center font-bold pt-4">Login</p>
      <form className="my-8 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john.doe@email.com"
            className="rounded-md border-2 p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="************"
            className="rounded-md border-2 p-2"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md h-10 font-medium mt-5 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 text-white"
        >
          Login &rarr;
        </button>

        <p className="text-right text-neutral-600 text-sm max-w-sm mt-4 dark:text-neutral-300">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="underline text-blue-600">
            Register
          </Link>
        </p>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col md:flex-row items-start mb-4 gap-2 justify-around w-full">
          <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-fit
             text-black h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 
             dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] border-2 rounded-full text-center"
          >
            <FaGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Github
            </span>
          </button>
          <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-fit
             text-black h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 
             dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] border-2 rounded-full text-center"
          >
            <FaGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default Login;
