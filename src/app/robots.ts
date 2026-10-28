import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/blog", "/blog/*", "/book"],
        disallow: ["/admin", "/admin/*", "/login"],
      },
    ],
    sitemap: "https://osama-elgendy-portfolio.vercel.app/sitemap.xml",
  };
}
