//working with loadash library and moment library
const _ = require('lodash');
const moment = require('moment');

const data = [1, 2, 3, 4, 5];

//using lodash to shuffle the data
//const shuffledData = _.shuffle(data);
//console.log('Shuffled Data:', shuffledData);

const promise = new Promise((resolve, reject) => {
    const result = _.shuffle(data);
    if (result) {
        resolve(result);
    } else {
        reject('Error shuffling data');
    }
});

promise.then((shuffledData) => {
    console.log('Shuffled Data:', shuffledData);
}).catch((error) => {
    console.error(error);
});

//using moment to format the current date and time using Async/Await
const formatDate = async () => {
    const now = moment();
    const formattedDate = now.format('YYYY-MM-DD HH:mm:ss');
    return formattedDate;
}
