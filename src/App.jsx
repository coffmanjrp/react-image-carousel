import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="carousel">
        <div className="image-container">
          <img
            src="https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1458&amp;q=80"
            alt="first"
          />
          <img
            src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1500&amp;q=80"
            alt="second"
          />
          <img
            src="https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1500&amp;q=80"
            alt="third"
          />
          <img
            src="https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1492&amp;q=80"
            alt="fourth"
          />
        </div>
        <div className="buttons-container">
          <button className="btn left">Prev</button>
          <button className="btn right">Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
