// BlogSection.tsx

import {
  Box,
  Typography,
  Grid,
  Button,
  Chip,
} from '@mui/material';
import Blog1 from '../assets/work1.png'
import Blog2 from '../assets/work2.png'
import Blog3 from '../assets/work3.png'

const blogs = [
  {
    title: 'How UX works in web',
    date: 'Nov 9, 2023',
    tags: ['UI', 'UX'],
    image: Blog1,
  },
  {
    title: 'Case study - Analysis Application.',
    date: 'Aug 18, 2023',
    tags: ['DESIGN', 'PRINT'],
    image: Blog2,
  },
  {
    title: '3 ways to develop your skill',
    date: 'Feb 16, 2023',
    tags: ['FIGMA', 'WEB'],
    image: Blog3,
  },
];

export default function BlogSection() {
  return (
    <Box sx={{ maxWidth: 1240, mx: 'auto', mt: 6, px: 2, marginLeft: '80px', marginRight: '80px', fontFamily: ['Syne', 'sans-serif'] }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white' }}>
          ✶ Blog
        </Typography>
        <Typography sx={{ color: '#aaa', fontSize: 14, cursor: 'pointer' }}>
          view all
        </Typography>
      </Box>

      {blogs.map((blog, idx) => (
        <Grid
          container
          key={idx}
          spacing={2}
          alignItems="center"
          sx={{
            mb: 4,
            pb: 2,
            borderBottom: '1px solid #333',
          }}
        >
          {/* Blog Image */}
          <Grid size={{ xs: 12, sm: 2 }} >
            <Box
              component="img"
              src={blog.image}
              alt=''
              sx={{
                width: '100%',
                borderRadius: 2,
                maxWidth: 120,
              }}
            />
          </Grid>

          {/* Blog Content */}
          <Grid size={{ xs: 12, sm: 8 }} >
            <Typography variant="body2" sx={{ color: '#aaa', mb: 0.5 }}>
              {blog.date}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#fff',
                fontWeight: 600,
                mb: 1,
              }}
            >
              {blog.title}
            </Typography>
            <Box display="flex" gap={1} flexWrap="wrap">
              {blog.tags.map((tag, i) => (
                <Chip
                  key={i}
                  label={tag}
                  size="small"
                  sx={{
                    backgroundColor: '#222',
                    color: '#fff',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                  }}
                />
              ))}
            </Box>
          </Grid>

          {/* Read Button */}
          <Grid size={{ xs: 12, sm: 2 }} textAlign="right">
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#eee',
                color: '#000',
                borderRadius: '30px',
                fontWeight: 600,
                textTransform: 'none',
                px: 3,
                '&:hover': {
                  backgroundColor: '#ccc',
                },
              }}
            >
              Read
            </Button>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};


