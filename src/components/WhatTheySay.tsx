import React from 'react';
import { Box, Typography, Avatar, Grid, IconButton } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Profile from '../assets/profile.png'

const WhatTheySaySection = (): React.JSX.Element => {
  return (
    <Box sx={{
      maxWidth: 1240, mx: 'auto', mt: 6, px: 2, marginLeft: {
        xs: '40px',
        sm: '60px',
        md: '80px'
      }
    }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#eee', mb: 3 }}>
        ✶ What they say
      </Typography>

      <Grid container spacing={2} alignItems="center">
        {/* User Profile */}
        <Grid size={{ xs: 12, md: 4 }} >
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar
              src={Profile}
              alt="Floyd Miles"
              sx={{ width: 50, height: 50 }}
            />
            <Box>
              <Typography sx={{ color: '#fff', fontWeight: 500 }}>Floyd Miles</Typography>
              <Typography sx={{ color: '#aaa', fontSize: 14 }}>eBay</Typography>
            </Box>
          </Box>
        </Grid>

        {/* Quote */}
        <Grid size={{ xs: 12, sm: 8 }}>
          <Box>
            <FormatQuoteIcon sx={{ fontSize: 40, color: '#888' }} />
            <Typography sx={{ color: '#fff', fontSize: 18, fontWeight: 500, mt: 1 }}>
              Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.
            </Typography>

            {/* Navigation */}
            <Box mt={2} display="flex" gap={1}>
              <IconButton sx={{ border: '1px solid #444', color: '#fff' }}>
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>
              <IconButton sx={{ border: '1px solid #444', color: '#fff' }}>
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhatTheySaySection;