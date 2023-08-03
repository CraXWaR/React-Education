import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export const action = async ({ req }) => {
  const params = new URL(req.url).searchParams;
  const mode = params.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Wrong Url" }, { status: 422 });
  }

  const data = await req.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const res = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (res.status === 422 || res.status === 401) {
    return req;
  }

  if (!res.ok) {
    throw json({ message: "Could not auth user" }, { status: 500 });
  }

  return redirect("/");
};
