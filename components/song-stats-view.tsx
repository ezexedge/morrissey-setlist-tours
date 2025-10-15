"use client"

import {
  Box,
  Typography,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
  Chip,
} from "@mui/material"
import { TrendingUp, Whatshot } from "@mui/icons-material"

export interface SongData{
 song: string;
      plays: number;
      percent:  number;
      prob_next: number;
      fire: boolean;
    }



interface Props {
  data:SongData[]
}

export default function SongStatsView({data}: Props) {
console.log("88888",data)

const maxPercent = Math.max(...data.map((s) => s.percent));

  return (
    <Box>

      <Stack direction="row" alignItems="center" spacing={1} mb={3}>
        <TrendingUp sx={{ color: "#c62828" }} />
        <Typography variant="h5" fontWeight={700} color="#fbc02d">
          Most Played Songs This Year
        </Typography>
      </Stack>

      <TableContainer component={Paper} sx={{ borderRadius: 2, bgcolor: "#1a1a1a" }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#2a2a2a" }}>
              <TableCell sx={{ fontWeight: 700, width: "80px", color: "#fbc02d" }}>Rank</TableCell>
              <TableCell sx={{ fontWeight: 700, color: "#fbc02d" }}>Song</TableCell>
              <TableCell sx={{ fontWeight: 700, width: "120px", textAlign: "center", color: "#fbc02d" }}>
                Times Played
              </TableCell>
              <TableCell sx={{ fontWeight: 700, width: "120px", textAlign: "center", color: "#fbc02d" }}>
                Probability
              </TableCell>
              <TableCell sx={{ fontWeight: 700, width: "200px", color: "#fbc02d" }}>Frequency</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((song:SongData, index:number) => (
              <TableRow
                key={song.song}
                sx={{
                  "&:hover": { bgcolor: "#2a2a2a" },
                  bgcolor: song.fire ? "rgba(198, 40, 40, 0.15)" : "inherit",
                }}
              >
                <TableCell>
                  <Chip
                    label={`#${index + 1}`}
                    size="small"
                    sx={{
                      fontWeight: 700,
                      bgcolor: index < 3 ? "#c62828" : "#424242",
                      color: "#fff",
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    {song.fire && <Whatshot sx={{ color: "#c62828", fontSize: 20 }} />}
                    <Typography variant="body1" fontWeight={song.fire ? 700 : 600} color="#e0e0e0">
                      {song.song}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="h6" color="#fbc02d" fontWeight={700}>
                    {song.plays}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body2" color="#bdbdbd">
                    {Math.round(song.prob_next * 100)}%
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                    
                    </Box>
<LinearProgress
  variant="determinate"
  value={(song.percent / maxPercent) * 100}
  sx={{
    height: 6,
    borderRadius: 1,
    bgcolor: "#424242",
    "& .MuiLinearProgress-bar": {
      bgcolor: song.fire ? "#c62828" : "#fbc02d",
    },
  }}
/>

                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
