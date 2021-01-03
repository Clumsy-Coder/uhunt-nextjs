import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const HomePage: React.FunctionComponent = () => {
  return (
    <>
      <Container>
        <Box textAlign='center'>
          <Typography variant='h1'>404</Typography>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
