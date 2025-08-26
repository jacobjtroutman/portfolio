"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Pill from "./Pill";
import LayerBox from "./LayerBox";

export default function HeroSection() {
  const [selectedStack, setSelectedStack] = useState<
    "frontend" | "backend" | "database" | "cloud" | null
  >(null);

  return (
    <section className="min-h-screen relative overflow-hidden py-24 md:py-0">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/endless-constellation.svg')]" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
            <h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-red-500">
              Jacob Troutman
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              I build end-to-end software solutions with 7 years of experience
              creating scalable applications and leading complex development
              initiatives.
            </p>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
              Former Senior Full Stack Developer at{" "}
              <span className="text-orange-400">Velaro Live Chat</span> and
              Professional Software Engineer at{" "}
              <span className="text-pink-400">Erie Insurance</span>, delivering
              scalable solutions and impactful software across industries.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8">
            <Pill text="React" color="orange" />
            <Pill text="TypeScript" color="pink" />
            <Pill text="C#" color="red" />
            <Pill text=".NET" color="orange" />
            <Pill text="SQL" color="pink" />
            <Pill text="Azure" color="red" />
          </div>
        </motion.div>

        {/* Interactive System Architecture */}
        <div className="w-full max-w-7xl mx-auto relative px-2 md:px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
              {/* Frontend Layer */}
              <LayerBox
                color="orange"
                isSelected={selectedStack === "frontend"}
                items={[
                  "Build responsive UIs with React and TypeScript.",
                  "Manage state and reusable components.",
                  "Optimize performance and accessibility.",
                ]}
                onHover={() => setSelectedStack("frontend")}
                onLeave={() => setSelectedStack(null)}
                title="Frontend Development"
              />

              {/* Backend Layer */}
              <LayerBox
                color="pink"
                isSelected={selectedStack === "backend"}
                items={[
                  "Develop REST APIs with C#/.NET.",
                  "Integrate authentication, caching, and services.",
                  "Apply clean architecture and testing.",
                ]}
                onHover={() => setSelectedStack("backend")}
                onLeave={() => setSelectedStack(null)}
                title="Backend Development"
              />

              {/* Database Layer */}
              <LayerBox
                color="red"
                isSelected={selectedStack === "database"}
                items={[
                  "Design and maintain SQL Server databases.",
                  "Write optimized queries and stored procedures.",
                  "Ensure data integrity and security.",
                ]}
                onHover={() => setSelectedStack("database")}
                onLeave={() => setSelectedStack(null)}
                title="Database"
              />

              {/* Cloud Layer */}
              <LayerBox
                color="orange"
                isSelected={selectedStack === "cloud"}
                items={[
                  "Deploy and manage applications on Azure.",
                  "Configure CI/CD pipelines and infrastructure as code.",
                  "Monitor performance and optimize costs.",
                ]}
                onHover={() => setSelectedStack("cloud")}
                onLeave={() => setSelectedStack(null)}
                title="Cloud"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
