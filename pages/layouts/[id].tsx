import React from "react";
import LayoutForm from "components/display/layoutForm"
import { useRouter } from "next/router";

import useUser from "../../lib/useUser";
import { getItemById } from "../../src/components/Layout"

const LayoutsDynamic: React.FC = () => {
    const { user } = useUser({ redirectTo: "/login" });
    const router = useRouter()

    if (!user?.isLoggedIn) return <>Loading</>
    const item = getItemById('layouts', router.query.id) ?? { name: '' }

    return (
        <LayoutForm initialValues={item} />
    )
}

export default LayoutsDynamic;
