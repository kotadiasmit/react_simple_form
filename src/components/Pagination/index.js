import "./index.scss";
import Table from "../Table";
import ReactPaginate from "react-paginate";
import { useEffect } from "react";

const Pagination = (props) => {
  const { userLocationArray, itemsPerPage, changeCurrentPage, currentPageNo } =
    props;

  const itemOffset = currentPageNo * itemsPerPage;
  const endOffset = itemOffset + itemsPerPage;
  let currentLocationArray = userLocationArray.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(userLocationArray.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    changeCurrentPage(selectedPage);
  };

  //when page has one item & it will deleted
  useEffect(() => {
    if (currentPageNo > pageCount - 1 && userLocationArray.length) {
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
        pageRangeDisplayed={5}
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
      />
    </>
  );
};
export default Pagination;
