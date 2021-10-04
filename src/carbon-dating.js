import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(str) {

	if (typeof str != 'string') return false;

	if (str == undefined) return false;

	let num = parseFloat(str)

	if ("" + num != str) return false;

	if (num == NaN) return false;

	if (num <= 0) return false;

	if (num > MODERN_ACTIVITY) return false;
    
	let b = Math.log(MODERN_ACTIVITY / num);

    let a = 0.693 / HALF_LIFE_PERIOD;

    let age = Math.ceil(b / a)

    return age;

    // (15 / 1) / (0.693 / 5730)
}
