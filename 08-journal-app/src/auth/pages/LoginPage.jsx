import { Google } from "@mui/icons-material"
import { Grid, TextField, Typography, Button, Link } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"


export const LoginPage = () => {
  return (
    

    <AuthLayout title='Login'>

        <form>

          <Grid container>
            <Grid item xs={12} sx={{ mt: 3 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder="surregograciano@gmailcom" 
                fullWidth 
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 3 }}>
              <TextField 
                label="contraseña" 
                type="password" 
                placeholder="Contraseña" 
                fullWidth 
              />
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1}}>

              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  <Google/>
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>

            </Grid>

            <Grid container direction='row' justifyContent='end'>

              <Link component={RouterLink} color="inherit" to='/auth/register'>
                Crear una cuenta 
              </Link>

            </Grid>

          </Grid>
          
        </form>

    </AuthLayout>

  )
}

