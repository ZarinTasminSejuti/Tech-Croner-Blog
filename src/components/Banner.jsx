import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const Banner = ({post}) => {
    return (
        <div className=''>
            <Paper
                className='h-[500px] bg-fixed'
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 10,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      }}
    >
      {/* hero background image */}
      {<img style={{ display: 'none' }} src={"https://images.unsplash.com/photo-1568952433726-3896e3881c65?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="this is banner" />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.4)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 7 },
                  pr: { md: 0 },
                  mt: { md: 5 },
            }}
          >
            <Typography component="h1" variant="h3" className='text-cyan-300' gutterBottom>
              {post.title}
                </Typography>
                <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title1}
            </Typography>
            <Typography variant="h6" color="white" paragraph className='text-justify'>
              {post.description}
            </Typography>
            {/* <Link variant="subtitle1" href="#">
              {post.linkText}
            </Link> */}
          </Box>
        </Grid>
      </Grid>
    </Paper>
        </div>
    );
};



Banner.propTypes = {
    post: PropTypes.shape({
      description: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      title1: PropTypes.string.isRequired,
    }).isRequired,
};
export default Banner;

