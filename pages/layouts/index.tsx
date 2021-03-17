import React from "react";
import { useRouter } from "next/router";

import useUser from "../../lib/useUser";
import LayoutForm from "components/display/layoutForm";
import { Empty } from "components/display";


const LayoutPage: React.FC = () => {
  const router = useRouter();
  const { user } = useUser({ redirectTo: "/login" });

  if (!user?.isLoggedIn) return <>Loading</>;
  if (!router.query.create) return <Empty />

  return <LayoutForm action="create" />
};

export default LayoutPage;
