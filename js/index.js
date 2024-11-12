/*----------------------------------------------------------*/
/**
 * @file index.js
 * @author mnaatjes
 * @version 1.0.0
 * @date 11-07-2024
 * @namespace CoinBreakdown
 */
/*----------------------------------------------------------*/
/**
 * @name config
 * @type {Object}
 * @memberof Chart
 * @namespace Config
 */
let config = {
    /**
     * @name config
     * @type {Object}
     * @namespace Config
     */
    chart: {
        width: 640,
        height: 480
    },
    offsetX: 50,
    offsetY: 50,
    scales: {
        color: '#999999',
        weight: 1,
        text: {
            titles: {font: '16px Arial', color: '#333333', size: 24},
            units: {font: '12px Arial', color: '#333333', size: 12}
        },
        x: {
            type: 'default',
            spacing: null,
            units: [],
            title: 'Coin Types',
            initial: null
        },
        y: {
            type: 'legend',
            spacing: 50,
            units: [],
            title: 'Coin Breakdown',
            initial: 0
        }
    }
};
/**
 * @implements User
 */
const user = new User('ele__input', 'btn__submit', config);