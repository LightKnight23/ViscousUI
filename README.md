# ViscousUI

A high-performance, physics-based UI component library for React. Built with Framer Motion and Tailwind CSS.

ViscousUI provides a set of highly interactive, "viscous" components that respect physical mass, momentum, and organic movement. Every component is designed with a monochromatic aesthetic and optimized for high-density applications.

## Features

- 🫧 **Viscous Physics**: Spring-based animations for tactile feedback.
- 🧪 **Gooey Effects**: Advanced SVG filters for organic element merging.
- 🌓 **Automatic Dark Mode**: Seamless monochromatic theme switching.
- 🚀 **Performance Optimized**: Interactions are dormant by default, activating only on hover/tap.
- 📦 **Atomic Design**: Highly composable building blocks.

## Installation

```bash
npm install viscous-ui motion lucide-react
```

## Usage

### Animated Button

```tsx
import { Button } from 'viscous-ui';

export default function App() {
  return (
    <Button variant="primary" onClick={() => console.log("Sparked!")}>
      Connect Wallet
    </Button>
  );
}
```

### Gooey Loader

```tsx
import { MitosisLoader } from 'viscous-ui/loaders';

export default function Loading() {
  return <MitosisLoader />;
}
```

## Components

- **Buttons**: Tactile triggers with weight.
- **Cards**: Glassmorphic containers with hover physics.
- **Inputs & Toggles**: Smooth, elastic state transitions.
- **Loaders**: 20 unique "Mitosis" and "Physics" based animations.
- **Navigation**: Animated Tab systems and Sidebar layouts.
- **Overlays**: Modals, Tooltips, and Toasts with high-viscosity entrance animations.

## Design Philosophy

ViscousUI follows a **Functional Monochromatism** approach. Color is reserved for state changes and critical actions, while depth and relationship are defined through padding, weight, and motion.

## License

MIT © Eyvar García
