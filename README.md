# 🐾 Proyecto Final – DogFriendly

## 1. Descripción del Proyecto
**DogFriendly** es una aplicación web que permite a cualquier persona **encontrar restaurantes pet-friendly** en distintas ciudades de España.  

Los usuarios pueden:  
- **Registrarse** introduciendo un nombre y correo electrónico, que se guarda en la base de datos. Tras registrarse, la app muestra un **mensaje de bienvenida personalizado**.  
- **Probar la aplicación como invitado**, sin necesidad de registro.  
- **Filtrar lugares por ciudad** y ver el listado con: nombre, dirección, ciudad y país.  

Actualmente la aplicación funciona con datos guardados en una **base de datos MySQL**.

---

## 2. URLs Activas
- **Front-end (local):** [http://localhost:3000](http://localhost:3000)  
- **Back-end (local):** [http://127.0.0.1:8000](http://127.0.0.1:8000)  

> Para desplegar online:
> - **Front-end:** Netlify o Vercel  
> - **Back-end:** Render  

---

## 3. URLs de GitHub
- **Repositorio Front-end:** https://github.com/tu-usuario/DogFriendly-frontend  
- **Repositorio Back-end:** https://github.com/tu-usuario/DogFriendly-backend  

*(Reemplaza “tu-usuario” por tu usuario real de GitHub.)*

---

## 4. Usuarios de prueba y rutas

- **Usuario Invitado:** no requiere registro ni contraseña.  
- **Usuario Registrado:** cualquier nombre y correo introducido se guarda en la base de datos.

### Base de datos
- **Motor:** MySQL  
- **Usuario:** `devuser`  
- **Base de datos:** `dogfriendly2_0`  

### Endpoints del backend
- `GET /places?city=NombreCiudad` → devuelve lugares filtrados por ciudad.  
- `POST /register` → recibe `{ "name": "Nombre", "email": "correo@ejemplo.com" }` y guarda el usuario.  
- `GET /users` → devuelve la lista de usuarios registrados.

---

## 5. Lugares de ejemplo cargados en la base de datos

| Nombre | Dirección | Ciudad | País |
|--------|-----------|--------|------|
| La Perrera Café | Calle del Sol 23 | Bilbao | España |
| Dog&Go Tapas | Calle Gran Vía 22 | Madrid | España |
| PetFriendly Bar Sevilla | Calle Feria 5 | Sevilla | España |
| El Rincón Canino | Carrer de Mallorca 210 | Barcelona | España |
| Woof Coffee | Carrer de Blai 15 | Barcelona | España |
| Patas & Copas | Avenida del Puerto 44 | Valencia | España |
| El Jardín Peludo | Calle de la Paz 8 | Valencia | España |
| Café Canino | Rúa Real 30 | A Coruña | España |
| Mar y Huellas | Praza do Obradoiro 2 | Santiago de Compostela | España |
| Playa y Pata | Avenida Andalucía 56 | Cádiz | España |
| Perruno Bar | Calle Ancha 12 | Cádiz | España |

---

## 6. Herramientas y características

- **Registro y saludo personalizado** conectado a la base de datos vía FastAPI y SQLAlchemy.  
- **Login simulado e invitado sin registro**.  
- **Gestión de estado con `useState` y `useEffect` en React**.  
- **Estilos CSS personalizados**:
  - Botones redondeados con sombra al hacer hover  
  - Inputs estilizados con feedback visual  
  - Tipografía moderna  
  - Diseño **responsive** para móvil y escritorio

---

## 7. Instrucciones para ejecutar el proyecto

### Backend
```bash
cd backend
uvicorn main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm start
```
### Requisitos
- Python 3.10+
- Node.js 20+
- npm 10+
- Dependencias principales: FastAPI, SQLAlchemy, PyMySQL, React, Axios

---

## 8. Información adicional
- La aplicación puede usarse **completamente como invitado**.  
- Al seleccionar una ciudad, se muestran los **lugares almacenados en la base de datos**.  
- Los estilos son **modernos y adaptables** a distintas pantallas.  
- Se agregó un **sistema básico de registro y bienvenida personalizada**.

### 💡 Futuras mejoras
- Incorporar un **mapa interactivo** para ubicar restaurantes pet-friendly.  
- Añadir un **sistema de reseñas y calificaciones** para los locales.  
- Posibilidad de **marcar favoritos** o añadir nuevos lugares por parte de los usuarios.
