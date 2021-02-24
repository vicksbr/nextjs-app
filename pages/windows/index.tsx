import React from "react";

import { Empty } from "components/display"

import useUser from "../../lib/useUser";

const WindowsPage: React.FC = () => {
  const { user } = useUser({ redirectTo: "/login" });

  if (!user?.isLoggedIn)
    return <>Loading</>

  return (
    <Empty />
  )
}

export default WindowsPage;
