import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Sidebar from './Sidebar'
import Playlist from '../pages/Playlist'
import { getAccessTokenFromStorage } from '../utils/getAccessTokenFromStorage'
import { useSelector, useDispatch } from 'react-redux'
import { getPlaylist } from '../store/playlistSlice'

export default function Dashboard() {
    const spotifyApi = useSelector((state) => state.spotifyApi)
    console.log(spotifyApi)
    const dispatch = useDispatch()

    useEffect(() => {
        const accessToke = getAccessTokenFromStorage()

        if (accessToke) {
            async function onMount() {
                await spotifyApi.setAccessToken(accessToke)
                dispatch(getPlaylist(spotifyApi))
            }
            onMount()
        }
    }, [])

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box sx={{ flex: 1, overflowY: 'auto', display: 'flex' }}>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/library" element={<div>library</div>} />
                    <Route path="/playlist/:id" element={<Playlist />} />
                </Routes>
            </Box>
        </Box>
    )
}
