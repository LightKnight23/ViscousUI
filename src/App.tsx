/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  type LucideIcon,
  LayoutDashboard, 
  Hourglass, 
  MousePointer2, 
  Type, 
  ToggleLeft, 
  Moon, 
  Sun,
  Cpu, 
  ArrowRight,
  Code,
  Layers,
  Zap,
  Box,
  Book,
  Settings,
  User,
  Bell,
  Mail,
  Home,
  Star,
  Download,
  Share2,
  Trash2,
  Search
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { GooeyLoaders } from '@/src/components/GooeyLoaders';
import { ViscousLoaders } from '@/src/components/ViscousLoaders';
import { Button } from '@/src/components/Button';
import { Input } from '@/src/components/Input';
import { Toggle } from '@/src/components/Toggle';
import { Card } from '@/src/components/Card';
import { Badge } from '@/src/components/Badge';
import { Slider } from '@/src/components/Slider';
import { Modal } from '@/src/components/Modal';
import { Accordion } from '@/src/components/Accordion';
import { Dropdown } from '@/src/components/Dropdown';
import { Skeleton } from '@/src/components/Skeleton';
import { Tooltip } from '@/src/components/Tooltip';
import { Toast, ToastType } from '@/src/components/Toast';
import { CodeBlock } from '@/src/components/CodeBlock';
import { ViscousGooFilter } from '@/src/components/ViscousGooFilter';
import { DocsLibrary } from '@/src/components/DocsLibrary';

interface NavItemProps {
  icon: LucideIcon;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon: Icon, children, active = false, onClick }: NavItemProps) => (
  <motion.button
    onClick={onClick}
    whileHover={{ x: 8 }}
    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    className={cn(
      "flex items-center gap-3 px-4 py-3 rounded-full font-medium transition-all duration-500 w-full text-left",
      active 
        ? "bg-accent text-on-accent shadow-2xl scale-105" 
        : "text-neutral-500 hover:text-on-surface"
    )}
  >
    <Icon size={20} />
    {children}
  </motion.button>
);

const LoaderShowcase = () => (
  <section className="mb-24 flex flex-col gap-12">
    <div className="flex flex-col gap-2">
      <h2 className="text-5xl font-bold tracking-tighter text-on-surface uppercase">Gooey Collection</h2>
      <p className="text-on-surface-variant max-w-2xl">10 organic liquid variants powered by SVG color matrices and blurs.</p>
    </div>
    <GooeyLoaders />

    <div className="flex flex-col gap-2 mt-12 border-t border-border pt-12">
      <h2 className="text-5xl font-bold tracking-tighter text-on-surface uppercase">Viscous Motion</h2>
      <p className="text-on-surface-variant max-w-2xl">10 physics-heavy loaders simulating density, weight, and drag.</p>
    </div>
    <ViscousLoaders />
  </section>
);

const TabsShowcase = () => {
    const [active, setActive] = useState('one');
    return (
        <div className="flex bg-surface-container p-1 rounded-full w-fit">
            {['one', 'two', 'three'].map(t => (
                <button 
                  key={t}
                  onClick={() => setActive(t)}
                  className={cn(
                    "px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 relative",
                    active === t ? "text-on-accent" : "text-on-surface-variant hover:text-on-surface"
                  )}
                >
                    {active === t && (
                        <motion.div 
                          layoutId="tab-bg"
                          className="absolute inset-0 bg-accent rounded-full z-0"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                    )}
                    <span className="relative z-10 capitalize">{t}</span>
                </button>
            ))}
        </div>
    )
}

