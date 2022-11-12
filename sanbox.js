const resource = '';

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

getTodos('todos/Ivan.json').then(data => {
    console.log('promise resolved Ivan:', data);
    return getTodos('todos/shaun.json');
}).then(data => {
    console.log( 'promise resolved shaun:', data);
    return getTodos('todos/Mario.json');
}).then(data => {
    console.log('promise resolved Mario:', data);
    return getTodos('todos/Luigi.json');
}).then(data => {
    console.log('promise resolved Luigi:', data);
}).catch(err => {
    console.log('promise rejected:', err);
});

