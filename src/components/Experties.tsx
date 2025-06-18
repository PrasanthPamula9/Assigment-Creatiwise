
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const expertiseItems = [
  {
    title: 'Branding',
    description:
      'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.',
  },
  {
    title: 'UI Design',
    description:
      'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.',
  },
  {
    title: 'UX Design',
    description:
      'I comprehend and resolve digital product issues using a user-focused methodology. Investigation, compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements.',
  },
  {
    title: 'Development',
    description:
      'I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome, complex coding. Webflow forms the foundation of my web development approach. I employ it to produce safe, top-notch personalized websites.',
  },
];

export default function ExpertiseSection(): React.JSX.Element {


  return (
    <Box sx={{
      px: 2, py: 6, backgroundColor: '#0a0a0a', color: '#fff', marginLeft: {
        xs: '40px',
        sm: '60px',
        md: '80px'
      }
    }}>
      <Typography variant="h4" fontWeight="bold" mb={4} sx={{
        fontFamily: ['Syne', 'sans-serif']
      }}>
        ✹ Expertise
      </Typography>
      <Grid container spacing={4}>
        {expertiseItems.map((item, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6 }} >
            <Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                sx={{
                  fontFamily: ['Syne', 'sans-serif']
                }}
              // sx={{ borderLeft: '3px solid #fff', pl: 1 }}
              >
                {item.title}
              </Typography>
              <Typography variant="body2" color="#bbb"
                sx={{
                  fontFamily: ['Syne', 'sans-serif']
                }}>
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
