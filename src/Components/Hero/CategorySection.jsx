"use client";

import { color, motion } from "framer-motion";

const RANGE = [
  {
    label: "Fans",
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
    label: "Lighting",
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
    label: "Water Heaters",
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
    label: "Exhaust Fans",
    color: "#8b5cf6",
    svg: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <motion.rect
          x="12"
          y="12"
          width="56"
          height="56"
          rx="8"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          initial={false}
          whileHover={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.g
          initial={false}
          whileHover={{ rotate: -360 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "40px 40px" }}
        >
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <path
              key={i}
              d="M40 40 L40 22 Q44 18 48 22 Q46 28 40 34"
              stroke="currentColor"
              strokeWidth="2"
              fill="currentColor"
              opacity="0.6"
              style={{ transformOrigin: "40px 40px", rotate: angle }}
            />
          ))}
        </motion.g>
        <motion.circle
          cx="40"
          cy="40"
          r="7"
          fill="currentColor"
          initial={false}
          whileHover={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <circle cx="40" cy="40" r="2.5" fill="white" opacity="0.9" />
        <motion.g
          initial={false}
          whileHover={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <line
            x1="18"
            y1="40"
            x2="28"
            y2="40"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.4"
          />
          <line
            x1="52"
            y1="40"
            x2="62"
            y2="40"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.4"
          />
        </motion.g>
      </svg>
    ),
  },
  {
    label: "Irons",
    color: "#ec4899",
    svg: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <motion.g
          initial={false}
          whileHover={{ x: [0, 4, -2, 0], y: [0, -2, 2, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.path
            d="M18 40 Q18 30 28 28 L62 28 Q70 30 72 38 L72 48 Q70 55 62 56 L28 56 Q18 55 18 48 Z"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M28 28 L38 18 Q42 16 45 19 L52 28"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          <motion.g
            initial={false}
            whileHover={{ opacity: [0, 0.8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {[35, 42, 49].map((x, i) => (
              <motion.path
                key={i}
                d={`M${x} 40 Q${x + 3} 34 ${x} 28`}
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                initial={false}
                whileHover={{ y: [-2, 0, -2] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </motion.g>
        </motion.g>
      </svg>
    ),
  },
  {
    label: "Mixer Grinders",
    color: "#10b981",
    svg: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <motion.path
          d="M25 42 L22 26 Q24 20 30 18 L50 18 Q56 20 58 26 L55 42 Z"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          initial={false}
          whileHover={{
            rotate: [0, -5, 5, 0],
            transition: { duration: 1.5, repeat: Infinity },
          }}
        />
        <path
          d="M26 20 L28 15 Q30 12 35 12 L45 12 Q50 12 52 15 L54 20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <motion.g
          initial={false}
          whileHover={{ rotate: 720 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "40px 40px" }}
        >
          <path
            d="M40 40 L34 30 M40 40 L46 30 M40 40 L40 28"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.g>
        <rect
          x="30"
          y="52"
          width="20"
          height="6"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <motion.g
          initial={false}
          whileHover={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <line
            x1="15"
            y1="38"
            x2="22"
            y2="38"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </motion.g>
      </svg>
    ),
  },
  {
    label: "Kitchen Chimneys",
    color: "#6366f1",
    svg: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <motion.path
          d="M18 46 L22 26 Q24 18 30 16 L50 16 Q56 18 58 26 L62 46 Z"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          initial={false}
          whileHover={{ scaleY: [1, 1.05, 1] }}
          style={{ transformOrigin: "40px 40px" }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.rect
          x="32"
          y="6"
          width="16"
          height="12"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          initial={false}
          whileHover={{ y: [-2, 2, -2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.g
          initial={false}
          whileHover={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {[0, 6, 12].map((y, i) => (
            <line
              key={i}
              x1={28 - i * 2}
              y1={30 + y}
              x2={52 + i * 2}
              y2={30 + y}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              opacity={1 - i * 0.25}
            />
          ))}
        </motion.g>
        <motion.g
          initial={false}
          whileHover={{ y: [-5, -15, -5], opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <circle cx="38" cy="6" r="2" fill="currentColor" opacity="0.4" />
          <circle cx="42" cy="4" r="1.5" fill="currentColor" opacity="0.3" />
        </motion.g>
      </svg>
    ),
  },
  {
    label: "Wires & Cables",
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
    label: "Inverters & Batteries",
    color: "#14b8a6",
    svg: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <motion.rect
          x="25"
          y="28"
          width="30"
          height="38"
          rx="5"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          initial={false}
          whileHover={{
            filter: [
              "drop-shadow(0 0 4px currentColor)",
              "drop-shadow(0 0 12px currentColor)",
              "drop-shadow(0 0 4px currentColor)",
            ],
            transition: { duration: 2, repeat: Infinity },
          }}
        />
        <motion.path
          d="M34 23 L34 28 M46 23 L46 28"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={false}
          whileHover={{ y: [-1, 1, -1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <motion.g
          initial={false}
          whileHover={{ y: [0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <rect
            x="30"
            y="48"
            width="20"
            height="4"
            rx="1"
            fill="currentColor"
          />
          <rect
            x="30"
            y="43"
            width="20"
            height="4"
            rx="1"
            fill="currentColor"
            opacity="0.7"
          />
          <rect
            x="30"
            y="38"
            width="20"
            height="4"
            rx="1"
            fill="currentColor"
            opacity="0.5"
          />
        </motion.g>
        <motion.path
          d="M42 30 L38 40 L42 40 L38 50 L46 38 L42 38 L46 30 Z"
          fill="currentColor"
          initial={false}
          whileHover={{
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </svg>
    ),
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function ShopByCategory() {
  return (
    <>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <section className="relative max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-10"
        >
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-medium"
            style={{ color: "#082d4a" }}
          >
            Explore Our Category
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="hide-scrollbar flex justify-start lg:justify-center items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8 flex-nowrap overflow-x-auto pb-2 px-2 sm:px-0"
        >
          {RANGE.map(({ label, svg, color }, i) => (
            <motion.a
              key={label}
              href="#"
              variants={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2 group cursor-pointer flex-shrink-0"
            >
              <span
                className="block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 transition-all duration-300"
                style={{ color: color }}
              >
                {svg}
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors duration-300 whitespace-nowrap">
                {label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </section>
    </>
  );
}
