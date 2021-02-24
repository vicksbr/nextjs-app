import React from "react";

import useUser from "../lib/useUser";

const WindowsPage: React.FC = () => {
  const { user } = useUser({ redirectTo: "/login" });

  if (!user?.isLoggedIn)
    return <>Loading</>

  return (
    <p>Window Page</p>
  )
}

export default WindowsPage;
