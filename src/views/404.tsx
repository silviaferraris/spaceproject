import { Box } from "@mui/material";

function NotFoundPage() {
  return (
    <div style={{ backgroundColor: "white", height: "100vh", width: "100vw" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <img
          src="/images/404.jpg"
          alt="Page Not Found"
          style={{
            maxWidth: "100%",
            maxHeight: "100vh",
          }}
        />
      </Box>
    </div>
  );
}

export default NotFoundPage;
