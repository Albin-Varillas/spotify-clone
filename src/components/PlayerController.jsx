import React from 'react'
import { Stack, IconButton, Typography, Slider } from '@mui/material'
import { SkipPrevious, SkipNext, PlayArrow } from '@mui/icons-material'
import PlayerVolume from './PlayerVolume'

export default function PlayerController({
    player,
    is_paused,
    duration,
    progess,
}) {
    return (
        <Stack
            spacing={0}
            justifyContent="center"
            alignItems="center"
            sx={{ width: '100%' }}
        >
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
            >
                <IconButton
                    size="small"
                    sx={{ color: 'text.secondary' }}
                    onClick={() => {
                        player.previousTrack()
                    }}
                >
                    <SkipPrevious sx={{ width: 28, height: 28 }} />
                </IconButton>
                <IconButton
                    size="small"
                    sx={{ color: 'text.secondary' }}
                    onClick={() => {
                        player.togglePlay()
                    }}
                >
                    <PlayArrow sx={{ width: 28, height: 28 }} />
                </IconButton>
                <IconButton
                    size="small"
                    sx={{ color: 'text.secondary' }}
                    onClick={() => {
                        player.nextTrack()
                    }}
                >
                    <SkipNext sx={{ width: 28, height: 28 }} />
                </IconButton>
            </Stack>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{ width: '75%' }}
            >
                <Typography
                    variant="body1"
                    sx={{ color: 'text.secondary', fontSize: 12 }}
                >
                    1:23
                </Typography>
                <Slider size="medium" />
                <Typography
                    variant="body1"
                    sx={{ color: 'text.secondary', fontSize: 12 }}
                >
                    3:34
                </Typography>
            </Stack>
        </Stack>
    )
}
