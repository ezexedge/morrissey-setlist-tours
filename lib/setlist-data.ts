export interface SongStats {
  title: string
  plays: number
  percent: number
  probNext: number
  fire: boolean
}

export const songStats: SongStats[] = [
  { title: "Everyday Is Like Sunday", plays: 51, percent: 100, probNext: 0.99, fire: true },
  { title: "I Know It's Over", plays: 38, percent: 95, probNext: 0.95, fire: true },
  { title: "Alma Matters", plays: 40, percent: 83, probNext: 0.9, fire: true },
  { title: "There Is a Light That Never Goes Out", plays: 40, percent: 85, probNext: 0.87, fire: true },
  { title: "Jack the Ripper", plays: 22, percent: 62, probNext: 0.6, fire: false },
  { title: "First of the Gang to Die", plays: 36, percent: 85, probNext: 0.86, fire: true },
  { title: "Lost", plays: 35, percent: 80, probNext: 0.85, fire: true },
  { title: "Shoplifters of the World Unite", plays: 35, percent: 80, probNext: 0.82, fire: true },
  { title: "Life Is a Pigsty", plays: 34, percent: 79, probNext: 0.8, fire: false },
  { title: "Suedehead", plays: 33, percent: 77, probNext: 0.78, fire: false },
  { title: "How Soon Is Now?", plays: 32, percent: 75, probNext: 0.79, fire: false },
  { title: "Let Me Kiss You", plays: 30, percent: 73, probNext: 0.75, fire: false },
  { title: "The Loop", plays: 28, percent: 70, probNext: 0.72, fire: false },
  { title: "All the Lazy Dykes", plays: 27, percent: 68, probNext: 0.7, fire: false },
  { title: "Irish Blood, English Heart", plays: 26, percent: 67, probNext: 0.69, fire: false },
  { title: "I Will See You in Far-Off Places", plays: 25, percent: 65, probNext: 0.67, fire: false },
  { title: "Last Night I Dreamt That Somebody Loved Me", plays: 24, percent: 63, probNext: 0.66, fire: false },
  { title: "I Won't Share You", plays: 20, percent: 60, probNext: 0.62, fire: false },
  { title: "Dear God Please Help Me", plays: 18, percent: 58, probNext: 0.6, fire: false },
  { title: "I Ex-Love You", plays: 17, percent: 57, probNext: 0.58, fire: false },
  { title: "I Wish You Lonely", plays: 16, percent: 55, probNext: 0.57, fire: false },
  { title: "Rebels Without Applause", plays: 14, percent: 53, probNext: 0.55, fire: false },
  { title: "I Am Veronica", plays: 12, percent: 50, probNext: 0.52, fire: false },
  { title: "Scandinavia", plays: 10, percent: 48, probNext: 0.5, fire: false },
  { title: "Speedway", plays: 8, percent: 45, probNext: 0.47, fire: false },
  { title: "Bonfire of Teenagers", plays: 6, percent: 43, probNext: 0.45, fire: false },
  { title: "Spring-Heeled Jim", plays: 5, percent: 40, probNext: 0.42, fire: false },
  { title: "Please, Please, Please Let Me Get What I Want", plays: 4, percent: 38, probNext: 0.4, fire: false },
  { title: "Darling, I Hug a Pillow", plays: 3, percent: 35, probNext: 0.38, fire: false },
]

export function getSongStatistics(): SongStats[] {
  return songStats
}
