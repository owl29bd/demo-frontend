"use server";

import connectDB from "@/lib/db";
import { User } from "@/models/User";
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";

const register = async (formData: FormData): Promise<void> => {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const password = formData.get("password");
  const role = formData.get("role");

  console.log({ firstName, lastName, email, password, role });

  if (!firstName || !lastName || !email || !password || !role) {
    throw new Error("All fields are required.");
  }

  await connectDB();

  //existing user
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists.");
  }

  const hashedPassword = await hash(password as string, 12);

  await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    role,
  });
  console.log("User created successfully.");
  redirect("/login");
};

export { register };
