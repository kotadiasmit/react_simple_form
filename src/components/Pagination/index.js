import "./index.scss";
import Table from "../Table";
import ReactPaginate from "react-paginate";
import { useEffect } from "react";

const Pagination = (props) => {
  const { userLocationArray, itemsPerPage, changeCurrentPage, currentPageNo } =
    props;

  const itemOffset = currentPageNo * itemsPerPage;
  const endOffset = itemOffset + itemsPerPage;
  //console.log(`Loading userLocationArray from ${itemOffset} to ${endOffset} with page ${currentPage}`);
  let currentLocationArray = userLocationArray.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(userLocationArray.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    changeCurrentPage(selectedPage);
  };

  useEffect(() => {
    if (currentPageNo > pageCount - 1 && userLocationArray.length !== 0) {
      // currentLocationArray = userLocationArray.slice(
      //   (pageCount - 1) * itemsPerPage,
      //   (pageCount - 1) * itemsPerPage + itemsPerPage
      // );
      changeCurrentPage(pageCount - 1);
    }
  });

  return (
    <>
      <Table userLocationArray={currentLocationArray} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        page={currentPageNo}
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        //marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        className="pagination-nos-container prevent-select"
        pageClassName="page-nos"
        activeClassName="active-page"
        previousClassName="prev-tag"
        nextClassName="next-tag"
        pageLinkClassName="page-nos-link"
        activeLinkClassName="active-page-link"
        previousLinkClassName="prev-link"
        nextLinkClassName="next-link"
        disabledLinkClassName="disable-prev-next"
        //breakClassName="break-line"
      />
    </>
  );
};
export default Pagination;
