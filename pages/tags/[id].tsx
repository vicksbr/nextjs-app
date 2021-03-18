import React from "react";
import { useRouter } from "next/router";

import TagForm from "components/display/tagForm";

import useUser from "../../lib/useUser";
import { useAllData } from "../../lib/useAllData";

import type { TagData } from "types";

const TagsDynamic = () => {
  const router = useRouter();
  const { user } = useUser({ redirectTo: "/login" });
  const { data: { tags } } = useAllData();

  if (!user?.isLoggedIn) return <>Loading</>;

  const item = tags && tags.find((tag: TagData) => tag.id === router.query.id);

  return <TagForm action='update' initialValues={item as TagData} />

};

export default TagsDynamic;
