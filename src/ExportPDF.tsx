import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { FileDown } from "lucide-react"

const ExportPDF = () => {
	const captureAndExport = async () => {
		try {
			// Capturar la página completa
			const canvas = await html2canvas(document.documentElement, {
				scale: 2, // Mayor calidad
				useCORS: true,
				logging: false,
				windowWidth: 1920, // Ancho fijo para consistencia
				windowHeight: document.documentElement.scrollHeight,
			})

			const imgData = canvas.toDataURL("image/jpeg", 1.0)
			const pdf = new jsPDF({
				orientation: "portrait",
				unit: "px",
				format: [canvas.width / 2, canvas.height / 2],
			})

			pdf.addImage(imgData, "JPEG", 0, 0, canvas.width / 2, canvas.height / 2)
			pdf.save("vista-portal-alcaldia.pdf")
		} catch (error) {
			console.error("Error al generar el PDF:", error)
		}
	}

	return (
		<button
			onClick={captureAndExport}
			className="export-pdf-button"
			aria-label="Exportar vista a PDF"
		>
			<FileDown size={20} />
			<span>Exportar Vista</span>
		</button>
	)
}

export default ExportPDF
