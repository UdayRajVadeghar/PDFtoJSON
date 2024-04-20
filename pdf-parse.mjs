import PDFParser from "pdf2json";
const pdfParser = new PDFParser(this, 1);
const filename = "./sample.pdf";
pdfParser.on("pdfParser_dataError", (errData) =>
  console.error(errData.parserError)
);
pdfParser.on("pdfParser_dataReady", (pdfData) => {
  console.log(pdfData);
});
pdfParser.loadPDF(filename);

pdfParser.on("pdfParser_dataReady", (pdfData) => {
  console.log({ textContent: pdfParser.getRawTextContent() });
});