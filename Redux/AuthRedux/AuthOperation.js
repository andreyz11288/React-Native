import { exp } from "react-native-reanimated";
import db from "../../FireBase/config";

const authSingIn = () => async (dispatch, getState) => { }
const authSingUp = ({ login, email, password }) => async (dispatch, getState) => {

    try {
        console.log(login, email, password);
        const user = await db.auth().createUserWithEmailAndPassword(email, password);
        // console.log('user', user);
    } catch (error) {
        console.log('error', error);
        console.log(error.messaga);
    }
}
const authSingout = () => async (dispatch, getState) => { }

export {authSingUp, authSingIn, authSingout}