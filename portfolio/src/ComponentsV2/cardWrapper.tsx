import type { BoxProps } from "@mui/material";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { lighten, useTheme } from '@mui/material/styles';

interface CardWrapperProps extends BoxProps {
  shadow?: "none" | "small" | "medium" | "large" | "shadow1" | "shadow2" | "combined";
  borderRadiusSize?: "small" | "medium" | "large";
  spacing?: number | { xs: number; sm: number; md: number };
}

const shadowOptionsLight = {
  none: "none",
  small: "0px 2px 4px rgba(0, 0, 0, 0.08)",
  medium: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  large: "0px 6px 14px rgba(0, 0, 0, 0.15)",
  shadow1: "0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
  shadow2: "0px 0px 2px 0px rgba(145, 158, 171, 0.20)",
  combined:
    "0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20)",
};

const shadowOptionsDark = {
  none: "none",
  small: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Sombras más tenues en dark mode
  medium: "0px 4px 10px rgba(0, 0, 0, 0.25)",
  large: "0px 6px 14px rgba(0, 0, 0, 0.3)",
  shadow1: "0px 12px 24px -4px rgba(255, 255, 255, 0.08)", // Sombras blancas para resaltar en dark mode
  shadow2: "0px 0px 2px 0px rgba(255, 255, 255, 0.15)",
  combined:
    "0px 12px 24px -4px rgba(255, 255, 255, 0.12), 0px 0px 2px 0px rgba(255, 255, 255, 0.20)",
};

const borderRadiusOptions = {
  small: { xs: "6px", sm: "10px", md: "14px" },
  medium: { xs: "10px", sm: "12px", md: "16px" },
  large: { xs: "10px", sm: "16px", md: "20px" },
};


export default function CardWrapper({
  children,
  shadow = "combined",
  borderRadiusSize = "medium",
  spacing = 3,
  sx = {},
  ...props
}: CardWrapperProps) {

  const theme = useTheme();
  const shadowOptions = theme.palette.mode === "dark" ? shadowOptionsDark : shadowOptionsLight;

  return (
    <Box
      sx={{
        borderRadius: borderRadiusOptions[borderRadiusSize],
        boxShadow: shadowOptions[shadow],
        padding: { xs: "16px", sm: "20px", md: "24px" },
        backgroundColor:
          theme.palette.mode === 'dark'
            ? lighten(theme.palette.background.default, 0.15) // Hace el negro más gris
            : '#FFFFFF', // Mantiene el blanco en Light Mode
        gap: { xs: "16px", sm: "20px", md: "24px" },
        ...sx,
      }}
    >
      
      {spacing ? ( 
        <Stack spacing={typeof spacing === "number" ? spacing : { ...spacing }}>
          {children}
        </Stack>
      ) : (
        <>
          {children} 
        </>
      )}

    </Box>
  );
}