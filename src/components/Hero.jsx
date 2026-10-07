export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Simple shopping. Better experience.</p>
          <h1>Everything you need, in one clean cart.</h1>
          <p>
            Explore a responsive product catalog, add items instantly, and manage quantities with a
            real-time order summary.
          </p>
          <a className="primary-link" href="#products">
            Shop products
          </a>
        </div>

        <div className="hero-card" aria-label="Shopping cart preview graphic">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="floating-card floating-card-main">
            <span className="floating-icon">🛍️</span>
            <strong>Responsive Store</strong>
            <small>React + Context API</small>
          </div>
          <div className="floating-card floating-card-small">Fast cart updates</div>
        </div>
      </div>
    </section>
  );
}
