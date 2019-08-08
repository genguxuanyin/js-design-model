import './node_modules/js-cookie/src/js.cookie.js'

Cookies.set('name', 'value');

var Cookies2 =  Cookies.noConflict();
Cookies2.set('name1','value');