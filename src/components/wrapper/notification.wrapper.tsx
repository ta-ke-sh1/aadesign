import {SESSION_KEYS} from "../../enums/session.ts";
import NotificationService from "../../services/utils/notification.service.ts";

export default function NotificationWrapper({children}: any) {

    const notification = sessionStorage.getItem(SESSION_KEYS.POP_MESSAGE)

    if (notification) {
        NotificationService.information("System Message", notification)
        sessionStorage.removeItem(SESSION_KEYS.POP_MESSAGE)
    }

    return (
        <>{children}</>
    )
}