import SearchBar from "./Searchbar";
import { useState } from "react";
import CitySelect from "./CitySelect";
import HourlyRateSlider from "./HourlyRateSlider";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { blue, green, grey, pink, orange } from "@mui/material/colors";
import { Box, Checkbox, Grid, Slider, Typography } from "@mui/material";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import CategoryFilter from "./CategoryFilter";
import EnglishLevelFilter from "./EnglishLevelFilter";
import OtherLanguagesFilter from "./OtherLanguagesFilter";
import HoursBilledFilter from "./HoursBilledFilter";
import ContractToHire from "./ContractToHire";
import Offer from "./Offer";

const talentLevels = [
  {
    label: "Top Rated Plus",
    color: pink[400],
    icon: <StarRoundedIcon sx={{ color: "#fff", fontSize: 16 }} />,
  },
  {
    label: "Top Rated",
    color: blue[600],
    icon: <StarRoundedIcon sx={{ color: "#fff", fontSize: 16 }} />,
  },
  {
    label: "Rising Talent",
    color: green[600],
    icon: <ArrowUpwardRoundedIcon sx={{ color: "#fff", fontSize: 16 }} />,
  },
];

function valuetext(value) {
  return `$ ${value}`;
}

const TalentsPage = () => {
    const [value, setValue] = useState([20, 37]);
    const handleChangeHourlyRate = (event, newValue) => {
        setValue(newValue);
    };

    const [selected, setSelected] = useState([]);
    const handleChange = (label) => {
        setSelected((prev) =>
        prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
        );
    };
    return(
        <Grid container width="100%" display="flex" justifyContent="center">
            <Grid size={{ lg: 9.5, md: 9.5, sm: 12, xs: 12 }} px={2} mb={10} mt={15}>
                <SearchBar />
                <Grid container width="100%" mt={3} display="flex" justifyContent="space-between">
                    <Grid size={{ lg: 2.8, md: 2.8, sm: 12, xs: 12 }}>
                        {/* Talent Badge */}
                        <Box
                            sx={{
                                p: 2,
                                width: '100%',
                                borderRadius: 3,
                                background: grey[100]
                            }}
                        >
                            <Typography color={grey[900]} fontSize={13} fontWeight={600}>
                                Talent badge
                            </Typography>
                            <Grid container width="100%">
                                <Box>
                                {talentLevels.map((talent) => (
                                    <Grid container key={talent.label} alignItems="center" sx={{ mb: 0.5 }}>
                                        <Checkbox
                                            size="medium"
                                            disableRipple
                                            checked={selected.includes(talent.label)}
                                            onChange={() => handleChange(talent.label)}
                                            sx={{
                                                color: grey[700],
                                                "&.Mui-checked": { color: orange[400] },
                                                "&:hover": { color: orange[400] },
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                width: 20,
                                                height: 20,
                                                borderRadius: "6px",
                                                backgroundColor: talent.color,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                mr: 1.5,
                                            }}
                                        >
                                            {talent.icon}
                                        </Box>
                                        <Typography fontSize={14} fontWeight={500} color={grey[900]}>
                                            {talent.label}
                                        </Typography>
                                    </Grid>
                                ))}
                                </Box>
                            </Grid>
                            <Typography color={grey[900]} fontSize={13} fontWeight={600} mt={2}>
                                Hourly Rate
                            </Typography>
                            <HourlyRateSlider />
                            <Typography color={grey[900]} fontSize={13} fontWeight={600} mb={1} mt={3}>
                                Location
                            </Typography>
                            <CitySelect />
                            <ContractToHire />
                            <CategoryFilter />
                            <HoursBilledFilter />
                            <EnglishLevelFilter />
                            <OtherLanguagesFilter />
                        </Box>
                    </Grid>
                    <Grid size={{ lg: 9, md: 9, sm: 12, xs: 12 }} flexGrow={1}>
                        <Offer />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TalentsPage;
