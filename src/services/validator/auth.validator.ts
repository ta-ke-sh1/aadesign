
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export class AuthValidator {
    static email(email: string) {
        if (email.length === 0) {
            return "Please enter your email address";
        }

        if (!EMAIL_REGEX.test(email)) {
            return "Invalid email!"
        }

        return null;
    }

    static password(password: string) {
        if (password.length === 0) {
            return "Please enter your password";
        }

        return null;
    }
}