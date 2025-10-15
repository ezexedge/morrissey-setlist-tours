import MorrisseyClientWrapper from "@/components/morrissey-client-wrapper"
import { getSetlistData } from "@/lib/actions/google-sheet"
import { getRecentSetlistData } from "@/lib/actions/set-list"
import { RedisService } from "@/lib/services/Redis.service"
import { formatDate } from "@/utils/date"
import { orderedByPlays } from "@/utils/orderedByPlays"


export default async function MorrisseySetlistsPage() {

  const recentSetListData = await getRecentSetlistData();

  const date = new Date()
 const dateResult = formatDate(date)

 const cacheKey = `get:data:${dateResult}`

 const getCache = await RedisService.get(cacheKey)

 if(getCache){

  const orderedByPlaysData = orderedByPlays(getCache)
  
   return <MorrisseyClientWrapper data={orderedByPlaysData} recentData={recentSetListData.data} />
 }

  const result = await getSetlistData()

  const setlistData = result.success ? result.data : null


  const twoDaysInSeconds = 172800
  await RedisService.set(cacheKey,setlistData,twoDaysInSeconds)
  
  if (!result.success) {
    console.error('[MORRISSEY-SSR] Failed to load data:', result.error)
  } else {
    console.log('[MORRISSEY-SSR] Successfully loaded', setlistData?.length || 0, 'rows')
  }

  return <MorrisseyClientWrapper data={setlistData} recentData={recentSetListData.data} />
}
