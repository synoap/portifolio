import { Urbanist } from 'next/font/google'

const montserrat = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  weight: '700'
})

function Navbar (): JSX.Element {
  return (
    <div className="flex flex-row items-center justify-between border-b-2 border-blue-500 p-4">
      <h1 className={`text-3xl ${montserrat.className}`}>Eliandro</h1>
    </div>
  )
}

export default Navbar
