export default async (terminPretrage) => {
  let resSaServera = await fetch(
    `http://universities.hipolabs.com/search?country=${terminPretrage}`
  );
  let rezJson = resSaServera.json();
  return rezJson;
};
