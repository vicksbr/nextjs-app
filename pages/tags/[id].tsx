import React from "react"
import { useRouter } from "next/router"

import { getTagItemById } from "store/selectors";
import TagForm from "components/display/tagForm"

import useUser from "../../lib/useUser";

import type { TagData } from "types"


const TagsDynamic = () => {
  const router = useRouter()
  const { user } = useUser({ redirectTo: "/login" });

  const item = getTagItemById(router.query.id as string) ?? { name: '' }
  
  if (!user?.isLoggedIn) return <>Loading</>

  return (
    <TagForm initialValues={item as TagData} />
  )
}

export default TagsDynamic