const ElementsShowcase = ({ addToast }: { addToast: (m: string, t: ToastType) => void }) => {
  const [sliderVal, setSliderVal] = useState(65);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdownVal, setDropdownVal] = useState('');

  return (
    <section className="mb-24 flex flex-col gap-12">
      <h2 className="text-5xl font-bold tracking-tighter text-on-surface">Advanced Components</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="lg:col-span-2">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8 border-b border-border pb-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">Viscous Tabs</h3>
              <p className="text-on-surface-variant">Smooth layout transitions with shared element animations.</p>
            </div>
            <TabsShowcase />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">Atomic Utilities</h3>
              <p className="text-on-surface-variant">Badges, Skeletons, and Sliders.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Tooltip content="Tooltip message">
                <Badge variant="primary">Active</Badge>
              </Tooltip>
              <Tooltip content="Waiting for response">
                <Badge variant="secondary">Delayed</Badge>
              </Tooltip>
              <Tooltip content="Non-interactive">
                <Badge variant="outline">Static</Badge>
              </Tooltip>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Range Slider</span>
              <Slider value={sliderVal} onChange={setSliderVal} />
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Skeleton States</span>
              <div className="flex items-center gap-4">
                <Skeleton className="w-12 h-12 rounded-full" />
                <div className="flex flex-col gap-2 flex-1">
                  <Skeleton className="w-full h-4" />
                  <Skeleton className="w-2/3 h-4" />
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-2xl font-bold mb-4">Feedback System</h3>
          <p className="text-xs text-on-surface-variant mb-6 uppercase tracking-widest">Interactive snackbars</p>
          <div className="grid grid-cols-2 gap-4">
            <Button onClick={() => addToast('Successfully updated!', 'success')} className="w-full text-[10px] py-3">Toast Success</Button>
            <Button onClick={() => addToast('System warning detected.', 'warning')} variant="secondary" className="w-full text-[10px] py-3">Toast Warning</Button>
            <Button onClick={() => addToast('New update available.', 'info')} variant="secondary" className="w-full text-[10px] py-3">Toast Info</Button>
            <Button onClick={() => addToast('Action failed. Retry later.', 'error')} variant="secondary" className="w-full text-[10px] py-3 text-red-500">Toast Error</Button>
          </div>
        </Card>
        
        <Card>
          <h3 className="text-2xl font-bold mb-4">Accordions</h3>
          <Accordion items={[
            { title: "What is Viscous Minimalism?", content: "It is a design aesthetic that prioritizes organic movement, monochromatic palettes, and high-contrast tactile feedback with a sense of weight." },
            { title: "Is it Dark Mode compatible?", content: "Absolutely. Every element in ViscousUI is reactive to systemic theme changes while preserving the fluid physics." },
            { title: "How do I install it?", content: "ViscousUI can be added to any React project using our unified NPM package and Tailwind plugin." }
          ]} />
        </Card>

        <Card>
          <h3 className="text-2xl font-bold mb-4">Overlays & Selection</h3>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Custom Dropdown</span>
              <Dropdown 
                placeholder="Choose profile..."
                value={dropdownVal}
                onChange={setDropdownVal}
                options={[
                  { label: "Personal Account", value: "personal", icon: User },
                  { label: "Settings", value: "settings", icon: Settings },
                  { label: "Work Workspace", value: "work", icon: LayoutDashboard }
                ]}
              />
            </div>
            <div className="flex flex-col gap-4 pt-4 border-t border-border">
              <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Modal Dialogs</span>
              <Button onClick={() => setIsModalOpen(true)} variant="secondary" className="w-full">
                Launch System Modal
              </Button>
              <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                title="System Update"
              >
                <p className="mb-6">The new ViscousUI v1.0 architecture is ready for deployment. This update includes dark mode support and 20 unique interactive loaders.</p>
                <div className="flex gap-4">
                  <Button onClick={() => setIsModalOpen(false)} className="px-6 py-3 text-sm flex-1">Deploy Now</Button>
                  <Button onClick={() => setIsModalOpen(false)} variant="secondary" className="px-6 py-3 text-sm flex-1">Later</Button>
                </div>
              </Modal>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

const Overview = () => (
  <>
    <header className="mb-24 max-w-4xl">
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        className="text-8xl font-black tracking-tighter text-on-surface mb-8 leading-[0.9]"
      >
        ViscousUI
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.1 }} 
        className="text-xl text-on-surface-variant max-w-2xl leading-relaxed"
      >
        High-viscosity motion for premium web interfaces. A strictly monochromatic, physics-heavy design system built for depth and tactile feedback.
      </motion.p>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[300px] mb-24">
      <Card hoverEffect className="md:col-span-2 justify-end overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-5 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000" />
        <div className="relative z-10">
          <Zap className="text-accent mb-4" size={32} />
          <h3 className="text-3xl font-bold">Thick Motion</h3>
          <p className="text-on-surface-variant mt-2 max-w-sm">Animations are weighted with intentional drag, creating a dense, premium feel that avoids the "floaty" trap.</p>
        </div>
      </Card>
      <Card hoverEffect className="justify-end overflow-hidden group">
        <div className="relative z-10">
          <Layers className="text-accent mb-4" size={32} />
          <h3 className="text-2xl font-bold">Glassmorphism</h3>
          <p className="text-sm text-on-surface-variant mt-2">Deep blurs and minimal strokes establish spatial hierarchy without harsh lines.</p>
        </div>
      </Card>
      <Card hoverEffect className="justify-end overflow-hidden group">
        <div className="relative z-10">
          <Box className="text-accent mb-4" size={32} />
          <h3 className="text-2xl font-bold">Density Grids</h3>
          <p className="text-sm text-on-surface-variant mt-2">Elements respect mass and volume, expanding with weighted momentum.</p>
        </div>
      </Card>
      <div className="md:col-span-2 bg-accent text-on-accent rounded-[3rem] p-16 flex flex-col justify-center items-center text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]">
        <h3 className="text-5xl font-black relative z-10 mb-6 uppercase tracking-tighter">v1.0.0 Stable</h3>
        <p className="text-on-accent/80 mb-8 max-w-md relative z-10 font-medium">Ready for high-density production environments.</p>
        <div className="bg-on-accent/10 backdrop-blur-md rounded-full px-10 py-5 font-mono text-sm border border-on-accent/20 relative z-10 flex items-center gap-6 group/code active:scale-95 transition-transform cursor-pointer">
          <code className="text-lg">npm install viscous-ui</code>
          <div className="p-2 bg-on-accent/10 rounded-full group-hover/code:bg-on-accent/20 transition-colors">
            <Download size={20} />
          </div>
        </div>
      </div>
    </div>
  </>
);

