import React from "react";
import { Link } from "gatsby";
import Seo from "../components/SEO";

const NotFoundPage = () => {
  return (
    <div className="wrapper">
      <Seo
        title="→ No Soup For you! || 404"
        description="Et overblik over de bedste gode restauranter i København og omegn. Restauranterne er kommet på ud for deres gode service og kvalitet. Vi besøger alle restauranter løbende."
      />
      <div className="left-container">
        <p>
          No soup for you! Siden findes ikke <Link to="/">Gå til forsiden</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
