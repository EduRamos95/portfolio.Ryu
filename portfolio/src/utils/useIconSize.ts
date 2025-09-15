import type { IconSizeProps } from "./presetSize";

export type SizePreset = IconSizeProps["sizePreset"];

export interface IconSizeOptions {
  aspectRatio?: number;
  sizes?: Record<SizePreset, number>;
}

export interface ComputeSizeProps {
  width?: number;
  height?: number;
  sizePreset?: SizePreset;
}

export function getPresetSize(sP: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined, presetSizes: Record<SizePreset, {width:number,height:number}>) {
  return sP ? presetSizes[sP] : null;
}

export function getComputedSize(
  props: ComputeSizeProps,
  options?: IconSizeOptions
) {
  const {
    aspectRatio = 1,
    sizes = { xs: 20, sm: 24, md: 24, lg: 28, xl:32 },
  } = options || {};

  const presetSizes = {
    xs: { width: sizes.xs, height: Math.round(sizes.xs / aspectRatio) },
    sm: { width: sizes.sm, height: Math.round(sizes.sm / aspectRatio) },
    md: { width: sizes.md, height: Math.round(sizes.md / aspectRatio) },
    lg: { width: sizes.lg, height: Math.round(sizes.lg / aspectRatio) },
    xl: { width: sizes.xl, height: Math.round(sizes.xl / aspectRatio) },
  };

  const presetSize = getPresetSize(props.sizePreset, presetSizes);

  const computedWidth =
    presetSize?.width ??
    props.width ??
    (props.height ? Math.round(props.height * aspectRatio) : sizes.lg);

  const computedHeight =
    presetSize?.height ??
    props.height ??
    (props.width ? Math.round(props.width / aspectRatio) : Math.round(sizes.lg / aspectRatio));

  return { width: computedWidth, height: computedHeight };
}
