import {
  Avatar,
  Box,
  Chip,
  CircularProgress,
  Divider,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import NavAppBar from './components/AppBar';
import CommitsTable from './components/Table';
import {
  useGetHistoryOfCommitsQuery,
  useGetReposByNameQuery,
} from './services/github';
import Grid from '@mui/material/Unstable_Grid2';
import LanguageBar from './components/LanguageBar';
import ErrorComponent from './components/ErrorComponent';

function App() {
  const { data, error, isLoading } = useGetHistoryOfCommitsQuery();

  const {
    data: repoData,
    error: repoError,
    isLoading: repoLoading,
  } = useGetReposByNameQuery('github-resume-app');

  if (repoLoading && isLoading) {
    return <CircularProgress color="inherit" />;
  }

  if (repoError || error) {
    return <ErrorComponent />;
  }

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
        {repoLoading ? (
          <>Load</>
        ) : (
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar alt="User Profile" src={repoData.owner.avatar_url} />
            <Typography
              fontFamily={'Roboto'}
              fontWeight={'bold'}
              fontSize={'20px'}
              variant="p"
              color="text.primary"
            >
              {repoData.full_name}
            </Typography>
            <Chip label={repoData.visibility} variant="outlined" />
          </Stack>
        )}
      </Box>
      <Divider />

      <Box sx={{ flexGrow: 1, my: 4, px: 4 }}>
        <Grid container spacing={2}>
          <Grid xs={8}>
            <Box
              sx={{
                width: '100%',
              }}
            >
              {isLoading ? (
                <Skeleton height={'100%'} />
              ) : (
                <CommitsTable rows={data} />
              )}
            </Box>
          </Grid>
          <Grid xs={4}>
            <Box display="flex" flexDirection="column" gap={2}>
              <Typography
                fontFamily={'Roboto'}
                fontWeight={'bold'}
                fontSize={'20px'}
                variant="p"
                color="text.primary"
              >
                About
              </Typography>
              <Typography
                fontFamily={'Roboto'}
                fontSize={'20px'}
                variant="p"
                color="text.secondary"
              >
                {repoData.description === null
                  ? 'No description, website, or topics provided.'
                  : repoData.description}
              </Typography>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box display="flex" flexDirection="column" gap={2}>
              <Typography
                fontFamily={'Roboto'}
                fontWeight={'bold'}
                fontSize={'20px'}
                variant="p"
                color="text.primary"
              >
                Languages
              </Typography>
              <LanguageBar languages={repoData.language} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
