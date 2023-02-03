import React from 'react'
import { Grid, Avatar, Card, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function LibraryCard({ album }) {
    const navigate = useNavigate()
    return (
        <Grid item xs={6} sm={4} md={3} lg={2}>
            <Card
                onClick={() => navigate(`/playlist/${album.id}`)}
                sx={{
                    borderRadius: 2,
                    padding: 3,
                    boxSizing: 'border-box',
                    bgcolor: '#222',
                    cursor: 'pointer',
                }}
            >
                <Avatar
                    variant="square"
                    src={album.images[0]?.url}
                    sx={{
                        width: '100%',
                        height: '100%',
                        aspectRatio: '1/1',
                        marginBottom: 1,
                    }}
                />
                <Typography sx={{ color: 'text.primary', fontSize: 16 }} noWrap>
                    {album.name}
                </Typography>
                <Typography
                    sx={{
                        color: 'text.secondary',
                        fontSize: 14,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '2',
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {album.description}
                </Typography>
            </Card>
        </Grid>
    )
}
