import React, { useState } from "react";
import { useDispatch } from "react-redux";

import LoginForm from "components/Login";
import { updateItemsData } from "store/actions";
import { itemsData } from "mockedData";

import useUser from "../lib/useUser";
import fetchJson from "../lib/fetchJson";

const Login = () => {
  // here we just check if user is already logged in and redirect to profile
  const { mutateUser } = useUser({
    redirectTo: "/",
    redirectIfFound: true,
  });
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };

    try {
      await mutateUser(
        fetchJson("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
      );
      dispatch(updateItemsData(itemsData));
    } catch (error) {
      console.error("An unexpected error happened:", error);
      setErrorMsg(error.data.message);
    }
  }

  return <LoginForm isLogin errorMessage={errorMsg} onSubmit={handleSubmit} />;
};

export default Login;
