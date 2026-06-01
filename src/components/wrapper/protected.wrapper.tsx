import {DatabaseTables} from "../../enums/tables.ts";
import {SESSION_KEYS} from "../../enums/session.ts";
import {type JSX} from "react";

interface ProtectedWrapperProps {
    children: JSX.Element;
    roles: string[]
}

export default function ProtectedWrapper({children, roles}: ProtectedWrapperProps) {

    const session = sessionStorage.getItem(DatabaseTables.Profiles)
    if (!session) {
        sessionStorage.setItem(SESSION_KEYS.POP_MESSAGE, "Unauthenticated access, please log-in to continue!")
        window.location.href = "/login"
        return
    }

    const sessionData = JSON.parse(session)
    const role = sessionData.role

    if (!roles.includes(role)) {
        sessionStorage.setItem(SESSION_KEYS.POP_MESSAGE, "Insufficient permission to access this resource!")
        window.location.href = "/login"
        return
    }

    return (
        <>{children}</>
    )
}