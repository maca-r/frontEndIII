import { useState, useEffect } from 'react'
import axios from 'axios';
import GetComponent from './GetComponent';

const PostComponent = () => {

//     const [comentarios,setComentarios] = useState([{
//         body: '',
//         email: '',
//         id: 0,
//         name: '',
//         postId: 0
        
//     }])



//     const url = 'https://jsonplaceholder.typicode.com/comments'

//     useEffect(() => {
//         fetch(url)
    
//     .then((response) => 
//         response.json()
//     )
//     .then((data) => {
//         setComentarios(data)
//     })
//     , []})


//     const handleSubmit = (event) => {
//         event.preventDefault()
//         fetch(url,{
//             method: 'POST',
//             body: JSON.stringify({
//                 comentarios
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             }})
//         .then((response) => response.json()
//         .then((data) => {
//             setComentarios([data])
//         }))
//         {console.log('hola')}
        
//     }

//     return (
//             <form onSubmit={handleSubmit}>
//                 <label>Ingresa tu nombre</label>
//                 <input type="text" onChange = {(event) => setComentarios({...comentarios, name: event.target.value
//                 })} />
//                 <label>Ingresa tu email</label>
//                 <input type="text" onChange = {(event) => setComentarios({...comentarios, email: event.target.value
//                 })} />
//                 <label>Ingresa el comentario</label>
//                 <input type="text" onChange = {(event) => setComentarios({...comentarios, body: event.target.value
//                 })} />

//                 <button>Enviar</button>
//             </form>
        
//     )
// }
const [nuevoComentario, setNuevoComentario] = useState({
    name: '',
    email: '',
    body: ''
});

const url = 'https://jsonplaceholder.typicode.com/comments';

const handleSubmit = (e) => {

    e.preventDefault();

    console.log(nuevoComentario);

    axios.post(url, nuevoComentario).then(response => console.log(response))
}

return (
<>
    <h1>Formulario</h1>
    <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type='text' onChange={(e) => setNuevoComentario((prev) => ({...prev, name: e.target.value}))}/>
        <label>Email: </label>
        <input type='email' onChange={(e) => setNuevoComentario((prev) => ({...prev, email: e.target.value}))}/>
        <label>Body: </label>
        <input type='text' onChange={(e) => setNuevoComentario((prev) => ({...prev, body: e.target.value}))}/>
        <button type='submit'>Enviar</button>
    </form>
    <GetComponent/>
</>
)
}

export default PostComponent
