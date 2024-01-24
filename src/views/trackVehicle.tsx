import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  InputAdornment,
} from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";
import BaseLayout from "../components/BaseLayout";

interface FormValues {
  name: string;
  mission: string;
}

function TrackVehicle() {
  const { handleSubmit, control } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Gestisci la logica per l'inserimento del veicolo qui
    console.log(data);
  };

  return (
    <BaseLayout
      child={
        <Box
          p={2}
          bgcolor="white"
          boxShadow={4}
          maxWidth="400px"
          borderRadius={4}
          width="100%"
          mt={4}
          ml={4}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: "Name is required" }}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      label="Vehicle Name"
                      fullWidth
                      variant="outlined"
                      error={!!fieldState.error}
                      helperText={
                        fieldState.error ? fieldState.error.message : null
                      }
                      sx={{ borderRadius: 8 }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ borderRadius: 8 }}
                >
                  Track vehicle
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      }
      title={"Track your space vehicle"}
    />
  );
}

export default TrackVehicle;
