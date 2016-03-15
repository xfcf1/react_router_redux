import {Dispatcher} from 'flux';
import loginStore from 'stores/login';
import mainStore from 'stores/content';
import page3Store from 'stores/page3';

const dispatcher = new Dispatcher();
dispatcher.register(function(action){
    switch (action.actionType){
        case 'LOGIN':
            loginStore.updateUserInfo(action.userInfo);
            break;
        case 'LOGOUT':
            mainStore.logout(action.userInfo);
            break;
        case 'ADD_NEW_ITEM':
            page3Store.addNewItemHandler(action.text);
            page3Store.emitChange();
            break;
        case 'REMOVE_ITEM':
            page3Store.removeItem(action.index);
            page3Store.emitChange();
            break;
        default :
    }
})
export default dispatcher;