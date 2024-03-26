const getStoredBooksApplication = (key) => {
    const storedBooks = localStorage.getItem(key);
    return storedBooks ? JSON.parse(storedBooks) : [];
};

const saveBookApplication = (id) => {
    const storedWishlistBooks = getStoredBooksApplication('wishlist-books');
    if (!storedWishlistBooks.includes(id)) {
        storedWishlistBooks.push(id);
        localStorage.setItem('wishlist-books', JSON.stringify(storedWishlistBooks));
    }
};

const saveReadBookApplication = (id) => {
    const storedReadBooks = getStoredBooksApplication('read-books');
    if (!storedReadBooks.includes(id)) {
        storedReadBooks.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedReadBooks));
    }
};

export { getStoredBooksApplication, saveReadBookApplication, saveBookApplication };
