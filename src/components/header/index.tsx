import Image from "next/image"
import logo from 'public/logo.svg'

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-7xl font-bold align-top w-[400px]">who are you?</h1>
      <div className="">
        <Image
          src={logo}
          alt="logo"
          width={50}
          height={50}
          className="mt-6"
        />
      </div>
    </div>
  )
}

export default Header