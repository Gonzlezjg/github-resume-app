import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { languageColors } from '../../utils/utils';

const LanguageBar = ({ languages }) => {
  const total = Object.values(languages).reduce((a, b) => a + b, 0);
  const entries = Object.entries(languages);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex' }}>
        {entries.map(([language, value], index) => {
          const percentage = (value / total) * 100;
          const isFirstChild = index === 0;
          const isLastChild = index === entries.length - 1;

          return (
            <Box
              key={language}
              sx={{
                width: `${percentage}%`,
                bgcolor: languageColors[language] || '#000',
                height: '12px',
                borderRadius: isFirstChild
                  ? '5px 0px 0px 5px'
                  : isLastChild
                  ? '0px 5px 5px 0px'
                  : '0px',
              }}
            />
          );
        })}
      </Box>
      <Box sx={{ mt: 2 }}>
        {entries.map(([language, value]) => {
          const percentage = ((value / total) * 100).toFixed(2);

          return (
            <>
              <Typography
                key={language}
                fontWeight="bold"
                fontFamily="Roboto"
                color="text.primary"
                variant="body2"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  textAlign: 'left',
                  mb: 1
                }}
              >
                <Box
                  component="span"
                  sx={{
                    display: 'inline-block',
                    width: 8,
                    height: 8,
                    mr: 1,
                    borderRadius: '50%',
                    bgcolor: languageColors[language] || '#000',
                  }}
                />
                {`${language}`}
                <Typography
                  fontFamily="Roboto"
                  color="text.secondary"
                  variant="body2"
                  ml={1}
                >
                  {' '}
                  {percentage}%
                </Typography>
              </Typography>
            </>
          );
        })}
      </Box>
    </Box>
  );
};

export default LanguageBar;
