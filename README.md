# React Shopping Cart Application

A complete response to the React Shopping Cart assignment. The project provides a modern, responsive product catalog and a functional shopping cart using reusable React components, React Hooks, and Context API.

## Features implemented

- Product catalog in a responsive grid layout
- Product image, title, category, description, and price
- Add products to cart with one click
- Increase and decrease item quantity
- Remove individual items
- Clear the complete cart
- Real-time total item count and total price
- React Context API for centralized global cart state
- `useState`, `useEffect`, `useMemo`, and a reusable `useCart` custom hook
- Cart persistence using `localStorage`
- Product search and category filtering
- Mobile-first responsive layout for phones, tablets, and desktops
- Local product graphics, so the interface does not depend on external image URLs

## Project structure

```text
src/
├── components/
│   ├── Cart.jsx
│   ├── CartItem.jsx
│   ├── Filters.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── ProductGrid.jsx
├── context/
│   └── CartContext.jsx
├── data/
│   └── products.js
├── hooks/
│   └── useCart.js
├── App.jsx
├── main.jsx
└── styles.css
```

## Run the project

1. Open the project folder in VS Code or a terminal.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local Vite URL shown in the terminal.

## Build for submission

```bash
npm run build
```

The production build will be generated in the `dist/` folder.

## State-management note

This solution uses **React Context API** instead of Redux Toolkit. Context is sufficient for the assignment because the cart state is small and focused, while still meeting the requirement for centralized and predictable cart state across reusable components.
