

const getTodos = async () => {
  
    const resp = await fetch('todos/Ivan.json');
    const data = await resp.json();
    console.log(data)

}

getTodos();



// fetch('todos/Ivan.json').then(response => {
//     console.log('resolved:', response);
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log('rejected:', err);
// });

