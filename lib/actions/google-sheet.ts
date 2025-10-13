'use server';

export async function getSetlistData() {
  try {

    const sheetId = process.env.GOOGLE_SHEET_ID
    const url = `${process.env.GOOGLEE_SHEET_URL}/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;

    console.log(`URL: ${url}`);

    const res = await fetch(url);
    
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }

    const text = await res.text();
    
    const cleanedText = text.substring(47).slice(0, -2);

    const json = JSON.parse(cleanedText);

    const cols = json.table.cols;
    const headers = cols.map((c: any) => (c.label || "").toLowerCase().trim());
    

    const rows = json.table.rows;

    const data = rows.map((r: any, index: number) => {
      const cells = r.c; 
      const obj: Record<string, any> = {};
      
      headers.forEach((h: string, idx: number) => {
        const cell = cells[idx];
        obj[h] = cell ? cell.v : null;
      });

      return obj;
    });


    return {
      success: true,
      data: data
    };

  } catch (error) {

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}