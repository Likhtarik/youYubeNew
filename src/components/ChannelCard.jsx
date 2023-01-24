import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
//
//
//
import { demoProfilePicture } from '../utils/constants';
import foto from '../images/DSC_4331.jpg';
//

const ChannelId = ({ channelDetail, marginTop }) => (
    <Box
        sx={{
            borderRadius: '20px',
            boxShadow: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: { xs: '356px', md: '320px' },
            height: '326px',
            margin: 'auto',
            marginTop: marginTop,
        }}
        className="22"
    >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'cneter',
                    textAlign: 'center',
                    color: '#fff',
                }}
            >
                <CardMedia
                    image={channelDetail?.snippet?.thumbnails?.higt?.url || foto}
                    alt={channelDetail?.snippet?.title}
                    sx={{
                        width: '180px',
                        height: '180px',
                        borderRadius: '50%',
                        mb: 2,
                        border: '1px solid #e3e3e3',
                    }}
                />
                {/*  */}
                <Typography variant="h6">
                    {channelDetail?.snippet?.title}

                    <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
                </Typography>

                {/*  */}

                {channelDetail?.statistics?.subscriberCount && (
                    <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString(
                            'en-US'
                        )}
                        Subscribers
                    </Typography>
                )}
            </CardContent>
        </Link>
    </Box>
);

export default ChannelId;
