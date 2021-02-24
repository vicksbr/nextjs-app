import { useRouter } from "next/router";
import React from "react";

import useUser from "../../lib/useUser";
import { getItemById } from "../../src/components/Layout"

const WindowsPage: React.FC = () => {
  const { user } = useUser({ redirectTo: "/login" });
  const { query } = useRouter()

  if (!user?.isLoggedIn) return <>Loading</>

  const item = getItemById('windows', query.id)

  return (
    <>
      <p>Window Page {query.id}</p>
      <pre>{JSON.stringify(item, null, 2)}</pre>
    </>
  )
}

export default WindowsPage;
