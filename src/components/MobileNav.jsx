import React from 'react'
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material'
import { Home, List } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

export default function MobileNav() {
    const navigate = useNavigate()

    return (
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <BottomNavigation sx={{ bgcolor: 'background.paper' }} showLabels>
                <BottomNavigationAction
                    label="Home"
                    icon={<Home />}
                    onClick={() => navigate('/')}
                />
                <BottomNavigationAction
                    label="Ditt biblotek"
                    icon={<List />}
                    onClick={() => navigate('/library')}
                />
            </BottomNavigation>
        </Box>
    )
}
