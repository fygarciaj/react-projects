import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter } from 'react-router-dom';
import { Sanctum } from "react-sanctum";

const sanctumConfig = {
  apiUrl: "http://miestacion.test",
  csrfCookieRoute: "sanctum/csrf-cookie",
  signInRoute: "login",
  signOutRoute: "logout",
  userObjectRoute: "user",
};

// https://github.com/koole/react-sanctum

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Sanctum config={sanctumConfig}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Sanctum>
  </React.StrictMode>,
)
