const addSum = (a, b) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			if(typeof a!== 'number' || typeof b !== 'number') {
				reject('a, b must be numbers');
			}
		resolve(a+b)
	}, 3000);
	}
);

const totalSum = async () => {
	try {
		let sum1 = await (addSum(10, 10));
		let sum2 = await (addSum(sum1, 10));
		console.log({sum1, sum2})
	} catch (err) {
		if(err) console.log( { err });
	}
}
console.log(totalSum());