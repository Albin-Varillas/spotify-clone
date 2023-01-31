import { configureStore } from '@reduxjs/toolkit'
import spotifyApiReducer from './spotifyApiSlice'
import PlaylistReducer from './playlistSlice'

export const store = configureStore({
    reducer: {
        spotifyApi: spotifyApiReducer,
        playlist: PlaylistReducer,
    },
})
