import AppDispatcher from 'control';
import actions from 'actions/content';
import cookie from 'react-cookie';

var MainStore = {

    logout() {
        cookie.remove('username', { path: '/' });
    }
}

export default MainStore;