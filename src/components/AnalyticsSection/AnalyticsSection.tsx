import { FC } from 'react';
import { Container, Typography } from '@mui/material';

const AnalyticsSection: FC = () => {
  return (
    <Container disableGutters sx={{ display: 'flex', mt: '36px' }}>
      <Container disableGutters sx={{ display: 'flex' }}>
        <Typography
          variant="h2"
          sx={{ fontWeight: '500', fontSize: '24px', lineHeight: '28px' }}
        >
          Analytics
        </Typography>
      </Container>
    </Container>
  );
};

export default AnalyticsSection;
