const API_URL = import.meta.env.VITE_API_URL

export const obtenerDatos = async () => {
    const respuesta = await  fetch(`${API_URL}/videojuegos.php`)
    const datosObtenidos = await respuesta.json()
    return datosObtenidos
} 

export const agregarDatos = async (datos) => {
     console.log("datos a enviar:", datos)
    const respuesta = await fetch(`${API_URL}/videojuegos.php`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(datos)
    })
    const texto = await respuesta.text()
    console.log(texto)
    return texto
}

export const eliminarDatos = async (id) => {
    const respuesta = await fetch(`${API_URL}/videojuegos.php/?id=${id}`,{
        method:"DELETE"
    })
    return await respuesta.json()   
}

export const editarDatos = async (id,datos) =>{
    const respuesta = await fetch(`https://wyper.alwaysdata.net/videojuegos.php?id=${id}`,{
        method:"PUT",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(datos)
    })
    return await respuesta.json()
}