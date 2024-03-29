import React from "react";
import { useRouter } from "next/router";

import TagForm from "components/display/tagForm";
import { Empty } from "components/display";

import useUser from "../../lib/useUser";

const TagsPage: React.FC = () => {
  const { user } = useUser({ redirectTo: "/login" });
  const router = useRouter();

  if (!user?.isLoggedIn) return <>Loading</>;
  if (!router.query.create) return <Empty />

  return <TagForm action='create' />
};

export default TagsPage;
