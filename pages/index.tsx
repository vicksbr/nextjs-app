import React from "react";
import { Empty } from "components/display/empty"
import useUser from "../lib/useUser";


const App = () => {

  const { user } = useUser({ redirectTo: "/login" });

  if (!user?.isLoggedIn)
    return <>Loading</>

  return (
    <Empty />
  );
};

export default App;
