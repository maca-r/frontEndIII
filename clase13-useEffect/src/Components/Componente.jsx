import React, { useEffect, useState } from 'react'
import Pedido from './Pedido';

const Componente = () => {

    const[pedido,setPedido] = useState({
        menu: 'pizza'
    })

    const[toggle,setToggle] = useState(false)


    useEffect( () => {
        console.log('Se actualizó el estado pedido');
        
        setTimeout(() => {
            setToggle(true)
            
        }, 2000)
    },[])




    return (
        <div>

            {console.log('Se ejecutó el render')}

            <h2>Pedido</h2>


            {toggle && <Pedido pedido={pedido}/>}

            <button onClick={() => setToggle(false)}>
                Cancelar
            </button>
        </div>
    )


}

export default Componente
