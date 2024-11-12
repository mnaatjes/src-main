/*----------------------------------------------------------*/
/**
 * @file objects/obj__user.js
 * 
 * @name User
 * @type {Class}
 * @memberof CoinBreakdown
 * @namespace User
 */
/*----------------------------------------------------------*/
class User {
    constructor(input_id, button_id, config){
        /**
         * @name btn_submit
         * @type {Object}
         * @memberof User
         */
        this.btn_submit = new DOMElement(button_id);
        /**
         * @name ele_input
         * @type {Object}
         * @memberof User
         */
        this.ele_input = new DOMElement(input_id);
        /**
         * @name ele_alerts
         * @type {Object}
         * @memberof User
         */
        this.ele_alerts = new DOMElement('ele__alerts');
        /**
         * @name ele_entry
         * @type {Object}
         * @memberof User
         */
        this.ele_entry = new DOMElement('entry__output');
        /**
         * @name ele_output
         * @type {Object}
         * @memberof User
         */
        this.ele_output = new DOMElement('item__container');
        /**
         * @name chart
         * @type {Array}
         * @memberof User
         */
        this.chart = new Chart('viewport', config);
        /**
         * @name 
         * @type {Array}
         * @memberof User
         */
        /**
         * @implements this.initUser
         */
        this.initUser();
    }
    /*----------------------------------------------------------*/
    /**
     * @name initUser
     * @type {Method}
     * @memberof User
     * @description
     */
    /*----------------------------------------------------------*/
    initUser(){
        /**
         * define sample dataset
         * display sample data
         */
        let sample_entry = 1.43;
        /**
         * turn off alert
         */
        this.ele_alerts.hide();
        /**
         * load chart
         * load data
         */
        this.loadData(this.buildData(sample_entry), sample_entry);
        /**
         * add listener to input field
         * disable submit button
         */
        this.ele_input.addListener('onkeyup', 'user.keyStroke(event)');
        this.ele_input.addListener('onkeydown', 'user.keyDown(event)');
        this.btn_submit.disable();
        /**
         * define promise
         * define listener
         * add promise
         * @implements {keyStroke}
         * @implements {onClick}
         */
        this.onClick();
    }
    /*----------------------------------------------------------*/
    /**
     * @name replay
     * @type {Promise}
     * @memberof User
     * @description
     */
    /*----------------------------------------------------------*/
    replay(){
        /**
         * turn off alert
         */
        this.ele_alerts.hide();
        /**
         * add listener to input field
         * disable submit button
         */
        this.ele_input.addListener('onkeyup', 'user.keyStroke(event)');
        this.ele_input.addListener('onkeydown', 'user.keyDown(event)');
        this.btn_submit.disable();
        /**
         * define promise
         * define listener
         * add promise
         * @implements {keyStroke}
         * @implements {onClick}
         */
        this.onClick();
    }
    /*----------------------------------------------------------*/
    /**
     * @name addPromise
     * @type {Promise}
     * @memberof User
     * @property {Function} promise
     * @description
     */
    /*----------------------------------------------------------*/
    addPromise(){
        /**
         * return promise
         */
        return new Promise((resolve => {
            /**
             * define listener
             */
            let listener = () => {
                /**
                 * remove listener
                 */
                this.btn_submit.node.removeEventListener('click', listener);
                /**
                 * TODO: disable button
                 */
                /**
                 * resolve
                 */
                resolve();
            };
            /**
             * TODO: Enable Button
             * TODO: Clear Alerts
             */
            /**
             * add listener
             */
            this.btn_submit.node.addEventListener('click', listener);
        }));
    }
    /*----------------------------------------------------------*/
    /**
     * @name onClick
     * @type {Method}
     * @memberof User
     * @namespace onClick
     * @listens btn_submit#click
     * @description
     */
    /*----------------------------------------------------------*/
    async onClick(){
        /**
         * @implements {addPromise} 
         */
        await this.addPromise();
        /**
         * remove input listeners
         */
        this.ele_input.removeListener('onkeydown');
        this.ele_input.removeListener('onkeypress');
        /**
         * clear alerts
         */
        this.ele_alerts.hide();
        /**
         * get data and parse
         * 
         * @name entry
         * @type {Boolean | Number}
         * @memberof onClick
         * @implements {parseInput}
         */
        let entry = this.parseInput(this.ele_input.node.value);
        /**
         * clear input value
         */
        this.ele_input.node.value = '';
        /**
         * build data from entry
         * 
         * @implements {buildData}
         */
        if(entry){
            /**
             * display data
             * reset entry
             * @implements {loadData}
             */
            this.loadData(this.buildData(entry), entry);
            /**
             * return and restart
             */
            this.replay();
        } else {
            /**
             * Major Error: Restart
             */
            this.ele_alerts.writeTo('Major Error: Please Refresh Page!').fromTag('small');
            this.ele_alerts.show();
            console.error('Critical Error');
        }
    }
    /*----------------------------------------------------------*/
    /**
     * @name loadData
     * @type {Method}
     * @memberof User
     * @param {Array} dataset
     * @param {Number} entry
     * @description output data to user
     */
    /*----------------------------------------------------------*/
    loadData(dataset, entry){
        /**
         * load data into chart
         * render chart
         */
        this.chart.updateChart(dataset);
        /**
         * output entry amount
         */
        /**
         * output coin distribution
         */
        for(let i = 0; i < this.ele_output.children.length; i++){
            /**
             * define child
             */
            let child = this.ele_output.children[i];
            /**
             * write to childen
             */
            let target       = child.querySelector('h4');
            target.innerHTML = dataset[i].data;
        }
        /**
         * output entry
         */
        this.ele_entry.write(`$${entry}`);
    }
    /*----------------------------------------------------------*/
    /**
     * @name keyDown
     * @type {Method}
     * @memberof User
     * @listens ele_input#keydown
     * @description
     */
    /*----------------------------------------------------------*/
    keyDown(e){
        /**
         * valid key entries only numbers and Backspace
         */
        if(isNaN(e.key) && e.key != 'Backspace' && e.key != 'Enter' && e.key != '.'){
            /**
             * disable unwanted inputs
             */
            e.preventDefault();
            /**
             * Alert: only numeric keys, decimal, and backspace
             */
            this.ele_alerts.writeTo('Sorry, only numbers, decimal points, and back spaces allowed').fromTag('small');
            this.ele_alerts.show();
        } else if (e.target.value.length >= 6){
            /**
             * disable input if too long
             */
            if(e.key != 'Backspace' && e.key != 'Enter'){
                /**
                 * prevent further input
                 */
                e.preventDefault();
                /**
                 * Alert: only 5 characters allowed
                 */
                this.ele_alerts.writeTo('Sorry, only 5 digits allowed!').fromTag('small');
                this.ele_alerts.show();
            }
        }
        /**
         * get last character deleted
         */
        if(e.key == 'Backspace'){
            if(e.target.value.slice(-1) === '.'){
                /**
                 * reset entries
                 */
                this.ele_input.entries = [];
            }
        }
    }
    /*----------------------------------------------------------*/
    /**
     * @name keyStroke
     * @type {Method}
     * @memberof User
     * @listens ele_input#keyup
     * @description parses user input
     */
    /*----------------------------------------------------------*/
    keyStroke(e){
        /**
         * define properties
         */
        let value       = e.target.value;
        let includes    = value.includes('.');
        let last_char   = value.charAt(value.length - 1);
        /**
         * validate number of periods
         * check if value includes period
         */
        if(includes && (last_char == '.')){
            /**
             * check if index doesnt already exist
             */
            if(!this.ele_input.entries.includes(value.length - 1)){
                /**
                 * new entry
                 */
                this.ele_input.entries.push(value.length - 1);
                /**
                 * more than one period entered
                 */
                if(this.ele_input.entries.length > 1){
                    /**
                     * Alert: only 1 decimal point
                     */
                    this.ele_alerts.writeTo('Sorry, only 1 decimal point allowed!').fromTag('small');
                    this.ele_alerts.show();
                    /**
                     * split off last period from value
                     */
                    e.target.value = value.slice(0, (value.length - 1)) + value.slice(value.length + 1);
                    /**
                     * update entries arr
                     */
                    this.ele_input.entries.pop();
                }
            }
            /**
             * check leading zero
             */
            if(this.ele_input.entries.length == 1 && parseInt(this.ele_input.entries) === 0){
                /**
                 * if leading zero doesnt already exist
                 */
                if(e.target.value.charAt(0) !== '0'){
                    /**
                     * prepend 0
                     */
                    e.target.value = '0'.concat(e.target.value);
                    /**
                     * update entries arr
                     */
                    this.ele_input.entries = [1];
                }
            }
        }
        /**
         * check if period placed
         * to count decimal spaces
         */
        if(includes){
            let len_decimal = value.length - (parseInt(this.ele_input.entries) + 1);
            if(len_decimal > 2){
                /**
                 * Alert: only 2 decimal spaces
                 */
                this.ele_alerts.writeTo('Sorry, only 2 decimal spaces accepted!').fromTag('small');
                this.ele_alerts.show();
                /**
                 * remove last entry
                 */
                e.target.value = value.slice(0, (value.length - 1)) + value.slice(value.length + 1);
            }
        }
        /**
         * enable submit button at length
         */
        if(e.target.value.length >= 2){
            /**
             * enable button
             */
            this.btn_submit.enable();
        } else if (e.target.value.length < 2){
            /**
             * disable button
             */
            this.btn_submit.disable();
        }
        /**
         * check if number not too high
         * try to parse input
         */
        if(tryParseInt(e.target.value)){
            let num = parseFloat(e.target.value);
            /**
             * make sure number under 101.90
             */
            if(num > 999.99){
                /**
                 * Alert: Number too high
                 */
                this.ele_alerts.writeTo('Sorry, number cannot be over 999.99!<br/>We dont want a stack overflow').fromTag('small');
                this.ele_alerts.show();
                /**
                 * disable submit button
                 */
                this.btn_submit.disable();
            } else if(num < 999.99){
                /**
                 * hide error
                 */
                this.ele_alerts.hide();
                /**
                 * enable button
                 */
                this.btn_submit.enable();
            }
        }
        /**
         * clear alert if input field empty
         */
        if(e.target.value.length == 0){
            /**
             * remove alert 
             */
            this.ele_alerts.hide();
        }
    }
    /*----------------------------------------------------------*/
    /**
     * @name parseInput
     * @type {Method}
     * @memberof User
     * @namespace parseInput
     * @param {String} value
     * @description
     */
    /*----------------------------------------------------------*/
    parseInput(value){
        return tryParseInt(value)
            ? parseFloat(Number(value).toFixed(2))
            : false;
    }
    /*----------------------------------------------------------*/
    /**
     * @name buildData
     * @type {Method}
     * @memberof User
     * @namespace buildData
     * @param {Number} entry
     * @description
     * @returns {Array} dataset
     */
    /*----------------------------------------------------------*/
    buildData(entry){
        /**
         * @name breakdown
         * @type {Function}
         * @memberof buildData
         * @namespace breakdown
         */
        function breakdown(num){
            /**
             * define result
             */
            let result = [];
            /**
             * @name coins
             * @type {Array}
             * @memberof breakdown
             */
            let coins = [
                {face: 'Quarters', denom: 25},
                {face: 'Dimes', denom: 10},
                {face: 'Nickels', denom: 5},
                {face: 'Pennies', denom: 1},
            ];
            /**
             * loop coins
             */
            for(let i = 0; i < coins.length; i++){
                /**
                 * define items
                 * define temp obj
                 */
                let coin     = coins[i];
                let temp_obj = {data: 0, label: coin.face,};
                /**
                 * define product
                 */
                let div = Math.floor(num / coin.denom);
                /**
                 * perform sorting
                 */
                if(div > 0){
                    /**
                     * update value to temp object
                     */
                    temp_obj.data = div;
                    /**
                     * perform modulo calculation
                     * update number value
                     */
                    num = Math.floor(num % coin.denom);
                }
                /**
                 * push values
                 */
                result.push(temp_obj);
            }
           /**
            * return result as dataset
            */
           return result;
        }
        /**
         * blow up number
         */
        entry = entry * 100;
        /**
         * break down number into parts
         * @implements {breakdown}
         */
        return breakdown(entry);
    }
}