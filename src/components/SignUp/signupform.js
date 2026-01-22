import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  InputAdornment,
  IconButton,
  MenuItem,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { green, grey } from "@mui/material/colors";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import { countries } from "./countries";
import { darkBrand } from "@/theme/colors";
import { useRouter } from "next/router";

export default function SignupForm({ userType }) {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
    agree: false,
    subscribe: false,
  });

  // Password validation logic
  const passwordValidations = {
    length: form.password.length >= 8,
    hasLetter: /[A-Za-z]/.test(form.password),
    hasSymbol: /[^A-Za-z0-9]/.test(form.password),
  };

  const isPasswordValid =
    passwordValidations.length &&
    passwordValidations.hasLetter &&
    passwordValidations.hasSymbol;

  // Overall form validity
  const isFormValid =
    form.firstName &&
    form.lastName &&
    form.email &&
    isPasswordValid &&
    form.country &&
    form.agree;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    if (isFormValid) {
      console.log("✅ Valid form data:", form);
    }
  };

  // Shared textfield styling
  const textFieldStyle = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 3,
      "&.Mui-focused fieldset": {
        borderColor: darkBrand,
      },
    },
    "& label.Mui-focused": {
      color: darkBrand,
    },
  };

  return (
    <Box
      sx={{
        zIndex: 999,
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#fff",
        display: "flex",
        justifyContent: "center",
        py: 8,
      }}
    >
      <Button
        onClick={() => router.push("/")}
        startIcon={<KeyboardBackspaceIcon style={{ color: grey[900] }} />}
        disableRipple
        sx={{
          top: 30,
          left: '10%',
          color: grey[900],
          position: 'absolute',
          textTransform: 'none',
          background: 'transparent',
          ':hover': { background: grey[200] }
        }}
      >
        Go back
      </Button>
      <Box sx={{ width: "100%", maxWidth: 580 }}>
        {/* Title */}
        <Typography
          variant="h5"
          fontWeight={600}
          textAlign="center"
          color={grey[900]}
          mb={4}
        >
          {userType === 'freelancer' ? "Sign up to find work you love" : "Sign up to hire talent"}
        </Typography>

        {/* Social Buttons */}
        <Grid
          container
          spacing={2}
          mb={2}
          display="flex"
          justifyContent="center"
          width="100%"
        >
          <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                height: 40,
                fontWeight: 500,
                color: grey[900],
                borderRadius: 50,
                borderColor: grey[400],
                textTransform: "none",
              }}
            >
               Continue with Apple
            </Button>
          </Grid>
          <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                height: 40,
                fontWeight: 500,
                color: grey[900],
                borderRadius: 50,
                textTransform: "none",
                borderColor: grey[400],
              }}
            >
              <Box
                component="img"
                src="https://developers.google.com/identity/images/g-logo.png"
                sx={{ height: 18, mr: 1 }}
              />
              Continue with Google
            </Button>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          my={2}
          gap={2}
        >
          <Divider sx={{ flex: 1 }} />
          <Typography color={grey[600]}>or</Typography>
          <Divider sx={{ flex: 1 }} />
        </Box>

        {/* Form */}
        <Grid
          container
          display="flex"
          justifyContent="space-between"
          width="100%"
          gap={2}
        >
          {/* First Name */}
          <Grid size={{ lg: 5.8 }}>
            <TextField
              fullWidth
              label="First name"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              sx={textFieldStyle}
              error={submitted && !form.firstName}
              helperText={submitted && !form.firstName ? "First name is required" : ""}
            />
          </Grid>

          {/* Last Name */}
          <Grid size={{ lg: 5.8 }}>
            <TextField
              fullWidth
              label="Last name"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              sx={textFieldStyle}
              error={submitted && !form.lastName}
              helperText={submitted && !form.lastName ? "Last name is required" : ""}
            />
          </Grid>

          {/* Email */}
          <Grid size={{ lg: 12 }}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              sx={textFieldStyle}
              error={submitted && !form.email}
              helperText={submitted && !form.email ? "Email address is required" : ""}
            />
          </Grid>

          {/* Password */}
          <Grid size={{ lg: 12 }}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              placeholder="Password (8 or more characters)"
              sx={textFieldStyle}
              error={submitted && (!form.password || !isPasswordValid)}
              helperText={
                submitted && !form.password
                  ? "Password is required"
                  : submitted && !isPasswordValid
                  ? "Password must be at least 8 characters long, contain one letter and one symbol."
                  : ""
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Live password feedback */}
            {form.password && !isPasswordValid && (
              <Box display="flex" alignItems="center" gap={0.6} mt={0.8} ml={0.5}>
                <WarningAmberRoundedIcon sx={{ fontSize: 16, color: "#786c07" }} />
                <Typography fontSize={13} color="#786c07">
                  Password must be at least 8 characters long, contain one letter and one symbol.
                </Typography>
              </Box>
            )}
          </Grid>

          {/* Country */}
          <Grid size={{ lg: 12 }}>
            <TextField
              select
              fullWidth
              label="Country"
              name="country"
              value={form.country}
              onChange={handleChange}
              sx={textFieldStyle}
              error={submitted && !form.country}
              helperText={submitted && !form.country ? "Country is required" : ""}
              SelectProps={{
                MenuProps: {
                  PaperProps: { style: { maxHeight: 300 } },
                },
              }}
            >
              {countries.map((country) => (
                <MenuItem key={country} value={country}>
                  {country}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Checkboxes */}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="subscribe"
                  checked={form.subscribe}
                  onChange={handleChange}
                  disableRipple
                  sx={{
                    color: grey[700],
                    "&.Mui-checked": { color: darkBrand },
                    "&:hover": { backgroundColor: "transparent", color: darkBrand },
                    "& .MuiSvgIcon-root": { borderRadius: "3px" },
                  }}
                />
              }
              label={
                <Typography fontSize={14} color={grey[900]}>
                  {userType === "freelancer" ? "Send me helpful emails to find rewarding work and job leads." : "Send me emails with tips on how to find talent that fits my needs."}
                </Typography>
              }
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="agree"
                  checked={form.agree}
                  onChange={handleChange}
                  disableRipple
                  sx={{
                    color: grey[700],
                    "&.Mui-checked": { color: darkBrand },
                    "&:hover": { backgroundColor: "transparent", color: darkBrand },
                    "& .MuiSvgIcon-root": { borderRadius: "3px" },
                  }}
                />
              }
              label={
                <Typography fontSize={14} color={grey[900]}>
                  Yes, I understand and agree to the{" "}
                  <Link href="#" sx={{ color: darkBrand, fontWeight: 600 }} underline="hover">
                    Terms of Service
                  </Link>
                  , including the{" "}
                  <Link href="#" sx={{ color: darkBrand, fontWeight: 600 }} underline="hover">
                    User Agreement
                  </Link>{" "}
                  and{" "}
                  <Link href="#" sx={{ color: darkBrand, fontWeight: 600 }} underline="hover">
                    Privacy Policy
                  </Link>
                  .
                </Typography>
              }
            />
            {submitted && !form.agree && (
              <Typography fontSize={13} color="error" ml={4.5} mt={0.3}>
                You must agree to the Terms of Service
              </Typography>
            )}
          </Grid>

          {/* Submit */}
          <Grid item display="flex" justifyContent="center" width="100%">
            <Button
              onClick={handleSubmit}
              disabled={!isFormValid}
              sx={{
                px: 3,
                py: 1.3,
                borderRadius: 3,
                color: grey[50],
                fontWeight: 600,
                textTransform: "none",
                background: isFormValid ? darkBrand : grey[300],
                ":hover": {
                  background: isFormValid ? green[500] : grey[300],
                },
              }}
            >
              Create my account
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
