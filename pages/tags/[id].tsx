import React from "react"
import { useRouter } from "next/router"

import TagForm from "components/display/tagForm"
import { getItemById } from "../../src/components/Layout"


const TagsDynamic = () => {

  const router = useRouter()
  const item = getItemById('tags', router.query.id) ?? { name: '' }

  return (
    <TagForm initialValues={item} />
  )
}

export default TagsDynamic