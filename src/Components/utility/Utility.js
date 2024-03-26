const getStoredBooksApplication = () => {
    const storedJobApplication = localStorage.getItem('book-application' || 'read-application');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication)
    }
    return []
};

const saveBookApplication = id => {
    const storedWishlistBooks = getStoredBooksApplication();
    const exists = storedWishlistBooks.find(bookId => bookId === id)
    if(!exists){
        storedWishlistBooks.push(id)
        localStorage.setItem('book-application' , JSON.stringify(storedWishlistBooks))
    }
};
const saveReadBookApplication = id => {
    const storedWishlistBooks = getStoredBooksApplication();
    const exists = storedWishlistBooks.find(bookId => bookId === id)
    if(!exists){
        storedWishlistBooks.push(id)
        localStorage.setItem('read-application' , JSON.stringify(storedWishlistBooks))
    }
};

export { getStoredBooksApplication, saveReadBookApplication, saveBookApplication };
