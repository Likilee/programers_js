"use strict"

function solution(s) {
	let total_zero_count = 0;
	let binary = s;
	let repeat = 0;

	while(1) {
		if (binary == "1")
			break ;
		repeat += 1;
		const current_length = binary.length;
		const zero_count_arr = binary.match(/0/g);
		let zero_count = 0;
		if (zero_count_arr !== null)
			zero_count = zero_count_arr.length;
		total_zero_count += zero_count;

		binary = (current_length - zero_count).toString(2);
	}
	return ([repeat, total_zero_count]);
}

const s = "111"
console.log(solution(s));

// console.log("1101".match(/0/g))
