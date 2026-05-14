import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const downloadCV = async () => {
  // Create a temporary container for the CV
  const cvContainer = document.createElement('div');
  cvContainer.style.position = 'absolute';
  cvContainer.style.left = '-9999px';
  cvContainer.style.top = '0';
  document.body.appendChild(cvContainer);

  // Dynamically import and render the CV component
  const { default: CVTemplate } = await import('../components/CVTemplate');
  const React = await import('react');
  const ReactDOM = await import('react-dom/client');
  
  const root = ReactDOM.createRoot(cvContainer);
  root.render(React.createElement(CVTemplate));

  // Wait for rendering
  await new Promise(resolve => setTimeout(resolve, 500));

  const cvElement = document.getElementById('cv-template');
  
  if (cvElement) {
    try {
      const canvas = await html2canvas(cvElement, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= 297; // A4 height in mm

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= 297;
      }

      pdf.save('Mihir_Kumar_Panigrahi_CV.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  }

  // Cleanup
  root.unmount();
  document.body.removeChild(cvContainer);
};
