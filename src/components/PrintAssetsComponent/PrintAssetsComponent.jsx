import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import MainBtn from "../MainBtn/MainBtn";
import styles from "./print-assets-component.module.css"
import ComponentToPrintAssets from "../ComponentToPrintAssets/ComponentToPrintAssets";
export default function PrintAssetsComponent() {
  let componentRef = useRef();

  return (
    <>
      <div className={styles.printAssetsComponent}>
        {/* button to trigger printing of target component */}
        <ReactToPrint
          trigger={() => <button>المرفقات</button>}
          content={() => componentRef}
        />

        {/* component to be printed */}
        <ComponentToPrintAssets ref={(el) => (componentRef = el)} />
      </div>
    </>
  );
}