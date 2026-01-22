import { darkBrand } from "@/theme/colors";
import { Box } from "@mui/material";

const PriceAnim = () => {
    return(
        <Box
            sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "@keyframes pulseGlow": {
                "0%": { transform: "scale(1)", opacity: 0.4 },
                "50%": { transform: "scale(1.1)", opacity: 1.8 },
                "100%": { transform: "scale(1)", opacity: 0.4 },
            },
            }}
        >
            <Box
                sx={{
                    width: "60%",
                    aspectRatio: '3/2',
                    filter: "blur(20px)", // 👈 softens the glow
                    background: `
                    radial-gradient(
                        circle at center,
                        ${darkBrand} 0%,
                        rgba(17, 17, 17, 0.9) 100%
                    )
                    `,
                    animation: "pulseGlow 2s ease-in-out infinite",
                    borderRadius: "50%", // optional if you want circular blur
                    transformOrigin: "center",
                }}
            />
        </Box>
    );
};

export default PriceAnim;
