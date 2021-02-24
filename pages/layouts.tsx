import React from "react";
import LayoutForm from "components/display/layoutForm"

import useUser from "../lib/useUser";

const LayoutsPage: React.FC = () => {
  const { user } = useUser({ redirectTo: "/login" });

  if (!user?.isLoggedIn)
    return <>Loading</>

  return (
    <LayoutForm />
  )
}



export default LayoutsPage;
