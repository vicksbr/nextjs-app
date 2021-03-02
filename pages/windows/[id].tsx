import { useRouter } from "next/router";
import React from "react";

import useUser from "../../lib/useUser";
import { getWindowsItemById } from "store/selectors";


const WindowsPage: React.FC = () => {
  const { user } = useUser({ redirectTo: "/login" });
  const router = useRouter()
  const item = getWindowsItemById(router.query.id as string)

  if (!user?.isLoggedIn) return <>Loading</>

  return (
    <>
      <p>Window Page {router.query.id}</p>
      <pre>{JSON.stringify(item, null, 2)}</pre>
    </>
  )
}

export default WindowsPage;
