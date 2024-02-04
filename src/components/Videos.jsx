import PropTypes from "prop-types";
import { Stack, Box, CircularProgress } from "@mui/material";

import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <CircularProgress sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    // Adjust as needed for desired margin
    marginInline: 'auto',
  }} />;
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

Videos.propTypes = {
  videos: PropTypes.array.isRequired,
};

export default Videos;
