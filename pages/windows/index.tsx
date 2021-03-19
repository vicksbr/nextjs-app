import React from "react";
import { useRouter } from "next/router";

import { Empty } from "components/display";
import WindowForm from "components/display/windowForm";

import useUser from "../../lib/useUser";
import { useAllData } from "../../lib/useAllData";

const WindowsPage: React.FC = () => {
  const { user } = useUser({ redirectTo: "/login" });
  const router = useRouter();

  const { data: { layouts, categories, tags } } = useAllData();

  if (!user?.isLoggedIn) return <>Loading</>;
  if (!router.query.create) return <Empty />;

  return (
    <WindowForm
      availableCategories={categories || []}
      availableLayouts={layouts || []}
      availableTags={tags || []}
      action="create"
    />
  );
};

export default WindowsPage;
