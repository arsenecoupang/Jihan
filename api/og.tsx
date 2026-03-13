import { ImageResponse } from "@vercel/og";

export const config = { runtime: "edge" };

export default function handler() {
  return new ImageResponse(
    <div
      style={{
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        background:
          "linear-gradient(135deg, #04130B 0%, #0B2A1D 55%, #0F3A2B 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* blur circles */}
      <div
        style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "#4ADE80",
          opacity: 0.18,
          filter: "blur(84px)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -80,
          left: -80,
          width: 440,
          height: 440,
          borderRadius: "50%",
          background: "#22D3EE",
          opacity: 0.16,
          filter: "blur(84px)",
          display: "flex",
        }}
      />

      {/* logo box */}
      <div
        style={{
          position: "absolute",
          top: 120,
          left: 96,
          width: 86,
          height: 86,
          borderRadius: 22,
          background: "rgba(74,222,128,0.22)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: 52,
            fontWeight: 800,
            background: "linear-gradient(90deg, #4ADE80, #22D3EE)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          J
        </span>
      </div>

      {/* name */}
      <div
        style={{
          position: "absolute",
          top: 260,
          left: 96,
          fontSize: 66,
          fontWeight: 800,
          color: "#E5F4EE",
          display: "flex",
        }}
      >
        Jihan Lee
      </div>

      {/* subtitle */}
      <div
        style={{
          position: "absolute",
          top: 330,
          left: 96,
          fontSize: 38,
          fontWeight: 500,
          color: "#A7C6B8",
          display: "flex",
        }}
      >
        Frontend Developer Portfolio
      </div>

      {/* divider */}
      <div
        style={{
          position: "absolute",
          top: 412,
          left: 96,
          width: 1008,
          height: 2,
          background: "linear-gradient(90deg, #4ADE80, #22D3EE)",
          opacity: 0.55,
          display: "flex",
        }}
      />

      {/* tech stack */}
      <div
        style={{
          position: "absolute",
          top: 440,
          left: 96,
          fontSize: 30,
          fontWeight: 500,
          color: "#D7EEE4",
          display: "flex",
        }}
      >
        React · TypeScript · Vite · Tailwind
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
