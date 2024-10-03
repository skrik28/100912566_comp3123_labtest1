function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            // reject
            return reject(new Error('Input must be an array'));
        }

        // filters the non-strings and lower cases the remaining words
        const justWordsLowerCased = mixedArray
            .filter(item => typeof item === 'string')
            .map(item => item.toLowerCase());

        // resolve
        resolve(justWordsLowerCased);
    });
}


const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));