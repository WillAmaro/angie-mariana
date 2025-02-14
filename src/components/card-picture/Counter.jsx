"use client";
import { useState, useEffect } from "react";

function Counter() {
  const startDate = new Date("November 3, 2024 00:00:00");

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [daysForNextMonth, setDaysForNextMonth] = useState(0);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const timeElapsed = now.getTime() - startDate.getTime();

      // Calcular días, horas, minutos y segundos desde el startDate
      const calculatedDays = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
      const calculatedHours = Math.floor(
        (timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const calculatedMinutes = Math.floor(
        (timeElapsed % (1000 * 60 * 60)) / (1000 * 60)
      );
      const calculatedSeconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

      setDays(calculatedDays);
      setHours(calculatedHours);
      setMinutes(calculatedMinutes);
      setSeconds(calculatedSeconds);

      // Calcular los días faltantes para el próximo 3 de cada mes
      const currentYear = now.getFullYear(); // Año actual
      const currentMonth = now.getMonth(); // Mes actual

      // Calcular la fecha del próximo 3 de cada mes
      const nextMonthDate = new Date(currentYear, currentMonth + 1, 3); // El 3 del siguiente mes
      // Calcular cuántos días faltan para esos días 3
      const daysForNext = Math.floor(
        (nextMonthDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
      );

      setDaysForNextMonth(daysForNext);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "120px",
        gap: "3rem",
        marginBottom:"120px"
      }}
    >
      {/* Nuevas cajas para mostrar los días faltantes hasta el 3 de cada mes */}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #f25757, #f2858e)",
          gap: "1rem",
          paddingBlock:"1rem"
        }}
      >
        <div
          className="time-box"
          id="next-month"
          style={{ width: "50%", background: "transparent", boxShadow: "none" ,  fontFamily: "Offside"    ,height:"100%"     }}
        >
          <span style={{ fontSize: "18px" }}>
            Días restantes para cumplir un mes mas
          </span>
        </div>
        <div
          className="time-box"
          id="forNextDay"
          style={{
            borderRadius: "50%",
            padding: "10px",
            margin: 0,
            background: "transparent",
            boxShadow: "none",
          }}
        >
          <div id="seconds-value">{daysForNextMonth}</div>
          <span>Dias</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
          boxShadow: "none",
        }}
      >
        <div
          className="time-box"
          id="next-month"
          style={{ width: "100%", boxShadow: "none", color: "black" }}
        >
          <span style={{ color: "black" ,fontFamily: "Offside"  ,fontSize:"18px"}}>Nuestro tiempo juntos</span>
          <div className="countdown" id="countdown">
            <div className="time-box" id="days">
              <div id="days-value"  style={{color:"black"}}>{days}</div>
              <span style={{ color: "black" }}>Días</span>
            </div>
            <div className="time-box" id="hours">
              <div id="hours-value"  style={{color:"black"}}>{hours}</div>
              <span style={{ color: "black" }}>Horas</span>
            </div>
            <div className="time-box" id="minutes">
              <div id="minutes-value"  style={{color:"black"}}>{minutes}</div>
              <span style={{ color: "black" }}>Minutos</span>
            </div>
            <div className="time-box" id="seconds">
              <div id="seconds-value"  style={{color:"black"}}>{seconds}</div>
              <span style={{ color: "black" }}>Segundos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
