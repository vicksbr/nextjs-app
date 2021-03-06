import React from "react";
import { useRouter } from "next/router";

import TagForm from "components/display/tagForm";
import { Empty } from "components/display";
import SubmitBar from "components/display/submitBar";

import useUser from "../../lib/useUser";

const TagsPage: React.FC = () => {
  const { user } = useUser({ redirectTo: "/login" });
  const router = useRouter();

  if (!user?.isLoggedIn) return <>Loading</>;

  const { create } = router.query;

  return (
    <>
      {create ? (
        <>
          <TagForm />
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

export default TagsPage;
