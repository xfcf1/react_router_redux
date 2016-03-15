import AppDispatcher from 'control';

var main = {
    logout: function(userInfo){
        AppDispatcher.dispatch({
            actionType: 'LOGOUT',
            userInfo: userInfo
        })
    }
}

export default main;