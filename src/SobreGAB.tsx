import React, { useState, useEffect } from "react"
import { ChevronRight } from "lucide-react"
import ExportPDF from "./ExportPDF"

const SobreGAB = () => {
	const [activeMenu, setActiveMenu] = useState("sobre")

	useEffect(() => {
		setActiveMenu("sobre")
	}, [])

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

			{/* Hero section específico para Sobre GAB */}
			<div className="bg-gradient-to-r from-[#e8233f] to-[#cc1e37] relative">
				<div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 relative z-10">
					<h1 className="text-4xl sm:text-5xl font-bold text-white text-center mb-6">
						Sobre GAB
					</h1>
					<p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
						Conoce más sobre el Gobierno Abierto de Bogotá y nuestro compromiso
						con la transparencia, participación y colaboración ciudadana.
					</p>
				</div>
				<div className="absolute inset-0 bg-black/10 z-0"></div>
			</div>

			{/* Contenido principal */}
			<main className="flex-1 bg-gradient-to-b from-white to-gray-50">
				<div className="max-w-4xl mx-auto px-4 py-16">
					<div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-8">
							¿Qué es Gobierno Abierto?
						</h2>

						<div className="prose prose-lg max-w-none">
							<p className="mb-6 text-gray-700 leading-relaxed">
								El Gobierno Abierto es un catalizador para impulsar la
								democracia, fortalecer la confianza en el sector público e
								impulsar el desarrollo inclusivo de los gobiernos locales.
								Consiste en una cultura de gobernanza que promueve los
								principios de transparencia, integridad, rendición de cuentas,
								participación, colaboración y servicios a la ciudadanía.
							</p>

							<p className="mb-6 text-gray-700 leading-relaxed">
								El Estado Abierto es un gobierno en el cual los diferentes
								niveles y ramas del poder promueven los principios de gobierno
								abierto y promueve la colaboración y el intercambio de buenas
								prácticas, impulsando el acceso a la información en formatos
								accesibles y reutilizables, y que impulsa la participación de la
								ciudadanía en la formulación de políticas públicas.
							</p>

							<p className="mb-10 text-gray-700 leading-relaxed">
								Desde la Alcaldía de Bogotá buscamos implementar estrategias de
								gobierno abierto en las cuales haya coordinación entre las
								distintas entidades del distrito y se fortalezca la relación
								entre el ciudadano y la administración local para lograr
								reformas que alcancen el mayor impacto para la ciudadanía.
							</p>

							<h3 className="text-2xl font-bold text-gray-900 mb-6">
								Los Cuatro Pilares del Modelo de Gobierno Abierto
							</h3>

							<div className="grid gap-6">
								{/* Transparencia */}
								<div className="bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl p-6 transition-all hover:transform hover:-translate-y-1">
									<div className="flex items-start gap-4">
										<div className="bg-blue-500 rounded-lg p-3 text-white">
											<svg
												className="w-6 h-6"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
												/>
											</svg>
										</div>
										<div>
											<h4 className="text-xl font-semibold text-gray-900 mb-2">
												Transparencia
											</h4>
											<p className="text-gray-700">
												Acá podrás conocer y vigilar la gestión del gobierno
												distrital y asegurar que la información pública sea
												completa, aprovechable, e incluyente. Es una forma de
												que rindamos cuentas de manera permanente para que
												puedas emitir alertas y hacer control ciudadano.
											</p>
											<a
												href="/"
												className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800"
											>
												Ir a Transparencia{" "}
												<ChevronRight className="ml-1 w-4 h-4" />
											</a>
										</div>
									</div>
								</div>

								{/* Colaboración */}
								<div className="bg-gradient-to-r from-yellow-50 to-yellow-100/50 rounded-xl p-6 transition-all hover:transform hover:-translate-y-1">
									<div className="flex items-start gap-4">
										<div className="bg-yellow-500 rounded-lg p-3 text-white">
											<svg
												className="w-6 h-6"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
												/>
											</svg>
										</div>
										<div>
											<h4 className="text-xl font-semibold text-gray-900 mb-2">
												Colaboración
											</h4>
											<p className="text-gray-700">
												En esta sección encontrarás cómo tus ideas se pueden
												convertir en proyectos innovadores para la ciudad.
											</p>
											<a
												href="/colaboracion"
												className="inline-flex items-center mt-4 text-yellow-600 hover:text-yellow-800"
											>
												Ir a Colaboración{" "}
												<ChevronRight className="ml-1 w-4 h-4" />
											</a>
										</div>
									</div>
								</div>

								{/* Participación */}
								<div className="bg-gradient-to-r from-green-50 to-green-100/50 rounded-xl p-6 transition-all hover:transform hover:-translate-y-1">
									<div className="flex items-start gap-4">
										<div className="bg-green-500 rounded-lg p-3 text-white">
											<svg
												className="w-6 h-6"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
												/>
											</svg>
										</div>
										<div>
											<h4 className="text-xl font-semibold text-gray-900 mb-2">
												Participación
											</h4>
											<p className="text-gray-700">
												¡Llegó la era de la democracia participativa directa!
												Queremos tomar decisiones juntos, a través de
												herramientas como presupuestos participativos y
												proyectos de las alcaldías locales.
											</p>
											<a
												href="/participacion"
												className="inline-flex items-center mt-4 text-green-600 hover:text-green-800"
											>
												Ir a Participación{" "}
												<ChevronRight className="ml-1 w-4 h-4" />
											</a>
										</div>
									</div>
								</div>

								{/* Servicios */}
								<div className="bg-gradient-to-r from-red-50 to-red-100/50 rounded-xl p-6 transition-all hover:transform hover:-translate-y-1">
									<div className="flex items-start gap-4">
										<div className="bg-red-500 rounded-lg p-3 text-white">
											<svg
												className="w-6 h-6"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
												/>
											</svg>
										</div>
										<div>
											<h4 className="text-xl font-semibold text-gray-900 mb-2">
												Servicios
											</h4>
											<p className="text-gray-700">
												Bogotá busca brindarte servicios y trámites rápidos,
												fáciles y efectivos desde un solo portal.
											</p>
											<a
												href="/supercade"
												className="inline-flex items-center mt-4 text-red-600 hover:text-red-800"
											>
												Ir a Servicios <ChevronRight className="ml-1 w-4 h-4" />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
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

export default SobreGAB
