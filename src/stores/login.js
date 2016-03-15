import cookie from 'react-cookie';

var LoginStore = {
    userInfo : {
        username : 'test A',
        password : 'password'
    },

    getAll(){
        return this.userInfo;
    },
    updateUsername(username){
        this.userInfo.username = username;
    },
    updateUserInfo(info){
        this.login(info);
    },

    login(info) {
        cookie.save('username', info.username, { path: '/' });
        window.location.hash = '/';
    }
}

export default LoginStore;