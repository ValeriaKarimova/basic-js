import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
	
	if (!Array.isArray(arr)) {
		throw new Error("'arr' parameter must be an instance of the Array!");
	}

	let result = [];

	for (let i = 0; i < arr.length; i++){
		
		switch(arr[i])
		{
			case '--double-next' : 
			{
				if (i < arr.length - 2 && typeof arr[i + 1] == 'number')
				{
					result.push(arr[i + 1])
				}
				break;
			}
			case '--double-prev' : 
			{
				if (result.length > 0) {
					result.push(result[result.length - 1])	
				}
				
				break;
			}
			case '--discard-next' : 
			{
				i++;
				break;
			}
			case '--discard-prev' : 
			{
				if (result.length > 0 && arr[i - 1] != null){
					result.pop();
				}
				break;
			}
			default: 
			{
				result.push(arr[i]);
			}
		}
	}

	return result;
}
