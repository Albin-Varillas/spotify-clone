import React from "react"
import { Box, Grid } from "@mui/material"
import { AccessTimeRounded } from "@mui/icons-material"

export default function SongTable() {
    return (
        <Box p={{ xs: 3, md: 4 }}>
            <Grid
                container
                px={2}
                py={1}
                sx={{ width: "100%", color: "text.secondary", fontSize: 14 }}
            >
                <Grid item sx={{ width: 35 }}>
                    #
                </Grid>
                <Grid item sx={{ flex: 1 }}>
                    Title
                </Grid>
                <Grid item xs={3} sx={{ display: { sx: "none", md: "flex" } }}>
                    Album
                </Grid>
                <Grid item xs={3} sx={{}}>
                    <AccessTimeRounded sx={{ width: 20, heigth: 20 }} />
                </Grid>
            </Grid>
        </Box>
    )
}
