export const reservarEspacio = (espacioId, precio) => {
  return {
    type: 'RESERVAR_ESPACIO',
    payload: { id: espacioId, costo: precio },
  };
};

export const cargarEspacios = (listaEspacios) => {
  return {
    type: 'CARGAR_ESPACIOS',
    payload: listaEspacios,
  };
};