import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Chip, Stack, Typography, styled } from '@mui/material';
import { getMostRecentCommit, timeFormat } from '../../utils/utils';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #30363D',
  },
  [`&.${tableCellClasses.body}`]: {
    borderLeft: '1px solid #30363D',
    borderBottom: '1px solid #30363D',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '*': {
    backgroundColor: theme.palette.background.primary,
  },
  '& :hover': {
    backgroundColor: theme.palette.background.paper,
  },
}));

const StyledSecondColumn = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    borderRight: '1px solid #30363D',
  },
}));

export default function CommitsTable({ rows }) {
  return (
    <TableContainer
      component={Paper}
      sx={{ maxHeight: '100vh', overflow: 'auto' }}
    >
      <Table stickyHeader sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell colSpan={2}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Avatar
                    alt="User Profile"
                    src={getMostRecentCommit(rows).author.avatar_url}
                  />
                  <Typography
                    fontFamily="Roboto"
                    fontSize="16px"
                    variant="p"
                    fontWeight="bold"
                  >
                    {getMostRecentCommit(rows).author.login}
                  </Typography>
                  <Typography
                    fontFamily="Roboto"
                    fontSize="16px"
                    variant="p"
                    fontWeight="normal"
                  >
                    {getMostRecentCommit(rows).message}
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Chip
                    label={getMostRecentCommit(rows).sha}
                    variant="outlined"
                  />
                  <Typography
                    fontFamily="Roboto"
                    fontSize="16px"
                    variant="p"
                    fontWeight="bold"
                  >
                    {getMostRecentCommit(rows).totalCommits}
                  </Typography>
                  <Typography
                    fontFamily="Roboto"
                    fontSize="16px"
                    variant="p"
                    fontWeight="normal"
                  >
                    commits
                  </Typography>
                </Stack>
              </Stack>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((history) => (
            <StyledTableRow key={history.name}>
              <StyledTableCell component="th" scope="row">
                {history.commit.message}
              </StyledTableCell>
              <StyledSecondColumn align="right">
                {timeFormat(history.commit.author.date)}
              </StyledSecondColumn>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
