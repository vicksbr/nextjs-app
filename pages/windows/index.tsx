import React from "react";
import { useRouter } from "next/router";

import { Empty } from "components/display";
import WindowForm from "components/display/windowForm";
import { itemsData } from "mockedData";

import useUser from "../../lib/useUser";

const WindowsPage: React.FC = () => {
  const { user } = useUser({ redirectTo: "/login" });
  const router = useRouter();

  if (!user?.isLoggedIn) return <>Loading</>;

  const { create } = router.query;

  return (
    <>
      {create ? (
        <WindowForm
          availableCategories={itemsData.categories}
          availableLayouts={itemsData.layouts}
          availableTags={itemsData.tags}
        />
      ) : (
        <Empty />
      )}
    </>
  );
};

export default WindowsPage;
