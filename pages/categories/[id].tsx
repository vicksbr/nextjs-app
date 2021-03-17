import React from "react";
import { useRouter } from "next/router";

import CategoryForm from "components/display/categoryForm";
import useUser from "../../lib/useUser";
import { useAllData } from "../../lib/useAllData";

import type { CategoryData } from "types";

const CategoriesDynamic: React.FC = () => {
  const router = useRouter();
  const { user } = useUser({ redirectTo: "/login" });
  const { data: { categories } } = useAllData();

  if (!user?.isLoggedIn) return <>Loading</>;

  const item = categories && categories.find((category: CategoryData) => category.id === router.query.id);

  return <CategoryForm action="update" initialValues={item as CategoryData} />

};

export default CategoriesDynamic;
