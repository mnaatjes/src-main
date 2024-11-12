/*----------------------------------------------------------*/
/**
 * @file utils__main.js
 * @author mnaatjes
 * @version 1.0.0
 * @date 11-07-2024
 * @name UtilsMain
 * @memberof SourceMain
 * @namespace UtilsMain
 */
/*----------------------------------------------------------*/

/*----------------------------------------------------------*/
/**
 * @name getGCF
 * @type {Function}
 * @memberof UtilsMain
 * @param {Number} a
 * @param {Number} b
 * @returns {Number} greatest common factor
 */
/*----------------------------------------------------------*/
function getGCF(a, b){
    /**
     * ensure b is not 0
     */
    if(a == 0){return b;}

    return getGCF(b % a, a);

}
/*----------------------------------------------------------*/
/**
 * @name range
 * @type {Function}
 * @memberof UtilsMain
 * @param {number} start beginning of range
 * @param {number} end end of range
 * @returns {Boolean} false
 */
/*----------------------------------------------------------*/
function range(start, end) {
    /**
     * @name result
     * @description array for range numbers
     */
    let result = [];
    /**
     * loop and build array range
     */
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    /**
     * return result
     */
    return result;
}
/*----------------------------------------------------------*/
/**
 * @name tryParseInt
 * @type {Function}
 * @memberof UtilsMain
 * @param {Number | String | Float} num
 * @returns {Boolean} false
 */
/*----------------------------------------------------------*/
function tryParseInt(num){
    /**
     * try
     */
    try{
        num = parseInt(num);
        return Number.isInteger(num);
    /**
     * error condition
     */
    } catch(error){
        return false;
    }
}
/*----------------------------------------------------------*/
/**
 * @name enableNode
 * @type {Function}
 * @memberof UtilsMain
 * @param {HTMLElement} node
 * @returns {Boolean} false
 */
/*----------------------------------------------------------*/
function enableNode(node){
    node.setAttribute('data-state', 'enabled');
    return true;
}
/*----------------------------------------------------------*/
/**
 * @name disableNode
 * @type {Function}
 * @memberof UtilsMain
 * @param {HTMLElement} node
 * @returns {Boolean} false
 */
/*----------------------------------------------------------*/
function disableNode(node){
    node.setAttribute('data-state', 'disabled');
    return false;
}
/*----------------------------------------------------------*/
/**
 * @name clearNode
 * @type {Function}
 * @memberof UtilsMain
 * @param {HTMLElement} node
 * @returns {Boolean} false
 */
/*----------------------------------------------------------*/
function clearNode(node){
    node.innerHTML = '';
    return true;
}
/*----------------------------------------------------------*/
/**
 * @name writeNode
 * @type {Function}
 * @memberof UtilsMain
 * @param {HTMLElement} node
 * @param {String} string
 * @returns {Boolean} false
 */
/*----------------------------------------------------------*/
function writeNode(node, string){
    node.innerHTML = string;
    return true;
}
/*----------------------------------------------------------*/
/**
 * @name traverseJSON
 * @type {Function}
 * @memberof UtilsMain
 * @param {String | Object} obj json object
 * @param {Function} callback perform actions on key, value pairs
 * @returns {Object} json key, values
 */
/*----------------------------------------------------------*/
function traverseJSON(obj, callback){
    /**
     * check if string
     */
    if(typeof json == 'string'){json = JSON.parse(json);}
    /**
     * loop json value key pairs
     */
    for(let key in obj){
        /**
         * check if key exists
         */
        if(obj.hasOwnProperty(key)){
            /**
             * run callback
             */
            callback(key, obj[key]);
            /**
             * iterate through next object
             */
            if(typeof obj[key] == 'object'){
                /**
                 * call function
                 */
                traverseJSON(obj[key], callback);
            }
        }
    }
}
/*----------------------------------------------------------*/
/**
 * @name listJSON
 * @type {Function}
 * @memberof UtilsMain
 * @param {String | Object} obj json object
 * @param {Number} depth selector for how deep
 * @param {Function} callback execute function
 * @param {Number} curr current depth
 * @returns {Object} list objects at depth n
 */
/*----------------------------------------------------------*/
function listJSON(obj, depth, callback, curr=0){
    /**
     * check depth
     */
    if(curr == depth){
        /**
         * if depths match
         * check if value is object
         * and object is not empty
         */
        if(typeof obj === 'object' && obj != null){
            /**
             * perform callback actions
             */
            callback(obj, curr);
        } 
    } else {
        /**
         * if depths don't match
         * go deeper into object
         * loop object for inner objects
         */
        for(let key in obj){
            /**
             * validate obj
             */
            if(typeof obj[key] === 'object' && obj[key] != null){
                /**
                 * run self
                 * at increased depth
                 */
                listJSON(obj[key], depth, callback, (curr + 1));
            }
        }
    }
}