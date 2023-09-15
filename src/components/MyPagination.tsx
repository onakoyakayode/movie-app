import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import styles from "../styles/styles.module.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  customItems: JSX.Element[];
  handlePageChange: (index: number) => void;
  // totalPage: any
}

const MyPagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  customItems,
  handlePageChange,
}) => {
  const renderPagesNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <PaginationItem key={i} active={i === currentPage}>
          <PaginationLink onClick={() => onPageChange(i)}>{i}</PaginationLink>
        </PaginationItem>
      );
    }
    return pageNumbers;
  };
  return (
    <Pagination className={styles.pagination}>
      <PaginationItem disabled={currentPage === 1}>
        {/* <PaginationLink
          previous
          onClick={() => onPageChange(currentPage - 1)}
        /> */}
      </PaginationItem>
      {[...Array(totalPages)].map((_, index: number) => (
        <PaginationItem key={index} active={index + 1 === currentPage}>
          <PaginationLink onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </PaginationLink>
        </PaginationItem>
      ))}
      {/* <div className={styles.currentPageFlex}>
        {customItems[currentPage - 1]}
        <div className={styles.currentPageNumber}>{renderPagesNumbers()}</div>
      </div> */}
      <PaginationItem disabled={currentPage === totalPages}>
        {/* <PaginationLink next onClick={() => onPageChange(currentPage + 1)} /> */}
      </PaginationItem>
    </Pagination>
  );
};

export default MyPagination;
