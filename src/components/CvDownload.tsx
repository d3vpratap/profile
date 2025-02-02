import React from "react";
import { Download } from "lucide-react";

const CvDownload = () => {
  return (
    <a
      href="https://drive.google.com/uc?export=download&id=1Hk0NnejZ_G9B1sAbf96I9Ic1X15-S-B5" // Direct download link
      className="fixed bottom-2 right-2 bg-blue-500 p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
    >
      CV
      <Download className="w-8 h-8 p-1 text-white" />
    </a>
  );
};

export default CvDownload;
