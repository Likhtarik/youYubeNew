import React from 'react';
import { useState, useEffect } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { Sidebar, Videos } from './index';

import { fetchAPI } from '../utils/fetchAPI';

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos_1, setVideos] = useState([]);
    //
    useEffect(() => {
        fetchAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items));
    }, [selectedCategory]);
    //
    return (
        <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
            {/* левая часть sidebar  */}
            {/*  */}
            {/*  */}
            <Box
                sx={{
                    height: { sx: 'auto', md: '92vh' },
                    borderRight: '1px solid #3d3d3d',
                    px: { sx: 0, md: 2 },
                }}
            >
                <Sidebar
                    selectedCategory_1={selectedCategory}
                    setSelectedCategory_2={setSelectedCategory}
                />
                <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff' }}>
                    Copyright 2022 JSM Media
                </Typography>
            </Box>
            {/* end */}
            {/*  */}
            {/*  */}
            {/* правый столбик, мы задали направление в <Stck></Stck> */}
            <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
                <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
                    {selectedCategory}
                    <span style={{ color: '#F31503' }}> videos</span>
                </Typography>
                <Videos videos={videos_1} />
            </Box>
        </Stack>
    );
};

export default Feed;
