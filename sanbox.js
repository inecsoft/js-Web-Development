const resource = 'todos.json';

const getTodos = (resource, callback) => {
    // const resource = 'https://jsonplaceholder.typicode.com/todos';

    const req = new XMLHttpRequest();

    req.addEventListener('readystatechange', ()  =>  {
        if ( req.readyState === 4 && req.status === 200 ){
            const data = JSON.parse(req.responseText);
            callback( undefined, data);
        } else if (req.readyState === 4) {
            callback('could not fetch the data', undefined );
        }
    });

    req.open('GET', resource);
    req.send();
    
}

getTodos(resource, (err, data) => {
    console.log('callback fired');
    if ( err) {
        console.log(err);
    } else if (data) {
        console.log(data); 
    }
});