import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

import WindowForm from "components/display/windowForm";

import { FullWindowData } from "types";

import useUser from "../../lib/useUser";
import { useAllData } from "../../lib/useAllData";

const WindowsDynamic: React.FC = () => {
  const router = useRouter();
  const { user } = useUser({ redirectTo: "/login" });

  const { data: { layouts, categories, tags }, } = useAllData();

  const itemId = router.query.id;
  const { data: item } = useSWR(`/api/curated/windows/${itemId}`);

  if (!user?.isLoggedIn || !item) return <>Loading</>;

  return (
    <WindowForm
      availableCategories={categories || []}
      availableLayouts={layouts || []}
      availableTags={tags || []}
      initialValues={item as FullWindowData}
      action="update"
    />
  );
};

export default WindowsDynamic;
