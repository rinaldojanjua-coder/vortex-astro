"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Star, Play } from "lucide-react";

interface VideoCardProps {
  name: string;
  business: string;
  src: string;
  index: number;
}

function VideoCard({ name, business, src, index }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-slate-800 shadow-xl"
    >
      {/* Portrait aspect ratio container */}
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-slate-900">
        {/* Video element — always visible, shows first frame naturally */}
        <video
          ref={videoRef}
          src={src}
          preload="metadata"
          muted={!playing}
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          controls={playing}
        />

        {/* Play button overlay — shown until play is clicked */}
        {!playing && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/30 transition group-hover:bg-slate-900/40 cursor-pointer"
            onClick={handlePlay}
          >
            <button
              className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-xl shadow-slate-900/40 transition hover:scale-105 active:scale-95"
              aria-label="Play video"
            >
              <Play className="h-7 w-7 translate-x-0.5 fill-blue-600 text-blue-600" />
            </button>
          </div>
        )}
      </div>

      {/* Name / business below */}
      <div className="px-5 py-4">
        <p className="font-semibold text-white text-sm">
          {name}{" "}
          <span className="font-normal text-slate-400">· {business}</span>
        </p>
      </div>
    </motion.div>
  );
}

const videos = [
  { name: "Julia", business: "AK Gutter Gals", src: "/testimonial.mp4" },
  { name: "Zach", business: "Wrench on Wheels", src: "/testimonial2.mp4" },
  { name: "Tommy", business: "FWD Construction", src: "/testimonial3.mp4" },
];

export default function VideoTestimonials() {
  return (
    <section className="section-padding relative overflow-hidden bg-slate-900">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 dot-grid-dark" style={{ opacity: 1 }} />
      <div
        className="orb-1 pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{ background: "rgba(30, 58, 138, 0.25)", animation: "orb-float-1 18s ease-in-out infinite" }}
      />

      <div className="container-width relative">
        {/* Header */}
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Hear From Our Clients
          </h2>
          <p className="mt-3 text-slate-400">
            Real Alaskans, real results — in their own words.
          </p>
        </motion.div>

        {/* Portrait video grid */}
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3">
          {videos.map((v, i) => (
            <VideoCard key={v.src} {...v} index={i} />
          ))}
        </div>

        {/* Guarantee badge */}
        <motion.div
          className="mx-auto mt-12 flex max-w-sm items-center gap-4 rounded-2xl border border-slate-700/60 bg-slate-800/80 p-5 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600/15">
            <ShieldCheck className="h-5 w-5 text-blue-400" />
          </div>
          <div>
            <div className="mb-1 flex gap-0.5">
              {[...Array(5)].map((_, s) => (
                <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-sm font-medium text-white">
              We've never had a client receive a review below 4 stars
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
