
export const FETCH_BOOKS = "FETCH_BOOKS";
export const SET_BOOKS = "SET_BOOKS";


const limitAuthorName = (authorName) => {
  if (authorName.length > 20) {
    return authorName.slice(0, 20) + "...";  
  }
  return authorName;
};

export const fetchBooks = () => async (dispatch) => {
  dispatch({ type: FETCH_BOOKS });

  
  const response = await fetch("https://openlibrary.org/search.json?q=books&limit=500");

  if (!response.ok) {
    console.error("Failed to fetch data");
    return;
  }

  const data = await response.json();

  
  const books = data.docs.map((item) => ({
    title: item.title,
    author: item.author_name
      ? limitAuthorName(item.author_name.join(", ")) 
      : "Unknown",
    genre: item.subject ? item.subject.join(", ") : "Unknown",
    image: item.cover_i
      ? `https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`
      : "https://via.placeholder.com/150x200?text=No+Image", // Fallback image
  }));

  
  dispatch({ type: SET_BOOKS, payload: books });
};
