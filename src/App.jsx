import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product.name])
  }

  return (
    <div
      style={{
        background: darkMode ? '#111827' : '#f9fafb',
        color: darkMode ? '#f9fafb' : '#111827',
        minHeight: '100vh',
        padding: '2rem',
        transition: 'background-color 0.2s ease, color 0.2s ease'
      }}
    >
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle
        darkMode={darkMode}
        onToggle={() => setDarkMode((current) => !current)}
      />

      <div style={{ marginTop: '1rem' }}>
        <label htmlFor="category-filter">Filter by Category: </label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={handleAddToCart}
      />

      <Cart cartItems={cart} />
      <p>Cart total: {cart.length}</p>
    </div>
  )
}

export default App
