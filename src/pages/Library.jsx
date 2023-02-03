import React from 'react'
import { Box, Grid, Card, Typography } from '@mui/material'
import LibraryCard from '../components/LibraryCard'
import { useSelector } from 'react-redux'

export default function Library() {
    const { albumList } = useSelector((state) => state.playlist)

    return (
        <Box
            p={3}
            sx={{
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                overflowY: 'auto',
            }}
        >
            <Typography
                sx={{ color: 'text.primary', fontSize: 30, fontWeight: 'bold' }}
            >
                Ditt bibliokktet
            </Typography>
            <Grid container spacing={3}>
                {albumList?.map((album, i) => (
                    <LibraryCard album={album} />
                ))}
            </Grid>
        </Box>
    )
}
