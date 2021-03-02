import React from "react";
import LayoutForm from "components/display/layoutForm"
import { useRouter } from "next/router";
import useUser from "../../lib/useUser";
import { getLayoutsItemById } from "store/selectors";
import { LayoutData } from "types";


const LayoutsDynamic: React.FC = () => {
    const { user } = useUser({ redirectTo: "/login" });
    const router = useRouter()
    const item = getLayoutsItemById(router.query.id as string) ?? { name: '' }

    if (!user?.isLoggedIn) return <>Loading</>

    return (
        <LayoutForm initialValues={item as LayoutData} />
    )
}

export default LayoutsDynamic;
