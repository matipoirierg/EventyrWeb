'use client'
import customize from '@/app/customize'
import { useState, useEffect } from 'react'
export default function PlayerCount() {


  const [playerCount, setPlayerCount] = useState(null)

  useEffect(() => {
    const fetchPlayerCount = async () => {
      try {
        const response = await fetch(`https://api.mcsrvstat.us/2/${customize.Yourserverip}`)
        const data = await response.json()
        setPlayerCount(data.players?.online || 0)
      } catch (error) {
        console.error('Failed to fetch player count:', error)
      }
    }

    fetchPlayerCount()
    const interval = setInterval(fetchPlayerCount, 30000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="playercount">
      <p>
        Join <span className='bg-teal-600 px-2 rounded'>{playerCount !== null ? playerCount : '...'}</span> other players at{' '}
        <span className='bg-teal-600 px-2 rounded'>{customize.Yourserverip}</span>
      </p>
    </div>
  )
}