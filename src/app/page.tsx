import React from 'react'

import { urbanist } from './fonts'

function Home (): JSX.Element {
  return (
    <div className="container mx-auto flex h-screen flex-col items-center justify-center">
      <p className="text-2xl">Este Portifolio está</p>
      <h1 className={`text-5xl ${urbanist.className}`}>Em desenvolvimento</h1>
    </div>
  )
}
export default Home
