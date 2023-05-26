import { FC, useState } from 'react';
import {
  Container,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import getYearsArray from '../../utils/getYearsArray';

const YearPicker: FC = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState<string>(
    currentYear.toString()
  );
  const handleYearChange = (event: SelectChangeEvent) => {
    setSelectedYear(event.target.value);
  };

  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: '#FF653A',
        color: '#fff',
        width: '116px',
        borderRadius: '12px',
        margin: 0,
      }}
    >
      <Container
        disableGutters
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: '#FF653A',
          marginLeft: '12px',
        }}
      >
        <Typography
          sx={{
            fontWeight: '400',
            fontSize: '13px',
            lineHeight: '15px',
          }}
        >
          Year
        </Typography>
        <Typography>-</Typography>
      </Container>
      <Container disableGutters>
        <FormControl>
          <Select
            value={selectedYear}
            onChange={handleYearChange}
            disableUnderline
            variant="standard"
            sx={{
              maxHeight: '36px',
              backgroundColor: '#FF653A',
              borderRadius: '12px',
              color: '#fff',
              fontSize: '13px',

              '&.MuiSvgIcon-root, .MuiSelect-icon': {
                color: '#fff',
              },
            }}
          >
            {getYearsArray().map((year) => (
              <MenuItem
                key={year}
                value={year}
                sx={{
                  maxHeight: '100px',
                }}
              >
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Container>
    </Container>
  );
};

export default YearPicker;
