
import { Box, Typography, Link, Container } from '@mui/material';

const keywords = ['FLOW', 'FIGMA', 'DESIGNER', 'DEVELOPER'];

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', pt: 6 }}>
      {/* Scrolling Banner */}
      <Box
        sx={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          borderTop: '1px solid #444',
          borderBottom: '1px solid #444',
          py: 2,
          background: '#111',
        }}
      >
        <Box
          sx={{
            display: 'inline-block',
            animation: 'scroll 20s linear infinite',
            '@keyframes scroll': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-100%)' },
            },
          }}
        >
          {Array(20)
            .fill(null)
            .map((_, i) => (
              <Typography
                key={i}
                component="span"
                sx={{ px: 4, fontSize: 20, fontWeight: 'bold' }}
              >
                ✶ {keywords[i % keywords.length]}
              </Typography>
            ))}
        </Box>
      </Box>

      {/* Let's Talk Section */}
      <Container sx={{ textAlign: 'center', py: 6 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2rem', md: '3.5rem' },
            mb: 2,
          }}
        >
          LET’S TALK!
        </Typography>
        <Link
          href="mailto:rehanurraihan@gmail.com"
          underline="hover"
          sx={{ color: '#ccc', fontSize: 16 }}
        >
          prasanthpamula97@gmail.com ↗
        </Link>

        {/* Bottom Links */}
        <Box
          sx={{
            mt: 6,
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            color: '#666',
            fontSize: 14,
          }}
        >
          <Typography>© Pamula Prasanth Kumar</Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="#" color="inherit" underline="hover">
              Dribbble
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Behance
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Twitter
            </Link>
            <Link href="#" color="inherit" underline="hover">
              Instagram
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
