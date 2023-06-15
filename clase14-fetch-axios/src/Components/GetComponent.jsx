import { useState, useEffect } from 'react'

const GetComponent = ({nuevoComentario}) => {
    
    const [comentarios,setComentarios] = useState([{
        body: '',
        email: '',
        id: 0,
        name: '',
        postId: 0
        
    }])

    const url = 'https://jsonplaceholder.typicode.com/comments'
    
    useEffect(() => {
        fetch(url)
        .then((response) => 
            response.json())
        .then((data) => {
            console.log(data);
            setComentarios(data)
        })
    },[nuevoComentario])
    
    
    return (
        <div>
            <ul>

                {comentarios.map((comentario) => 
                <li key={comentario.id}>
                    {comentario.email}
                    
                </li>
                )}
                
            </ul>
        </div>
    )
}

export default GetComponent
