import {Container, Group, Title} from "@mantine/core";

export default function HomepageLayout() {
    return (
        <Container fluid p={0}>
            <Landing />
        </Container>
    )
}

function Landing() {
    return (
        <Group justify={'center'} align={'start'} style={{
            position: "relative",
            height: '100dvh',
            width: '100%',
            overflow: 'hidden'
        }}>
            <Group pt={60} style={{
                width: '50dvw',
            }}>
                <Title className={"heading-title"}>
                    We provide full scale M&E design for <span className={'heading-active'}>hotels</span>, <span className={'heading-active'}>apartments</span>, <span className={'heading-active'}>offices</span>, and <span className={'heading-active'}>factories</span> businesses.
                </Title>
            </Group>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100dvh',
                width: '100dvw',
                backgroundImage: `url(/banners/2.webp)`,
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                zIndex: -1,
            }}>
            </div>
        </Group>
    )
}