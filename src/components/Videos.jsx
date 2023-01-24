import React from 'react';
import { Stack, Box } from '@mui/material';

import { VideoCard, ChannelCard } from './';

const Videos = ({ videos, derection }) => {
    if (!videos?.length) return 'Loading...';
    return (
        <Stack
            direction={derection || 'row'}
            flexWrap="wrap"
            justifyContent="start"
            gap={2}
            className="videos_!"
        >
            {/*  */}
            {videos.map((items, index) => (
                <Box key={index} className="Box!">
                    {items.id.videoId && <VideoCard video_2={items} />}
                    {items.id.channelId && <ChannelCard channelDetail={items} />}
                </Box>
            ))}
        </Stack>
    );
};

export default Videos;
