import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import { Icon } from "@iconify/react";
import React from "react";
import styles from "./style.module.css";

interface IProps extends ReactPaginateProps {}
const Pagination = ({ pageCount, ...props }: IProps) => {
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<Icon icon="material-symbols-light:arrow-forward-ios" />}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<Icon icon="material-symbols-light:arrow-back-ios" />}
        renderOnZeroPageCount={null}
        className={styles.container}
        pageClassName={styles.page}
        pageLinkClassName={styles.link}
        previousClassName={styles.page}
        previousLinkClassName={styles.link}
        nextClassName={styles.page}
        nextLinkClassName={styles.link}
        activeClassName={styles.active}
        breakClassName={styles.page}
        breakLinkClassName={styles.link}
        {...props}
      />
    </div>
  );
};

export default Pagination;
