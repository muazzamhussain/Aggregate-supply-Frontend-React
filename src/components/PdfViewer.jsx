import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Setup PDF worker
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min?url';
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);
  const [scale, setScale] = useState(window.innerWidth < 640 ? 0.96 : 2); // default scale

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth);
      setScale(window.innerWidth < 640 ? 1 : 2); // mobile breakpoint: <640px
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Document
        file="/company-profile.pdf"
        onLoadSuccess={onLoadSuccess}
        loading={<p className="text-center">Loading PDF...</p>}
      >
        {Array.from(new Array(numPages), (_, i) => (
          <Page
            key={`page_${i + 1}`}
            pageNumber={i + 1}
            scale={scale}
            width={containerWidth < 640 ? containerWidth * 0.95 : undefined} // constrain width on mobile
          />
        ))}
      </Document>
    </div>
  );
};

export default PdfViewer;
