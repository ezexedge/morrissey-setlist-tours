'use server';

export async function getRecentSetlistData() {
  try {
    const allSetlists = [];
    const mbid = "013fa897-86db-41d3-8e9f-386c8a34f4e6";
    const apiKey  = "3GdVuvJWU1jrbzo1-JxPdXlI5SJwQZhIW-75";
    const year = 2025;
    const maxPages = 2;

    for (let page = 1; page <= maxPages; page++) {
      const url = `https://api.setlist.fm/rest/1.0/artist/${mbid}/setlists?year=${year}&p=${page}`;


      const response = await fetch(url, {
        headers: {
          "Accept": "application/json",
          "x-api-key": apiKey,
        }      });

      if (!response.ok) {
        break;
      }

      const data = await response.json();

      if (!data.setlist || data.setlist.length === 0) {
        break;
      }

      for (const s of data.setlist) {
        const songs = s.sets?.set?.flatMap((a: any) => a.song.map((x: any) => x.name)) || [];
        allSetlists.push({
          date: s.eventDate,
          city: s.venue?.city?.name || "N/A",
          venue: s.venue?.name || "N/A",
          tour: s.tour?.name || "N/A",
          songs,
        });
      }
    }
    const currentYear = new Date().getFullYear()
    const dataCurrentYear = allSetlists.map((setList,i)=> {
        const year = setList?.date.split("-")[2]
        if(Number(year) === Number(currentYear) && i <= 6 ){
            return setList
        }else{
            return
        }
    }).slice(0,6)

    return {
      success: true,
      data: dataCurrentYear,
      total: allSetlists.length
    };

  } catch (error) {
    console.error("❌ Error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Error desconocido"
    };
  }
}