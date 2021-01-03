import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const AboutPage: React.FunctionComponent = () => {
  return (
    <>
      <Container maxWidth='md'>
        <br />
        <Typography variant='h2'>About</Typography>
        <br />
        <Typography>Version: {process.env.NEXT_PUBLIC_VERSION}</Typography>
        <Typography>Build: {process.env.NEXT_PUBLIC_BUILD_VERSION}</Typography>
      </Container>
    </>
  );
};

export default AboutPage;
