export const reservaModel = (idLibro, idPersona, fechaCheckout, fechaRetorno, fechaRetornado) => {
    return {
        idLibro, 
        idPersona, 
        fechaCheckout, 
        fechaRetorno, 
        fechaRetornado
    }
}


export const verboseReservaModel = (id, idLibro, idPersona, fechaCheckout, fechaRetorno, fechaRetornado, persona, libro) => {
    return {
        id,
        idLibro, 
        idPersona, 
        fechaCheckout, 
        fechaRetorno, 
        fechaRetornado,
        persona,
        libro
    }
}

