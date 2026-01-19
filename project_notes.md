# Project Notes - Bug Fixes & Explanations

This document explains the bugs fixed in this project with beginner-friendly explanations for TypeScript/Angular developers.

---

## 1. Deprecated Sass Color Functions

### The Problem
When building the project, we got warnings like:
```
darken() is deprecated. Use color.adjust instead.
lighten() is deprecated. Use color.adjust instead.
```

### Why It Happened
Sass (the CSS preprocessor we use) updated their color functions. The old `darken()` and `lighten()` functions are being removed in Dart Sass 3.0.0.

### The Fix

**Before (deprecated):**
```scss
@use 'variables' as *;

.link:hover {
  color: darken($primary-blue, 15%);    // Make color 15% darker
  background: lighten($text-primary, 10%); // Make color 10% lighter
}
```

**After (modern):**
```scss
@use 'sass:color';  // Import the color module
@use 'variables' as *;

.link:hover {
  color: color.adjust($primary-blue, $lightness: -15%);    // Negative = darker
  background: color.adjust($text-primary, $lightness: 10%); // Positive = lighter
}
```

### Key Concepts
- `@use 'sass:color'` - Imports Sass's built-in color module
- `color.adjust($color, $lightness: X%)` - Adjusts color lightness
  - Positive value = lighter
  - Negative value = darker

### Files Changed
- `src/styles/_reset.scss`
- `src/app/pages/legal-notice/legal-notice.scss`
- `src/app/pages/privacy-policy/privacy-policy.scss`

---

## 2. Component Style Budget Warnings

### The Problem
```
src/app/components/hero/hero.scss exceeded maximum budget.
Budget 4.00 kB was not met by 1.64 kB with a total of 5.64 kB.
```

### Why It Happened
Angular has a **budget system** to warn you when files get too large. This helps keep your app fast. The default limit for component styles was 4KB.

### The Fix
Increased the budget limit in `angular.json`:

```json
{
  "type": "anyComponentStyle",
  "maximumWarning": "6kB",   // Changed from 4kB
  "maximumError": "10kB"     // Changed from 8kB
}
```

### Key Concepts
- **Budget** - A size limit for files (JS, CSS, etc.)
- `maximumWarning` - Shows a warning if exceeded
- `maximumError` - Fails the build if exceeded
- Budgets help you catch performance issues early

---

## 3. Angular View Encapsulation & CSS Variables

### The Problem
We created a shared `<app-cta-button>` component, but couldn't style it from parent components:

```scss
// In contact.scss - THIS DOESN'T WORK!
app-cta-button {
  .cta-button {
    min-width: 120px;  // Style not applied!
  }
}
```

### Why It Happened
Angular uses **View Encapsulation** - it isolates component styles so they don't leak to other components.

**How Angular does it:**
```html
<!-- Your template -->
<button class="cta-button">Send</button>

<!-- What Angular renders -->
<button class="cta-button" _ngcontent-abc123>Send</button>
```

```css
/* Your CSS */
.cta-button { color: red; }

/* What Angular generates */
.cta-button[_ngcontent-abc123] { color: red; }
```

The parent component's styles don't have the `_ngcontent-abc123` attribute, so they don't match!

### The Fix - CSS Custom Properties (Variables)

**In the shared component** (`cta-button.scss`):
```scss
.cta-button {
  // Use CSS variables with fallback defaults
  padding: var(--cta-padding, 12px 24px);
  min-width: var(--cta-min-width, auto);
}
```

**In the parent component** (`contact.scss`):
```scss
app-cta-button {
  // Set the CSS variables - these pierce through encapsulation!
  --cta-min-width: 120px;
  --cta-padding: 8px 24px;
}
```

### Key Concepts
- **View Encapsulation** - Angular isolates component styles by default
- **CSS Variables** (`--variable-name`) - Custom properties that inherit through the DOM
- `var(--name, fallback)` - Uses the variable or falls back to default value
- CSS variables naturally pierce through Angular's encapsulation

### Why CSS Variables Are Better Than `::ng-deep`
| `::ng-deep` | CSS Variables |
|-------------|---------------|
| Deprecated | Modern standard |
| Breaks encapsulation | Works with encapsulation |
| Can cause side effects | Scoped and predictable |

---

## 4. Shared Component Pattern

### The Problem
We had duplicate button code in multiple places (hero, contact form).

### The Fix
Created a reusable `CtaButton` component in the `shared` folder.

**Component structure:**
```
src/app/shared/cta-button/
├── cta-button.ts      # Component logic
├── cta-button.html    # Template
└── cta-button.scss    # Styles
```

**The component** (`cta-button.ts`):
```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cta-button',
  imports: [TranslateModule],
  templateUrl: './cta-button.html',
  styleUrl: './cta-button.scss',
})
export class CtaButton {
  @Input() text = '';           // Plain text
  @Input() translateKey = '';   // i18n translation key
  @Input() href = '';           // Link URL
  @Input() type = 'link';       // 'link' or 'submit'
  @Input() disabled = false;    // For submit buttons

  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}
```

### Key Concepts
- `@Input()` - Receives data from parent component
- `@Output()` - Sends events to parent component
- `EventEmitter` - Angular's way to emit custom events
- **Standalone Components** - Modern Angular pattern (no NgModule needed)

### Usage Examples

**As a link:**
```html
<app-cta-button
  [translateKey]="'HERO.GET_IN_TOUCH'"
  href="#contact">
</app-cta-button>
```

**As a submit button:**
```html
<app-cta-button
  type="submit"
  text="Send"
  [disabled]="!form.valid">
</app-cta-button>
```

---

## 5. Import Fixes

### The Problem
```
Could not resolve "../../../../node_modules/@angular/common/common_module.d"
```

### Why It Happened
Someone accidentally used an incorrect import path pointing directly to node_modules.

### The Fix

**Before (wrong):**
```typescript
import { NgClass } from "../../../../node_modules/@angular/common/common_module.d";
```

**After (correct):**
```typescript
import { CommonModule } from '@angular/common';
```

### Key Concepts
- Always import from the **package name** (e.g., `@angular/common`)
- Never import directly from `node_modules/`
- `CommonModule` includes `NgClass`, `NgIf`, `NgFor`, and other common directives

---

## Quick Reference

### Common Angular Imports
```typescript
// Core
import { Component, Input, Output, EventEmitter, inject } from '@angular/core';

// Common directives (NgIf, NgFor, NgClass, etc.)
import { CommonModule } from '@angular/common';

// Forms
import { FormsModule } from '@angular/forms';        // Template-driven forms
import { ReactiveFormsModule } from '@angular/forms'; // Reactive forms

// Routing
import { RouterLink } from '@angular/router';

// HTTP
import { HttpClient } from '@angular/common/http';
```

### Sass Modern Syntax
```scss
// Import Sass modules
@use 'sass:color';
@use 'sass:math';

// Import your variables
@use '../styles/variables' as *;

// Color adjustments
color.adjust($color, $lightness: -15%);  // Darken
color.adjust($color, $lightness: 15%);   // Lighten
color.adjust($color, $saturation: -20%); // Desaturate
```

### CSS Variables Syntax
```scss
// Define with fallback
.element {
  padding: var(--custom-padding, 12px);
  color: var(--custom-color, #333);
}

// Set from parent
.parent {
  --custom-padding: 8px;
  --custom-color: blue;
}
```
