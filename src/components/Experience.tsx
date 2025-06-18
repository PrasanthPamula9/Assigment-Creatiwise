
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const experiences = [
  {
    title: 'Lead Product Designer',
    company: 'Fortknox',
    duration: 'Mar 2022 – Oct 2023',
  },
  {
    title: 'Intern Designer',
    company: 'OmniSafe',
    duration: 'Mar 2022 – Oct 2023',
  },
  {
    title: 'UI Designer',
    company: 'Doradesign',
    duration: 'Mar 2022 – Oct 2023',
  },
  {
    title: 'Frontend Developer',
    company: 'OpacityAuthor',
    duration: 'Mar 2022 – Oct 2023',
  },
];

export default function ExperienceSection(): React.JSX.Element {
  return (
    <Box sx={{ maxWidth: 1240, mx: 'auto', mt: 5, px: 2, marginLeft: '80px', marginRight: '80px' }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          mb: 3,
          color: '#eee',
        }}
      >
        ✹ Experience
      </Typography>

      <Box sx={{ borderBottom: '1px solid #444', borderRadius: 2 }}>
        {experiences.map((exp, index) => (
          <Grid
            container
            key={index}
            sx={{
              px: 2,
              py: 2,
              borderBottom: index !== experiences.length - 1 ? '1px solid #444' : 'none',
              alignItems: 'center',
            }}
          >
            <Grid size={{ xs: 6 }}>
              <Typography variant="body1" sx={{ color: '#fff', fontWeight: 500 }}>
                {exp.title}
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 6 }}
              sx={{ textAlign: 'right' }}
            >
              <Typography variant="body1" sx={{ color: '#fff', fontWeight: 500 }}>
                {exp.company}
              </Typography>
              <Typography variant="body2" sx={{ color: '#aaa' }}>
                {exp.duration}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

