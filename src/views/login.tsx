import React, { useState } from "react";
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
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface FormValues {
  email: string;
  password: string;
  keepLoggedIn: boolean;
}

function LoginPage() {
  const [loginError, setLoginError] = useState<string | null>(null);

  const { handleSubmit, control } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "black",
        backgroundImage: "url('/images/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          width: "400px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
          backgroundColor: "transparent",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.6)",
        }}
      >
        <Typography
          sx={{
            fontFamily: "DM Sans",
            color: "#E0E5F2",
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
        <Divider
          sx={{ width: "100%", margin: "10px 0", backgroundColor: "#4C4E64DE" }}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          {loginError && (
            <Box my={2}>
              <Alert
                severity="error"
                sx={{ backgroundColor: "#FF4D4F", color: "#ffffff" }}
              >
                {loginError}
              </Alert>
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
                variant="filled"
                fullWidth
                margin="dense"
                sx={{
                  borderRadius: 8,
                  color: "#E0E5F2",
                }}
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
                variant="filled"
                type={"password"}
                fullWidth
                margin="dense"
                sx={{
                  borderRadius: 8,
                  color: "#E0E5F2",
                }}
              />
            )}
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            sx={{ color: "#E0E5F2" }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  {...control}
                  name="keepLoggedIn"
                  color="primary"
                  size="small"
                  sx={{ color: "#E0E5F2" }}
                />
              }
              label="Keep me logged in"
            />
            <Button
              variant="contained"
              type="submit"
              sx={{ borderRadius: 8, backgroundColor: "#4C4E64DE" }}
            >
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default LoginPage;
