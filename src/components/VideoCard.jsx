import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
//

//
import {
    demoThumbnailUrl,
    demoChannelUrl,
    demoVideoUrl,
    demoChannelTitle,
    demoVideoTitle,
    demoProfilePicture,
} from '../utils/constants';
//
const VideoCard = ({
    video_2: {
        id: { videoId },
        snippet,
    },
}) => {
    return (
        // Общий див дял карточок
        <Card
            sx={{
                width: { xs: '100%', sm: '358px', md: '320px' },
                boxShadow: 'none',
                borderRadius: 0,
            }}
        >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                {/* изоброжение */}
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, height: 180 }}
                />
            </Link>
            {/* cсонтек для описание  */}
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant="subtitle1" color="white">
                        {snippet?.title.slice(0, 60) || demoChannelTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoVideoUrl} />
                <Typography variant="subtitle2" fontWeight="bold" color="gray">
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                </Typography>
            </CardContent>
        </Card>
    );
};

export default VideoCard;
