import React from "react";
import ReactDOM from "react-dom/client";


const App = ()=>{
    return <h1>Rich and Morty app</h1>
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App/>)

