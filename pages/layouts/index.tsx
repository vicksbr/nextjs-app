import React from "react";
import { useRouter } from "next/router";

import { Empty } from "components/display";
import LayoutForm from "components/display/layoutForm";
import SubmitBar from "components/display/submitBar";

import useUser from "../../lib/useUser";

const LayoutPage: React.FC = () => {
  const { user } = useUser({ redirectTo: "/login" });
  const router = useRouter();

  if (!user?.isLoggedIn) return <>Loading</>;

  const { create } = router.query;

  return (
    <>
      {create ? (
        <>
          <LayoutForm />
          <SubmitBar
            itemName={""}
            handleDelete={() => console.log("delete")}
            handleSubmit={() => console.log("submit")}
          />
        </>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default LayoutPage;
