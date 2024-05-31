import ReactPaginate from "react-paginate";
import { Icon } from "@iconify/react";
import React from "react";
import styles from "./style.module.css";

const Pagination = () => {
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<Icon icon="material-symbols-light:arrow-forward-ios" />}
        onPageChange={() => {}}
        pageRangeDisplayed={5}
        pageCount={17}
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
      />
    </div>
  );
};

export default Pagination;
