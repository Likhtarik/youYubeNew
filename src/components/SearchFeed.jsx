import { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

import { fetchAPI } from '../utils/fetchAPI';
import { Videos } from './';

const SearchFeed = () => {
    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items));
    }, [searchTerm]);

    return (
        <Box p={2} minHeight="95vh" sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
            <Typography variant="h4" fontWeight={900} color="white" mb={3} ml={{ sm: '100px' }}>
                Search Results for <span style={{ color: '#FC1503' }}>{searchTerm}</span> videos
            </Typography>

            <Videos videos={videos} />
        </Box>
    );
};

export default SearchFeed;
