import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found" id="main-content">
      <div className="container">
        <p className="eyebrow">404 · Page not found</p>
        <h1>We couldn’t find that page.</h1>
        <p>Try returning to the home page or use the main navigation to explore Paboya Group.</p>
        <Link className="button" href="/">Back to home <span aria-hidden="true">↗</span></Link>
      </div>
    </main>
  );
}
