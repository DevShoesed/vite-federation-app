import React from "react";
// import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom/client';
import App from './App.tsx'
import './index.css'

// const container = document.getElementById("root") as HTMLElement;
// const root = createRoot(container);

// root.render(
//   <React.StrictMode>
//     <React.Suspense fallback="loading">
//       <App />
//     </React.Suspense>
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
    <React.Suspense fallback="loading">
		  <App />
    </React.Suspense>
	</React.StrictMode>
);
