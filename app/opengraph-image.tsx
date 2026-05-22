import { ImageResponse } from "next/og";
import { SITE } from "@/lib/utils";

export const runtime = "edge";
export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        background:
          "radial-gradient(80% 60% at 20% 10%, rgba(45, 212, 191, 0.35) 0%, transparent 60%), radial-gradient(60% 60% at 90% 90%, rgba(139, 92, 246, 0.30) 0%, transparent 65%), #0a0d12",
        color: "#fafafa",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 28 }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: "linear-gradient(135deg, #2dd4bf 0%, #8b5cf6 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#0a0d12",
            fontWeight: 700,
            fontSize: 24,
          }}
        >
          ◍
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "baseline" }}>
          <span style={{ fontWeight: 700 }}>FlowMind</span>
          <span style={{ color: "#9aa5b1" }}>AI</span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 980 }}>
        <div
          style={{
            display: "inline-flex",
            alignSelf: "flex-start",
            alignItems: "center",
            gap: 10,
            padding: "8px 14px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.04)",
            color: "#9aa5b1",
            fontSize: 22,
            letterSpacing: 1.2,
            textTransform: "uppercase",
          }}
        >
          Plataforma de orquestração com IA
        </div>
        <div
          style={{
            fontSize: 84,
            lineHeight: 1.04,
            fontWeight: 600,
            letterSpacing: -1.5,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>A inteligência por trás</span>
          <span>
            das operações que{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #fafafa 0%, #2dd4bf 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              escalam.
            </span>
          </span>
        </div>
        <div style={{ fontSize: 28, color: "#9aa5b1", maxWidth: 880 }}>{SITE.description}</div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 22,
          color: "#6b7280",
        }}
      >
        <span>{SITE.domain}</span>
        <span>flowmind.ai/demo</span>
      </div>
    </div>,
    { ...size },
  );
}
