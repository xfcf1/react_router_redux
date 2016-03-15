import AppDispatcher from 'control';

class LoginAction {
    static login(userInfo){
        AppDispatcher.dispatch({
            actionType: 'LOGIN',
            userInfo: userInfo
        })
    }
}

export default LoginAction;