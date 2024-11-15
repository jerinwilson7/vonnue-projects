import { useState } from "react";
import "./App.css";
import { PaginationComponent } from "./component/PaginationComponent";

function App() {
  const [currentPage, setCurrentPage] = useState(1)

  console.log(currentPage)

  const handlePageChange = (page:number)=>{
    setCurrentPage(()=>page)
  }
  return (
    <>
      <PaginationComponent count={10} total={100} currentPage={currentPage} onPageChange={handlePageChange} />
    </>
  );
}

export default App;
 