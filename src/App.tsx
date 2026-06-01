import {createTheme, MantineProvider} from "@mantine/core";
import {createBrowserRouter, RouterProvider} from "react-router";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/dates/styles.css";
import "./app.scss";

import "mantine-datatable/styles.layer.css";

import "@fontsource/space-mono/400.css";
import "@fontsource/bricolage-grotesque/600.css";

import {Notifications} from "@mantine/notifications";
import {ModalsProvider} from "@mantine/modals";
import LoginLayout from "./layouts/login/login.layout.tsx";
import HomepageLayout from "./layouts/homepage/homepage.layout.tsx";
import NotificationWrapper from "./components/wrapper/notification.wrapper.tsx";
import ProtectedWrapper from "./components/wrapper/protected.wrapper.tsx";
import {ROLES} from "./enums/auth.ts";
import DetailsLayout from "./layouts/authenticated/details/details.layout.tsx";

export default function App() {
    const router = createBrowserRouter([
        {
            path: "/*",
            element: <HomepageLayout/>
        },
        {
            path: "/login",
            element: <LoginLayout/>
        },
        {
            path: "/details",
            element: (
                <ProtectedWrapper roles={[ROLES.Manager]}>
                    <DetailsLayout/>
                </ProtectedWrapper>
            )
        }
    ]);

    const theme = createTheme({
        fontFamily: "Space Mono",
    });

    return (
        <MantineProvider theme={theme} defaultColorScheme={"dark"}>
            <Notifications/>
            <ModalsProvider>
                <NotificationWrapper>
                    <RouterProvider router={router}/>
                </NotificationWrapper>
            </ModalsProvider>
        </MantineProvider>
    );
}
