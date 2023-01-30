import React from "react"
import { Link } from "react-router-dom"
import { Box } from "@mui/material"
import { color } from "@mui/system"

export default function SidebarPlaylistItem() {
    return (
        <Link to="/" style={{ textDecoration: "none" }}>
            <Box
                px={3}
                py={1}
                sx={{
                    color: "text.secondary",
                    cursor: "pointer",
                    fontSize: 14,
                }}
            >
                Justin Beiber
            </Box>
        </Link>
    )
}
