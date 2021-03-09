import React from "react";
import { useRouter } from "next/router";

import TagForm from "components/display/tagForm";
import SubmitBar from "components/display/submitBar";
import type { TagData } from "types";

import { useAllData } from "../../lib/useAllData";
import useUser from "../../lib/useUser";

const TagsDynamic = () => {
  const router = useRouter();
  const { user } = useUser({ redirectTo: "/login" });

  const {
    data: { tags },
  } = useAllData();

  if (!user?.isLoggedIn) return <>Loading</>;

  const itemId = router.query.id;
  const item = tags.find((tag: TagData) => tag.id === itemId) ?? { name: "" };

  return (
    <>
      <TagForm initialValues={item as TagData} />
      <SubmitBar
        itemName={item.name}
        handleDelete={() => console.log("delete")}
        handleSubmit={() => console.log("submit")}
      />
    </>
  );
};

export default TagsDynamic;
