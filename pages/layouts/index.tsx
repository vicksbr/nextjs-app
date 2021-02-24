import React from "react";
import { useRouter } from "next/router";

import { Empty } from "components/display";
import LayoutForm from "components/display/layoutForm"

import useUser from "../../lib/useUser";

const LayoutPage: React.FC = () => {
  const { user } = useUser({ redirectTo: "/login" });
  const router = useRouter()


  if (!user?.isLoggedIn)
    return <>Loading</>

  const { create } = router.query

  return (
    <>
      {create ? <LayoutForm /> : <Empty />}
    </>
  )
}

export default LayoutPage;
