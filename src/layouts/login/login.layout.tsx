import {TextInput, PasswordInput, Button, Stack, Text, Group, Divider, LoadingOverlay} from "@mantine/core";
import {useForm} from "@mantine/form";
import {IconPassword, IconUser} from "@tabler/icons-react";
import AuthService from "../../services/auth/auth.service.ts";
import {AuthValidator} from "../../services/validator/auth.validator.ts";
import NotificationService from "../../services/utils/notification.service.ts";
import {useState} from "react";


interface LoginFormTypes {
    email: string
    password: string
}

export default function LoginLayout() {

    const [loading, setLoading] = useState(false);

    const loginForm = useForm<LoginFormTypes>({
        initialValues: {
            email: "",
            password: "",
        },
        validate: {
            email: AuthValidator.email,
            password: AuthValidator.password
        }
    })

    async function handleLogin() {
        setLoading(true);
        try {
            const authService = AuthService.getInstance()
            const { email, password } = loginForm.getValues()
            await authService.loginEmailAndPassword(
                email, password
            )

            NotificationService.success("Login Success", "Login success!")
        } catch (e: any) {
            NotificationService.error("Login Error", e.toString())
        }
        setLoading(false);
    }

    return (
        <form onSubmit={loginForm.onSubmit(handleLogin)}>
            <LoadingOverlay visible={loading} />
            <Stack gap={0} style={{
                width: "40dvw",
                maxWidth: "400px",
                minWidth: "200px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}>
                <Group justify={'center'}>
                    <Text style={{
                        fontFamily: "Bricolage Grotesque",
                        fontSize: "42px",
                    }}>
                        Welcome back!
                    </Text>
                </Group>
                <Text mb={15} style={{
                    fontSize: '14px'
                }}>
                    Enter your credentials to access your account!
                </Text>
                <Divider mb={25} />
                <TextInput mb={15} leftSection={<IconUser />} placeholder={'Enter your email'} bdrs={'xs'} {...loginForm.getInputProps('email')} key={loginForm.key('email')} />
                <PasswordInput mb={15} leftSection={<IconPassword />} placeholder={'Enter your password'} {...loginForm.getInputProps('password')} key={loginForm.key('password')} />
                <Button mb={15} type={'submit'} color={'orange'}>
                    Login
                </Button>
                <Button mb={15} variant={'outline'} color={'orange'}>
                    Register
                </Button>
                <Group mb={15} justify={'center'}>
                    <Text style={{
                        fontSize: '13px',
                        color: 'orange',
                        cursor: 'pointer'
                    }}>
                        Forgot password?
                    </Text>
                </Group>
            </Stack>
        </form>
    )
}