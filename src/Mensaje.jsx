import React, { useEffect } from 'react'

export const Mensaje = () => {
  useEffect(()=>{
    console.log('El componente se cargó');
    
    return ()=>{
        console.log('El componente se descargó');
        
    }
  },[])
    return (
    <h1>Observemos la consola</h1>
  )
}
