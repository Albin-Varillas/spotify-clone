import React from 'react'
import { Box, Divider } from '@mui/material'
import { Link } from 'react-router-dom'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import ListIcon from '@mui/icons-material/List'
import SidebarPlaylistItem from './SidebarPlaylistItem'
import { useSelector } from 'react-redux'

export default function Sidebar() {
    const { albumList } = useSelector((state) => state.playlist)

    console.log(albumList)

    return (
        <Box
            sx={{
                bgcolor: 'background.default',
                width: 230,
                height: '100%',
                flexDirection: 'column',
                display: { xs: 'none', md: 'flex' },
            }}
        >
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Box
                    px={3}
                    py={1}
                    sx={{
                        color: 'text.primary',
                        fontWeight: 'bold',
                        fontSize: 14,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <HomeRoundedIcon sx={{ fontSize: 28, marginRight: 1 }} />{' '}
                    Home
                </Box>
            </Link>
            <Link to="/library" style={{ textDecoration: 'none' }}>
                <Box
                    px={3}
                    py={1}
                    sx={{
                        color: 'text.primary',
                        fontWeight: 'bold',
                        fontSize: 14,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <ListIcon sx={{ fontSize: 28, marginRight: 1 }} /> Ditt
                    bibliotek
                </Box>
            </Link>

            <Box px={3} py={1}>
                <Divider />
            </Box>

            <Box sx={{ flex: 1, overflowY: 'auto' }}>
                {albumList.map((album) => (
                    <SidebarPlaylistItem
                        key={album.id}
                        id={album.id}
                        name={album.name}
                    />
                ))}
            </Box>
        </Box>
    )
}
