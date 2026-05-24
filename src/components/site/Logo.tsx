import { Link } from "react-router-dom";

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`font-serif text-2xl tracking-tight text-primary ${className}`}>
    ōra<span className="text-accent">.</span>
  </Link>
);
