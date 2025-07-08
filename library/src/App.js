// App.js
import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "./store/actions";
import "./App.css";
import { FixedSizeList  } from "react-window";


const Row = ({ index, data, style }) => {
  
  return (
    <div className="book-card" key={index} style={style}>
      <img src={data.image} alt={data.title} className="book-image" />
      <h3>{data.title}</h3>
      <p>
        <strong>Author:</strong> {data.author}
      </p>
      <p>
        <strong>Genre:</strong> {data.genre}
      </p>
    </div>
  );
};

function App() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const renderBookGrid = useCallback(
  ({ index, style, data }) => {
       console.log(data, "data");
    const { books, itemsPerRow } = data;
    const startIndex = index * itemsPerRow;
    const rowItems = books.slice(startIndex, startIndex + itemsPerRow);
    console.log(rowItems);

    return (
      <div style={{ ...style, display: "flex", gap: "16px", padding: "8px" }}>
        {rowItems.map((books, idx) => (
          <Row key={startIndex + idx} index={startIndex + idx} data={books} />
        ))}
      </div>
    );
  },
  []
);

const itemsPerRow = 3;
const rowCount = Math.ceil(books.length / itemsPerRow);


  return (
    <div className="app">
      <header className="navbar">Library Book Suggester</header>
      <main className="main-content">
        {books.length > 0 ? (
          <>
            <FixedSizeList
              height={600}
              itemCount={rowCount}
              itemSize={320}
              itemData={{ books, itemsPerRow }}
              width="100%"
            >
              {renderBookGrid}
            </FixedSizeList>

          </>



          // </div>
        ) : (
          <p>Loading books for you &#128522;...</p>
        )
        }
      </main >
      <footer className="footer">&copy; 2025 BookLibrary Inc.</footer>
    </div >
  );
}

export default App;
{/* {books.map((book, index) => (
            <Row key={index} index={index} style={{}} data={books} />
               ))}  */}
