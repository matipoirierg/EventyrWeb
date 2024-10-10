import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PlayerCount from "@/components/playercount";
import customize from "./customize";
import Animationcomponent from "@/components/animationcomponent";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center p-4 text-white">
      <div className="z-10 flex flex-col items-center">
        <Animationcomponent
          src="/img/logo.png"
          alt="Server Logo"
          width={300}
          height={300}
          className="w-48 md:w-64 lg:w-80 mb-8"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-xl mb-8">
          <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <Link href={customize.Discord} target="_blank" rel="noopener noreferrer">
              Discord
            </Link>
          </Button>
          <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <Link href={customize.Store} target="_blank" rel="noopener noreferrer">
              Store
            </Link>
          </Button>
          <Button asChild className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <Link href="/vote" target="_blank" rel="noopener noreferrer">
              Vote
            </Link>
          </Button>
          <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <Link href={customize.Webmap} target="_blank" rel="noopener noreferrer">
              Map
            </Link>
          </Button>
        </div>
        
        <div className="bg-teal-700 border-2 border-teal-400 rounded-lg px-4 py-2 font-sans font-medium text-center">
          <PlayerCount />
        </div>
      </div>
    </div>
  );
}