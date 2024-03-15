import React from 'react'

import { urbanist } from 'src/app/fonts'

function Navbar (): JSX.Element {
  return (
    <div className="flex flex-row items-center justify-between p-4">
      <h1 className={`text-3xl ${urbanist.className}`}>Eliandro</h1>
    </div>
  )
}

export default Navbar
