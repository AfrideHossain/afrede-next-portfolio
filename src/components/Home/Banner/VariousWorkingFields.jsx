"use client";

// import { Typewriter } from "react-simple-typewriter";
import { Typewriter } from "react-simple-typewriter";

export default function VariousWorkingFields() {
  return (
    <div>
      <Typewriter
        words={[
          "Full Stack",
          "MERN Stack",
          "NextJS",
          "ReactJS",
          "Frontend",
          "Backend",
        ]}
        cursor
        loop
        cursorStyle="_"
        cursorColor="#0ea5e9"
      />
    </div>
  );
}
