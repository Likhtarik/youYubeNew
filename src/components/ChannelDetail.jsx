import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

//
import { Videos, ChannelCard } from './';
import { fetchAPI } from '../utils/fetchAPI';
//
const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);
    const { id } = useParams();
    //
    //
    console.log(channelDetail, videos);
    useEffect(() => {
        fetchAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));
        fetchAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
            setVideos(data?.items)
        );
    }, [id]);
    return (
        <Box minHeight="95vh">
            <Box>
                <div
                    style={{
                        background:
                            'linear-gradient(90deg, rgba(2,0,36,1) 4%, rgba(119,0,117,1) 25%, rgba(255,0,211,1) 47%, rgba(121,9,84,1) 78%, rgba(92,9,121,1) 94%)',
                        zIndex: 10,
                        height: 300,
                    }}
                ></div>
                <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
            </Box>
            <Box display="flex" p="2">
                <Box sx={{ mr: { sm: '100px' } }} />
                <Videos videos={videos} />
            </Box>
        </Box>
    );
};

export default ChannelDetail;
