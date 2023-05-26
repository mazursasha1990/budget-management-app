import { FC } from 'react';
import { Container, Typography } from '@mui/material';
import YearPicker from '../YearPicker';

const AnalyticsSection: FC = () => {
  return (
    <Container disableGutters sx={{ display: 'flex', mt: '36px' }}>
      <Container
        disableGutters
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: '500', fontSize: '24px', lineHeight: '28px' }}
        >
          Analytics
        </Typography>
        <YearPicker />
      </Container>
    </Container>
  );
};

export default AnalyticsSection;
