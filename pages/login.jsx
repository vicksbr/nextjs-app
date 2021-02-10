import React, { useState } from "react";
import useUser from "../lib/useUser";
import LoginForm from "../src/components/Login";
import fetchJson from "../lib/fetchJson";
import BackgroundLogin from "icons/backgroundLogin";

const Login = () => {
  // here we just check if user is already logged in and redirect to profile
  const { mutateUser } = useUser({
    redirectTo: "/",
    redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value
    };

    try {
      await mutateUser(
        fetchJson("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }),
      );
    } catch (error) {
      console.error("An unexpected error happened:", error);
      setErrorMsg(error.data.message);
    }
  }

  return (
          <LoginForm isLogin errorMessage={errorMsg} onSubmit={handleSubmit} />

  );
};

export default Login;
