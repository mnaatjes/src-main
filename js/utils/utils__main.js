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
