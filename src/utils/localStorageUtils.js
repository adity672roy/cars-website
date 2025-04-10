 
export const getWishlist = () => {
    return JSON.parse(localStorage.getItem('wishlist')) || [];
  };
  
  export const saveWishlist = (items) => {
    localStorage.setItem('wishlist', JSON.stringify(items));
  };
  
  export const toggleWishlistItem = (car) => {
    const list = getWishlist();
    const exists = list.find((item) => item.id === car.id);
    const updatedList = exists
      ? list.filter((item) => item.id !== car.id)
      : [...list, car];
    saveWishlist(updatedList);
    return updatedList;
  };
  