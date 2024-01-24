import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Typography,
} from "@mui/material";
import BaseLayout from "../components/BaseLayout";

interface VehicleInfo {
  name: string;
  id: number;
  latitude: number;
  longitude: number;
  altitude: number;
  velocity: number;
  visibility: string;
  footprint: number;
  timestamp: number;
  daynum: number;
  solar_lat: number;
  solar_lon: number;
  units: string;
}

function TrackVehicle() {
  const [loading, setLoading] = useState(false);
  const [vehicleInfo, setVehicleInfo] = useState<VehicleInfo | null>(null);

  const handleTrackVehicle = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.wheretheiss.at/v1/satellites/25544"
      );
      const result = await response.json();
      setVehicleInfo(result);
    } catch (error) {
      console.error("Error fetching vehicle information", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <BaseLayout
      child={
        <Box
          p={2}
          bgcolor="transparent"
          boxShadow={4}
          maxWidth="400px"
          borderRadius={4}
          width="100%"
          mt={4}
          ml={4}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleTrackVehicle}
            disabled={loading}
            sx={{ backgroundColor: "#4C4E64DE" }}
          >
            Track now
          </Button>

          {loading && <CircularProgress sx={{ mt: 2, color: "#4C4E64DE" }} />}

          {vehicleInfo && (
            <Paper
              elevation={3}
              sx={{
                mt: 2,
                p: 2,
                borderRadius: 4,
                backgroundColor: "#1F1F1F",
              }}
            >
              <Typography variant="h6" sx={{ color: "#4C4E64DE" }}>
                International Space Station
              </Typography>
              <Typography sx={{ color: "#A3AED0" }}>
                Latitude: {vehicleInfo.latitude.toFixed(4)}
              </Typography>
              <Typography sx={{ color: "#A3AED0" }}>
                Longitude: {vehicleInfo.longitude.toFixed(4)}
              </Typography>
              <Typography sx={{ color: "#A3AED0" }}>
                Altitude: {vehicleInfo.altitude.toFixed(2)} km
              </Typography>
              <Typography sx={{ color: "#A3AED0" }}>
                Velocity: {vehicleInfo.velocity.toFixed(2)} km/h
              </Typography>
            </Paper>
          )}
        </Box>
      }
      title={"Track the International Space Station"}
    />
  );
}

export default TrackVehicle;
