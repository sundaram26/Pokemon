import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"

function App() {

  return (
    <main className="h-full w-full bg-orange-300">
      <Navbar />
      <section className="max-h-screen w-full px-10 py-5">
        <Card /> 
      </section>
    </main>
  )
}

export default App
