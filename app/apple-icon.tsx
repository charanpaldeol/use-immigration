import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
        <rect width="180" height="180" rx="40" fill="#002147" />
        <path
          fill="#ffffff"
          d="M56 50h20v54a31.5 31.5 0 0 0 63 0V50h20v54a54 54 0 0 1-108 0V50H56z"
        />
        <rect x="68" y="146" width="44" height="10" rx="5" fill="#b71032" />
      </svg>
    ),
    { ...size }
  );
}
