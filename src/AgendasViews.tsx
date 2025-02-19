import React, { useState, useEffect } from "react"
import {
	ChevronLeft,
	Share2,
	Facebook,
	Twitter,
	Linkedin,
	Link,
	Calendar,
	Users,
	Clock,
	MapPin,
} from "lucide-react"
import ExportPDF from "./ExportPDF"

interface AgendasViewProps {
	onBack: () => void
}

const AgendasView: React.FC<AgendasViewProps> = ({ onBack }) => {
	const [showCopiedMessage, setShowCopiedMessage] = useState(false)
	const [activeMenu, setActiveMenu] = useState("")

	useEffect(() => {
		// Inicializar sin menú activo
		setActiveMenu("")
	}, [])

	const handleShare = (
		platform: "facebook" | "twitter" | "linkedin" | "copy"
	) => {
		const url = window.location.href
		const text = "Mira las Agendas Abiertas de la Alcaldía de Bogotá"

		const shareUrls = {
			facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
				url
			)}`,
			twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
				url
			)}&text=${encodeURIComponent(text)}`,
			linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
				url
			)}`,
		}

		if (platform === "copy") {
			navigator.clipboard.writeText(url).then(() => {
				setShowCopiedMessage(true)
				setTimeout(() => setShowCopiedMessage(false), 2000)
			})
		} else {
			window.open(shareUrls[platform], "_blank")
		}
	}

	// Mock data for upcoming meetings
	const upcomingMeetings = [
		{
			title: "Consejo de Gobierno",
			date: "20 Feb 2025",
			time: "09:00 AM",
			location: "Palacio Liévano",
			participants: ["Alcalde Mayor", "Secretarios de Despacho"],
			description:
				"Reunión mensual del Consejo de Gobierno para revisar avances y proyectos prioritarios.",
		},
		{
			title: "Mesa de Trabajo - Movilidad",
			date: "21 Feb 2025",
			time: "02:00 PM",
			location: "Secretaría de Movilidad",
			participants: ["Secretario de Movilidad", "Directores de Área"],
			description:
				"Análisis de indicadores de movilidad y planificación de nuevas estrategias.",
		},
		{
			title: "Rendición de Cuentas",
			date: "22 Feb 2025",
			time: "10:00 AM",
			location: "Auditorio Principal",
			participants: ["Funcionarios", "Ciudadanía"],
			description:
				"Presentación de resultados y avances de la gestión del primer trimestre.",
		},
	]

	return (
		<div className="min-h-screen flex flex-col">
			{/* Header con logo gov.co */}
			<div className="top-bar">
				<div className="top-bar-content">
					<img
						src="/images/go-co.png"
						alt="Logo GOV.CO"
						className="gov-co-logo"
					/>
				</div>
			</div>

			{/* Header Principal con Navegación */}
			<header className="main-header">
				<div className="header-content">
					<div className="header-logo">
						<img src="/images/logo_header.svg" alt="Logo GAB" />
					</div>
					<nav className="main-nav">
						<a
							href="/sobre"
							className={`nav-item ${activeMenu === "sobre" ? "active" : ""}`}
							onClick={(e) => {
								e.preventDefault()
								window.location.href = "/sobre"
							}}
						>
							Sobre GAB
						</a>
						<a
							href="/"
							className={`nav-item ${
								activeMenu === "transparencia" ? "active" : ""
							}`}
							onClick={(e) => {
								e.preventDefault()
								window.location.href = "/"
							}}
						>
							Transparencia
						</a>
						<a
							href="/participacion"
							className={`nav-item ${
								activeMenu === "participacion" ? "active" : ""
							}`}
							onClick={(e) => {
								e.preventDefault()
								window.location.href = "/participacion"
							}}
						>
							Participación
						</a>
						<a
							href="/colaboracion"
							className={`nav-item ${
								activeMenu === "colaboracion" ? "active" : ""
							}`}
							onClick={(e) => {
								e.preventDefault()
								window.location.href = "/colaboracion"
							}}
						>
							Colaboración
						</a>
						<a
							href="/supercade"
							className={`nav-item special ${
								activeMenu === "supercade" ? "active" : ""
							}`}
							onClick={(e) => {
								e.preventDefault()
								window.location.href = "/supercade"
							}}
						>
							SuperCADE Virtual
						</a>
					</nav>
				</div>
			</header>

			{/* Hero section */}
			<div className="agendas-hero">
				<div className="max-w-7xl mx-auto px-4">
					<button onClick={onBack} className="back-button">
						<ChevronLeft size={20} />
						<span>Volver</span>
					</button>
					<h1 className="text-4xl font-bold text-white mt-4">
						Agendas Abiertas
					</h1>
					<p className="text-white/90 text-xl mt-4 max-w-2xl">
						Transparencia en la gestión pública: Conoce las reuniones y eventos
						de los funcionarios de la Alcaldía Mayor de Bogotá
					</p>
				</div>
			</div>

			{/* Main content */}
			<main className="flex-1 max-w-7xl mx-auto px-4 py-8">
				{/* Stats Section */}
				<div className="stats-grid">
					<div className="stat-card">
						<Calendar className="stat-icon" />
						<div className="stat-content">
							<h3>Reuniones Programadas</h3>
							<p className="stat-number">156</p>
						</div>
					</div>
					<div className="stat-card">
						<Users className="stat-icon" />
						<div className="stat-content">
							<h3>Funcionarios Activos</h3>
							<p className="stat-number">234</p>
						</div>
					</div>
					<div className="stat-card">
						<Clock className="stat-icon" />
						<div className="stat-content">
							<h3>Horas de Reunión</h3>
							<p className="stat-number">892</p>
						</div>
					</div>
				</div>

				{/* Upcoming Meetings Section */}
				<section className="meetings-section">
					<h2 className="section-title">Próximas Reuniones</h2>
					<div className="meetings-grid">
						{upcomingMeetings.map((meeting, index) => (
							<div key={index} className="meeting-card">
								<div className="meeting-header">
									<Calendar size={40} className="meeting-icon" />
									<h3 className="meeting-title">{meeting.title}</h3>
								</div>
								<div className="meeting-details">
									<p className="meeting-date">
										<Clock size={16} />
										{meeting.date} - {meeting.time}
									</p>
									<p className="meeting-location">
										<MapPin size={16} />
										{meeting.location}
									</p>
									<p className="meeting-description">{meeting.description}</p>
									<div className="meeting-participants">
										<Users size={16} />
										<span>{meeting.participants.join(", ")}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Share Section */}
				<div className="share-container mt-8">
					<h2 className="share-title">
						<Share2 size={20} />
						Compartir Agendas
					</h2>
					<div className="social-share-container">
						<button
							className="share-button"
							onClick={() => handleShare("facebook")}
							aria-label="Compartir en Facebook"
						>
							<Facebook size={24} />
						</button>
						<button
							className="share-button"
							onClick={() => handleShare("twitter")}
							aria-label="Compartir en Twitter"
						>
							<Twitter size={24} />
						</button>
						<button
							className="share-button"
							onClick={() => handleShare("linkedin")}
							aria-label="Compartir en LinkedIn"
						>
							<Linkedin size={24} />
						</button>
						<button
							className="share-button"
							onClick={() => handleShare("copy")}
							aria-label="Copiar enlace"
						>
							<Link size={24} />
						</button>
					</div>
					{showCopiedMessage && (
						<p className="copy-feedback">¡Enlace copiado!</p>
					)}
				</div>
			</main>

			{/* Footer */}
			<footer className="footer">
				<div className="footer-content">
					<div className="footer-section">
						<h3 className="footer-title">Contacto</h3>
						<div className="contact-info">
							<p>
								<strong>Línea única:</strong> 195
							</p>
							<p>
								<strong>Dirección:</strong> Carrera 8 # 10-65
							</p>
							<p>
								<strong>Horario:</strong> Lun - Vie 7:00 am - 4:30 pm
							</p>
						</div>
					</div>

					<div className="footer-section">
						<h3 className="footer-title">Enlaces rápidos</h3>
						<ul className="footer-links">
							<li>
								<span className="link-icon">📋</span> Trámites y servicios
							</li>
							<li>
								<span className="link-icon">📬</span> PQRS
							</li>
							<li>
								<span className="link-icon">📊</span> Transparencia
							</li>
							<li>
								<span className="link-icon">🤝</span> Participa
							</li>
						</ul>
					</div>

					<div className="footer-section">
						<h3 className="footer-title">Síguenos</h3>
						<div className="social-icons">
							<a
								href="#"
								className="social-icon facebook"
								aria-label="Facebook"
							>
								<Facebook />
							</a>
							<a href="#" className="social-icon twitter" aria-label="Twitter">
								<Twitter />
							</a>
							<a
								href="#"
								className="social-icon instagram"
								aria-label="Instagram"
							>
								<Linkedin />
							</a>
						</div>
					</div>
				</div>

				<div className="footer-bottom">
					<p>
						© 2025 Alcaldía Mayor de Bogotá D.C. - Todos los derechos reservados
					</p>
					<div className="footer-badges">
						<span className="footer-badge">🔒 Sitio Seguro</span>
						<span className="footer-badge">🌐 Gov.co</span>
					</div>
				</div>
			</footer>
			<ExportPDF />
		</div>
	)
}

export default AgendasView
