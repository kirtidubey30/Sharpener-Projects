import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductDetail.module.css";
function ProductDetail() {
  const { itemsString } = useParams();
  const params = JSON.parse(decodeURIComponent(itemsString));
  return (
    <div className={styles.productDetails}>
      <div className={styles.imageContainer}>
        <div className={styles["image-container"]}>
          <img className={styles["prod-images"]} src={params.imageUrl} alt="" />
        </div>
        <div className={styles.imgDesc}>
          <h2>Title : {params.title}</h2>
          <b>PRICE IS : ${params.price}</b>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
