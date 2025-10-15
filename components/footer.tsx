"use client";

import { Box, Typography, Link } from "@mui/material";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<string>("");

  useEffect(() => {
    const currentYear = new Date().getFullYear().toString();
    setYear(currentYear);
  }, []);

  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 3,
        textAlign: "center",
        borderTop: "1px solid #2a2a2a",
        bgcolor: "#1a1a1a",
      }}
    >
      <Typography variant="body2" color="#bdbdbd">
        © {year}{" "}
        <Link
          href="https://www.200hub.tech/"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          sx={{ color: "#fbc02d", fontWeight: 600 }}
        >
          200hub
        </Link>{" "}
        — All rights reserved.
      </Typography>

      <Typography variant="caption" color="#757575" display="block" mt={0.5}>
        Crafted with ❤️ by 200hub
      </Typography>
    </Box>
  );
}
