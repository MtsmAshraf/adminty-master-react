import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import ComponentToPrint from "../ComponentToPrint/ComponentToPrint";
import MainBtn from "../MainBtn/MainBtn";

export default function PrintComponent() {
  let componentRef = useRef();

  return (
    <>
      <div>
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