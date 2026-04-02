# React for HTML People - A Simple Guide (Migration)

## The Big Idea

React is like HTML that can **think**. In normal HTML, you write a page and it stays the same. In React, your page can change when people click things, type stuff, or when data updates.

Think of it like this:
- **HTML** = a printed poster (static, never changes)
- **React** = a digital screen (can update, react to clicks, show new stuff)

## Key Concepts (Simple Words)

### 1. Components = Lego Blocks

In HTML, you have tags like `<div>`, `<p>`, `<img>`.

In React, you make your own tags called **components**.

```jsx
// This is a component - like making your own HTML tag
function HomePage() {
  return (
    <div>
      <h1>Hello!</h1>
    </div>
  );
}
```

You can use it like: `<HomePage />`

**Rule**: Component names MUST start with Capital Letter. This tells React "this is my custom tag, not a normal HTML tag."

### 2. JSX = HTML in JavaScript

React uses something called **JSX**. It looks like HTML but inside JavaScript.

```jsx
// This is JSX - HTML mixed with JS
function MyComponent() {
  const name = "John";  // JavaScript variable
  
  return (
    <div>
      <h1>Hello {name}!</h1>  {/* { } = put JS here */}
    </div>
  );
}
```

**Key differences from HTML:**
- Use `className` instead of `class` (because `class` is a reserved JS word)
- Use `htmlFor` instead of `for` (same reason)
- Styles are objects, not strings: `style={{ color: 'red' }}`
- One parent element only - wrap everything in a div or <>

### 3. State = Memory

In HTML, if someone clicks a button, nothing remembers that click (unless you use vanilla JS to track it).

React has **state** - built-in memory.

```jsx
import { useState } from 'react';

function Counter() {
  // count = current value (starts at 0)
  // setCount = function to change the value
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

**How useState works:**
1. `useState(0)` creates a memory slot with value 0
2. `[count, setCount]` gives you:
   - `count` = current value (read it)
   - `setCount` = function to change it (write it)
3. When you call `setCount()`, React re-renders (updates the page)

### 4. Props = Passing Data Down

In HTML, you pass attributes: `<img src="photo.jpg" />`

In React, you pass **props** (properties) to components:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Use it like:
<Welcome name="Sara" />
<Welcome name="Cahal" />
```

Or with destructuring (cleaner):

```jsx
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}
```

**Props are read-only** - like HTML attributes, you don't change them from inside the component.

### 5. Events = User Actions

HTML events:
```html
<button onclick="alert('hi')">Click</button>
```

React events (notice: camelCase, not string):
```jsx
<button onClick={() => alert('hi')}>Click</button>
```

Common events:
- `onClick` = click
- `onChange` = input changed
- `onSubmit` = form submitted
- `onMouseEnter` / `onMouseLeave` = hover

### 6. Conditional Rendering = Show/Hide Stuff

In HTML, you need CSS or JS to show/hide things.

In React, you use JavaScript logic:

```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}
```

Or shorter with ternary:

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <h1>
      {isLoggedIn ? 'Welcome back!' : 'Please sign in.'}
    </h1>
  );
}
```

Or with `&&` for "show if true":

```jsx
function Mailbox({ unreadMessages }) {
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <p>You have {unreadMessages.length} unread messages.</p>
      )}
    </div>
  );
}
```

### 7. Lists = Looping

HTML: you write each item by hand.

React: use `map()` to make a list:

```jsx
function StaffList() {
  const staff = ['Alice', 'Bob', 'Charlie'];

  return (
    <ul>
      {staff.map((person) => (
        <li key={person}>{person}</li>
      ))}
    </ul>
  );
}
```

**Important**: Every list item needs a `key` prop. React uses this to track which item is which. Use something unique like an ID.

### 8. useEffect = Side Effects

Sometimes you need to do things outside React - like:
- Fetch data from server
- Manually change the DOM
- Set up timers

```jsx
import { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Runs after every render
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
  );
}
```

**useEffect timing:**
- Empty `[]` = run once when component mounts (like page load)
- `[variable]` = run when that variable changes
- No array = run after every render

### 9. Context = Global State

When many components need the same data, use Context instead of passing props through every level.

**3 steps:**

1. **Create** the context:
```jsx
const MyContext = createContext(defaultValue);
```

2. **Provide** the context (wrap your app):
```jsx
<MyContext.Provider value={someValue}>
  <App />
</MyContext.Provider>
```

3. **Consume** the context (use the data):
```jsx
const value = useContext(MyContext);
```

Real example:

```jsx
// 1. Create context
const ThemeContext = createContext('light');

// 2. Provide it
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// 3. Use it anywhere inside
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>I am {theme}!</button>;
}
```

## Common Patterns in This Project

### Page Switching Without Reloading

```jsx
// In ContentContext.tsx
const [currentPage, setCurrentPage] = useState('home');

const changeContent = (page) => {
  setCurrentPage(page);
};

// In PageRenderer.tsx
switch (currentPage) {
  case 'home': return <HomePage />;
  case 'guide': return <GuidePage />;
  default: return <HomePage />;
}
```

### Loading Different CSS Files

```jsx
const swapStyleSheet = (sheet) => {
  // Only allow specific CSS files (security!)
  const allowed = ['/css/main.css', '/css/guide.css'];
  if (!allowed.includes(sheet)) return;
  
  const link = document.getElementById('pagestyle');
  if (link) {
    link.href = sheet;
  }
};
```

### Playing Sounds

```jsx
const playAudio = (audioId) => {
  const audio = document.getElementById(audioId);
  if (audio) {
    audio.play().catch(e => console.log('Audio blocked:', e));
  }
};
```

## File Structure Explained

```
src/
├── app/                    # Next.js specific
│   ├── layout.tsx         # Wrapper around all pages
│   ├── page.tsx           # Main page content
│   └── globals.css        # Styles for everything
│
├── components/            # Your custom "HTML tags"
│   ├── HomePage.tsx       # Home screen
│   ├── GuidePage.tsx      # Guide screen
│   └── ...
│
├── contexts/              # Shared data
│   └── ContentContext.tsx # Page state, audio, styles
│
└── data/                  # Static info
    └── staff.ts           # List of staff members
```

## Building & Deploying

1. **Install**: `npm install`
2. **Develop**: `npm run dev` (runs locally at localhost:3000)
3. **Build**: `npm run build` (makes static files in `out/`)
4. **Deploy**: Push to GitHub, GitHub Actions handles the rest

## TypeScript Quick Tips

This project uses TypeScript (TS). It's like JavaScript but with types.

```tsx
// TypeScript examples
const name: string = "John";           // must be text
const age: number = 25;                // must be number
const isActive: boolean = true;        // must be true/false

// Function with types
function greet(name: string): string {
  return `Hello ${name}`;
}

// Array of strings
const staff: string[] = ['Alice', 'Bob'];
```

Don't worry about types too much - the editor will warn you if you mess up.

## Security Reminders

- Always use `rel="noopener noreferrer"` on external links
- Validate any data before using it (whitelist approach)
- Never trust user input
- CSP headers block unauthorized scripts/images

## Quick Reference

| HTML | React |
|------|-------|
| `class` | `className` |
| `onclick` | `onClick` |
| `for` | `htmlFor` |
| `<input>` | `<input />` (self-closing) |
| `style="color:red"` | `style={{ color: 'red' }}` |
| `<img src>` | `<img src />` (needs closing slash) |

---

**Remember**: React is just JavaScript that returns HTML. If you know JS + HTML, you know 80% of React already.
