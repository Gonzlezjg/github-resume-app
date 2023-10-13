import { Box, Divider, Paper, Typography } from '@mui/material';
import NavAppBar from './components/AppBar';
import CommitsTable from './components/Table';

function App() {
  return (
    <Box>
      <NavAppBar />

      <Box
        component="main"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          m: 4,
        }}
      >
        <Typography
          fontFamily={'Roboto'}
          fontWeight={'bold'}
          fontSize={'40px'}
          variant="p"
          color="text.primary"
        >
          Title of project
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          width: 950,
          m: 4,
        }}
      >
        <CommitsTable />
      </Box>
    </Box>
  );
}

export default App;
