import AppDispatcher from  'control';

var page3Action = {
    addNew(text, fn){
        AppDispatcher.dispatch({
            actionType: 'ADD_NEW_ITEM',
            text: text
        })
    },
    removeItem(index){
        AppDispatcher.dispatch({
            actionType: 'REMOVE_ITEM',
            index: index
        })
    }
}
export default page3Action;