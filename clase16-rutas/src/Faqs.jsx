import React from 'react'
import { Link, useParams } from 'react-router-dom'
const preguntas = [ 
    {   id:1, 
        title: "¿Puedo hacer el curso sin tener experiencia y/o conocimientos previos?", 
        descripción: "Sí. En Digital House puedes aprender desde cero. Según el curso al que te anotaste, vamos a enviarte contenido previo online ... " }, 
    {   id:2, 
        title: "¿Las vacantes son limitadas?", 
        descripción: "Sí. Tienen una capacidad máxima de entre 50 y 75 personas, dependiendo el curso." }
]
const Faqs = () => {

    const params = useParams()

    return (
        <div>
            <h1>Faq: desde una preg especifica</h1>
            <h2>{params.id}</h2>
            <img src={faq} alt="faq" />
            <ol> 
                {preguntas.map(pregunta => ( 
                <Link key={pregunta.id} to={`${pregunta.id}`}>
                    <li > {pregunta.title} </li>
                </Link>
                
                ))} 
            </ol>
        </div>
    )
}

export default Faqs
