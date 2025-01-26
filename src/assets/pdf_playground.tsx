import React, { useState, useEffect } from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PdfViewer: React.FC = () => {
  const [pdfFile, setPdfFile] = useState<Blob | null>(null);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        const url = "https://www.ethiopianorthodox.org/amharic/holybooks/readings/meskeremgitaswe.pdf"; // Replace with actual URL
        const response = await fetch(url);
        const data = await response.blob();
        setPdfFile(data);
      } catch (error) {
        console.error("Error loading PDF:", error);
      }
    };

    loadPdf();
  }, []);

  return (
    <div style={{ height: "600px" }}>
      {pdfFile && <Viewer file={pdfFile} plugins={[defaultLayoutPlugin]} />}
    </div>
  );
};

export default PdfViewer;
