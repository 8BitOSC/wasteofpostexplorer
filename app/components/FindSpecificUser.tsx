import React from "react";
import Box from "@mui/joy/Box";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Typography from "@mui/joy/Typography";
import SearchComponent from "./SearchComponent";
export default function FindSpecificUser(props: {}) {

return (
    <Box
    sx={{
      flex: 1,
      width: "100%",
    }}
  >
    <Box
      sx={{
        position: "sticky",
        top: {
          sm: -100,
          md: -110,
        },
        bgcolor: "background.body",
        zIndex: 9995,
      }}
    >
      <Box
        sx={{
          paddingTop: {
            xs: '68px',
            md: '0px',
          },
          px: {
            xs: 2,
            md: 6,
          },
        }}
      >
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon />}
          sx={{ pl: 0 }}
        >
          <Link
            underline="none"
            color="neutral"
            href="#some-link"
            aria-label="Home"
          >
            <HomeRoundedIcon />
          </Link>
          <Link
            underline="hover"
            color="neutral"
            href="#some-link"
            fontSize={12}
            fontWeight={500}
          >
            Find Specific User
          </Link>
        </Breadcrumbs>
        <Typography
          level="h2"
          sx={{
            mt: 1,
            mb: 2,
          }}
        >
         Find Specific User
        </Typography>
      </Box>
      <Box sx={{ px: {
            xs: 2,
            md: 6,
          },}}>
        <Typography fontSize='md' sx={{marginTop:'16px', marginBottom: '16px'}}>
        Autocomplete Search for a user by their username.
        </Typography>
               
          <SearchComponent advanced={false} />
        </Box>
      </Box>
      
      </Box>

)
}