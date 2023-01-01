import React from 'react'
import "../styles/HomeScreen.css"

const HomeScreen = () => {
  return (
    <div className="h-s-body">

      <section>
        <h1>Bookymix</h1>
        <p>Porque todos tenemos libros en casa sin usar...</p>

        <div class="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
    </div>

      </section>

      <section class="bubble">
        <ul>
          <li>Intercambia un libro con alguien cercano</li>
          <li>Aprovecháte de gente que dona libros que ya no usa</li>
          <li>¿Necesitas espacio en casa? Dónalos a gente que les pueda sacar más provecho.</li>
      </ul>

    </section>
    

    <section class="search">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
       <p>Introduce tu dirección y encuentra libros cerca de ti</p>
   

    </section>
  
 

  
    </div>
  )
}

export default HomeScreen