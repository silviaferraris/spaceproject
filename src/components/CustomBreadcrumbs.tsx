import React from "react";
import { Breadcrumbs, Hidden } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

interface PathItem {
  label: string;
  link: string;
}

interface CustomBreadcrumbsProps {
  pathItems: PathItem[];
}

function CustomBreadcrumbs({ pathItems }: CustomBreadcrumbsProps) {
  const navigate = useNavigate();

  return (
    <Hidden only={["xs", "sm"]}>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {pathItems.map((item, index) => (
          <RouterLink
            to={item.link}
            key={index}
            style={{ textDecoration: "none" }}
          >
            <span
              onClick={() => navigate(item.link)}
              style={{
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "24px",
                color: "#707EAE",
                cursor: "pointer",
              }}
            >
              {item.label}
            </span>
          </RouterLink>
        ))}
      </Breadcrumbs>
    </Hidden>
  );
}

export default CustomBreadcrumbs;
