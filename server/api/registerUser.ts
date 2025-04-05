import {PlayFab} from "playfab-sdk";
import {PlayFabClient} from "playfab-sdk";

export default defineEventHandler((event) => {
    registerUser()
    return
})


const config = useRuntimeConfig();

const registerRequest = {
    TitleId: config.playFab_titleId,
    DisplayName: "ZeroOne",
    Email: 'test@test.com',
    Password: 'djaksdjaskldj22',
    RequireBothUsernameAndEmail: true,
    Username: 'ZeroOne'
}

function registerUser() {
    PlayFab.settings.titleId = config.playFab_titleId;
    PlayFabClient.RegisterPlayFabUser(registerRequest, LoginCall)
}

function LoginCall() {
    console.log("Registration successful");
}