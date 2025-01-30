
import { Grid, TextField, Typography, Button, Link } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"


export const RegisterPage = () => {
  return (

    <AuthLayout title='Login'>

        <form>

          <Grid container>
            <Grid item xs={12} sx={{ mt: 3 }}>
              <TextField 
                label="Nombre completo" 
                type="text" 
                placeholder="Sebastian Urrego" 
                fullWidth 
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 3 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder="urregosebastian@gmailcom" 
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

              <Grid item xs={12}>
                <Button variant="contained" fullWidth>
                  Crear Cuenta
                </Button>
              </Grid>

            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
              <Link component={RouterLink} color="inherit" to='auth/login'>
                Ingresar
              </Link>

            </Grid>

          </Grid>
          
        </form>

    </AuthLayout>

  )
}



