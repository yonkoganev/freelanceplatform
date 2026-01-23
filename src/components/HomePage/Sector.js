import { grey } from "@mui/material/colors";
import { gradientBox } from "@/theme/colors";
import { useTranslation, Trans } from "next-i18next";
import { Box, Typography, Grid } from "@mui/material";
import TerminalIcon from "@mui/icons-material/Terminal";
import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import Groups3OutlinedIcon from "@mui/icons-material/Groups3Outlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import AttractionsOutlinedIcon from "@mui/icons-material/AttractionsOutlined";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import { blue, brown, cyan, green, orange, pink, purple, yellow } from "@mui/material/colors";

const icons = [
  <TerminalIcon key="terminal" style={{ fontSize: 28 }} />,
  <ColorLensOutlinedIcon key="color" style={{ fontSize: 28 }} />,
  <AttractionsOutlinedIcon key="ai" style={{ fontSize: 28 }} />,
  <HandshakeOutlinedIcon key="sales" style={{ fontSize: 28 }} />,
  <CreateOutlinedIcon key="writing" style={{ fontSize: 28 }} />,
  <SupervisorAccountOutlinedIcon key="admin" style={{ fontSize: 28 }} />,
  <AccountBalanceRoundedIcon key="finance" style={{ fontSize: 28 }} />,
  <GavelRoundedIcon key="legal" style={{ fontSize: 28 }} />,
  <Groups3OutlinedIcon key="hr" style={{ fontSize: 28 }} />
];

const colors = [
  orange[500],
  green[500],
  blue[500],
  yellow[500],
  purple[300],
  pink[500],
  cyan[500],
  "#1de9b6",
  brown[400]
];

const Sector = () => {
  const { t } = useTranslation("sector");
  const categories = t("categories", { returnObjects: true });

  return (
    <Grid container width="100%" display="flex" justifyContent="center" my={8}>
      <Grid size={{ lg: 8, md: 10, sm: 12, xs: 12 }} display="flex" px={2} flexDirection="column">
        <Typography fontSize={40} color={grey[800]} fontWeight={550}>
          <Trans
            i18nKey="headline"
            ns="sector"
            components={{
              highlight: (
                <span
                  style={{
                    color: grey[900],
                    background: `linear-gradient(to right, ${gradientBox}, transparent)`,
                    paddingLeft: 5
                  }}
                />
              )
            }}
          />
        </Typography>

        <Grid container width="100%" gap={2} mt={4}>
          {categories.map((categ, id) => (
            <Box
              key={id}
              p={1.5}
              gap={2}
              flexGrow={1}
              display="flex"
              borderRadius={3}
              flexDirection="row"
              alignItems="center"
              bgcolor={grey[50]}
              sx={{
                transition: "transform 0.2s ease-in-out",
                ":hover": { transform: "scale(1.05)", cursor: "pointer" },
                width: { lg: "30%", md: "30%", sm: "48%", xs: "80%" }
              }}
            >
              <Box
                sx={{
                  p: 1,
                  width: 50,
                  height: 50,
                  display: "flex",
                  borderRadius: 2,
                  color: grey[900],
                  alignItems: "center",
                  background: colors[id],
                  justifyContent: "center"
                }}
              >
                {icons[id]}
              </Box>
              <Grid container direction="column">
                <Typography color={grey[900]} fontSize={18} fontWeight={550}>
                  {categ.title}
                </Typography>
                <Typography color={grey[600]} fontSize={14}>
                  {categ.description}
                </Typography>
              </Grid>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Sector;
