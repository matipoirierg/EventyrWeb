import Link from 'next/link'
import voteLinks from '../votelinks'

export default function Vote() {
  return (
    <div className="min-h-screen p-8 flex items-center">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <Link href="./" className="inline-block mb-8">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
              ← VOLVER
            </button>
          </Link>

          <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-8">
            <span className="border-b-4 border-yellow-400 pb-2">LINKS</span>
          </h1>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {voteLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-6 shadow-lg transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                  <h2 className="text-2xl font-bold text-white mb-2">Link #{link.id}</h2>
                  <p className="text-blue-100 group-hover:text-yellow-200 transition duration-300">
                    {link.site}
                  </p>
                  <p className="text-xs text-blue-200 mt-2">Cooldown 24h</p>
                  <div className="mt-4 text-yellow-300 group-hover:text-white transition duration-300">
                    Click to vote! →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
