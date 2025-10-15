"use client"

import { MapPin, Calendar, X } from "lucide-react"
import { useState } from "react"

export interface Setlist {
  id?: string
  date: string
  venue: string
  city: string
  country?: string
  songs: string[]
}

interface Props {
  data: Setlist[]
}

export default function RecentSetlists({ data }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openModal = (index: number) => {
    setSelectedIndex(index)
  }

  const closeModal = () => {
    setSelectedIndex(null)
  }

  const currentSetlist = selectedIndex !== null ? data[selectedIndex] : null
  
  if (!data || data.length === 0) {
    return <div className="text-gray-400">No hay setlists disponibles</div>
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <MapPin className="w-6 h-6 text-[#c62828]" />
        <h2 className="text-2xl font-bold text-[#fbc02d]">Recent Setlists</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data.map((setlist, index) => (
          <button
            key={setlist.id || index}
            onClick={() => openModal(index)}
            className="bg-[#1a1a1a] rounded-lg px-4 py-3 hover:bg-[#2a2a2a] transition-colors text-left cursor-pointer border border-transparent hover:border-[#c62828]"
          >
            <div className="flex items-center gap-4">
              <Calendar className="w-5 h-5 text-[#c62828]" />
              <div>
                <div className="font-bold text-gray-200">{setlist.date}</div>
                <div className="text-sm text-gray-400">
                  {setlist.venue} • {setlist.city}
                  {setlist.country && `, ${setlist.country}`}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && currentSetlist && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" 
          onClick={closeModal}
        >
          <div
            className="bg-[#1a1a1a] rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#c62828] px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#f5e6d3]">{currentSetlist.date}</h3>
                <p className="text-sm text-[#f5e6d3]/80">
                  {currentSetlist.venue} • {currentSetlist.city}
                  {currentSetlist.country && `, ${currentSetlist.country}`}
                </p>
              </div>
              <button 
                onClick={closeModal} 
                className="text-[#f5e6d3] hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-100px)]">
              {currentSetlist.songs && currentSetlist.songs.length > 0 ? (
                <div className="space-y-2">
                  {currentSetlist.songs.map((song, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 py-2 px-3 rounded hover:bg-[#2a2a2a] transition-colors"
                    >
                      <span className="text-[#c62828] font-bold text-lg w-8">{index + 1}.</span>
                      <span className="text-gray-200 text-lg">{song}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-gray-400 text-center py-8">
                  No hay canciones disponibles para este setlist
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}