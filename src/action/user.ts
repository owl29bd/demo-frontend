"use server";

const register = async (formData: FormData) => {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const password = formData.get("password");
  const role = formData.get("role");

  console.log(firstName, lastName, email, password, role);
};

export { register };
