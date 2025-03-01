"use client";
//Index
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Image from "next/image";
import PlanoParqueo from '../components/PlanoParqueo';
import SelectorZona from '../components/SelectorZona';
import ResumenReserva from '../components/ResumenReserva';
import { reservarEspacio } from '../redux/actions';
import styles from "./page.module.css";

const zonas = ['Cubierto', 'Descubierto', 'VIP'];

export default function Home() {
  const dispatch = useDispatch();
  const [espacios, setEspacios] = useState(() => [
    { id: 1, nombre: 'Parqueo 1', ocupado: false },
    { id: 2, nombre: 'Parqueo 2', ocupado: false },
    { id: 3, nombre: 'Parqueo 3', ocupado: false },
  ]);
  const [reserva, setReserva] = useState(null);

  const handleSelectZona = (zona) => {
    console.log(`Zona seleccionada: ${zona}`);
    const espacioSeleccionado = espacios.find(espacio => !espacio.ocupado);
    if (espacioSeleccionado) {
      setEspacios(prevEspacios =>
        prevEspacios.map(espacio =>
          espacio.id === espacioSeleccionado.id ? { ...espacio, ocupado: true } : espacio
        )
      );
      dispatch(reservarEspacio(espacioSeleccionado.id, 10)); 
      setReserva({
        espacio: espacioSeleccionado.nombre,
        duracion: 3, 
        total: 5, 
      });
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Parqueo UDB</h1>
        <SelectorZona zonas={zonas} onSelect={handleSelectZona} />
        <PlanoParqueo espacios={espacios} />
        {reserva && <ResumenReserva reserva={reserva} />}
      </main>
      <footer className={styles.footer}>
        <p>David Isaac Segura Sánchez. UDB</p>
        
      </footer>
    </div>
  );
}
