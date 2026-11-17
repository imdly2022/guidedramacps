import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SagaBox 推广与 Postback 设置 | DramaCPS",
  description: "DramaCPS SagaBox 专用推广链接、Click ID 自动识别及下游 Postback URL 配置指南。",
};

export default function SagaBoxLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
