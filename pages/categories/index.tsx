import React from "react";
import { useRouter } from "next/router";

import CategoryForm from "components/display/categoryForm";
import { Empty } from "components/display";
import SubmitBar from "components/display/submitBar";

import useUser from "../../lib/useUser";

const CategoriesPage: React.FC = () => {
  const { user } = useUser({ redirectTo: "/login" });
  const router = useRouter();

  if (!user?.isLoggedIn) return <>Loading</>;

  const { create } = router.query;

  return (
    <>
      {create ? (
        <>
          <CategoryForm />
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

export default CategoriesPage;
