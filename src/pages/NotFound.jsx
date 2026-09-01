import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <main className="not-found" aria-labelledby="not-found-title">
      <Helmet>
        <title>Page Not Found | CODEX PROJECT</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="not-found-card">
        <span className="not-found-code">404</span>
        <h1 id="not-found-title">Page Not Found</h1>
        <p>The page you requested does not exist or may have moved.</p>
        <div className="not-found-actions">
          <Link to="/" className="not-found-primary">Go to Home</Link>
          <Link to="/contact" className="not-found-secondary">Contact CODEX PROJECT</Link>
        </div>
      </div>
    </main>
  );
}
