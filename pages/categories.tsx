import React from "react";
import { useRouter } from "next/router";

import CategoryForm from "components/display/categoryForm"
import { Empty } from "components/display/empty"

import useUser from "../lib/useUser";

const categories = [
  {
    name: "Business",
    date: new Date(),
    id: "category1",
    rank: 3,
    basePath: "/categories",
  },
  {
    name: "Finances",
    date: new Date(),
    id: "category2",
    rank: 4,
    basePath: "/categories",
  },
]

const getItem = (id: any) => categories.find((item) => item.id === id)

const CategoriesPage: React.FC = () => {
  const { user } = useUser({ redirectTo: "/login" });
  const router = useRouter()

  if (!user?.isLoggedIn || !router.isReady)
    return <>Loading</>

  const { itemid } = router.query

  return (
    <>
      {itemid ? <CategoryForm formData={getItem(itemid)} /> : <Empty />}
    </>
  )
}


export default CategoriesPage;