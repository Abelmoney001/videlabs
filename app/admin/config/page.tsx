"use client";

import { useState } from "react";
import GradientButton from "@/components/GradientButton";

export default function AdminConfigPage() {
  const [opacity, setOpacity] = useState<string>("100");
  const [secret, setSecret] = useState<string>("");
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading" });

    try {
      const response = await fetch("/api/opacity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${secret}`,
        },
        body: JSON.stringify({ opacity: Number(opacity) }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            "Website opacity updated successfully! Refresh the page to see changes.",
        });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to update opacity.",
        });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Network error occurred." });
    }
  };

  return (
    <div
      className="min-h-screen bg-black flex items-center justify-center px-6 py-24 object-contain"
      style={{ opacity: 1 }}
    >
      <div className="max-w-md w-full bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-md">
        <h1 className="text-3xl font-heading font-black mb-2 text-white">
          Site Config
        </h1>
        <p className="text-gray-400 text-sm mb-8">
          Update your website's master opacity below. You must provide the
          correct API secret to authorize this change.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="opacity"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Website Opacity (%)
            </label>
            <input
              type="number"
              id="opacity"
              min="0"
              max="100"
              value={opacity}
              onChange={(e) => setOpacity(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>

          <div>
            <label
              htmlFor="secret"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              API Secret Key
            </label>
            <input
              type="password"
              id="secret"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="Enter your secret password"
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              required
            />
            <p className="text-xs text-gray-500 mt-2">
              This is the key from your set
            </p>
          </div>

          {status.type !== "idle" && status.type !== "loading" && (
            <div
              className={`p-4 rounded-xl text-sm ${status.type === "success" ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}
            >
              {status.message}
            </div>
          )}

          <div className="pt-2">
            <GradientButton
              type="submit"
              disabled={status.type === "loading"}
              className={`w-full ${status.type === "loading" ? "opacity-75 cursor-not-allowed" : ""}`}
              showIcon={false}
            >
              {status.type === "loading" ? "Updating..." : "Update Opacity"}
            </GradientButton>
          </div>
        </form>
      </div>
    </div>
  );
}
