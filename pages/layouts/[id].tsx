import React from "react";
import LayoutForm from "components/display/layoutForm"
import { useRouter } from "next/router";

import useUser from "../../lib/useUser";
import { getItemById } from "../../src/components/Layout"

const LayoutsDynamic: React.FC = () => {
    const { user } = useUser({ redirectTo: "/login" });

    if (!user?.isLoggedIn) return <>Loading</>

    const { query } = useRouter()
    const item = getItemById('layouts', query.id)

    console.log(item)

    return (
        <LayoutForm initialValues={item} />
    )
}

export default LayoutsDynamic;
