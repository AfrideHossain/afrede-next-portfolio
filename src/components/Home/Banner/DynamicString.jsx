"use client";

import dynamic from "next/dynamic";

// import VariousWorkingFields from "./VariousWorkingFields";

const VariousWorkingFields = dynamic(() => import("./VariousWorkingFields"), {
  ssr: false,
});

export default function DynamicString() {
  return (
    <>
      <VariousWorkingFields />
    </>
  );
}
