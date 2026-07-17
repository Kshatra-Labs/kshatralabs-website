"use client";

import React, { useState } from "react";
import { Skiper61 } from "@/components/v1/skiper61";
import { Skiper67 } from "@/components/v1/skiper67";
import { Copy, Check, Terminal, ExternalLink, ShieldCheck, Play, MousePointer } from "lucide-react";

type TabId = "mouse-follower" | "video-player";

export default function HowToPage() {
  const [activeTab, setActiveTab] = useState<TabId>("mouse-follower");
  const [copied, setCopied] = useState(false);

  const cliCommands = {
    "mouse-follower": "pnpm dlx shadcn add @skiper-ui/skiper61",
    "video-player": "pnpm dlx shadcn add @skiper-ui/skiper67"
  };

  const handleCopy = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0c0c_1px,transparent_1px),linear-gradient(to_bottom,#0c0c0c_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Hero Header */}
      <header className="relative max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16 border-b border-neutral-900">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 bg-[#cc1414]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#cc1414] font-bold">
                How-To Collection
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Interactive Components
            </h1>
            <p className="text-lg text-neutral-400 font-light max-w-2xl mt-4 leading-relaxed">
              Premium reverse-engineered UI components built with Framer Motion, TailwindCSS, and Media Chrome. Snappy, optimized, and ready to drop in.
            </p>
          </div>

          {/* Installation CLI Card */}
          <div className="w-full lg:w-auto min-w-[340px] bg-[#050505] border border-neutral-800 p-5 rounded-2xl">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase text-neutral-500 tracking-wider mb-3">
              <Terminal className="w-3.5 h-3.5 text-[#cc1414]" />
              <span>Shadcn CLI Trusted Registry</span>
            </div>
            <div className="flex items-center justify-between gap-3 bg-black border border-neutral-900 p-3 rounded-lg font-mono text-xs text-neutral-200">
              <span className="truncate select-all">{cliCommands[activeTab]}</span>
              <button
                onClick={() => handleCopy(cliCommands[activeTab])}
                className="p-1.5 hover:bg-neutral-900 text-neutral-400 hover:text-white rounded transition-colors"
                title="Copy installation command"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Tab Selectors */}
        <div className="flex gap-4 mt-12 border-b border-neutral-900">
          <button
            onClick={() => {
              setActiveTab("mouse-follower");
              setCopied(false);
            }}
            className={`px-6 py-4 font-mono text-xs uppercase tracking-widest relative transition-all ${
              activeTab === "mouse-follower" ? "text-white font-bold bg-neutral-900/40" : "text-neutral-500 hover:text-white"
            }`}
          >
            <span className="inline-flex items-center gap-2">
              <MousePointer className="w-3.5 h-3.5" />
              <span>01. Mouse Follower</span>
            </span>
            {activeTab === "mouse-follower" && (
              <span className="absolute bottom-0 inset-x-0 h-[2px] bg-[#cc1414]" />
            )}
          </button>

          <button
            onClick={() => {
              setActiveTab("video-player");
              setCopied(false);
            }}
            className={`px-6 py-4 font-mono text-xs uppercase tracking-widest relative transition-all ${
              activeTab === "video-player" ? "text-white font-bold bg-neutral-900/40" : "text-neutral-500 hover:text-white"
            }`}
          >
            <span className="inline-flex items-center gap-2">
              <Play className="w-3.5 h-3.5" />
              <span>02. Custom Video Player</span>
            </span>
            {activeTab === "video-player" && (
              <span className="absolute bottom-0 inset-x-0 h-[2px] bg-[#cc1414]" />
            )}
          </button>
        </div>
      </header>

      {/* Main Showcase Grid */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Interactive Component Showcase */}
        <div className="lg:col-span-8 border border-neutral-900 rounded-3xl bg-[#030303] overflow-hidden">
          <div className="p-4 border-b border-neutral-900 bg-[#050505] flex items-center justify-between font-mono text-xs text-neutral-500">
            <span>Interactive Workspace // {activeTab === "mouse-follower" ? "Skiper61" : "Skiper67"}</span>
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
            </div>
          </div>
          
          {/* Embed active component */}
          <div className="h-[650px] overflow-hidden relative bg-black flex items-center justify-center">
            {activeTab === "mouse-follower" ? (
              <div className="w-full h-full relative">
                <Skiper61 />
              </div>
            ) : (
              <div className="w-full h-full relative flex items-center justify-center">
                <Skiper67 />
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Usage & Details Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          {activeTab === "mouse-follower" ? (
            <>
              {/* How to use */}
              <div className="space-y-4">
                <h3
                  className="text-xl font-bold uppercase tracking-tight text-white"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  How to Use
                </h3>
                <div className="bg-[#050505] border border-neutral-800 p-5 rounded-2xl font-mono text-xs text-neutral-300 leading-relaxed overflow-x-auto">
                  <span className="text-neutral-500 block mb-2">{"// Import Mouse Follower Components"}</span>
                  <span className="text-[#cc1414]">import</span>{" "}
                  <span>{"{"} SimpleMouseFollow, SpringMouseFollow {"}"}</span>{" "}
                  <span className="text-[#cc1414]">from</span>{" "}
                  <span className="text-emerald-400">&quot;@/components/v1/skiper61&quot;</span>;
                  <br /><br />
                  <span className="text-[#cc1414]">const</span> Demo = () =&gt; {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="text-[#cc1414]">return</span> (
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;main&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;SimpleMouseFollow /&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;SpringMouseFollow /&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/main&gt;
                  <br />
                  &nbsp;&nbsp;);
                  <br />
                  {"};"}
                </div>
              </div>

              {/* Config parameters */}
              <div className="space-y-4">
                <h3
                  className="text-xl font-bold uppercase tracking-tight text-white"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Parameters & Config
                </h3>
                <div className="border border-neutral-900 bg-[#050505] rounded-2xl divide-y divide-neutral-900 font-mono text-xs">
                  <div className="p-4 flex justify-between">
                    <span className="text-neutral-500">MASS</span>
                    <span className="text-white font-bold">0.1 (Snappy Inertia)</span>
                  </div>
                  <div className="p-4 flex justify-between">
                    <span className="text-neutral-500">DAMPING</span>
                    <span className="text-white font-bold">10.0 (Bounce control)</span>
                  </div>
                  <div className="p-4 flex justify-between">
                    <span className="text-neutral-500">STIFFNESS</span>
                    <span className="text-white font-bold">131.0 (Snappy Return)</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* How to use */}
              <div className="space-y-4">
                <h3
                  className="text-xl font-bold uppercase tracking-tight text-white"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  How to Use
                </h3>
                <div className="bg-[#050505] border border-neutral-800 p-5 rounded-2xl font-mono text-[11px] text-neutral-300 leading-relaxed overflow-x-auto">
                  <span className="text-neutral-500 block mb-2">{"// Import Custom Video Player Components"}</span>
                  <span className="text-[#cc1414]">import</span>{" "}
                  <span>{"{"}</span>
                  <br />
                  &nbsp;&nbsp;VideoPlayer,
                  <br />
                  &nbsp;&nbsp;VideoPlayerContent,
                  <br />
                  &nbsp;&nbsp;VideoPlayerControlBar,
                  <br />
                  &nbsp;&nbsp;VideoPlayerPlayButton,
                  <br />
                  &nbsp;&nbsp;VideoPlayerTimeRange,
                  <br />
                  &nbsp;&nbsp;VideoPlayerMuteButton
                  <br />
                  <span>{"}"}</span>{" "}
                  <span className="text-[#cc1414]">from</span>{" "}
                  <span className="text-emerald-400">&quot;@/components/v1/skiper67&quot;</span>;
                  <br /><br />
                  <span className="text-[#cc1414]">const</span> PlayerDemo = () =&gt; {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="text-[#cc1414]">return</span> (
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;VideoPlayer style={"{{ width: '100%', height: '100%' }}"}&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;VideoPlayerContent
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src=&quot;/video/demo.mp4&quot;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;autoPlay
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;slot=&quot;media&quot;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className=&quot;w-full object-cover&quot;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;VideoPlayerControlBar className=&quot;absolute bottom-0 left-1/2 flex w-full max-w-7xl -translate-x-1/2 items-center justify-center px-5&quot;&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;VideoPlayerPlayButton className=&quot;h-4 bg-transparent&quot; /&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;VideoPlayerTimeRange className=&quot;bg-transparent&quot; /&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;VideoPlayerMuteButton className=&quot;size-4 bg-transparent&quot; /&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/VideoPlayerControlBar&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/VideoPlayer&gt;
                  <br />
                  &nbsp;&nbsp;);
                  <br />
                  {"};"}
                </div>
              </div>

              {/* Sub-components catalog */}
              <div className="space-y-4">
                <h3
                  className="text-xl font-bold uppercase tracking-tight text-white"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Subcomponents
                </h3>
                <div className="border border-neutral-900 bg-[#050505] rounded-2xl divide-y divide-neutral-900 font-mono text-xs">
                  <div className="p-3">
                    <div className="text-white font-bold mb-1">&lt;VideoPlayer /&gt;</div>
                    <div className="text-neutral-500 text-[11px]">Media-Chrome controller container</div>
                  </div>
                  <div className="p-3">
                    <div className="text-white font-bold mb-1">&lt;VideoPlayerContent /&gt;</div>
                    <div className="text-neutral-500 text-[11px]">Underlying HTML5 video player element</div>
                  </div>
                  <div className="p-3">
                    <div className="text-white font-bold mb-1">&lt;VideoPlayerControlBar /&gt;</div>
                    <div className="text-neutral-500 text-[11px]">Bottom aligned actions bar container</div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Notes & License Info */}
          <div className="bg-neutral-950/40 border border-neutral-900 p-6 rounded-2xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#cc1414]" />
              <span>License & Usage</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Free to use and modify in personal and commercial projects. Attribution to Skiper UI required when using free tiers.
            </p>
            <div className="pt-2 border-t border-neutral-900 flex justify-between items-center text-[10px] font-mono text-neutral-500">
              <span>Skiper UI Registry 3.0</span>
              <a href="mailto:yo@gxuri.me" className="hover:text-white transition-colors flex items-center gap-1">
                <span>yo@gxuri.me</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
