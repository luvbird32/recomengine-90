
# Components Documentation

This directory contains all React components used throughout the recommendation engine dashboard.

## 📁 Directory Structure

```
components/
├── dashboard/          # Dashboard-specific components
│   ├── sections/       # Main dashboard sections
│   ├── settings/       # Settings and configuration
│   ├── overview/       # Overview widgets and charts
│   └── users/          # User management components
├── ui/                 # Reusable UI components (shadcn/ui)
├── analytics/          # Analytics and metrics components
├── recommendations/    # Recommendation display components
├── notifications/      # Notification system components
└── developer/          # Developer tools and documentation
```

## 🧩 Component Categories

### Dashboard Components (`/dashboard`)

Core dashboard functionality and layout components.

**Key Components:**
- `DashboardSidebar.tsx` - Main navigation sidebar
- `StatisticsOverview.tsx` - Key metrics display
- `DashboardMenu.tsx` - Navigation menu items

**Sections (`/dashboard/sections`):**
- `OverviewSection.tsx` - Dashboard homepage
- `AlgorithmExplanationSection.tsx` - Algorithm documentation
- `IndustriesSection.tsx` - Industry use cases
- `AnalyticsSection.tsx` - Analytics and metrics
- `UsersSection.tsx` - User management
- `NotificationsSection.tsx` - Notification center

### UI Components (`/ui`)

Reusable UI components built with shadcn/ui and Radix UI primitives.

**Core Components:**
- `Button.tsx` - Button variants and states
- `Card.tsx` - Content containers
- `Dialog.tsx` - Modal dialogs
- `Input.tsx` - Form inputs
- `Table.tsx` - Data tables
- `Tabs.tsx` - Tabbed interfaces
- `Toast.tsx` - Notification toasts

### Analytics Components (`/analytics`)

Specialized components for displaying metrics and analytics data.

**Components:**
- `AnalyticsHeader.tsx` - Analytics section header
- `EngagementChart.tsx` - User engagement visualization
- `CategoryDistributionChart.tsx` - Content category analytics
- `LocationAnalytics.tsx` - Geographic user distribution
- `EngagementMetrics.tsx` - Key performance indicators

### Recommendation Components (`/recommendations`)

Components for displaying and managing recommendations.

**Components:**
- `RecommendationFeed.tsx` - Main recommendation display
- `RecommendationCard.tsx` - Individual recommendation item
- `RecommendationSection.tsx` - Recommendation container

### Notification Components (`/notifications`)

Notification system components for user alerts and updates.

**Components:**
- `NotificationList.tsx` - List of notifications
- `NotificationItem.tsx` - Individual notification
- `NotificationStats.tsx` - Notification statistics

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--primary: 222.2 84% 4.9%;
--primary-foreground: 210 40% 98%;

/* Secondary Colors */
--secondary: 210 40% 96%;
--secondary-foreground: 222.2 84% 4.9%;

/* Accent Colors */
--accent: 210 40% 96%;
--accent-foreground: 222.2 84% 4.9%;
```

### Typography

- **Headings**: Inter font family, various weights
- **Body**: Inter font family, 400 weight
- **Code**: JetBrains Mono, monospace

### Spacing

Following Tailwind CSS spacing scale:
- `xs`: 0.25rem (4px)
- `sm`: 0.5rem (8px)
- `md`: 1rem (16px)
- `lg`: 1.5rem (24px)
- `xl`: 2rem (32px)

## 🔧 Component Patterns

### Props Interface

```typescript
interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  // Component-specific props
}
```

### Forwarded Refs

```typescript
const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("base-styles", className)}
        {...props}
      />
    );
  }
);
```

### Variant Patterns

```typescript
const buttonVariants = cva(
  "base-button-styles",
  {
    variants: {
      variant: {
        default: "default-styles",
        destructive: "destructive-styles",
        outline: "outline-styles",
      },
      size: {
        default: "default-size",
        sm: "small-size",
        lg: "large-size",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

## 📱 Responsive Design

All components follow mobile-first responsive design principles:

```typescript
// Mobile first approach
className="text-sm md:text-base lg:text-lg"

// Responsive grids
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Responsive spacing
className="p-4 md:p-6 lg:p-8"
```

## ♿ Accessibility

### ARIA Labels

```typescript
<button
  aria-label="Close dialog"
  aria-describedby="dialog-description"
>
  Close
</button>
```

### Keyboard Navigation

- Tab order management
- Focus indicators
- Escape key handling
- Enter/Space activation

### Screen Reader Support

- Semantic HTML elements
- ARIA landmarks
- Descriptive text alternatives

## 🧪 Testing

### Component Testing

```typescript
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole('button')).toHaveTextContent('Click me');
});
```

### Storybook

Components are documented in Storybook for visual testing and documentation:

```bash
npm run storybook
```

## 🔄 State Management

### Local State

```typescript
const [isOpen, setIsOpen] = useState(false);
const [loading, setLoading] = useState(false);
```

### Context

```typescript
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
```

## 📋 Best Practices

### Component Structure

1. **Imports** - External libraries first, then internal
2. **Types** - Interface definitions
3. **Component** - Main component logic
4. **Styles** - Styled components or className definitions
5. **Export** - Default and named exports

### Performance

- Use `React.memo()` for expensive components
- Implement `useMemo()` for expensive calculations
- Use `useCallback()` for event handlers passed to children
- Lazy load heavy components with `React.lazy()`

### Error Handling

```typescript
const Component = () => {
  try {
    return <div>Content</div>;
  } catch (error) {
    return <ErrorBoundary error={error} />;
  }
};
```

## 🔗 Related Documentation

- [Services Documentation](../services/README.md)
- [UI Component Library](./ui/README.md)
- [Dashboard Documentation](./dashboard/README.md)
- [Analytics Components](./analytics/README.md)
