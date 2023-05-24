import { Container } from '@mui/material';
import AnalyticsSection from '../../components/AnalyticsSection/AnalyticsSection';
import MainCard from '../../components/MainCard/MainCard';

const HomePage = () => {
  return (
    <Container disableGutters sx={{ display: 'flex', flexDirection: 'column' }}>
      <MainCard />
      <AnalyticsSection />
    </Container>
  );
};

export default HomePage;
