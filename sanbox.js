const getTodos = () => {
    const url = 'https://jsonplaceholder.typicode.com/todos';

    const req = new XMLHttpRequest();

    req.addEventListener('readystatechange', ()  =>  {
        if ( req.readyState === 4 && req.status === 200 ){
            console.log(req, req.responseText);
        } else if (req.readyState === 4) {
            console.log('could not fetch the data');
        }
    });

    req.open('GET', url);
    req.send();
    
}

getTodos();