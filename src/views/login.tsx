import {
  Alert,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Hidden,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface FormValues {
  email: string;
  password: string;
}

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  /*  const schema = yup.object().shape({
    email: yup.string().required('Email is required').email('Invalid email'),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters'),
  }); */

  const { handleSubmit, control, formState } = useForm<FormValues>({
    /*     resolver: yupResolver(schema),
     */
  });
  const { errors } = formState;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    //@ts-ignore
    await dispatch(login(data));
  };

  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "white",
      }}
    >
      <Box
        p={2}
        sx={{
          width: "1200px",
          padding: 0,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Hidden only="xs">
          <Grid
            item
            xs={12}
            sm={8}
            sx={{
              "&.MuiGrid-item": { padding: "0 20px 0 0" },
              width: "830px",
              height: "921px",
            }}
          >
            <img
              src="/images/login.jpg"
              alt="login page"
              style={{ width: "100%", maxWidth: "100%", objectFit: "cover" }}
            />
          </Grid>
        </Hidden>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            "&.MuiGrid-item": { padding: 0 },
            width: "410px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "DM Sans",
              color: "#2B3674",
              marginBottom: "10px",
              fontSize: "36px",
              fontWeight: "bold",
              lineHeight: "56px",
            }}
          >
            Log into this space{" "}
          </Typography>
          <Typography
            sx={{
              color: "#A3AED0",
              fontSize: "16px",
              fontFamily: "DM Sans",
              fontWeight: "regular",
              lineHeight: "16px",
              marginBottom: "10px",
            }}
          >
            Enter your email and password to sign in!
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            my={2}
            width="100%"
            sx={{ color: "#E0E5F2" }}
          >
            <Divider
              flexItem
              sx={{ height: "1px", marginRight: "8px", width: "50%" }}
            />
          </Box>
          <form>
            {loginError && (
              <Box my={2}>
                <Alert severity="error">{loginError}</Alert>
              </Box>
            )}
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({
                field: { onChange, value, onBlur },
                fieldState: { invalid, error },
              }) => (
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({
                field: { onChange, value, onBlur },
                fieldState: { invalid, error },
              }) => (
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                />
              )}
            />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={
                  <Typography
                    sx={{
                      color: "#2B3674",
                      fontSize: "14px",
                      fontFamily: "DM Sans",
                      fontWeight: "regular",
                      lineHeight: "20px",
                    }}
                  >
                    Keep me logged in
                  </Typography>
                }
              />
              <Typography
                component="a"
                href="#forgot-password"
                sx={{
                  color: "#007DFE",
                  fontSize: "14px",
                  fontFamily: "DM Sans",
                  fontWeight: "medium",
                  lineHeight: "20px",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                Forgot Password?
              </Typography>
            </Box>
            <Button variant="contained">Login</Button>
          </form>
        </Grid>
      </Box>
    </Box>
  );
}

export default LoginPage;
