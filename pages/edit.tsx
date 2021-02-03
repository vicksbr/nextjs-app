import React from "react";
import useUser from "../lib/useUser";
import Layout from "../src/components/Layout";

const Edit = () => {
  const { user } = useUser({ redirectTo: "/login" });

  if (!user?.isLoggedIn) {
    return <>loading...</>;
  }
  return (
    <Layout>
      <p>Edit Window</p>
    </Layout>
  );
};

export default Edit;
