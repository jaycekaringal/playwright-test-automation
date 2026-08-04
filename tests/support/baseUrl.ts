export function resolveUrl(path = '/') {
  const baseUrl = process.env.PLAYWRIGHT_BASE_URL ?? 'https://practicesoftwaretesting.com/';
  return new URL(path, baseUrl).toString();
}
