import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import BaseLayout from "../components/BaseLayout";
import { useEffect, useState } from "react";
import axios from "axios";
interface Vehicle {
  id: number;
  name: string;
  mission: string;
  image: string;
}

function Vehicles() {
  const [vehiclesData, setVehiclesData] = useState<Vehicle[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3005/vehicles")
      .then((response) =>
        setVehiclesData(
          response.data.vehicles.map((vehicle: any, index: any) => ({
            id: index + 1,
            name: vehicle.name,
            mission: vehicle.mission,
            image: `/images/${vehicle.name
              .toLowerCase()
              .replace(/\s/g, "")}.jpg`,
          }))
        )
      )
      .catch((error) => console.error("Error fetching vehicles:", error));
  }, []);

  //@ts-ignore
  console.log(vehiclesData.vehicles);

  /* const vehiclesData = [
  {
    id: 1,
    name: "Voyager 1",
    mission: "Saturno",
    image: "/images/voyager1.jpg",
  },
  {
    id: 2,
    name: "Perseverance",
    mission: "Marte",
    image: "/images/perseverance.jpg",
  },
  {
    id: 3,
    name: "Cassini-Huygens",
    mission: "Saturno",
    image: "/images/cassini.jpg",
  },
]; */

  return (
    <BaseLayout
      child={
        <Grid container spacing={2} mt={4} ml={4}>
          {vehiclesData.map((vehicle: Vehicle) => (
            <Grid item key={vehicle.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.4)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  "&:hover": {
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.7)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="150"
                  image={vehicle.image}
                  alt={vehicle.name}
                  sx={{
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                  }}
                />
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} gutterBottom>
                    Space Vehicle{" "}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {vehicle.name}
                  </Typography>
                  <Typography>{`Mars Mission: ${vehicle.mission}`}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      }
      title={"Space vehicles"}
    />
  );
}

export default Vehicles;
