import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const Banner = ({post}) => {
    return (
        <div>
            <Paper
                className='h-[600px] bg-fixed'
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 10,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.image})`,
      }}
    >
      {/* hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
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
            <Typography component="h1" variant="h3" color="deepskyblue" gutterBottom>
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
      image: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      title1: PropTypes.string.isRequired,
    }).isRequired,
};
export default Banner;

