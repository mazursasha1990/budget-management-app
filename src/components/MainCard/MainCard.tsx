import { FC } from 'react';
import { Box, Container, Typography } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MasterCardIcon from '../../icons/MasterCardIcon';

const MainCard: FC = () => {
  return (
    <Container
      disableGutters
      sx={{ display: 'flex', justifyContent: 'center' }}
    >
      <Box
        sx={{
          width: 285,
          height: 149,
          borderRadius: '24px',
          backgroundColor: '#9A63FB',
          position: 'absolute',
          zIndex: -1,
        }}
      />
      <Box
        mt={'34px'}
        sx={{
          width: 360,
          height: 187,
          borderRadius: '24px',
          backgroundColor: '#2F3046',
        }}
      >
        <Container
          disableGutters
          sx={{
            position: 'relative',
            color: '#FAFAFA',
            px: '23px',
            py: '30px',
          }}
        >
          <MoreHorizIcon
            sx={{ position: 'absolute', top: '20px', right: '23px' }}
          />
          <Typography
            // mt={'24px'}
            variant="h4"
            sx={{ fontWeight: '500', fontSize: '18px', lineHeight: '21px' }}
          >
            Total Balance
          </Typography>
          <Typography
            mt={'16px'}
            variant="h1"
            sx={{ fontWeight: '700', fontSize: '30px', lineHeight: '35px' }}
          >
            $76,22.00
          </Typography>
          <Container
            disableGutters
            sx={{
              display: 'flex',
              marginTop: '40px',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: '500',
                fontSize: '18px',
                lineHeight: '21px',
                color: '#A3A3A3',
                wordSpacing: '12px',
              }}
            >
              2455 7545 3785 1043
            </Typography>
            <MasterCardIcon />
          </Container>
        </Container>
      </Box>
    </Container>
  );
};

export default MainCard;
