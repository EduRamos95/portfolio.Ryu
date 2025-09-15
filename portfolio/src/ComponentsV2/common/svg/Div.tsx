'use client';

import type { SvgIconProps } from "@mui/material";
import type { IconSizeProps } from "@utils/presetSize";

import { SvgIcon, useTheme } from "@mui/material";

import { getComputedSize } from "src/utils/useIconSize";

export interface IconProps extends SvgIconProps {
  width?: number;
  height?: number;
  sizePreset?: IconSizeProps["sizePreset"];
}

const aspectRatio:number = 700 / 254;

const sizes:Record<IconSizeProps["sizePreset"],number> = {
  xs: 122,
  sm: 122,
  md: 160,
  lg: 180,
  xl: 700
}

export default function IconMaskGradient(
  { 
    width,
    height,
    sizePreset,
    ...props
  }: Readonly<IconProps>) {
  const theme = useTheme();

  const { width: computedWidth, height: computedHeight } = getComputedSize({width,height,sizePreset},{aspectRatio,sizes});
  const viewBox = `0 0 ${sizes.xl} ${Math.round(sizes.xl / aspectRatio)}`;



  return (
    <SvgIcon
      {...props}
      viewBox={viewBox}
      sx={{ width: computedWidth, height: computedHeight, ...props.sx }}
    >
      <defs>
        <linearGradient id="paint0_linear" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={theme.palette.primary.light} />
          <stop offset="100%" stopColor={theme.palette.primary.dark} />
        </linearGradient>
      </defs>
      <mask id="mask0" maskUnits="userSpaceOnUse"
        x={0}
        y={Math.round(sizes.lg / aspectRatio) * 0.12}
        width={sizes.lg}
        height={Math.round(sizes.lg / aspectRatio) * 0.8}>
        <path
        d="M165.753 45.8271C142.755 28.5389 120.448 42.6285 95.5673 37.6469C70.5066 32.6292 60.5218 15.9219 31.9781 23.634C6.69304 30.4653 -8.64914 57.8546 5.25094 80.7851C9.21199 87.3195 15.9599 92.2492 18.7175 99.5604C23.1659 111.355 16.3948 120.41 17.7156 132.001C23.2042 180.161 98.4252 161.506 126.103 146.523C169.511 123.024 198.876 70.7267 165.753 45.8271Z"
        fill="url(#paint0_linear)"
        fillOpacity="0.16" />
      </mask>
      <g mask="url(#mask0)">
        <path 
        d="M165.753 45.8271C142.755 28.5389 120.448 42.6285 95.5673 37.6469C70.5066 32.6292 60.5218 15.9219 31.9781 23.634C6.69304 30.4653 -8.64914 57.8546 5.25094 80.7851C9.21199 87.3195 15.9599 92.2492 18.7175 99.5604C23.1659 111.355 16.3948 120.41 17.7156 132.001C23.2042 180.161 98.4252 161.506 126.103 146.523C169.511 123.024 198.876 70.7267 165.753 45.8271Z"
        fill="url(#paint0_linear)" />
      </g>
    </SvgIcon>

  );
}


