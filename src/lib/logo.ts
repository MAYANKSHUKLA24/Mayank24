const CLIENT_ID = "1idNDNBF97qSs-_RpA1";

export function buildLogoUrl(
  domain: string,
  opts: { type?: "icon" | "logo" | "symbol"; theme?: "light" | "dark"; width?: number } = {}
) {
  const { type = "logo", theme = "light", width = 400 } = opts;
  return `https://cdn.brandfetch.io/${domain}/w/${width}/theme/${theme}/fallback/404/type/${type}?c=${CLIENT_ID}`;
}
