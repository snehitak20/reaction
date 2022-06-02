import React, {useState} from 'react';
import Header from './components/Header';
import Page from './components/Page';
import Footer from './components/Footer';
import Navigation from './components/Navigation';



function App() {
  const [pages] = useState([
    {name: 'about', id: 1},
    {name: 'portfolio', id: 2},
    {name: 'contact', id: 3},
    {name: 'resume', id: 4}
  ])

  const [currentPage, setCurrentPage] = useState(pages[0])

  return (
    <>
      <Header>
        <Navigation
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Navigation>
      </Header>
      <div>
        <Page currentPage={currentPage}></Page>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;