import {PlayFab} from "playfab-sdk";
import {PlayFabClient} from "playfab-sdk";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    registerRequest.DisplayName = body.DisplayName
    registerRequest.Email = body.Email
    registerRequest.Password = body.Password
    registerRequest.Username = body.Username
    registerUserPost()
    return 200;
})


const config = useRuntimeConfig();


const registerRequest = {
    TitleId: config.playFab_titleId,
    DisplayName: '',
    Email: '',
    Password: '',
    RequireBothUsernameAndEmail: true,
    Username: ''
}


function registerUserPost() {
    if (registerRequest.Username, registerRequest.Email, registerRequest.Password, registerRequest.DisplayName == '') {
        console.log("Missing values for registration!")
    }else {
        try {
            PlayFab.settings.titleId = config.playFab_titleId;
            PlayFabClient.RegisterPlayFabUser(registerRequest, LoginCall)
        } catch (e) {
            console.log(e)
        }
    }
}

function LoginCall() {
    console.log("Registration successful");
}