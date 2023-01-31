import { createSlice } from '@reduxjs/toolkit'
import SpotifyWebApi from 'spotify-web-api-node'
import { redirectURL } from '../config'

const initialState = new SpotifyWebApi({
    clientId: import.meta.env.VITE_CLIENT_ID,
    clientSecret: import.meta.env.VITE_CLIENT_SECRET,
    redirectUri: redirectURL,
})

export const spotifyApiSlice = createSlice({
    name: 'spotify API',
    initialState,
    reducer: async (state, playload) => {},
})

export default spotifyApiSlice.reducer
