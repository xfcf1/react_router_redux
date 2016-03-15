import {EventEmitter} from 'events';
import assign from 'object-assign';

var page3Store = assign({}, EventEmitter.prototype, {
    items : [],
    text: '新的一粒',

    getAll(){
        return this.items;
    },
    getText(){
        return this.text;
    },
    updateText(text){
        this.text = text;
    },
    addNewItemHandler(text){
        this.items.push(text);
    },

    removeItem(index){
        this.items.splice(index,1);
    },

    emitChange: function () {
        this.emit('change');
    },

    addChangeListener(callback) {
        this.on('change', callback);
    },

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }
})

export default page3Store;