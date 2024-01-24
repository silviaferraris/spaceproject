import {
  Alert,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
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
  keepLoggedIn: boolean;
}

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const { handleSubmit, control, formState } = useForm<FormValues>();
  const { errors } = formState;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // Effettua l'accesso qui
    console.log(data);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "white",
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          width: isMobile ? "100%" : "400px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
          backgroundColor: "white",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
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
        <Divider sx={{ width: "100%", margin: "10px 0" }} />
        <form onSubmit={handleSubmit(onSubmit)}>
          {loginError && (
            <Box my={2}>
              <Alert severity="error">{loginError}</Alert>
            </Box>
          )}
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                margin="dense"
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                fullWidth
                margin="dense"
              />
            )}
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <FormControlLabel
              control={
                <Checkbox
                  {...control}
                  name="keepLoggedIn"
                  color="primary"
                  size="small"
                />
              }
              label="Keep me logged in"
            />
            <Button variant="contained" type="submit">
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default LoginPage;
