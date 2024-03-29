import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { forgetpwd } from '../../redux/actions/user';
const theme = createTheme();

export default function Forgetpwd(props) {

  const disatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if(props.user){
      disatch(forgetpwd(data.get('email'),true));
    }
    else{
      disatch(forgetpwd(data.get('email'),false));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box component="main" maxWidth="xs" sx={{ display:"flex",justifyContent:"center",height:"100vh",width:"100%",flexDirection:"column" }}>
        <CssBaseline />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Forget Password
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3,width:"30%" }}>
            <Grid container spacing={2} sx={{display:"flex",justifyContent:"center"}}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Enter Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,width:"70%" }}
              >
              Send Password Reset Link
            </Button>
              </Grid>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}