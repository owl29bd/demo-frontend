import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { register } from "@/action/user";

const Register = async () => {
  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white border border-[#121212] dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to Demo Site
      </h2>
      <h1 className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Please provide all necessary information to create an account.
      </h1>

      <form className="my-8" action={register}>
        <div className="flex flex-col md:flex-row items-start mb-4 gap-2">
          <div className="flex flex-col gap-2">
            <Label>First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="John"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label>Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>

        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="john.doe@email.com"
        />

        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="************"
        />

        {/* <Label htmlFor="password">Confirm Password</Label>
        <Input
          type="password"
          id="confirmpassword"
          name="confirmpassword"
          placeholder="************"
        /> */}

        <Label htmlFor="role">Account Type</Label>
        <Select name="role">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select an account type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="super-admin">Super Admin</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="moderator">Moderator</SelectItem>
            <SelectItem value="advertiser">Advertiser</SelectItem>
            <SelectItem value="visitor">Visitor</SelectItem>
          </SelectContent>
        </Select>

        <Button className="w-full rounded-md h-10 font-medium mt-5">
          Sign up &rarr;
        </Button>

        <p className="pt-6 text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Already have an account ?{" "}
          <Link className="underline text-blue-600" href={"/login"}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
