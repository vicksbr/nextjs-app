import React from "react"
import { useRouter } from "next/router"

import CategoryForm from "components/display/categoryForm"
import { getCategoriesItemById } from "store/selectors";

import useUser from "../../lib/useUser";

import type { CategoryData } from "types"

const CategoriesDynamic = () => {
    const router = useRouter()
    const { user } = useUser({ redirectTo: "/login" });

    if (!user?.isLoggedIn) return <>Loading</>

    const item = getCategoriesItemById(router.query.id as string) ?? { name: '', rank: 1 }

    return (
        <CategoryForm initialValues={item as CategoryData} />
    )
}

export default CategoriesDynamic