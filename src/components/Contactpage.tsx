import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import saiOpticsShop from "../../public/saiOpticsShop.png";
import Image from "next/image";

export default function Contactpage() {
  return (
    <div id="contact" className="section">
      <Box
        mt={{ xs: "2rem", md: "4rem" }}
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, sm: 4 }, // padding left/right
        }}
      >
        <div>
          <Typography
            variant="h3"
            fontWeight="700"
            m={{ xs: "1.5rem 1rem", sm: "2rem 2rem" }}
            fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}
          >
            Contact
          </Typography>
          <Typography
            variant="h4"
            fontSize={{ xs: "1.3rem", sm: "1.6rem", md: "2rem" }}
            m="0rem 1rem"
          >
            Help is just a click away
          </Typography>
          <Typography
            variant="h5"
            fontSize={{ xs: "1.1rem", sm: "1.3rem", md: "1.5rem" }}
            m="1rem 1rem"
          >
            Call me anytime between 10am - 8pm
          </Typography>
        </div>

        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: { xs: 3, sm: 3 },
            width: "100%",
            maxWidth: "800px",
            px: { xs: 2, sm: 4 },
          }}
        >
          <Card
            sx={{
              maxWidth: { xs: 320, sm: 345 },
              backgroundColor: "#5cf5b4",
              display: "flex",
              flexDirection: "row",
              p: "1rem",
              boxShadow: "0px 0px 3px 2px ",
              transition: "all ease 1s",
            }}
            className="contactCard"
          >
            <CardActionArea>
              <CardContent component="a" href="mailto:nagu871reddy@gmail.com">
                <MailOutlineIcon
                  sx={{
                    fontSize: { xs: "4rem", sm: "6rem", md: "8rem" },
                    color: "red",
                  }}
                />
                <Button sx={{ textTransform: "lowercase" }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "blue",
                      fontSize: { xs: "1rem", md: "1.3rem" },
                    }}
                  >
                    nagu871reddy@gmail.com
                  </Typography>
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card
            sx={{
              maxWidth: { xs: 320, sm: 345 },
              backgroundColor: "#5cf5b4",
              display: "flex",
              flexDirection: "row",
              p: "1rem",
              boxShadow: "0px 0px 6px 2px ",
              transition: "all ease 1s",
            }}
            className="contactCard"
          >
            <CardActionArea>
              <CardContent component="a" href="tel:+919000848795">
                <PhoneIcon
                  sx={{
                    fontSize: { xs: "4rem", sm: "6rem", md: "8rem" },
                    color: "red",
                  }}
                />
                <Button>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "blue",
                      fontSize: { xs: "1rem", md: "1.3rem" },
                    }}
                  >
                    +91 90008 48795
                  </Typography>
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>

        <Box
          mt={6}
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          px={{ xs: 2, sm: 4 }}
        >
          <Typography
            variant="h3"
            fontWeight="700"
            mb={{ xs: 3, sm: 4 }}
            fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}
            textAlign="center"
          >
            Locate Us:
          </Typography>

          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems="center"
            gap={{ xs: 3, md: 4 }}
            width="100%"
            maxWidth="1000px"
            justifyContent="center"
          >
            <Box flex="1" display="flex" justifyContent="center" width="100%">
              <a href={saiOpticsShop.src} target="_blank">
                <Image
                  src={saiOpticsShop}
                  alt="Sai Optics Shop"
                  style={{
                    borderRadius: "12px",
                    width: "100%",
                    maxWidth: "450px",
                    height: "auto",
                  }}
                />
              </a>
            </Box>

            <Box flex="1" width="100%">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1025.6499724336775!2d78.39702362848918!3d17.492701798958972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915956afc809%3A0x28c92f547ec4119b!2sSai%20Optical%20Express!5e1!3m2!1sen!2sin!4v1747973945974!5m2!1sen!2sin"
                style={{
                  border: 0,
                  borderRadius: "12px",
                  width: "100%",
                  height: "300px",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
