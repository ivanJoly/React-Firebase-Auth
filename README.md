# React-Firebase  Auth  
  
Aplicación reutilizable para autenticación de usuarios con **React** y **Firebase** como backend.  
  
## Installation  
  
```bash  
npm  install  
```

## Usage
Luego de instarlo se debe crear un archivo de credenciales de firebase para tener una correcta conexión con el backend.  
  
El archivo debe estar en la carpeta "/src/config/firebase.js"
  
```js  
  
const  config ={apiKey: "",  
authDomain: "",  
databaseURL: "",  
projectId: "",  
storageBucket: "",  
messagingSenderId: "",  
appId: ""  
};  
  
export  default  config;  
```El archivo tiene que ser igual a este formato, pero con los datos de tus credenciales de Firebase.  
  
Luego ejecutar la acción de create-react-app y utilizarla como uno desee.
```bash  
npm  start  
```

## License
eccentricfoxestudio@gmail.com
www.eccentricfox.com.ar
