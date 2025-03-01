//Aqui se mostrara el resumen de la reserva que solicito el usuario
"use client";
import React from 'react';

const ResumenReserva = ({ reserva }) => {
  return (
    <div className="resumen-reserva">
      <h2>Resumen de su Reserva</h2>
      <p>Total: ${reserva.total}</p>
      <p>Espacio: {reserva.espacio}</p>
      <p>Duración: {reserva.duracion} horas</p>
    
    </div>
  );
};

export default ResumenReserva;
