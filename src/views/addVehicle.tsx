import React from "react";
import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import BaseLayout from "../components/BaseLayout";
import axios from "axios"; // Assicurati di aver installato axios tramite npm o yarn

interface FormValues {
  name: string;
  mission: string;
}

function AddVehicle() {
  const { handleSubmit, control, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      // Effettua la richiesta al tuo backend
      const response = await axios.post(
        "http://localhost:3005/vehicles/create",
        data
      );

      if (response.data.success) {
        console.log("Vehicle added successfully");
        // Pulisci il form dopo l'inserimento
        reset();
      } else {
        console.error("Failed to add vehicle:", response.data.error);
      }
    } catch (error) {
      console.error("Error adding vehicle");
    }
  };

  return (
    <BaseLayout
      child={
        <Box
          p={2}
          bgcolor="transparent"
          boxShadow={6}
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
                <Controller
                  name="mission"
                  control={control}
                  rules={{ required: "Mission is required" }}
                  render={({ field, fieldState }) => (
                    <TextField
                      {...field}
                      label="Mission"
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
                  Add Vehicle
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      }
      title={"Add space vehicle"}
    />
  );
}

export default AddVehicle;
