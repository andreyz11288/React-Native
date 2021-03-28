import { exp } from "react-native-reanimated";
import db from "../../FireBase/config";
import {AuthSlice} from './AuthReducer'

const authSingIn = ({email, password}) => async (dispatch, getState) => {
    try {
        console.log(email, password);
        const user = await db.auth().signInWithEmailAndPassword(email, password);
        // console.log('user', user);
    } catch (error) {
        console.log('error', error);
        console.log(error.messaga);
    }
 }
const authSingUp = ({ login, email, password }) => async (dispatch, getState) => {

    try {
        console.log(login, email, password);
        await db.auth().createUserWithEmailAndPassword(email, password);
        const user = await db.auth().currentUser
        await user.updateProfile({
            displayName: login
        })
        // console.log('user', user);

        const upDateUser = await db.auth().currentUser
        dispatch(AuthSlice.actions.upDateUserProfile({userId: upDateUser.uid, nickname: upDateUser.displayName}))
    } catch (error) {
        console.log('error', error);
        console.log(error.messaga);
    }
}
const authSingOut = () => async (dispatch, getState) => { 
    await db.auth().signOut()
    dispatch(AuthSlice.actions.authOutUser({userId: null,
        nickname: null,
        stateChange: false}))
}

const authStateChangeUser = ()=> async (dispatch, getState)=>{
    db.auth().onAuthStateChanged((user)=>{
        if (user) {
            dispatch(AuthSlice.actions.upDateUserProfile({userId: user.uid, nickname: user.displayName}))
            dispatch(AuthSlice.actions.authStateChange({stateChange: true}))
        }
    })
}

export {authSingUp, authSingIn, authSingOut, authStateChangeUser}