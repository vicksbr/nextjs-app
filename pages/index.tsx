import React from "react";
import useUser from "../lib/useUser";
import Layout from "../src/components/Layout";

const App = () => {
  const { user } = useUser({ redirectTo: "/login" });

  if (!user?.isLoggedIn) {
    return <Layout>loading...</Layout>;
  }
  return (
    <Layout>
      <h1>
        Bem vindo {user.name} | id:{user.id}
      </h1>
      <p>Aqui ficara toda sua aplicação</p>
    </Layout>
  );
};

export default App;
