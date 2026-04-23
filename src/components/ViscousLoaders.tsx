import React from 'react';
import { motion } from 'motion/react';
import { Card } from './Card';

interface LoaderCardProps {
  children: React.ReactNode;
  title: string;
}

const LoaderCard = ({ children, title }: LoaderCardProps) => (
  <motion.div initial="rest" whileHover="active" animate="rest" className="w-full h-full cursor-pointer">
    <Card hoverEffect={false} className="group h-[400px] overflow-hidden justify-center items-center relative bg-surface-container transition-all hover:bg-surface-container-high">
      <div className="flex-1 flex items-center justify-center w-full h-full">
        <div className="scale-75 flex items-center justify-center w-full h-full relative">
           {children}
        </div>
      </div>
      <div className="absolute bottom-6 left-0 right-0 text-center border-t border-border/10 pt-4 z-10">
         <span className="text-[10px] uppercase font-black tracking-[0.4em] opacity-40 text-on-surface group-hover:opacity-100 transition-all">
           {title}
         </span>
      </div>
    </Card>
  </motion.div>
);

export const ViscousLoaders = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* 1. Heavy Box Drop */}
      <LoaderCard title="Weighted Drop">
          <motion.div
            variants={{ active: { y: [-100, 100, -100], borderRadius: ["2rem", "1rem", "2rem"], scaleY: [1, 0.8, 1], transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" } } }}
            className="w-32 h-32 bg-accent shadow-2xl"
          />
      </LoaderCard>

      {/* 2. Elastic String */}
      <LoaderCard title="Elastic Pull">
          <div className="h-64 w-2 bg-border relative flex items-center justify-center">
             <motion.div 
               variants={{ active: { scaleY: [1, 3.5, 1], transition: { repeat: Infinity, duration: 1.2, ease: "easeInOut" } } }}
               className="w-32 h-32 border-[12px] border-accent rounded-full bg-surface"
             />
          </div>
      </LoaderCard>

      {/* 3. Sinking Ring */}
      <LoaderCard title="Deep Sink">
          <motion.div 
            variants={{ active: { y: [-50, 150], scale: [1, 0.4], opacity: [1, 0], transition: { repeat: Infinity, duration: 2, ease: "easeIn" } } }}
            className="w-40 h-40 border-[12px] border-accent rounded-full"
          />
      </LoaderCard>

      {/* 4. Thick Rotation */}
      <LoaderCard title="Heavy Spin">
          <motion.div
            variants={{ active: { rotate: [0, 360], transition: { repeat: Infinity, duration: 2, ease: "linear" } } }}
            className="w-48 h-10 bg-accent rounded-full"
          />
      </LoaderCard>

      {/* 5. Slime Stretch */}
      <LoaderCard title="Viscous Bond">
          <div className="flex items-center gap-4">
             <motion.div variants={{ active: { x: [-50, 0, -50], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } }} className="w-20 h-20 bg-accent rounded-full" />
             <motion.div variants={{ active: { scaleX: [1, 4, 1], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } }} className="w-12 h-4 bg-accent rounded-full" />
             <motion.div variants={{ active: { x: [50, 0, 50], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } }} className="w-20 h-20 bg-accent rounded-full" />
          </div>
      </LoaderCard>

      {/* 6. Liquid Expansion */}
      <LoaderCard title="Slow Expansion">
          <motion.div 
            variants={{ active: { scale: [1, 1.8, 1], transition: { repeat: Infinity, duration: 4, ease: "easeInOut" } } }}
            className="w-32 h-32 bg-accent/40 backdrop-blur-xl border-4 border-accent rounded-[3rem]"
          />
      </LoaderCard>

      {/* 7. Magnetic Dots */}
      <LoaderCard title="Flux Control">
          <div className="flex gap-4">
             {[0, 1, 2].map(i => (
               <motion.div key={i} variants={{ active: { y: [-40, 40, -40], transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 } } }} className="w-10 h-32 bg-accent rounded-full" />
             ))}
          </div>
      </LoaderCard>

      {/* 8. Overshoot Box */}
      <LoaderCard title="Kinetic Sharp">
          <motion.div 
            variants={{ active: { x: [-100, 100, -100], rotate: [0, 180, 360], transition: { repeat: Infinity, duration: 2.5, ease: "easeInOut" } } }}
            className="w-24 h-24 bg-accent rounded-[2rem]"
          />
      </LoaderCard>

      {/* 9. Heavy Breath */}
      <LoaderCard title="Atmosphere">
          <motion.div 
            variants={{ active: { scale: [0.8, 1.4, 0.8], opacity: [0.2, 1, 0.2], transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } } }}
            className="w-48 h-48 bg-accent rounded-full"
          />
      </LoaderCard>

      {/* 10. Spring Chain */}
      <LoaderCard title="Elastic Link">
          <div className="flex flex-col gap-4 items-center">
             <motion.div variants={{ active: { y: [0, 30, 0], transition: { repeat: Infinity, duration: 1.2, ease: "easeInOut" } } }} className="w-20 h-20 border-4 border-accent rounded-full" />
             <motion.div variants={{ active: { y: [0, 50, 0], transition: { repeat: Infinity, duration: 1.2, ease: "easeInOut", delay: 0.1 } } }} className="w-16 h-16 border-4 border-accent rounded-full" />
             <motion.div variants={{ active: { y: [0, 70, 0], transition: { repeat: Infinity, duration: 1.2, ease: "easeInOut", delay: 0.2 } } }} className="w-12 h-12 border-4 border-accent rounded-full" />
          </div>
      </LoaderCard>
    </div>
  );
};

