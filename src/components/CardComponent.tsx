import React from 'react';
import {

  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  CardMedia,
  Box
} from '@mui/material';
import { Grid } from '@mui/material';
import Card1 from '../assets/work1.png'
import Card2 from '../assets/work2.png'
import Card3 from '../assets/work3.png'

type CardItem = {
  title: string;
  image: string;
  description: string;
  tags: string[];
  buttonText: string;
};

const cardData: CardItem[] = [
  {
    title: "Analysis Application",
    image: Card1,
    description:
      "With user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
    tags: ["FIGMA", "UX"],
    buttonText: "View Case Study"
  },
  {
    title: "Fortknox Application",
    image: Card2,
    description:
      "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
    tags: ["MOBILE", "WEB"],
    buttonText: "View Case Study"
  },
  {
    title: "Zenocide Application",
    image: Card3,
    description:
      "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
    tags: ["APP", "WEB"],
    buttonText: "View Case Study"
  }
  // Add more cards as needed
];

export default function CardComponent(): React.JSX.Element {
  return (
    <Grid container sx={{ backgroundColor: 'black' }}>
      <Typography variant="h4" fontWeight="bold" mb={4} sx={{
        fontFamily: ['Syne', 'sans-serif'], color: 'white', marginLeft: {
          xs: '40px',
          sm: '60px',
          md: '80px'
        }
      }}>✹ Work</Typography>
      {cardData.map((item, index) => (
        <Grid size={{ xs: 12, sm: 12, md: 12 }} sx={{
          marginLeft: "80px",
          marginRight: "80px",
          marginTop: '80px',
          // backgroundColor:"#CBCBCB",
          borderRadius: "40px",
          backgroundImage: `radial-gradient(circle at center bottom,
                rgba(255, 140, 0, 0.7) -50%,
               rgba(203, 203, 203, 0.48)30%,
               rgba(203, 203, 203, 0.48) 100%)`,


        }} key={index} >
          <Card
            sx={{ margin: '30px', backgroundColor: 'transparent', boxShadow: 'none', borderBlockStyle: 'none', borderRadius: '24px' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  sm: 'column',
                  md: 'row'
                }
              }}>
              <CardMedia
                component="img"
                width="520"
                height="432"
                sx={{
                  borderRadius: '24px',
                }}
                image={item.image}
                alt={item.title}
              />
              <CardContent sx={{ backgroundColor: 'transparent' }}>
                <Typography variant="h6" gutterBottom
                  sx={{
                    fontFamily: ['Syne', 'sans-serif'],
                    color: 'white'
                  }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom sx={{
                  fontFamily: ['Syne', 'sans-serif'],
                  color: 'white'
                }}>
                  {item.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', my: 1 }}>
                  {item.tags.map((tag, i) => (
                    <Chip key={i} label={tag} size="small" />
                  ))}
                </Box>
                <Button variant="outlined" size="small" sx={{ my: 2, color: 'black', display: 'block', backgroundColor: 'white', marginRight: '5px', borderRadius: 30, outlineColor: 'black', borderColor: 'black', fontFamily: ['Syne', 'sans-serif'], fontSize: '10px', fontWeight: '300' }}>
                  {item.buttonText}
                </Button>
              </CardContent>


            </Box>

          </Card>
        </Grid>
      ))}
    </Grid>
  );
};


