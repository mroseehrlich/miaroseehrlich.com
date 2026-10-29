
import SiteFooter from "../../components/SiteFooter";

export default function SiteLayout({ children }) {
  return (
    <div className="page">
      {children}
      <SiteFooter />
    </div>
  );
}
