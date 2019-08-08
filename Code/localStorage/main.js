/**
 * @description: 
 * @param {String} 
 * @param {String} 
 * @return: Object
 */
var BaseLocalStorage = function(preId,timeSign){
    this.preId = preId;
    this.timeSign = timeSign || '|-|';
}
Object.assign(BaseLocalStorage.prototype,{
    status:{
        SUCCESS:0,
        FAILURE:1,
        OVERFLOW:2,
        TIMEOUT:3
    },
    storage: localStorage || window.localStorage,
    getKey(key){
        return this.preId + key;
    },
    set(key,value,callback,time){
        var status = this.status.SUCCESS,
            key = this.getKey(key);
        try {
            time = new Date(time).getTime() || time.getTime();
        } catch (error) {
            time = new Date().getTime() + 1000 * 60 * 60 * 24 * 31;
        }
        try {
            this.storage.setItem(key,time + this.timeSign + value);
        } catch (error) {
            status = this.status.OVERFLOW;
        }
        callback && callback(this,status,key,value);
    },
    get(key,callback){
        var status = this.status.SUCCESS,
            key = this.getKey(key),
            value = null,
            timeSignLen = this.timeSign.length,
            me = this,
            index,
            time,
            result;
        try {
            value = me.storage.getItem(key);
        } catch (error) {
            result = {
                status:me.status.FAILURE,
                value
            }
        }
        if(value){
            index = value.indexOf(this.timeSign);
            time = +value.slice(0,index);
            if(new Date(time).getTime() > new Date().getTime() || time ==0){
                value = value.slice(index + timeSignLen);
            } else {
                value = null,
                status = this.status.TIMEOUT;
                this.remove(key);
            }
        } else {
            status = this.status.FAILURE;
        }
        result = {
            status,value
        }
        callback && callback.call(this,result.status,result.value);
        return result;
    },
    remove(key,callback){
        var status = this.status.FAILURE,
            key = this.getKey(key),
            value = null;
        try {
            value = this.storage.getItem(key);
        } catch (error) {
            
        }
        if(value){
            try {
                this.storage.removeItem(key);
                status = this.status.SUCCESS;
            } catch (error) {
                
            }
        }
        callback&&callback.call(this,status,value==null?null:value.slice(value.indexOf(this.timeSign) + this.timeSign.length))
    }
});
/**
    var LS = new BaseLocalStorage('LS__');
    LS.set('a','xiaoming',function(){
        console.log(arguments);
    });
    LS.set('b','xiaobai',function(){
        console.log(arguments);
    });
    LS.get('a',function(){
        console.log(arguments)
    });
    LS.remove('a',function(){
        console.log(arguments)
    });
 */
export default BaseLocalStorage;