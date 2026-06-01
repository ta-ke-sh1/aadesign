import {Button, Group} from "@mantine/core";

export default function NavigationBar() {
    return (
        <Group gap={10} justify={'center'} style={{
            position: 'fixed',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 10,
            zIndex: 100
        }}>
            <Button color={'red'} radius={5}>ABOUT</Button>
            <Button color={'red'} radius={5}>SERVICES</Button>
            <Button color={'red'} radius={5}>PROJECTS</Button>
            <Button color={'red'} radius={5}>CONTACTS</Button>
        </Group>
    )
}