const getStoredBooksApplication = () => {
    const storedJobApplication = localStorage.getItem('book-application');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication)
    }
    return []
};
const getStoredReadBooksApplication = () => {
    const storedJobApplication = localStorage.getItem('read-application');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication)
    }
    return []
};

const saveBookApplication = (id, isclicked) => {
    if (isclicked) {
        const storedWishlistBooks = getStoredBooksApplication();
        const exists = storedWishlistBooks.find(bookId => bookId === id)
        if (!exists) {
            storedWishlistBooks.push(id)
            localStorage.setItem('book-application', JSON.stringify(storedWishlistBooks))
        }
    }
};
const saveReadBookApplication = (id) => {

    const storedWishlistBooks = getStoredReadBooksApplication();
    const exists = storedWishlistBooks.find(bookId => bookId === id)
    if (!exists) {
        storedWishlistBooks.push(id)
        localStorage.setItem('read-application', JSON.stringify(storedWishlistBooks))
}
};

export { getStoredBooksApplication, getStoredReadBooksApplication, saveReadBookApplication, saveBookApplication };
