Munchkin Counter – Level Tracker

Un contador simple, rápido y útil para partidas de Munchkin, diseñado para gestionar nivel y estados de cada jugador.

Objetivo del proyecto: crear una aplicación funcional y completa, desde la UI hasta la lógica, como pieza real de portfolio.

🚀 Características principales

✔ Contador de niveles

✔ Reseteo rápido

✔ Botones accesibles y UI clara

✔ Diseño responsive para usar directamente en la mesa de juego


🧩 Stack Tecnológico

React + Vite

TailwindCSS para estilos

Custom Hooks para separar lógica de UI

React Context y State Managment (useState)

ShadCN

Deploy en Vercel

🏗 Arquitectura del Proyecto
src/
  components/
    Player.jsx
    AddUser.jsx
  context/
    counterCountext.jsx
  utils/
    data.json
  App.jsx
  main.jsx

App.jsx → composición principal

🎮 Modo de Uso

Ingresá al link:
https://munchkin-counter-nu.vercel.app

Creá almenos 2 jugadores para poder iniciar la partida. Elegí un avatar, un nombre y un género

Usá los botones de + / – para ajustar nivel y puntos de items

Hacé un reset cuando cambia la partida o se reinicia la ronda.

Podes resetear con los mismos jugadores o reiniciar el juego para modificar los jugadores

🔧 Instalación y uso local
git clone https://github.com/lElliotCode/munchkin-counter.git
cd munchkin-counter
npm install
npm run dev

🧠 Objetivo educativo del proyecto

Este proyecto forma parte de mi proceso de entrenamiento personal para:

Fortalecer conceptos de estado, re-render, asincronía y arquitectura con componentes.

Practicar separación entre UI y lógica mediante custom hooks.

Trabajar en un proyecto completo y deployado, como parte del portfolio.

Iterar rápidamente y mejorar la calidad del código en cada versión.

📌 Próximas mejoras (roadmap personal)

 Persistencia de estado 

 Animaciones al modificar valores

 Muerte instantánea del personaje

 Modo oscuro

 Tests unitarios básicos (React Testing Library)

 Mejor estructura de carpetas

 Separación de lógica y UI

 Accesibilidad mejorada


🧑‍💻 Autor

Sergio Vázquez
Desarrollador en formación orientado al Frontend con React y camino a fullstack.
