import { useEffect, useState } from "react";

import { Box, Button } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// import pdfWorker from "pdfjs-dist/";

import dataStore from "../../store/DataStore";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs"; ///`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.min.mjs`;

interface PDFViewerProps {
  scale?: number;
  width?: number;
}

const PDFViewer = ({ scale = 1.0, width = 500 }: PDFViewerProps) => {
  const [numPages, setNumPages] = useState<null | number>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);

  const { pdf } = dataStore();

  useEffect(() => {
    const fetchPdf = async () => {
      const response = await fetch(pdf);
      const blob = await response.blob();
      setPdfBlob(blob);
    };

    fetchPdf();
  }, [pdf]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number | null }) => {
    setNumPages(numPages);
  };

  const goToPreviousPage = () => {
    setPageNumber((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prevPage) => Math.min(prevPage + 1, numPages!));
  };

  return (
    <Box
      gap={4}
      display="flex"
      flexDirection="row"
      alignItems="center"
      overflow={"scroll"}
    >
      <Button
        bg={"#f7d1a1"}
        color={"#691c08"}
        boxShadow={"10px 10px 20px #d6b08e, -10px -10px 40px #ffffff"}
        _hover={{ bg: "#e7c299" }}
        onClick={goToPreviousPage}
        disabled={pageNumber <= 1}
        pos={"sticky"}
        top={"50%"}
      >
        <GrLinkPrevious />
      </Button>
      <Box
        border="1px solid #f7d1a1"
        borderRadius="5px"
        boxShadow="10px 10px 40px #d6b08e, -10px -10px 40px #ffffff"
        display="flex"
        padding="5px"
        flexDirection="column"
        _hover={{
          boxShadow: "10px 10px 20px #691c08, -10px -10px 15px #fff", // Softer shadow on hover
        }}
        transition="box-shadow 0.5s"
        height={"100%"}
        overflow={"scroll"}
      >
        <div style={{ flex: 1, overflow: "scroll" }}>
          <Document file={pdfBlob} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} scale={scale} width={width} />
          </Document>
        </div>
      </Box>

      <Button
        bg={"#f7d1a1"}
        color={"#691c08"}
        boxShadow={"10px 10px 20px #d6b08e, -10px -10px 40px #ffffff"}
        _hover={{ bg: "#e7c299" }}
        onClick={goToNextPage}
        disabled={pageNumber >= numPages!}
        pos={"sticky"}
        top={"50%"}
      >
        <GrLinkNext />
      </Button>
    </Box>
  );
};
PDFViewer.propTypes = {
  initialPageNumber: PropTypes.number,
  scale: PropTypes.number,
  width: PropTypes.number,
};

export default PDFViewer;
