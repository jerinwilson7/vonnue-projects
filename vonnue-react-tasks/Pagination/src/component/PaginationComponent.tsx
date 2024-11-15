import { useEffect, useState } from "react";

type PaginationType = {
  count: number;
  total: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const PaginationComponent = ({ count, total, currentPage, onPageChange }: PaginationType) => {
  const [currentPageState, setCurrentPageState] = useState(currentPage);
  const totalPages = Math.ceil(total / count);

  useEffect(() => {
    setCurrentPageState(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPageState(page);
      onPageChange(page);
    }
  };

  const previousPage = () => {
    if (currentPageState > 1) {
      handlePageChange(currentPageState - 1);
    }
  };

  const nextPage = () => {
    if (currentPageState < totalPages) {
     
      handlePageChange(currentPageState + 1);
    }
  };

  const previousPage2 = () => {
    if (currentPageState > 2) {
      handlePageChange(currentPageState - 2);
    } else if (currentPageState === 2) {
      handlePageChange(1);
    }
  };

  const nextPage2 = () => {
    if (currentPageState < totalPages - 1) {
      handlePageChange(currentPageState + 2);
    } else if (currentPageState === totalPages - 1) {
      handlePageChange(totalPages);
    }
  };

  const generatePagesArray = () => {
    const pagesArray = [];
    for (let i = 1; i <= totalPages; i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  };

  const allPages = generatePagesArray();

  const shouldShowPage = (page: number) => {
    if (page === 1 || page === 2) return true;
    if (page === totalPages || page === totalPages - 1) return true;
    if (page >= currentPageState - 2 && page <= currentPageState + 2) return true;
    return false;
  };


  console.log("current :",currentPage)
  console.log("next :",currentPage+1)

  return (
    <div className="pagination">
      <button onClick={previousPage2} disabled={currentPageState <= 1}>{"<<"}</button>
      <button onClick={previousPage} disabled={currentPageState <= 1}>{"<"}</button>
      {allPages.map((page, index) => {
        if (shouldShowPage(page)) {
          return (
            <p
              className={`page ${currentPageState === page ? "current" : ""}`}
              key={index}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </p>
          );
        } else if (
          (page === currentPageState - 3 && page > 2) ||
          (page === currentPageState + 3 && page < totalPages - 1)
        ) {
          return <span className="dot" key={index}>....</span>;
        } else {
          return null;
        }
      })}
      <button onClick={nextPage} disabled={currentPageState >= totalPages}>{">"}</button>
      <button onClick={nextPage2} disabled={currentPageState >= totalPages}>{">>"}</button>
    </div>
  );
};
