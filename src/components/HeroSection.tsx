import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="section-padding min-h-[85vh] flex items-center">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>

          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-4 font-body">
            Senior lecturer, department of information systems engineering and informatics        
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-semibold text-foreground leading-[1.1] mb-6">
            Dr. Wijendra
            <br />
            <span className="italic text-accent">Gunathilake</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-light">
            Researching the intersection of human aspects of software engineering, artificial intelligence, and digital transformation. Focused on advancing inclusive, high-quality computing education through curriculum innovation, quality assurance, and impactful international research collaborations.              
          

          </p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="#publications"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-medium text-sm tracking-wide hover:opacity-90 transition-opacity rounded-sm">

              View Publications
            </a>
            <a
              href="#contact"
              className="inline-block px-6 py-3 border border-foreground/20 text-foreground font-medium text-sm tracking-wide hover:bg-foreground/5 transition-colors rounded-sm">

              Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden md:block">

          <div className="w-72 lg:w-80 aspect-[3/4] overflow-hidden rounded-sm shadow-xl">
            <img

              alt="Dr. Alexandra Chen"
              className="w-full h-full object-cover" src="/lovable-uploads/06ab6708-a3c0-40c5-816b-ae5402d8e7f4.jpg" />

          </div>
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;