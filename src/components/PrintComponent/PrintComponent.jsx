import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import MainBtn from "../MainBtn/MainBtn";
import styles from "./print-component.module.css"
import ComponentToPrint from "../ComponentToPrint/ComponentToPrint";
export default function PrintComponent() {
  let componentRef = useRef();

  return (
    <>
      <div className={styles.printComponent}>
        {/* button to trigger printing of target component */}
        <ReactToPrint
          trigger={() => <button>معلومات الشحنة</button>}
          content={() => componentRef}
        />

        {/* component to be printed */}
        <ComponentToPrint ref={(el) => (componentRef = el)} />
      </div>
    </>
  );
}