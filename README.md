# 🐾 Proyecto Final – DogFriendly

## 1. Descripción del Proyecto
**DogFriendly** es una aplicación web con la cual se pretende que cualquier persona **encontrar restaurantes pet-friendly** en distintas ciudades de España.  

Los usuarios pueden:  
- **Registrarse** introduciendo un nombre y correo electrónico, que se guarda en la base de datos. Tras registrarse, la app muestra un **mensaje de bienvenida personalizado**.  
- **Probar la aplicación como invitado**, sin necesidad de registro.  
- **Filtrar lugares por ciudad** y ver el listado con: nombre, dirección, ciudad y país.  

Actualmente la aplicación funciona con datos guardados en una **base de datos PostgreSQL en Neon**.

---

## 2. URLs Activas
- **Front-end:** [https://dog-friendly-frontend.vercel.app](https://dog-friendly-frontend.vercel.app)  
- **Back-end:** [https://dogfriendly-backend.onrender.com](https://dogfriendly-backend.onrender.com)

---

## 3. URLs de GitHub
- **Repositorio Front-end:** [https://github.com/Jenny-nova/DogFriendly-frontend.git](https://github.com/Jenny-nova/DogFriendly-frontend.git)  
- **Repositorio Back-end:** [https://github.com/Jenny-nova/DogFriendly-backend.git](https://github.com/Jenny-nova/DogFriendly-backend.git)

---

## 4. Usuarios de prueba y rutas

- **Usuario Invitado:** no requiere registro ni contraseña.  
- **Usuario Registrado:** cualquier nombre y correo introducido se guarda en la base de datos en Neon.

### Endpoints del backend
- `GET /places?city=NombreCiudad` → devuelve lugares filtrados por ciudad.  
- `POST /register` → recibe `{ "username": "Nombre", "email": "correo@ejemplo.com" }` y guarda el usuario.  
- `GET /usuarios` → devuelve la lista de usuarios registrados.

---

## 5. Lugares
> Todos los lugares mostrados se obtienen en tiempo real de la **base de datos PostgreSQL en Neon**.  
> Se pueden filtrar por ciudad desde la app. Para ver los datos reales, se recomienda usar la aplicación desplegada.

## Lugares de ejemplo cargados en la base de datos

| Nombre                   | Dirección                | Ciudad                | País    |
|--------------------------|-------------------------|----------------------|--------|
| El Rincón Canino         | Carrer de Mallorca 210  | Barcelona            | España |
| Woof Coffee              | Carrer de Blai 15       | Barcelona            | España |
| Patas & Copas            | Avenida del Puerto 44   | Valencia             | España |
| El Jardín Peludo         | Calle de la Paz 8       | Valencia             | España |
| Café Canino              | Rúa Real 30             | A Coruña             | España |
| Mar y Huellas            | Praza do Obradoiro 2    | Santiago de Compostela | España |
| Playa y Pata             | Avenida Andalucía 56    | Cádiz                | España |
| Perruno Bar              | Calle Ancha 12          | Cádiz                | España |
| Restaurante PetFriendly  | Calle 123               | Madrid               | España |
| Parque Canino            | Avenida Perros 45       | Barcelona            | España |
| Cafetería Mascotas       | Plaza Mayor 7           | Sevilla              | España |
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

## 7. Cómo probar la aplicación

### Versiones desplegadas
- **Front-end:** [https://dog-friendly-frontend.vercel.app](https://dog-friendly-frontend.vercel.app)  
- **Back-end:** [https://dogfriendly-backend.onrender.com](https://dogfriendly-backend.onrender.com)

### Levantar localmente (opcional)
Si quieres ejecutar la app en tu máquina:

# Backend
```bash
cd backend
python -m venv venv       # crear entorno virtual
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows
pip install -r requirements.txt
uvicorn main:app --reload
```

# Frontend
cd ../frontend
npm install
npm start

### Requisitos
- **Python:** 3.10+
- **Node.js:** 20+
- **npm:** 10+
- **Dependencias principales Backend:**
  - FastAPI
  - SQLAlchemy
  - psycopg2-binary
  - pydantic[email]
  - python-dotenv
  - uvicorn
- **Dependencias principales Frontend:**
  - React
  - Axios

## 8. Información adicional
- La aplicación puede usarse **completamente como invitado**.  
- Al seleccionar una ciudad, se muestran los **lugares almacenados en la base de datos Neon**.  
- Se agregó un **sistema básico de registro y bienvenida personalizada**.  

### 💡 Futuras mejoras
- Incorporar un **mapa interactivo** para ubicar restaurantes pet-friendly.  
- Añadir un **sistema de reseñas y calificaciones** para los locales.  
- Posibilidad de **marcar favoritos** o añadir nuevos lugares por parte de los usuarios.