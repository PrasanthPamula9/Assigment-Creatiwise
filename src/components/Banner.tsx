import React from 'react'
import { Box, Typography } from '@mui/material';
// import '../assets/freelancer.jpg' as IMG1;
import Profile from '../assets/freelancer.jpg'
import Design from '../assets/design.png'
import Divider from '@mui/material/Divider';
import DoraDesign from '../assets/doradesign.png'
import Frame from '../assets/Frame.png'
import Wave from '../assets/Group.png'


export default function Banner(): React.JSX.Element {
    return (

        <Box
            sx={{
                // marginTop:''
                paddingTop: "80px",
                paddingBottom: '60px',
                paddingLeft: "20px",
                paddingRight: '20px',
                backgroundColor: 'black',
                color: 'white',
                fontFamily: ['Syne', 'sans-serif'],


            }}
        >

            <Typography

                // variant='h1'
                sx={{
                    textAlign: 'center',
                    fontSize: {
                        xs: '30px',
                        md: '64px',
                        sm: '50px'
                    },
                    fontWeight: '700',
                    lineHeight: 1.4,
                    fontFamily: ['Syne', 'sans-serif'],


                }}
            >
                I AM A <Box component='img' src={Profile} alt='' sx={{
                    height: {
                        xs: '30px',
                        md: '64px',
                        sm: '30px'
                    },
                    width: {
                        xs: '50px',
                        md: '128px',
                        sm: '50px'
                    },
                    borderRadius: 30
                }}></Box>FREELANCE<Divider></Divider>
                DESIGNER <Box component='img' src={Design} alt='' sx={{
                    height: {
                        xs: '30px',
                        md: '64px',
                        sm: '30px'
                    },
                    width: {
                        xs: '50px',
                        md: '128px',
                        sm: '50px'
                    },
                    borderRadius: 30,

                }}></Box>FROM<Divider></Divider>
                SAN FRANCISCO
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: "40px",
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    marginInline: 'auto',
                    marginLeft: {
                        xs: '50px',
                        md: '80px',
                        sm: '50px'
                    }

                }}

            >
                <img src={DoraDesign} alt="doradesign" />
                <img src={Wave} alt="wave" />
                <img src={Frame} alt="simula" />
                <Typography
                    variant="subtitle1"

                    component="p" sx={{
                        color: "#d3d3d3",

                        fontSize: '14px',
                        textAlign: 'left',
                        maxWidth: '400px',
                        marginTop: '10px',
                        lineHeight: 1.6,
                        fontStretch: 'expanded',
                        fontFamily: ['Syne', 'sans-serif']
                    }}>
                    Welcome to my portfolio. Here, artistry meets functionality.<br />
                    Dive into a curated showcase of distinctive branding and<br />
                    web designs, each crafted to captivate and inspire.
                </Typography>

            </Box>

        </Box>

    );

}