"use client";

import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center"
        >
          Full Stack Projects
        </motion.h2>

        <div className="space-y-16">
          {/* Messaging Platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
          >
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Enterprise Omnichannel Messaging Platform
                    </h3>
                    <p className="text-gray-400">
                      A comprehensive omnichannel messaging solution integrating
                      multiple communication channels with built-in lightweight
                      CRM capabilities for streamlined customer relationship
                      management and conversation continuity across touchpoints.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-orange-400 mb-3">
                        Frontend Architecture
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Multi-application React/TypeScript ecosystem</li>
                        <li>
                          • Agent dashboard for customer service representatives
                        </li>
                        <li>• Customer-facing messenger interface</li>
                        <li>
                          • Administrative control panel for system
                          configuration
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-pink-400 mb-3">
                        Backend Systems
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• C# .NET messaging service architecture</li>
                        <li>
                          • RESTful API with SignalR for real-time communication
                        </li>
                        <li>• Event-driven message processing</li>
                        <li>• Multi-database integration strategy</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-red-400">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>• 99.5% uptime with high-availability deployment</li>
                      <li>• Support for 10,000+ concurrent connections</li>
                      <li>
                        • Integrated customer data management with 360° customer
                        view
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-black/30 rounded-xl p-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-4">
                    System Architecture
                  </h4>
                  <div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
                    <svg className="w-full h-full" viewBox="0 0 400 300">
                      {/* Client Layer */}
                      <g>
                        <rect
                          x="20"
                          y="20"
                          width="110"
                          height="40"
                          rx="4"
                          className="fill-orange-500/20 stroke-orange-500"
                          strokeWidth="1"
                        />
                        <text
                          x="75"
                          y="45"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          Agent Client
                        </text>

                        <rect
                          x="140"
                          y="20"
                          width="110"
                          height="40"
                          rx="4"
                          className="fill-orange-500/20 stroke-orange-500"
                          strokeWidth="1"
                        />
                        <text
                          x="195"
                          y="45"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          Messenger
                        </text>

                        <rect
                          x="260"
                          y="20"
                          width="110"
                          height="40"
                          rx="4"
                          className="fill-orange-500/20 stroke-orange-500"
                          strokeWidth="1"
                        />
                        <text
                          x="315"
                          y="45"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          Admin Panel
                        </text>
                      </g>

                      {/* API Layer */}
                      <g>
                        <rect
                          x="20"
                          y="80"
                          width="360"
                          height="40"
                          rx="4"
                          className="fill-pink-500/20 stroke-pink-500"
                          strokeWidth="1"
                        />
                        <text
                          x="200"
                          y="105"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          C# .NET Messaging Service
                        </text>
                      </g>

                      {/* Cache Layer */}
                      <g>
                        <rect
                          x="20"
                          y="140"
                          width="360"
                          height="30"
                          rx="4"
                          className="fill-red-500/20 stroke-red-500"
                          strokeWidth="1"
                        />
                        <text
                          x="200"
                          y="160"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          Redis Cache Layer
                        </text>
                      </g>

                      {/* Database Layer */}
                      <g>
                        <rect
                          x="20"
                          y="190"
                          width="170"
                          height="40"
                          rx="4"
                          className="fill-orange-500/20 stroke-orange-500"
                          strokeWidth="1"
                        />
                        <rect
                          x="210"
                          y="190"
                          width="170"
                          height="40"
                          rx="4"
                          className="fill-pink-500/20 stroke-pink-500"
                          strokeWidth="1"
                        />
                        <text
                          x="105"
                          y="215"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          Application DB (SQL Server)
                        </text>
                        <text
                          x="295"
                          y="215"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          Message Store (MongoDB)
                        </text>
                      </g>
                      {/* Connection Lines */}
                      <g className="stroke-gray-600" strokeWidth="1">
                        <line x1="75" y1="60" x2="75" y2="80" />
                        <line x1="320" y1="60" x2="320" y2="80" />
                        <line x1="200" y1="60" x2="200" y2="80" />
                        <line x1="200" y1="120" x2="200" y2="140" />
                        <line x1="105" y1="170" x2="105" y2="190" />
                        <line x1="295" y1="170" x2="295" y2="190" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Golf League Management Platform */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
          >
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Golf League Management Platform (In Development)
                    </h3>
                    <p className="text-gray-400">
                      A mobile-first Progressive Web App providing comprehensive
                      tournament and league management with offline
                      capabilities, automated scoring, and real-time
                      leaderboards optimized for on-course use.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-orange-400 mb-3">
                        Frontend Features
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• React/TypeScript Progressive Web Application</li>
                        <li>• Offline-capable scoring interface</li>
                        <li>
                          • Installable app experience across iOS and Android
                        </li>
                        <li>• Administrative controls for league management</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-pink-400 mb-3">
                        Backend Systems
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• NestJS API with modular architecture</li>
                        <li>• RESTful endpoints with validation middleware</li>
                        <li>• Automated handicap calculation engine</li>
                        <li>• Player statistics and analytics processing</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-red-400">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                      <li>
                        • Offline scoring with automatic sync when reconnected
                      </li>
                      <li>
                        • Touch-optimized interface for on-course data entry
                      </li>
                      <li>
                        • Multi-season data retention and historical analytics
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-black/30 rounded-xl p-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-4">
                    System Architecture
                  </h4>
                  <div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
                    <svg className="w-full h-full" viewBox="0 0 400 300">
                      {/* Client Layer */}
                      <g>
                        <rect
                          x="20"
                          y="20"
                          width="350"
                          height="40"
                          rx="4"
                          className="fill-orange-500/20 stroke-orange-500"
                          strokeWidth="1"
                        />
                        <text
                          x="195"
                          y="45"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          React PWA Frontend
                        </text>
                      </g>

                      {/* API Layer */}
                      <g>
                        <rect
                          x="20"
                          y="80"
                          width="360"
                          height="40"
                          rx="4"
                          className="fill-pink-500/20 stroke-pink-500"
                          strokeWidth="1"
                        />
                        <text
                          x="200"
                          y="105"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          NestJS Backend API
                        </text>
                      </g>

                      {/* Cache Layer */}
                      <g>
                        <rect
                          x="20"
                          y="140"
                          width="360"
                          height="30"
                          rx="4"
                          className="fill-red-500/20 stroke-red-500"
                          strokeWidth="1"
                        />
                        <text
                          x="200"
                          y="160"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          Redis Cache Layer
                        </text>
                      </g>

                      {/* Database Layer */}
                      <g>
                        <rect
                          x="20"
                          y="190"
                          width="170"
                          height="40"
                          rx="4"
                          className="fill-orange-500/20 stroke-orange-500"
                          strokeWidth="1"
                        />
                        <rect
                          x="210"
                          y="190"
                          width="170"
                          height="40"
                          rx="4"
                          className="fill-pink-500/20 stroke-pink-500"
                          strokeWidth="1"
                        />
                        <text
                          x="105"
                          y="215"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          Application DB (PostgreSQL)
                        </text>
                        <text
                          x="295"
                          y="215"
                          textAnchor="middle"
                          className="fill-gray-400 text-[12px]"
                        >
                          Course DB (MongoDB)
                        </text>
                      </g>
                      {/* Connection Lines */}
                      <g className="stroke-gray-600" strokeWidth="1">
                        <line x1="200" y1="60" x2="200" y2="80" />
                        <line x1="200" y1="120" x2="200" y2="140" />
                        <line x1="105" y1="170" x2="105" y2="190" />
                        <line x1="295" y1="170" x2="295" y2="190" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
