import React from "react";
import { useRouter } from "next/router";

import useUser from "../../lib/useUser";
import CategoryForm from "components/display/categoryForm";
import { Empty } from "components/display";


const CategoriesPage: React.FC = () => {
  const router = useRouter();
  const { user } = useUser({ redirectTo: "/login" });

  if (!user?.isLoggedIn) return <>Loading</>;
  if (!router.query.create) return <Empty />

  return <CategoryForm action="create" />

};

export default CategoriesPage;
