import {useEffect, useState} from 'react'

const ContadorMensaje = () => {


    const [contador, setContador] = useState(0)
    const[mensaje, setMensaje] = useState('')

    useEffect(() =>
        {setMensaje('mensaje ' + contador)
        console.log(mensaje);},
        [contador])

    return (
    <div>
        <button onClick={() => setContador((count) => count + 1)}>
        {contador}
        </button>
    </div>
    )
}

export default ContadorMensaje
