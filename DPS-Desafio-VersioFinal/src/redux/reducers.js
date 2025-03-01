const initialState = {
  espacios: [],
  total: 0,
};
//En esta parte van las funciones
// y tambien se cargan los espacions ya utilizados
const parkingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESERVAR_ESPACIO': {
      const updatedSpaces = state.espacios.map(space =>
        space.id === action.payload.id ? { ...space, ocupado: true } : space
      );
      const updatedTotal = state.total + action.payload.costo;
      return {
        ...state,
        espacios: updatedSpaces,
        total: updatedTotal,
      };
    }
    case 'CARGAR_ESPACIOS': {
      const loadedSpaces = action.payload;
      return {
        ...state,
        espacios: loadedSpaces,
      };
    }
    default:
      return state;
  }
};

export default parkingReducer;