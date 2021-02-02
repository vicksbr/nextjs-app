import React from "react";
import useUser from "../lib/useUser";
import Layout from "../components/Layout";
import Button from "@material-ui/core/Button";

const App = () => {
  const { user } = useUser({ redirectTo: "/login" });
  
  if (!user?.isLoggedIn) {
    return <Layout>loading...</Layout>;
  }
  return (
    <Layout>
      <h1>Bem vindo {user.name}</h1>
      <Button variant="contained" href="#" onClick={() => alert("SOON")}>
          Botao
      </Button>
    </Layout>
  );
};



export default App;
