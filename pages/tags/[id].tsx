import React from "react"
import { useRouter } from "next/router"

import TagForm from "components/display/tagForm"

const tags = [
  {
    name: "Bitcoin",
    date: new Date(),
    id: "tag1",
    basePath: "/tags",
  },
  {
    name: "Blockchain",
    date: new Date(),
    id: "tag2",
    basePath: "/tags",
  },
]

const getItem = (id: any) => tags.find((item) => item.id === id)

const TagsDynamic = () => {

  const { query } = useRouter()
  const item = getItem(query.id) ?? { name: '' }

  return (
    <TagForm values={item} />
  )
}

export default TagsDynamic