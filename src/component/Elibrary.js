import React, { useState } from "react";
import './App.css';

const data = {
    'Roadmap/Masterplan': [
        { id: 1, title: 'Dokumen 1', date: '2023-01-01', image: 'cover1.jpg' },
        { id: 2, title: 'Dokumen 2', date: '2023-02-01', image: 'cover2.jpg' },
        // Tambahkan lebih banyak data sesuai kebutuhan
    ],
    'Pidato/Paparan': [
        { id: 1, title: 'Dokumen 3', date: '2023-03-01', image: 'cover3.jpg' },
        { id: 2, title: 'Dokumen 4', date: '2023-04-01', image: 'cover4.jpg' },
        // Tambahkan lebih banyak data sesuai kebutuhan
    ],
    // Tambahkan lebih banyak kategori dan data sesuai kebutuhan
};

const Elibrabry = () => {
    const [selectedCategory, setSelectedCategory] = useState('Roadmap/Masterplan');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handleClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderCards = () => {
    const currentData = data[selectedCategory];
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = currentData.slice(indexOfFirstItem, indexOfLastItem);

    return currentItems.map((item, index) => (
      <div className="card" key={index}>
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.date}</p>
        <button onClick={() => alert(`Downloading ${item.title}`)}>Download</button>
      </div>
    ));
  };

  const renderPagination = () => {
    const totalItems = data[selectedCategory].length;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="pagination">
        {pageNumbers.map(number => (
          <button key={number} onClick={() => handlePageChange(number)}>
            {number}
          </button>
        ))}
      </div>
    );
    };

    return (
        <>
            <div class="page-wrapper">

                <section className="page-banner">
                    <div className="container">
                        <div className="page-banner-title">
                            <h3>E-Library</h3>
                        </div>
                    </div>
                </section>
                <section className="about-one-section">
                    <div className="container">
                        <div className="sidebar">
                            {Object.keys(data).map((category, index) => (
                                <div key={index} onClick={() => handleClick(category)}>
                                    {category}
                                </div>
                            ))}
                        </div>
                        <div className="content">
                            <div className="card-grid">
                                {renderCards()}
                            </div>
                            {renderPagination()}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Elibrabry