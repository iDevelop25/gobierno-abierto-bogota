import React, { useState, useEffect } from "react"
import {
	Star,
	ChevronLeft,
	Share2,
	Facebook,
	Twitter,
	Linkedin,
	Link,
} from "lucide-react"
import { CategoryDetailProps } from "./types"
import "./index.css"
import ExportPDF from "./ExportPDF"

type SharePlatform = "facebook" | "twitter" | "linkedin" | "copy"

const CategoryDetail: React.FC<CategoryDetailProps> = ({
	category,
	onBack,
}) => {
	const [rating, setRating] = useState(0)
	const [hover, setHover] = useState(0)
	const [showCopiedMessage, setShowCopiedMessage] = useState(false)
	const [activeMenu, setActiveMenu] = useState("")

	useEffect(() => {
		// No establecemos ningún ítem activo al iniciar
		setActiveMenu("")
	}, [])

	const handleShare = (platform: SharePlatform) => {
		const url = window.location.href
		const text = `Mira este tablero de ${category.title} en la Alcaldía de Bogotá`

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
								const baseUrl = window.location.origin
								window.location.href = `${baseUrl}/sobre`
							}}
						>
							Sobre GAB
						</a>
						<a
							href="/transparencia"
							className={`nav-item ${
								activeMenu === "transparencia" ? "active" : ""
							}`}
							onClick={(e) => {
								e.preventDefault()
								const baseUrl = window.location.origin
								window.location.href = `${baseUrl}/`
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
								const baseUrl = window.location.origin
								window.location.href = `${baseUrl}/participacion`
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
								const baseUrl = window.location.origin
								window.location.href = `${baseUrl}/colaboracion`
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
								const baseUrl = window.location.origin
								window.location.href = `${baseUrl}/supercade`
							}}
						>
							SuperCADE Virtual
						</a>
					</nav>
				</div>
			</header>

			{/* Hero section con gradiente */}
			<div className="category-detail-hero">
				<div className="max-w-7xl mx-auto px-4">
					<button onClick={onBack} className="back-button">
						<ChevronLeft size={20} />
						<span>Volver</span>
					</button>
					<h1 className="text-3xl font-bold text-white mt-4">
						{category.title}
					</h1>
				</div>
			</div>

			{/* Contenido principal */}
			<main className="flex-1 max-w-7xl mx-auto px-4 py-8">
				{/* Contenedor del tablero Power BI */}
				<div className="dashboard-container">
					<div className="relative w-full">
						<iframe
							title="Power BI Dashboard"
							className="dashboard-iframe"
							src="https://app.powerbi.com/view?r=eyJrIjoiYzI5NzNmZGYtOGQ1NC00N2I0LWJlMTgtYzIzM2MzZmQ5YmMxIiwidCI6ImYzNTFhN2NiLWY5NGEtNGRmMC05NjI3LWFlMDMwY2NlZjdjNCIsImMiOjR9"
							allowFullScreen
						/>
					</div>
				</div>

				{/* Contenedores de Rating y Compartir */}
				<div className="actions-container">
					{/* Sistema de calificación */}
					<div className="rating-container">
						<h2 className="rating-title">¿Qué te pareció este tablero?</h2>
						<div className="stars-container">
							{[1, 2, 3, 4, 5].map((star) => (
								<button
									key={star}
									className="star-button"
									onClick={() => setRating(star)}
									onMouseEnter={() => setHover(star)}
									onMouseLeave={() => setHover(0)}
									aria-label={`Calificar con ${star} estrellas`}
								>
									<Star
										size={32}
										className={`star-icon ${
											star <= (hover || rating) ? "filled" : "empty"
										}`}
									/>
								</button>
							))}
						</div>
						{rating > 0 && (
							<p className="rating-feedback">
								¡Gracias por tu calificación de {rating} estrella
								{rating !== 1 ? "s" : ""}!
							</p>
						)}
					</div>

					{/* Bloque de compartir */}
					<div className="share-container">
						<h2 className="share-title">
							<Share2 size={20} />
							Compartir tablero
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
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
								</svg>
							</a>
							<a href="#" className="social-icon twitter" aria-label="Twitter">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
								</svg>
							</a>
							<a
								href="#"
								className="social-icon instagram"
								aria-label="Instagram"
							>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
									<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
									<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
								</svg>
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

export default CategoryDetail
