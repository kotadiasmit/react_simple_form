import "./index.scss";
import { useState } from "react";
import Table from "../Table";
import ReactPaginate from "react-paginate";

const Pagination = (props) => {
  const { userLocationArray, itemsPerPage } = props;
  // Example userLocationArray, to simulate fetching from another resources.
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  //console.log(`Loading userLocationArray from ${itemOffset} to ${endOffset}`);
  const currentLocationArray = userLocationArray.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(userLocationArray.length / itemsPerPage);
  console.log(currentLocationArray);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % userLocationArray.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Table userLocationArray={currentLocationArray} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        className="pagination-nos-container"
        pageLinkClassName="page-nos"
        activeLinkClassName="active-page"
        previousLinkClassName="prev-tag"
        nextLinkClassName="next-tag"
        disabledLinkClassName="disable-prev-next"
        breakLinkClassName="break-line"
      />
    </>
  );
};
export default Pagination;
