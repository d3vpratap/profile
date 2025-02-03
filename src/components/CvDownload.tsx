import React from "react";
import { Download } from "lucide-react";

const CvDownload = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1vVy0bP3pmZRc_SrPzJ_3ht3iSy9eGyst/view?usp=sharing" // Direct download link
      className="fixed bottom-2 right-2 bg-blue-500 p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
    >
      CV
      <Download className="w-8 h-8 p-1 text-white" />
    </a>
  );
};

export default CvDownload;
