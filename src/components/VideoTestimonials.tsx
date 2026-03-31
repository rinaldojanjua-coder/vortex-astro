import { motion } from "framer-motion";
import { ShieldCheck, Star } from "lucide-react";

interface Video {
  name: string;
  business: string;
  src: string;
}

const videos: Video[] = [
  { name: "Julia", business: "AK Gutter Gals", src: "/testimonial.mp4" },
  { name: "Zach", business: "Wrench on Wheels", src: "/testimonial2.mp4" },
  { name: "Tommy", business: "FWD Construction", src: "/testimonial3.mp4" },
];

export default function VideoTestimonials() {
  return (
    <section className="section-padding bg-slate-900">
      <div className="container-width">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Hear From Our Clients
          </motion.h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {videos.map((video, i) => (
            <motion.div
              key={video.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl overflow-hidden bg-slate-800"
            >
              <video
                className="w-full aspect-video object-cover"
                controls
                preload="metadata"
                poster="/video-thumbnail.jpg"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4">
                <p className="text-white font-semibold text-sm">
                  {video.name}{" "}
                  <span className="text-slate-400 font-normal">
                    - {video.business}
                  </span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Badge */}
        <motion.div
          className="flex items-center justify-center gap-3 bg-slate-800 rounded-2xl p-5 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-1 mb-1">
              {[...Array(4)].map((_, s) => (
                <Star
                  key={s}
                  className="w-4 h-4 text-amber fill-amber"
                />
              ))}
              <Star className="w-4 h-4 text-amber fill-amber" />
            </div>
            <p className="text-white text-sm font-medium">
              We've never had a client receive a review below 4 stars
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
