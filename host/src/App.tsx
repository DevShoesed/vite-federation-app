import { loadRemoteModule } from '@softarc/native-federation';
import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <div className='header'>
          <a href="/mfe1">
            Microfrontend 1
          </a> -
          <a href="/mfe2">
            Microfrontend 2
          </a> -
          <a href="/refine">
            Refine
          </a>
        </div>
        
        <div className='container card'>
          <Routes>
            <Route index path='/' element={<div className='card'>Choose Microfrontend</div>} />
            
            <Route path='/refine/*' Component={() => {
              const RefineApp = React.lazy(
                async () => await import("./refineApp")
              );
              return (
                <React.Suspense fallback={<div>Microfrontend Loading...</div>}>
                  <RefineApp />
                </React.Suspense>
                )
            }} />
              
            <Route path='/mfe1/*' Component={() => {
              const Mfe1 = React.lazy(
                async () => await loadRemoteModule('mfe1', './remote-app')
              );
              return (
                <React.Suspense fallback={<div>Microfrontend Loading...</div>}>
                  <Mfe1 />
                </React.Suspense>)
            }} />

            <Route path='/mfe2/*' Component={() => {
              const Mfe2 = React.lazy(
                async () => await loadRemoteModule('mfe2', './remote-app')
              );
              return (
                <React.Suspense fallback={<div>Microfrontend Loading...</div>}>
                  <Mfe2 />
                </React.Suspense>)
            }} />

          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
