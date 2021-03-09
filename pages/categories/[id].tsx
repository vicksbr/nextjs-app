import React from "react";
import { useRouter } from "next/router";

import CategoryForm from "components/display/categoryForm";
import type { CategoryData } from "types";
import SubmitBar from "components/display/submitBar";

import useUser from "../../lib/useUser";
import { useAllData } from "../../lib/useAllData";

const CategoriesDynamic = () => {
  const router = useRouter();
  const { user } = useUser({ redirectTo: "/login" });

  const {
    data: { categories },
  } = useAllData();

  if (!user?.isLoggedIn) return <>Loading</>;

  const itemId = router.query.id;
  const item = categories.find(
    (category: CategoryData) => category.id === itemId
  ) ?? { name: "", rank: 1 };

  return (
    <>
      <CategoryForm initialValues={item as CategoryData} />
      <SubmitBar
        itemName={item.name}
        handleDelete={() => console.log("delete")}
        handleSubmit={() => console.log("submit")}
      />
    </>
  );
};

export default CategoriesDynamic;
