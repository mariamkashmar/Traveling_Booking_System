export const saveFavorites = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const getFavorites = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

export const toggleFavoritePackage = (pkg) => {
  const favorites = getFavorites();
  const exists = favorites.some((item) => item.id === pkg.id);

  let updatedFavorites;

  if (exists) {
    updatedFavorites = favorites.filter((item) => item.id !== pkg.id);
  } else {
    updatedFavorites = [...favorites, pkg];
  }

  saveFavorites(updatedFavorites);
  return updatedFavorites;
};