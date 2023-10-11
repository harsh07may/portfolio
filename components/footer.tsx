import React from "react";

const name = process.env.NAME;

export default function Footer() {
  return (
    <footer className="px-4 mb-10 text-center text-gray-500">
      <small className="block mb-2 text-xs">
        &copy; 2023 Harsh. All rights reserved.
      </small>
      <p className="text-xs">
        This website was built with React, Next.js, TypeScript, Tailwind CSS &
        Framer Motion.
      </p>
    </footer>
  );
}
