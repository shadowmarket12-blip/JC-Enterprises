"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

const RANGE = [
  {
    label: "Switches & Accessories",
    categoryId: "switches-accessories",
    color: "#06b6d4",
    svg: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <motion.rect
          x="28"
          y="22"
          width="24"
          height="36"
          rx="6"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          initial={false}
          whileHover={{
            rotate: [0, -3, 3, 0],
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.rect
          x="34"
          y="30"
          width="12"
          height="6"
          rx="3"
          fill="currentColor"
          initial={false}
          whileHover={{
            scale: [1, 1.1, 1],
            transition: { duration: 1, repeat: Infinity },
          }}
        />
        <motion.circle
          cx="40"
          cy="44"
          r="4"
          fill="currentColor"
          initial={false}
          whileHover={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.5, 1],
            transition: { duration: 1.5, repeat: Infinity },
          }}
        />
        <motion.circle
          cx="40"
          cy="52"
          r="2.5"
          fill="currentColor"
          opacity="0.6"
          initial={false}
          whileHover={{
            scale: [1, 1.3, 1],
            transition: { duration: 1, repeat: Infinity, delay: 0.3 },
          }}
        />
      </svg>
    ),
  },
  {
    label: "Electrical Wires & Cables",
    categoryId: "electrical-wires-cables",
    color: "#f97316",
    svg: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <motion.g
          initial={false}
          whileHover={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "40px 40px" }}
        >
          <motion.path
            d="M15 32 Q30 12 40 32 Q50 52 65 32"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={false}
            whileHover={{
              d: [
                "M15 32 Q30 12 40 32 Q50 52 65 32",
                "M15 32 Q30 48 40 32 Q50 16 65 32",
                "M15 32 Q30 12 40 32 Q50 52 65 32",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.path
            d="M15 48 Q30 28 40 48 Q50 68 65 48"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
            initial={false}
            whileHover={{
              d: [
                "M15 48 Q30 28 40 48 Q50 68 65 48",
                "M15 48 Q30 64 40 48 Q50 32 65 48",
                "M15 48 Q30 28 40 48 Q50 68 65 48",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
        </motion.g>
        <motion.circle
          cx="40"
          cy="40"
          r="5"
          fill="currentColor"
          initial={false}
          whileHover={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </svg>
    ),
  },
  {
    label: "MCBs & Protection",
    categoryId: "mcbs-protection",
    color: "#ef4444",
    svg: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <motion.rect
          x="18"
          y="20"
          width="44"
          height="44"
          rx="6"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          initial={false}
          whileHover={{
            scale: [1, 1.02, 1],
            transition: { duration: 1.5, repeat: Infinity },
          }}
        />
        <motion.path
          d="M28 38 L35 38 L38 32 L42 48 L45 38 L52 38"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={false}
          whileHover={{
            strokeWidth: [2.5, 3.5, 2.5],
            transition: { duration: 1, repeat: Infinity },
          }}
        />
        <motion.circle
          cx="40"
          cy="30"
          r="3"
          fill="currentColor"
          initial={false}
          whileHover={{
            scale: [1, 1.3, 1],
            opacity: [1, 0.6, 1],
            transition: { duration: 1.5, repeat: Infinity },
          }}
        />
        <motion.line
          x1="22"
          y1="28"
          x2="26"
          y2="28"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={false}
          whileHover={{ x: [0, 3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.line
          x1="54"
          y1="28"
          x2="58"
          y2="28"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={false}
          whileHover={{ x: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    ),
  },
  {
    label: "Lighting",
    categoryId: "lighting",
    color: "#f59e0b",
    svg: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <motion.g
          initial={false}
          whileHover={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <line
              key={i}
              x1="40"
              y1="40"
              x2={40 + 25 * Math.cos((angle * Math.PI) / 180)}
              y2={40 + 25 * Math.sin((angle * Math.PI) / 180)}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          ))}
        </motion.g>
        <motion.path
          d="M33 45 Q33 32 40 28 Q47 32 47 45 Z"
          fill="currentColor"
          initial={false}
          whileHover={{
            scale: [1, 1.08, 1],
            filter: [
              "drop-shadow(0 0 4px currentColor)",
              "drop-shadow(0 0 12px currentColor)",
              "drop-shadow(0 0 4px currentColor)",
            ],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.path
          d="M35 45 L35 50 Q40 55 45 50 L45 45"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={false}
          whileHover={{ y: [0, 2, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <path
          d="M36 40 Q40 35 44 40"
          stroke="white"
          strokeWidth="1"
          fill="none"
          opacity="0.8"
        />
      </svg>
    ),
  },
  {
    label: "Fans",
    categoryId: "fans",
    color: "#06b6d4",
    svg: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <motion.circle
          cx="40"
          cy="40"
          r="32"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          initial={false}
          whileHover={{
            rotate: 360,
            scale: [1, 1.05, 1],
            transition: { duration: 3, repeat: Infinity, ease: "linear" },
          }}
        />
        <motion.g
          initial={false}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "40px 40px" }}
        >
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <motion.path
              key={i}
              d="M40 40 L40 16 Q45 8 52 12 Q46 20 40 30"
              fill="currentColor"
              opacity="0.85"
              style={{ transformOrigin: "40px 40px", rotate: angle }}
            />
          ))}
        </motion.g>
        <motion.circle
          cx="40"
          cy="40"
          r="8"
          fill="currentColor"
          initial={false}
          whileHover={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <circle cx="40" cy="40" r="3" fill="white" opacity="0.8" />
      </svg>
    ),
  },
  {
    label: "Water Pumps & Heaters",
    categoryId: "water-pumps-heaters",
    color: "#ef4444",
    svg: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <motion.rect
          x="22"
          y="18"
          width="36"
          height="44"
          rx="6"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          initial={false}
          whileHover={{
            rotate: [-1, 1, -1],
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.path
          d="M28 34 Q34 29 40 34 Q46 39 52 34"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={false}
          whileHover={{
            d: [
              "M28 34 Q34 29 40 34 Q46 39 52 34",
              "M28 34 Q34 39 40 34 Q46 29 52 34",
              "M28 34 Q34 29 40 34 Q46 39 52 34",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.path
          d="M28 41 Q34 37 40 41 Q46 45 52 41"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
          initial={false}
          whileHover={{
            d: [
              "M28 41 Q34 37 40 41 Q46 45 52 41",
              "M28 41 Q34 45 40 41 Q46 37 52 41",
              "M28 41 Q34 37 40 41 Q46 45 52 41",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />
        <motion.path
          d="M28 48 Q34 44 40 48 Q46 52 52 48"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
          initial={false}
          whileHover={{
            d: [
              "M28 48 Q34 44 40 48 Q46 52 52 48",
              "M28 48 Q34 52 40 48 Q46 44 52 48",
              "M28 48 Q34 44 40 48 Q46 52 52 48",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
        />
        <motion.circle
          cx="40"
          cy="56"
          r="4"
          fill="currentColor"
          initial={false}
          whileHover={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </svg>
    ),
  },
  {
    label: "Pipes & Fittings",
    categoryId: "pipes-fittings",
    color: "#8b5cf6",
    svg: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <motion.g
          initial={false}
          whileHover={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "40px 40px" }}
        >
          <motion.path
            d="M20 40 L60 40"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <motion.path
            d="M40 20 L40 60"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <motion.circle
            cx="40"
            cy="40"
            r="10"
            fill="white"
            stroke="currentColor"
            strokeWidth="3"
          />
        </motion.g>
        <motion.circle
          cx="40"
          cy="40"
          r="4"
          fill="currentColor"
          initial={false}
          whileHover={{
            scale: [1, 1.5, 1],
            transition: { duration: 1, repeat: Infinity },
          }}
        />
      </svg>
    ),
  },
  {
    label: "Industrial Electrical",
    categoryId: "industrial-electrical-products",
    color: "#10b981",
    svg: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <motion.rect
          x="18"
          y="16"
          width="44"
          height="52"
          rx="5"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          initial={false}
          whileHover={{
            scale: [1, 1.03, 1],
            transition: { duration: 2, repeat: Infinity },
          }}
        />
        <motion.path
          d="M30 30 L40 22 L50 30"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={false}
          whileHover={{
            y: [-2, 2, -2],
            transition: { duration: 1.5, repeat: Infinity },
          }}
        />
        <motion.g
          initial={false}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "40px 44px" }}
        >
          <circle
            cx="40"
            cy="44"
            r="8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="40"
            y1="36"
            x2="40"
            y2="40"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="40"
            y1="48"
            x2="40"
            y2="52"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="32"
            y1="44"
            x2="36"
            y2="44"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="44"
            y1="44"
            x2="48"
            y2="44"
            stroke="currentColor"
            strokeWidth="2"
          />
        </motion.g>
        <motion.line
          x1="22"
          y1="22"
          x2="28"
          y2="22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={false}
          whileHover={{ x: [0, 3, 0], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    ),
  },
  {
    label: "Electrical Tools",
    categoryId: "electrical-tools-accessories",
    color: "#6366f1",
    svg: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <motion.g
          initial={false}
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "40px 40px" }}
        >
          <motion.path
            d="M25 55 L25 25 Q25 18 32 18 L48 18 Q55 18 55 25 L55 55"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          <motion.path
            d="M35 18 L35 12 Q35 10 40 10 Q45 10 45 12 L45 18"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        </motion.g>
        <motion.rect
          x="32"
          y="30"
          width="16"
          height="3"
          rx="1.5"
          fill="currentColor"
          initial={false}
          whileHover={{
            width: [16, 20, 16],
            transition: { duration: 1, repeat: Infinity },
          }}
        />
        <motion.rect
          x="32"
          y="38"
          width="16"
          height="3"
          rx="1.5"
          fill="currentColor"
          opacity="0.7"
          initial={false}
          whileHover={{
            width: [16, 20, 16],
            transition: { duration: 1, repeat: Infinity, delay: 0.2 },
          }}
        />
        <motion.rect
          x="32"
          y="46"
          width="16"
          height="3"
          rx="1.5"
          fill="currentColor"
          opacity="0.5"
          initial={false}
          whileHover={{
            width: [16, 20, 16],
            transition: { duration: 1, repeat: Infinity, delay: 0.4 },
          }}
        />
        <motion.circle
          cx="40"
          cy="24"
          r="3"
          fill="currentColor"
          initial={false}
          whileHover={{
            scale: [1, 1.3, 1],
            transition: { duration: 1, repeat: Infinity },
          }}
        />
      </svg>
    ),
  },
  {
    label: "Earthing Materials",
    categoryId: "earthing-materials",
    color: "#84cc16",
    svg: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <motion.rect
          x="36"
          y="12"
          width="8"
          height="44"
          rx="2"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          initial={false}
          whileHover={{
            scale: [1, 1.02, 1],
            transition: { duration: 1.5, repeat: Infinity },
          }}
        />
        <motion.path
          d="M24 56 L56 56"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={false}
          whileHover={{
            y: [0, -2, 0],
            transition: { duration: 1, repeat: Infinity },
          }}
        />
        <motion.path
          d="M20 64 L60 64"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.7"
          initial={false}
          whileHover={{
            y: [0, -2, 0],
            transition: { duration: 1, repeat: Infinity, delay: 0.2 },
          }}
        />
        <motion.path
          d="M16 72 L64 72"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
          initial={false}
          whileHover={{
            y: [0, -2, 0],
            transition: { duration: 1, repeat: Infinity, delay: 0.4 },
          }}
        />
        <motion.path
          d="M44 16 L38 34 L44 34 L38 52"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={false}
          whileHover={{
            opacity: [0.5, 1, 0.5],
            filter: [
              "drop-shadow(0 0 2px currentColor)",
              "drop-shadow(0 0 8px currentColor)",
              "drop-shadow(0 0 2px currentColor)",
            ],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.circle
          cx="40"
          cy="56"
          r="4"
          fill="currentColor"
          initial={false}
          whileHover={{
            scale: [1, 1.3, 1],
            transition: { duration: 1, repeat: Infinity },
          }}
        />
      </svg>
    ),
  },
  {
    label: "Home Appliance",
    categoryId: "home-appliance",
    color: "#ec4899",
    svg: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <motion.path
          d="M16 68 L16 38 L40 18 L64 38 L64 68 Z"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinejoin="round"
          initial={false}
          whileHover={{
            scale: [1, 1.03, 1],
            transition: { duration: 2, repeat: Infinity },
          }}
        />
        <motion.path
          d="M12 38 L40 14 L68 38"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinejoin="round"
          initial={false}
          whileHover={{
            y: [-1, 1, -1],
            transition: { duration: 1.5, repeat: Infinity },
          }}
        />
        <motion.rect
          x="33"
          y="44"
          width="14"
          height="24"
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={false}
          whileHover={{
            scale: [1, 1.02, 1],
            transition: { duration: 1, repeat: Infinity },
          }}
        />
        <motion.circle
          cx="44"
          cy="56"
          r="1.5"
          fill="currentColor"
          initial={false}
          whileHover={{
            scale: [1, 1.5, 1],
            transition: { duration: 0.8, repeat: Infinity },
          }}
        />
        <motion.rect
          x="48"
          y="42"
          width="10"
          height="10"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          initial={false}
          whileHover={{
            opacity: [0.5, 1, 0.5],
            transition: { duration: 2, repeat: Infinity },
          }}
        />
        <line
          x1="53"
          y1="42"
          x2="53"
          y2="52"
          stroke="currentColor"
          strokeWidth="1"
        />
        <line
          x1="48"
          y1="47"
          x2="58"
          y2="47"
          stroke="currentColor"
          strokeWidth="1"
        />
        <motion.rect
          x="24"
          y="46"
          width="8"
          height="10"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          initial={false}
          whileHover={{
            rotate: [0, 5, -5, 0],
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{ transformOrigin: "28px 51px" }}
        />
        <circle cx="26" cy="49" r="1" fill="currentColor" />
        <circle cx="30" cy="49" r="1" fill="currentColor" />
        <motion.rect
          x="44"
          y="18"
          width="8"
          height="10"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          initial={false}
          whileHover={{
            y: [-1, 1, -1],
            transition: { duration: 1, repeat: Infinity },
          }}
        />
      </svg>
    ),
  },
  {
    label: "Aquagard",
    categoryId: "aquagard",
    color: "#06b6d4",
    svg: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <motion.rect
          x="28"
          y="22"
          width="24"
          height="36"
          rx="8"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          initial={false}
          whileHover={{
            scale: [1, 1.03, 1],
            transition: { duration: 2, repeat: Infinity },
          }}
        />
        <motion.rect
          x="26"
          y="18"
          width="28"
          height="8"
          rx="4"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          initial={false}
          whileHover={{
            y: [-1, 1, -1],
            transition: { duration: 1.5, repeat: Infinity },
          }}
        />
        <motion.g
          initial={false}
          whileHover={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.path
            d="M36 62 Q36 56 40 52 Q44 56 44 62 Q44 66 40 66 Q36 66 36 62 Z"
            fill="currentColor"
            opacity="0.6"
            initial={false}
            whileHover={{
              opacity: [0.4, 0.8, 0.4],
              transition: { duration: 1, repeat: Infinity },
            }}
          />
        </motion.g>
        <motion.g
          initial={false}
          whileHover={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
        >
          <motion.path
            d="M34 68 Q34 64 36 62 Q38 64 38 68 Q38 71 36 71 Q34 71 34 68 Z"
            fill="currentColor"
            opacity="0.4"
          />
          <motion.path
            d="M42 68 Q42 64 44 62 Q46 64 46 68 Q46 71 44 71 Q42 71 42 68 Z"
            fill="currentColor"
            opacity="0.4"
          />
        </motion.g>
        <motion.path
          d="M34 34 Q38 30 40 34 Q42 38 46 34"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
          initial={false}
          whileHover={{
            d: [
              "M34 34 Q38 30 40 34 Q42 38 46 34",
              "M34 34 Q38 38 40 34 Q42 30 46 34",
              "M34 34 Q38 30 40 34 Q42 38 46 34",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.path
          d="M34 40 Q38 36 40 40 Q42 44 46 40"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
          initial={false}
          whileHover={{
            d: [
              "M34 40 Q38 36 40 40 Q42 44 46 40",
              "M34 40 Q38 44 40 40 Q42 36 46 40",
              "M34 40 Q38 36 40 40 Q42 44 46 40",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />
        <motion.circle
          cx="40"
          cy="48"
          r="5"
          fill="currentColor"
          opacity="0.3"
          initial={false}
          whileHover={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
            transition: { duration: 1.5, repeat: Infinity },
          }}
        />
        <circle cx="40" cy="48" r="2" fill="currentColor" opacity="0.8" />
      </svg>
    ),
  },
];

export default function ShopByCategory() {
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const halfWidthRef = useRef(0);
  const isHoveringRef = useRef(false);

  // Tuning knobs
  const IDLE_SPEED = 0.4; // px/frame drift speed when nothing is hovered
  const EASE = 0.08; // how quickly velocity eases toward its target (0-1, lower = smoother/slower stop)

  // Measure the width of a single (non-duplicated) set once mounted
  useEffect(() => {
    if (trackRef.current) {
      halfWidthRef.current = trackRef.current.scrollWidth / 2;
    }
  }, []);

  // Single rAF loop: eases velocity toward target (0 when hovering, IDLE_SPEED otherwise)
  useEffect(() => {
    let frameId;

    const tick = () => {
      const targetVelocity = isHoveringRef.current ? 0 : IDLE_SPEED;

      // Smoothly ease current velocity toward the target — this is what
      // makes the marquee glide to a gentle stop instead of snapping.
      velocityRef.current += (targetVelocity - velocityRef.current) * EASE;

      offsetRef.current -= velocityRef.current;

      const half = halfWidthRef.current;
      if (half > 0) {
        if (offsetRef.current <= -half) offsetRef.current += half;
        if (offsetRef.current > 0) offsetRef.current -= half;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-6 sm:mb-10"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black">
          Shop by Category
        </h1>
        <h2 className="text-sm mt-5">Everything You Need, in One Place</h2>
      </motion.div>

      {/* Single Line Marquee - All Devices */}
      <div className="relative">
        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 lg:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 lg:w-20 bg-gradient-to-r from-transparent to-white z-10 pointer-events-none" />

        {/* Single Marquee Row - Left to Right */}
        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-max will-change-transform"
          >
            {[...RANGE, ...RANGE].map(
              ({ label, categoryId, svg, color }, index) => (
                <Link
                  key={`${label}-${index}`}
                  href={`/products?category=${categoryId}`}
                  className="flex-shrink-0"
                  onMouseEnter={() => (isHoveringRef.current = true)}
                  onMouseLeave={() => (isHoveringRef.current = false)}
                >
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-2 group cursor-pointer w-16 sm:w-20 md:w-24"
                  >
                    <span
                      className="block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 transition-all duration-300"
                      style={{ color: color }}
                    >
                      {svg}
                    </span>
                    <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors duration-300 text-center leading-tight break-words">
                      {label}
                    </span>
                  </motion.span>
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
