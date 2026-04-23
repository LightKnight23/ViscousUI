import React from 'react';
import { Card } from './Card';
import { CodeBlock } from './CodeBlock';
import { Badge } from './Badge';

interface DocSectionProps {
  title: string;
  description: string;
  code: string;
  props: { name: string; type: string; description: string; default?: string }[];
}

const DocSection = ({ title, description, code, props }: DocSectionProps) => (
  <div className="flex flex-col gap-8 mb-20 border-b border-border pb-20">
    <div className="flex flex-col gap-4">
      <h3 className="text-4xl font-black tracking-tighter text-on-surface uppercase">{title}</h3>
      <p className="text-on-surface-variant max-w-2xl">{description}</p>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="flex flex-col gap-4">
        <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Implementation</span>
        <CodeBlock code={code} />
      </div>
      
      <div className="flex flex-col gap-4">
        <span className="text-[10px] font-bold uppercase tracking-widest text-accent">API Reference</span>
        <div className="bg-surface-container rounded-[2rem] p-8 border border-border overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 font-bold text-[10px] uppercase tracking-widest text-on-surface-variant">Prop</th>
                <th className="py-4 font-bold text-[10px] uppercase tracking-widest text-on-surface-variant">Type</th>
                <th className="py-4 font-bold text-[10px] uppercase tracking-widest text-on-surface-variant">Default</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {props.map((p) => (
                <tr key={p.name} className="group transition-colors hover:bg-surface-container-high/50">
                  <td className="py-4">
                    <code className="text-accent font-bold">{p.name}</code>
                    <p className="text-[10px] text-on-surface-variant mt-1">{p.description}</p>
                  </td>
                  <td className="py-4 text-neutral-500 font-mono text-[10px]">{p.type}</td>
                  <td className="py-4 text-neutral-400 font-mono text-[10px]">{p.default || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export const DocsLibrary = () => {
  return (
    <div className="flex flex-col">
      <header className="mb-20">
        <Badge variant="primary" className="mb-6">v1.0 Stable</Badge>
        <h1 className="text-7xl font-black tracking-tighter text-on-surface mb-6 uppercase">Package Reference</h1>
        <p className="text-xl text-on-surface-variant max-w-3xl">Deeply customizable components for high-viscosity interfaces. Every element respects standard HTML attributes while providing elastic physics via motion props.</p>
      </header>

      <DocSection 
        title="Button"
        description="The primary action element with spring-based tactile feedback and semantic state support."
        code={`import { Button } from '@viscousui/core';

<Button 
  variant="primary" 
  onClick={() => {}}
>
  Execute Action
</Button>`}
        props={[
          { name: 'variant', type: "'primary' | 'secondary'", description: 'Defines the visual weight of the button.', default: "'primary'" },
          { name: 'children', type: "ReactNode", description: 'The label or icon inside the button.' },
          { name: 'onClick', type: "function", description: 'Click handler.' },
          { name: 'disabled', type: "boolean", description: 'Disables all interactions.', default: 'false' }
        ]}
      />

      <DocSection 
        title="Card"
        description="A container with deep glassmorphism and weighted hover physics."
        code={`import { Card } from '@viscousui/core';

<Card hoverEffect={true}>
  <h3>Content Title</h3>
  <p>Description goes here...</p>
</Card>`}
        props={[
          { name: 'hoverEffect', type: "boolean", description: 'Enables the weighted lifting animation.', default: 'true' },
          { name: 'className', type: "string", description: 'Additional tailwind classes for layout.' },
          { name: 'children', type: "ReactNode", description: 'Content to be housed in the card.' }
        ]}
      />

      <DocSection 
        title="Badge"
        description="Monochromatic indicators for status and tagging."
        code={`import { Badge } from '@viscousui/core';

<Badge variant="secondary">Beta</Badge>`}
        props={[
          { name: 'variant', type: "'primary' | 'secondary' | 'outline'", description: 'The visual style of the badge.', default: "'primary'" },
          { name: 'children', type: "ReactNode", description: 'Badge label.' }
        ]}
      />

      <DocSection 
        title="Slider"
        description="A physics-based range input with tactile drag handle."
        code={`import { Slider } from '@viscousui/core';

const [val, setVal] = useState(50);
<Slider value={val} onChange={setVal} min={0} max={100} />`}
        props={[
          { name: 'value', type: "number", description: 'Current value of the slider.' },
          { name: 'onChange', type: "(val: number) => void", description: 'Callback on value change.' },
          { name: 'min', type: "number", description: 'Minimum value.', default: '0' },
          { name: 'max', type: "number", description: 'Maximum value.', default: '100' }
        ]}
      />

      <DocSection 
        title="Modal"
        description="Liquid glassmorphic overlays with spring-stiffness transitions."
        code={`import { Modal } from '@viscousui/core';

<Modal isOpen={open} onClose={() => setOpen(false)} title="Update">
  <p>Detailed message...</p>
</Modal>`}
        props={[
          { name: 'isOpen', type: "boolean", description: 'Controlled visibility state.' },
          { name: 'onClose', type: "function", description: 'Callback requested when closing.' },
          { name: 'title', type: "string", description: 'Header title.' }
        ]}
      />

      <DocSection 
        title="Toast"
        description="Non-blocking notifications with high-viscosity entrance."
        code={`import { Toast } from '@viscousui/core';

<Toast message="Saved" type="success" onClose={() => {}} />`}
        props={[
          { name: 'message', type: "string", description: 'The text priority.' },
          { name: 'type', type: "'success' | 'info' | 'warning' | 'error'", description: 'Status level.', default: "'info'" },
          { name: 'onClose', type: "function", description: 'Dismissal callback.' }
        ]}
      />

      <DocSection 
        title="Input"
        description="High-contrast text inputs with focus-state momentum."
        code={`import { Input } from '@viscousui/core';

<Input placeholder="Search..." />`}
        props={[
          { name: 'placeholder', type: "string", description: 'Helper text.' },
          { name: 'type', type: "string", description: 'Standard HTML input types.', default: "'text'" },
          { name: 'className', type: "string", description: 'Custom styling overrides.' }
        ]}
      />

      <DocSection 
        title="Toggle"
        description="A monochromatic switch with elastic thumb movement."
        code={`import { Toggle } from '@viscousui/core';

<Toggle checked={true} onChange={(val) => {}} />`}
        props={[
          { name: 'checked', type: "boolean", description: 'Toggle state.' },
          { name: 'onChange', type: "(val: boolean) => void", description: 'Change callback.' }
        ]}
      />

      <DocSection 
        title="Dropdown"
        description="Overlay-based selection menu with glassmorphic depth."
        code={`import { Dropdown } from '@viscousui/core';

<Dropdown 
  options={[{label: 'One', value: '1'}]} 
  value={val} 
  onChange={setVal} 
/>`}
        props={[
          { name: 'options', type: "DropdownOption[]", description: 'Array of label/value objects.' },
          { name: 'value', type: "string", description: 'Selected value.' },
          { name: 'onChange', type: "function", description: 'Selection handler.' }
        ]}
      />

      <DocSection 
        title="Tooltip"
        description="Contextual micro-labels triggered by hover events."
        code={`import { Tooltip } from '@viscousui/core';

<Tooltip content="Helper text">
  <span>Hover me</span>
</Tooltip>`}
        props={[
          { name: 'content', type: "string", description: 'The text to display.' },
          { name: 'children', type: "ReactNode", description: 'Trigger element.' }
        ]}
      />

      <div className="mt-32 p-12 bg-accent text-on-accent rounded-[3rem]">
        <h2 className="text-5xl font-black tracking-tighter uppercase mb-6">Performance Optimization</h2>
        <p className="max-w-2xl text-on-accent/80 mb-8 font-medium">To maintain 60FPS across complex layouts, ViscousUI Loaders use conditional animation logic. Animations are dormant by default and only engage during surface interaction (Hover/Tap), significantly reducing CPU overhead in dense dashboards.</p>
        <div className="flex gap-4">
          <Badge variant="outline" className="border-on-accent/20 text-on-accent">CPU Optimized</Badge>
          <Badge variant="outline" className="border-on-accent/20 text-on-accent">Interaction Driven</Badge>
        </div>
      </div>
    </div>
  );
};
