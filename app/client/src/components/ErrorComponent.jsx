import AdbIcon from '@mui/icons-material/Adb';
import { Box, Typography } from '@mui/material';

const ErrorComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
      }}
    >
      <AdbIcon color="primary" fontSize="large" />
      <Typography variant="h1" color="text.secondary" fontSize={40}>
        Oops! An error occurred, please refresh the page.
      </Typography>
    </Box>
  );
};

export default ErrorComponent;
