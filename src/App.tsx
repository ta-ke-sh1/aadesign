import {createTheme, MantineProvider} from "@mantine/core";
import {createBrowserRouter, RouterProvider} from "react-router";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/dates/styles.css";
import "./styles/app.scss";
import "./styles/headings.scss"
import "./styles/menu.css"

import "mantine-datatable/styles.layer.css";

import "@fontsource/google-sans-flex/400.css";
import "@fontsource/bricolage-grotesque/200.css";

import {Notifications} from "@mantine/notifications";
import {ModalsProvider} from "@mantine/modals";
import LoginLayout from "./layouts/login/login.layout.tsx";
import HomepageLayout from "./layouts/homepage/homepage.layout.tsx";
import NotificationWrapper from "./components/wrapper/notification.wrapper.tsx";
import ProtectedWrapper from "./components/wrapper/protected.wrapper.tsx";
import {ROLES} from "./enums/auth.ts";
import DetailsLayout from "./layouts/authenticated/details/details.layout.tsx";
import StaggeredMenu from "./components/menu/side/side.tsx";

const menuItems = [
    { label: 'TRANG CHỦ', ariaLabel: 'Go to home page', link: '/' },
    { label: 'GIỚI THIỆU', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'DỊCH VỤ', ariaLabel: 'View our services', link: '/services' },
    { label: 'LIÊN HỆ', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
];

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
        fontFamily: "Google Sans Flex",
    });

    return (
        <MantineProvider theme={theme} defaultColorScheme={"dark"}>
            <StaggeredMenu
                position="right"
                items={menuItems}
                socialItems={socialItems}
                displaySocials
                displayItemNumbering={true}
                menuButtonColor="#ffffff"
                openMenuButtonColor="#fff"
                changeMenuColorOnOpen={true}
                colors={['#B497CF', '#5227FF']}
                logoUrl="/path-to-your-logo.svg"
                accentColor="#5227FF"
                onMenuOpen={() => console.log('Menu opened')}
                onMenuClose={() => console.log('Menu closed')}
            />
            <Notifications/>
            <ModalsProvider>
                <NotificationWrapper>

                    <RouterProvider router={router}/>
                </NotificationWrapper>
            </ModalsProvider>
        </MantineProvider>
    );
}
