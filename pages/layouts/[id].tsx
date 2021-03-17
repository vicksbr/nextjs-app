import React from "react";
import { useRouter } from "next/router";

import useUser from "../../lib/useUser";
import LayoutForm from "components/display/layoutForm";
import { useAllData } from "../../lib/useAllData";

import type { LayoutData } from "types";

const LayoutsDynamic: React.FC = () => {
  const router = useRouter();
  const { user } = useUser({ redirectTo: "/login" });
  const { data: { layouts } } = useAllData();

  if (!user?.isLoggedIn) return <>Loading</>;

  const item = layouts && layouts.find((layout: LayoutData) => layout.id === router.query.id);

  return (
    <LayoutForm action="update" initialValues={item as LayoutData} />
  );
};

export default LayoutsDynamic;
