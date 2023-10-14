import {
  Avatar,
  Box,
  Chip,
  Divider,
  Paper,
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

function App() {
  const { data, error, isLoading } = useGetHistoryOfCommitsQuery();

  const {
    data: repoData,
    error: repoError,
    isLoading: repoLoading,
  } = useGetReposByNameQuery('github-resume-app');

  console.log(repoData);

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

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          width: 950,
          m: 4,
        }}
      >
        {isLoading ? (
          <Skeleton height={'100%'} />
        ) : (
          <CommitsTable rows={data} />
        )}
      </Box>
    </Box>
  );
}

export default App;
