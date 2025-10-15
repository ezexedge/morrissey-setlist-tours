"use client"

import { Container, Typography, Box, ThemeProvider, createTheme, CssBaseline } from "@mui/material"
import SongStatsView from "@/components/song-stats-view"

import { Jost, Rosarivo } from "next/font/google"
import Footer from "./footer"
import RecentSetlists from "./recent-setlists"

const jost = Jost({
  variable: "--font-jost-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

const rosarivo = Rosarivo({
  variable: "--font-rosarivo",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#c62828" },
    secondary: { main: "#fbc02d" },
    background: { default: "#0a0a0a", paper: "#1a1a1a" },
    text: { primary: "#e0e0e0", secondary: "#bdbdbd" },
  },
  typography: {
    fontFamily: `var(--font-rosarivo)`,
    h3: {
      fontWeight: 400,
      letterSpacing: "-0.02em",
    },
    h5: {
      fontWeight: 400,
    },
  },
})

interface Props {
  data: any
  recentData: any
}

export default function MorrisseyClientWrapper({ data,recentData }: Props) {
  return (
    <div className={`${jost.variable} ${rosarivo.variable}`}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ minHeight: "100vh", bgcolor: "background.default", py: 6 }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography variant="h3" component="h1" gutterBottom color="#fbc02d">
                Morrissey Live Stats
              </Typography>
   <Typography
  variant="h6"
  color="#bdbdbd"
  sx={{ maxWidth: 600, mx: "auto", textAlign: "center" }}
>
  Discover which songs he plays most in his concerts
</Typography>

<Typography
  variant="body2"
  color="#9e9e9e"
  sx={{ textAlign: "center", mt: 0.5 }}
>
  Updated on{" "}
  <Box component="span" color="#fbc02d" fontWeight={600}>
    {new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })}
  </Box>
</Typography>

            </Box>

      <div className="mb-8">
        <RecentSetlists data={recentData} />
      </div>

      <div></div>

            {!data ? (
              <Box sx={{ textAlign: "center", py: 4 }}>
                <Typography color="error" variant="h6">
                  Failed to load setlist data
                </Typography>
              </Box>
            ) : (
              <SongStatsView data={data} />
            )}
          </Container>
        </Box>
                  <Footer/>

      </ThemeProvider>
    </div>
  )
}
