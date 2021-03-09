import React from "react";
import { useRouter } from "next/router";

import LayoutForm from "components/display/layoutForm";
import { LayoutData } from "types";
import SubmitBar from "components/display/submitBar";

import useUser from "../../lib/useUser";
import { useAllData } from "../../lib/useAllData";

const LayoutsDynamic: React.FC = () => {
  const { user } = useUser({ redirectTo: "/login" });
  const router = useRouter();

  const {
    data: { layouts },
  } = useAllData();

  if (!user?.isLoggedIn) return <>Loading</>;

  const itemId = router.query.id;
  const item = layouts.find((layout: LayoutData) => layout.id === itemId) ?? {
    name: "",
  };

  return (
    <>
      <LayoutForm initialValues={item as LayoutData} />
      <SubmitBar
        itemName={item.name}
        handleDelete={() => console.log("delete")}
        handleSubmit={() => console.log("submit")}
      />
    </>
  );
};

export default LayoutsDynamic;
