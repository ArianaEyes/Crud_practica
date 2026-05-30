export const obtenerDatos = async () => {
    const respuesta = await  fetch("https://wyper.alwaysdata.net/videojuegos.php")
    const datosObtenidos = await respuesta.json()
    return datosObtenidos
} 

export const agregarDatos = async (datos) => {
    const respuesta  = await fetch("https://wyper.alwaysdata.net/videojuegos.php",{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(datos)
    })
    return await respuesta.json()
}

export const eliminarDatos = async (id) => {
    const respuesta = await fetch(`https://wyper.alwaysdata.net/videojuegos.php/?id=${id}`,{
        method:"DELETE"
    })
    return await respuesta.json()   
}

export const editarDatos = async (id,datos) =>{
    const respuesta = await fetch(`https://wyper.alwaysdata.net/videojuegos.php/?id=${id}`,{
        method:"PUT",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(datos)
    })
    return await respuesta.json()
}