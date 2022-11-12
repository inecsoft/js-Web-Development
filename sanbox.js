const resource = 'todos.json';

const getTodos = (resource) => {
    // const resource = 'https://jsonplaceholder.typicode.com/todos';
    
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();

        req.addEventListener('readystatechange', ()  =>  {
            if ( req.readyState === 4 && req.status === 200 ){
                const data = JSON.parse(req.responseText);
                resolve(data);
            } else if (req.readyState === 4) {
                reject('error getting resource');
            }
        });
    
        req.open('GET', resource);
        req.send();

    });
};

getTodos(resource).then(data => {
    console.log('promise resolved:', data);
}).catch(err => {
    console.log('promise rejected:', err);
});

// promises

// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         //fetch something
//         resolve('some data');
//         // reject('some error');
//     });
// };

// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// another and better way to handle error
// getSomething().then((data) => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });
