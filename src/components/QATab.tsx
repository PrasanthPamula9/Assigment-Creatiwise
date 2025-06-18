import React from 'react';
import { Box, Typography } from '@mui/material';

const faqs = [
  {
    question: 'What is your design process?',
    answer:
      'My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.',
  },
  {
    question: 'What tools and software do you use for UX design?',
    answer: '',
  },
  {
    question: 'How do you measure the success of your UX designs?',
    answer: '',
  },
];

const FAQSection = (): React.JSX.Element => {
  return (
    <Box sx={{
      maxWidth: 1240, mx: 'auto', mt: 6, px: 2, fontFamily: ['Syne', 'sans-serif'], marginLeft: {
        xs: '40px',
        sm: '60px',
        md: '80px'
      }
    }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#eee', mb: 3 }}>
        ✶ Frequently asked questions
      </Typography>

      <Box >
        {faqs.map((faq, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: 16 }}>
              {faq.question}
            </Typography>
            {faq.answer && (
              <Typography sx={{ color: '#aaa', mt: 1, fontSize: 14 }}>
                {faq.answer}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FAQSection;