import React from 'react'
import { Box, Container, Grid, IconButton, Typography } from '@mui/material'
import { KeyboardArrowDown } from '@mui/icons-material'
import PlayerController from './PlayerController'

export default function PlayerOverlay({
    playerOverlayIsOpen,
    closeOverlay,
    song,
    progress,
    is_paused,
    duration,
    player,
}) {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                position: 'fixed',
                height: 'calc(100vh - 75px)',
                transform: playerOverlayIsOpen
                    ? 'translateY(0px)'
                    : 'translateY(100vh)',
                transition: '300ms',
                top: 0,
                left: 0,
                width: '100%',
                display: { xs: 'block', md: 'none' },
            }}
        >
            <Container
                sx={{
                    height: '100%',
                    background: 'linear-gradient(#121212, #f0790050)',
                }}
            >
                <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    sx={{ height: '100%' }}
                >
                    <Grid
                        item
                        xs={1}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            position: 'relative',
                        }}
                    >
                        <IconButton onClick={closeOverlay}>
                            <KeyboardArrowDown
                                fontSize="large"
                                sx={{ color: 'text.primary' }}
                            />
                        </IconButton>
                    </Grid>
                    <Grid
                        item
                        xs={5}
                        sx={{
                            backgroundImage: `url("${song?.album.images[0]?.url}")`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            objectFit: 'cover',
                        }}
                    ></Grid>
                    <Grid item xs={1}>
                        <Typography
                            variant="body1"
                            sx={{ color: 'text.primary', fontSize: 28 }}
                        >
                            {song.name}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ color: 'text.primary', fontSize: 18 }}
                        >
                            {song.artists[0].name}
                        </Typography>
                    </Grid>
                    <Grid item sx={2}>
                        <PlayerController
                            progress={progress}
                            is_paused={is_paused}
                            duration={duration}
                            player={player}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
