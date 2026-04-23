import React from 'react';
import { motion } from 'motion/react';
import { Card } from './Card';

const GooeyBase = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative flex items-center justify-center gooey-filter ${className}`}>
    {children}
  </div>
);

const LoaderCard = ({ children, title }: { children: React.ReactNode, title: string, [key: string]: any }) => (
  <motion.div initial="rest" whileHover="active" animate="rest" className="w-full h-full cursor-pointer">
    <Card hoverEffect={false} className="group h-[400px] overflow-hidden justify-center items-center relative bg-surface-container transition-all hover:bg-surface-container-high">
      <GooeyBase className="flex-1 w-full h-full">
        <div className="scale-75 flex items-center justify-center w-full h-full relative">
          {children}
        </div>
      </GooeyBase>
      <div className="absolute bottom-6 left-0 right-0 text-center border-t border-border/10 pt-4 z-10">
         <span className="text-[10px] uppercase font-black tracking-[0.4em] opacity-40 text-on-surface group-hover:opacity-100 transition-all">
           {title}
         </span>
      </div>
    </Card>
  </motion.div>
);

export const GooeyLoaders = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* 1. Cell Division */}
      <LoaderCard title="Mitosis">
        <div className="relative w-24 h-24">
          <motion.div variants={{ active: { x: [-50, 50, -50], transition: { repeat: Infinity, duration: 2, ease: "easeInOut" } } }} className="absolute inset-0 bg-accent rounded-full" />
          <motion.div variants={{ active: { x: [50, -50, 50], transition: { repeat: Infinity, duration: 2, ease: "easeInOut" } } }} className="absolute inset-0 bg-accent rounded-full" />
        </div>
      </LoaderCard>

      {/* 2. Drip Pool */}
      <LoaderCard title="Liquid Drip">
        <div className="relative w-48 h-48 flex flex-col items-center justify-end pb-8">
          <motion.div 
            variants={{ active: { y: [-150, 0, -150], scale: [0.6, 1.2, 0.6], transition: { repeat: Infinity, duration: 2, ease: "easeInOut" } } }}
            className="absolute top-0 w-16 h-16 bg-accent rounded-full" 
          />
          <motion.div 
            variants={{ active: { scaleX: [1, 1.4, 1], scaleY: [1, 0.5, 1], transition: { repeat: Infinity, duration: 2, ease: "easeInOut" } } }}
            className="w-48 h-12 bg-accent rounded-full relative z-10" 
          />
        </div>
      </LoaderCard>

      {/* 3. Orbit Flux */}
      <LoaderCard title="Orbital">
        <div className="relative w-48 h-48 flex items-center justify-center">
            <motion.div 
              variants={{ active: { rotate: [0, 360], transition: { repeat: Infinity, duration: 3, ease: "linear" } } }}
              className="absolute inset-0 flex items-start justify-center"
            >
              <div className="w-16 h-16 bg-accent rounded-full -mt-8" />
            </motion.div>
            <div className="absolute w-24 h-24 bg-accent rounded-full" />
        </div>
      </LoaderCard>

      {/* 4. Binary Pulse */}
      <LoaderCard title="Merge">
        <div className="relative w-32 h-32 flex items-center justify-center">
          <motion.div variants={{ active: { scale: [1, 2, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } }} className="absolute w-16 h-16 bg-accent rounded-full" />
          <motion.div variants={{ active: { scale: [2, 0.5, 2], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } }} className="absolute w-16 h-16 bg-accent rounded-full" />
        </div>
      </LoaderCard>

      {/* 5. Triple Chain */}
      <LoaderCard title="Polymer">
        <div className="flex gap-4">
          {[0, 1, 2].map(i => (
            <motion.div key={i} variants={{ active: { y: [-30, 30, -30], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: i * 0.2 } } }} className="w-20 h-20 bg-accent rounded-full" />
          ))}
        </div>
      </LoaderCard>

      {/* 6. Growing Core */}
      <LoaderCard title="Nucleus">
        <div className="relative flex items-center justify-center w-48 h-48">
          <motion.div variants={{ active: { scale: [1, 1.4, 1], transition: { repeat: Infinity, duration: 2, ease: "easeInOut" } } }} className="absolute w-40 h-40 bg-accent rounded-full" />
          <motion.div variants={{ active: { scale: [1.5, 0.8, 1.5], transition: { repeat: Infinity, duration: 2, ease: "easeInOut" } } }} className="absolute w-16 h-16 bg-surface rounded-full outline outline-8 outline-accent" />
        </div>
      </LoaderCard>

      {/* 7. Blob Morph */}
      <LoaderCard title="Morphing">
        <motion.div 
          variants={{ active: { 
            scale: [1, 1.2, 0.8, 1],
            borderRadius: ["30%", "60%", "40%", "30%"],
            transition: { repeat: Infinity, duration: 4, ease: "easeInOut" }
          }}}
          className="w-48 h-48 bg-accent rounded-full"
        />
      </LoaderCard>

      {/* 8. Impact Splash */}
      <LoaderCard title="Impact">
         <div className="relative w-48 h-48">
           <motion.div 
             variants={{ active: { scale: [0, 2], opacity: [1, 0], transition: { repeat: Infinity, duration: 2, ease: "easeOut" } } }}
             className="absolute inset-0 bg-accent rounded-full"
           />
           <motion.div 
             variants={{ active: { scale: [0, 2], opacity: [1, 0], transition: { repeat: Infinity, duration: 2, ease: "easeOut", delay: 1 } } }}
             className="absolute inset-0 bg-accent rounded-full"
           />
         </div>
      </LoaderCard>
    </div>
  );
};

