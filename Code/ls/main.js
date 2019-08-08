// import ls from './node_modules/genguxuanyin-localstorage/main.js';
import ls from 'genguxuanyin-localstorage';
var LS = new ls('LS__');
LS.set('a', 'xiaoming', function () {
    console.log(arguments);
});
LS.set('b', 'xiaobai', function () {
    console.log(arguments);
});
LS.get('a', function () {
    console.log(arguments)
});
LS.remove('a', function () {
    console.log(arguments)
});