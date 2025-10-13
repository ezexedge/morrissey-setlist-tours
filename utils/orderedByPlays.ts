import { SongData } from "@/components/song-stats-view"

export const orderedByPlays = (songs:SongData[]): SongData[] => {

  return [...songs].sort((a, b) => (b.plays || 0) - (a.plays || 0)) as SongData[]


}