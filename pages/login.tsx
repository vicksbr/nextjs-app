import React, { useState } from "react";
import LoginForm from "components/Login";
import useUser from "../lib/useUser";
import fetchJson from "../lib/fetchJson";

const Login = () => {
  const { user, mutateUser } = useUser({
    redirectTo: "/",
    redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    const body = {
      user: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };

    try {
      await mutateUser(
        fetchJson("/api/auth", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
      );
    } catch (error) {
      console.error("An unexpected error happened:", error);
      setErrorMsg(error.message);
    }
  }

  if (!user || user?.isLoggedIn) return <>Loading...</>;

  return <LoginForm isLogin errorMessage={errorMsg} onSubmit={handleSubmit} />;
};

export default Login;
