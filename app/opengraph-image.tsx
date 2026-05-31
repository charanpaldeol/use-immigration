// Purpose: Default Open Graph / social preview image (1200×630).
import { ImageResponse } from "next/og";

export const alt = "USD Immigration | Canadian Immigration Consultants";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#002147",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            color: "#aec7f6",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              backgroundColor: "#b71032",
            }}
          />
          <span>Canadian Immigration Consultants</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            USD Immigration
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 34,
              lineHeight: 1.35,
              color: "#d6e3ff",
              maxWidth: 920,
            }}
          >
            Canada-wide strategy — Express Entry, OINP, work permits, family
            sponsorship, and citizenship
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
            color: "#708ab5",
          }}
        >
          <span>Niagara Falls, Ontario · Serving clients across Canada</span>
          <span style={{ color: "#ffb3b4", fontWeight: 600 }}>usdimmigration.ca</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
