import DatabaseService from "../database/database.service.ts";
import {DatabaseTables} from "../../enums/tables.ts";

export default class AuthService {
    private static instance: AuthService;

    private constructor() {}

    public static getInstance(): AuthService {
        if (!AuthService.instance) {
            AuthService.instance = new AuthService();
        }
        return AuthService.instance;
    }

    public async loginEmailAndPassword(username: string, password: string) {
        const database = DatabaseService.getInstance().getDatabase()
        const authResponse = await database.auth.signInWithPassword({
            email: username,
            password: password,
        })

        if(authResponse.error) {
            throw authResponse.error;
        }

        const userData = await database.from(DatabaseTables.Profiles).select().eq('uuid', authResponse.data.user.id).single()

        if(userData.error) {
            throw userData.error;
        }

        if(!userData.data) {
            throw "Invalid profile data!"
        }

        sessionStorage.setItem(DatabaseTables.Profiles, JSON.stringify(userData.data))
    }
}