const Guidelines = () => (
  <section className="mb-24 flex flex-col gap-12">
    <h2 className="text-5xl font-bold tracking-tighter text-on-surface uppercase">Design Core</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card>
        <h3 className="text-2xl font-bold">01. Monochromatism</h3>
        <p className="text-on-surface-variant leading-relaxed">Color is used only as a functional tool. By removing hue, we force focus on shadow, weight, and movement.</p>
      </Card>
      <Card>
        <h3 className="text-2xl font-bold">02. Physicality</h3>
        <p className="text-on-surface-variant leading-relaxed">Elements should feel like they have mass. Use springs instead of eases. Allow for slight overshoot to simulate momentum.</p>
      </Card>
      <Card>
        <h3 className="text-2xl font-bold">03. Viscous States</h3>
        <p className="text-on-surface-variant leading-relaxed">Components shouldn't just "appear". They should flow. Use transform-origin and scale animations to mimic growth.</p>
      </Card>
      <Card>
        <h3 className="text-2xl font-bold">04. Negative Space</h3>
        <p className="text-on-surface-variant leading-relaxed">Padding is the primary separator. Avoid borders where possible. Let the proximity of elements define their relationship.</p>
      </Card>
    </div>
  </section>
);

const Docs = () => (
  <section className="mb-24 flex flex-col gap-12">
    <DocsLibrary />
  </section>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [toasts, setToasts] = useState<{ id: number; message: string; type: ToastType }[]>([]);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  const addToast = (message: string, type: ToastType = 'info') => {
    const id = Date.now();
    setToasts([...toasts, { id, message, type }]);
    setTimeout(() => {
      setToasts(current => current.filter(t => t.id !== id));
    }, 5000);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-accent selection:text-on-accent transition-colors duration-500 overflow-hidden">
      <ViscousGooFilter />
      
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-[40px] px-8 md:px-12 h-24 flex justify-between items-center border-b border-border transition-colors duration-500">
        <div className="flex items-center gap-16">
          <motion.div 
            onClick={() => setActiveTab('overview')}
            whileHover={{ opacity: 0.6 }}
            className="text-2xl font-black tracking-tighter text-on-surface cursor-pointer"
          >
            ViscousUI
          </motion.div>
          <div className="hidden md:flex gap-8 items-center h-full">
            {['Overview', 'Loaders', 'Elements', 'Guidelines', 'Docs'].map((item) => (
              <button 
                key={item}
                onClick={() => setActiveTab(item.toLowerCase())}
                className={cn(
                  "font-medium transition-all duration-500 hover:opacity-60 text-sm tracking-wide",
                  activeTab === item.toLowerCase() ? "text-on-surface border-b-2 border-accent pb-1" : "text-neutral-400"
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <button 
            onClick={toggleTheme}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface hover:scale-110 transition-all border border-border"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface hover:scale-110 transition-all border border-border">
            <Cpu size={18} />
          </button>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-accent text-on-accent px-8 py-3 rounded-full font-bold text-sm shadow-xl">
            Join Beta
          </motion.button>
        </div>
      </nav>

      <div className="flex max-w-[1920px] mx-auto pt-24">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col gap-2 w-64 pt-16 px-6 fixed h-screen overflow-y-auto border-r border-border bg-surface/50 backdrop-blur-xl">
          <div className="mb-8 px-4">
            <h3 className="text-xl font-bold text-on-surface font-sans">Library</h3>
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-black">v2.0.0-gold</span>
          </div>
          <NavItem icon={Home} active={activeTab === 'overview'} onClick={() => setActiveTab('overview')}>Overview</NavItem>
          <NavItem icon={Hourglass} active={activeTab === 'loaders'} onClick={() => setActiveTab('loaders')}>Loaders</NavItem>
          <NavItem icon={Box} active={activeTab === 'elements'} onClick={() => setActiveTab('elements')}>Elements</NavItem>
          <NavItem icon={Star} active={activeTab === 'guidelines'} onClick={() => setActiveTab('guidelines')}>Guidelines</NavItem>
          <NavItem icon={Book} active={activeTab === 'docs'} onClick={() => setActiveTab('docs')}>Documentation</NavItem>
          
          <div className="mt-12 mb-4 px-4">
            <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Components</span>
          </div>
          <NavItem icon={MousePointer2} active={activeTab === 'buttons'} onClick={() => setActiveTab('buttons')}>Buttons</NavItem>
          <NavItem icon={Type} active={activeTab === 'inputs'} onClick={() => setActiveTab('inputs')}>Inputs</NavItem>
          <NavItem icon={ToggleLeft} active={activeTab === 'toggles'} onClick={() => setActiveTab('toggles')}>Toggles</NavItem>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 px-8 md:px-[max(5vw,40px)] pt-16 pb-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            >
              {activeTab === 'overview' && <Overview />}
              {activeTab === 'loaders' && <LoaderShowcase />}
              {activeTab === 'buttons' && (
                 <section className="mb-24">
                    <h2 className="text-5xl font-bold tracking-tighter text-on-surface mb-12 uppercase">Buttons</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <Card className="items-center"><Button>Classic Primary</Button></Card>
                      <Card className="items-center"><Button variant="secondary">Secondary</Button></Card>
                      <Card className="items-center flex-1"><Button className="w-full">Full Width Action</Button></Card>
                      <Card className="items-center"><Button className="rounded-xl px-12">Sharp Variant</Button></Card>
                      <Card className="p-12 items-center flex-row gap-8">
                         <Button variant="secondary" className="px-6 py-3 text-xs uppercase"><Mail size={16} /> Mail</Button>
                         <Button className="px-6 py-3 text-xs uppercase"><Share2 size={16} /> Share</Button>
                         <Button variant="secondary" className="px-6 py-3 text-xs uppercase text-red-500 hover:text-red-600"><Trash2 size={16} /></Button>
                      </Card>
                    </div>
                 </section>
              )}
              {activeTab === 'inputs' && (
                 <section className="mb-24">
                    <h2 className="text-5xl font-bold tracking-tighter text-on-surface mb-12 uppercase">Inputs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <Card className="gap-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Standard Input</span>
                        <Input placeholder="Enter your name..." />
                      </Card>
                      <Card className="gap-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Password Reveal</span>
                        <Input type="password" placeholder="••••••••" />
                      </Card>
                      <Card className="gap-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Icon Support</span>
                        <div className="relative">
                           <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" size={18} />
                           <Input placeholder="Search library..." className="pl-16" />
                        </div>
                      </Card>
                      <Card className="gap-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">With Actions</span>
                        <div className="flex gap-4">
                           <Input placeholder="Enter coupon..." className="flex-1" />
                           <Button className="px-8 py-0">Apply</Button>
                        </div>
                      </Card>
                    </div>
                 </section>
              )}
              {activeTab === 'toggles' && (
                 <section className="mb-24">
                    <h2 className="text-5xl font-bold tracking-tighter text-on-surface mb-12 uppercase">Switches</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <Card className="flex-row items-center justify-between">
                          <div className="flex flex-col">
                             <span className="font-bold">Dark Mode</span>
                             <span className="text-xs text-on-surface-variant">System wide theme override</span>
                          </div>
                          <Toggle checked={isDark} onChange={toggleTheme} />
                       </Card>
                       <Card className="flex-row items-center justify-between">
                          <div className="flex flex-col">
                             <span className="font-bold">Notifications</span>
                             <span className="text-xs text-on-surface-variant">Enable push alerts for updates</span>
                          </div>
                          <Toggle checked={true} onChange={() => {}} />
                       </Card>
                       <Card className="flex-row items-center justify-between opacity-50 cursor-not-allowed">
                          <div className="flex flex-col">
                             <span className="font-bold">Feature Restricted</span>
                             <span className="text-xs text-on-surface-variant">Upgrade to Pro to enable</span>
                          </div>
                          <Toggle checked={false} onChange={() => {}} />
                       </Card>
                    </div>
                 </section>
              )}
              {activeTab === 'elements' && <ElementsShowcase addToast={addToast} />}
              {activeTab === 'guidelines' && <Guidelines />}
              {activeTab === 'docs' && <Docs />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Global Toasts */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
        <AnimatePresence>
          {toasts.map(toast => (
            <Toast 
              key={toast.id} 
              message={toast.message} 
              type={toast.type} 
              onClose={() => setToasts(current => current.filter(t => t.id !== toast.id))} 
            />
          ))}
        </AnimatePresence>
      </div>

      {/* SVG Filters */}
      <ViscousGooFilter />

      {/* Footer */}
      <footer className="w-full py-32 px-8 md:px-12 mt-20 border-t border-border bg-surface flex flex-col md:flex-row justify-between items-center max-w-[1920px] mx-auto text-[10px] uppercase font-bold tracking-[0.3em] text-neutral-400">
        <div className="flex flex-col gap-2">
           <div>© 2024 Viscous Minimalism Research.</div>
           <div className="text-accent/40 lowercase italic normal-case tracking-normal">Experience the viscous web.</div>
        </div>
        <div className="flex gap-12 mt-8 md:mt-0">
          <a href="#" className="hover:text-on-surface transition-colors">Twitter</a>
          <a href="#" className="hover:text-on-surface transition-colors">Github</a>
          <a href="#" className="hover:text-on-surface transition-colors">Discord</a>
        </div>
      </footer>
    </div>
  );
}
