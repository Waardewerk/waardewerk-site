/**
 * Seo — zet <title>, <meta description> en Open Graph-tags in de <head>.
 *
 * Gebruikt React 19's native head-hoisting: `<title>` en `<meta>` die ergens
 * in de component tree staan worden automatisch naar <head> getild, ook tijdens
 * server-side rendering. Dat betekent dat elke prerendered route zijn eigen
 * nette HTML-head krijgt, zonder externe libs als react-helmet.
 */
interface Props {
  title: string;
  description: string;
  path: string;                 // relatief pad, bv. '/' of '/nieuws/foo'
  image?: string;               // absolute of root-relative afbeeldingspad
  type?: 'website' | 'article';
}

const SITE_URL = 'https://waardewerk.org';
const DEFAULT_IMAGE = '/linkedin-banner.jpg';

export default function Seo({ title, description, path, image, type = 'website' }: Props) {
  const canonical = SITE_URL + (path === '/' ? '' : path);
  const ogImage = (image ?? DEFAULT_IMAGE).startsWith('http')
    ? (image ?? DEFAULT_IMAGE)
    : SITE_URL + (image ?? DEFAULT_IMAGE);

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Waardewerk" />
      <meta property="og:locale" content="nl_NL" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </>
  );
}
