import React from 'react'
import { Box, Avatar, Typography } from '@mui/material'
import SongTable from '../components/SongTable'

export default function Playlist() {
    return (
        <Box sx={{ bgcolor: 'background.paper', flex: 1, overflowY: 'auto' }}>
            <Box
                p={{ xs: 3, md: 4 }}
                sx={{
                    width: '100%',
                    display: 'flex',
                    background: 'linear-gradient( #f0790070, #121212)',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 3,
                    boxSizing: 'border-box',
                }}
            >
                <Avatar
                    variant="square"
                    src="https://upload.wikimedia.org/wikipedia/en/b/b9/Myworld2.jpg"
                    sx={{
                        boxShadow: 15,
                        width: { sx: '100%', md: 235 },
                        height: { sx: '100%', md: 235 },
                    }}
                />
                <Box>
                    <Typography
                        sx={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: 'text.primary',
                        }}
                    >
                        playlist
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: 42, md: 72 },
                            fontWeight: 'bold',
                            color: 'text.primary',
                        }}
                    >
                        My world 2.0
                    </Typography>
                </Box>
            </Box>

            <SongTable />
        </Box>
    )
}
