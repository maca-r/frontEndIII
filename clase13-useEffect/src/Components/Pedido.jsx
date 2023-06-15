import React, { useEffect, useState } from 'react'

const Pedido = ({pedido}) => {

    useEffect(() => {

        return () => {
            alert('Pedido cancelado')
            console.log('Componente desmontado');
            
        }
    },[])

    return (
        <>
            <li>{pedido.menu}</li>
        </>
    )
}

export default Pedido
