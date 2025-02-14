"use client"; // Indica que este archivo se usará en un componente de React en el lado del cliente en Next.js

import { useEffect, useRef } from "react"; // Importando los hooks de React useEffect y useRef

function ActiveBubble() { 
  // Definiendo la función del componente ActiveBubble
  const bubbleContainerRef: any = useRef(null); 
  // Creando una referencia (ref) para hacer referencia al elemento DOM donde se agregarán las burbujas

  useEffect(() => {
    // El hook useEffect se ejecuta después de que el componente se haya montado
    const createBubble = () => { 
      // Definiendo la función para crear y agregar una burbuja
      if (!bubbleContainerRef.current) return; 
      // Si la referencia no está establecida (es decir, si el contenedor no existe), no hace nada
      const bubble = document.createElement("div"); 
      // Creando un nuevo elemento <div> para representar la burbuja
      bubble.classList.add("bubble"); 
      // Agregando una clase "bubble" al nuevo elemento burbuja
      const size = Math.random() * 50 + 20; 
      // Estableciendo un tamaño aleatorio para la burbuja entre 20px y 70px
      bubble.style.width = `${size}px`; 
      bubble.style.height = `${size}px`; 
      // Aplicando el tamaño a la burbuja (ancho y alto)

      bubble.style.left = `${Math.random() * 100}%`; 
      // Posicionando aleatoriamente la burbuja horizontalmente (de 0% a 100% del ancho del contenedor)
      bubble.style.top = `${Math.random() * 100}%`; 
      // Posicionando aleatoriamente la burbuja verticalmente (de 0% a 100% de la altura del contenedor)
      const duration = Math.random() * 5 + 5; 
      // Estableciendo una duración aleatoria para la animación entre 5s y 10s
      bubble.style.animationDuration = `${duration}s`; 
      // Aplicando la duración de la animación a la burbuja
      bubbleContainerRef.current.appendChild(bubble); 
      // Agregando la burbuja al contenedor

      setTimeout(() => { 
        // Estableciendo un tiempo de espera para eliminar la burbuja después de que termine la animación
        bubble.remove(); 
        // Eliminando la burbuja del DOM después de que haya pasado el tiempo de animación
      }, duration * 1000); // El tiempo de espera está en milisegundos, por eso multiplicamos la duración por 1000
    };

    const interval = setInterval(createBubble, 500); 
    // Creando un intervalo para llamar a la función `createBubble` cada 500ms (0.5 segundos)

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval); 
    // Devolviendo una función de limpieza para limpiar el intervalo cuando el componente se desmonte
  }, []); // El array vacío indica que este efecto solo se ejecutará una vez, al montar el componente

  return (
    <div className="container-bubble"> 
      <div ref={bubbleContainerRef} className="bubble-item"></div>
    </div>
  );
}
export default ActiveBubble; // Exportando el componente ActiveBubble para su uso en otros lugares
