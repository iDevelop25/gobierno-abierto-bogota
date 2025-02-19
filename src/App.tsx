import { useState, useEffect } from "react"
import { Search, ChevronLeft, ChevronRight, X } from "lucide-react"
import CategoryDetail from "./CategoryDetail"

import { Category } from "./types"
import ExportPDF from "./ExportPDF"
import AgendasView from "./AgendasViews"
import HeroSlider from "./HeroSlider"

function App() {
	const [sliderPosition1, setSliderPosition1] = useState(0)
	const [sliderPosition2, setSliderPosition2] = useState(0)
	const [searchValue, setSearchValue] = useState("")
	const [isSearchSticky, setIsSearchSticky] = useState(false)
	const [selectedCard, setSelectedCard] = useState<number | null>(null)
	const [showSearchSuggestions, setShowSearchSuggestions] = useState(false)
	const [selectedCategory, setSelectedCategory] = useState<Category | null>(
		null
	)
	const [showAgendas, setShowAgendas] = useState(false)
	const [activeMenu, setActiveMenu] = useState("transparencia")

	// Efecto para el scroll y sticky search
	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY
			setIsSearchSticky(offset > 300)
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	useEffect(() => {
		const path = window.location.pathname.toLowerCase()
		if (path === "/" || path.includes("transparencia")) {
			setActiveMenu("transparencia")
		} else if (path.includes("sobre")) {
			setActiveMenu("sobre")
		} else if (path.includes("participacion")) {
			setActiveMenu("participacion")
		} else if (path.includes("colaboracion")) {
			setActiveMenu("colaboracion")
		} else if (path.includes("supercade")) {
			setActiveMenu("supercade")
		}
	}, [])

	// Datos de las cards informativas
	const infoCards = [
		{
			title: "Trámites",
			description: "Gestiona tus trámites en línea de manera fácil y segura",
			icon: "📝",
			count: "2.5k",
			tag: "Más solicitado",
		},
		{
			title: "Servicios",
			description: "Accede a todos los servicios de la ciudad",
			icon: "🏢",
			count: "180",
			tag: "Actualizado",
		},
		{
			title: "Noticias",
			description: "Mantente informado sobre las últimas novedades",
			icon: "📰",
			count: "45",
			tag: "Nuevo",
		},
		{
			title: "Participación",
			description: "Participa en las decisiones de tu ciudad",
			icon: "🤝",
			count: "12",
			tag: "En curso",
		},
	]

	// Datos de las categorías con tipos correctos
	const categoryRow1: Category[] = [
		{
			title: "Movilidad",
			icon: "🚗",
			gradient: "from-[#3366cc]/10 to-[#4d7de0]/10",
			iconColor: "text-[#3366cc]",
			count: 28,
		},
		{
			title: "Educación",
			icon: "📚",
			gradient: "from-[#fcbb56]/10 to-[#fdc977]/10",
			iconColor: "text-[#fcbb56]",
			count: 45,
		},
		{
			title: "Salud",
			icon: "🏥",
			gradient: "from-[#e8233f]/10 to-[#ec4962]/10",
			iconColor: "text-[#e8233f]",
			count: 32,
		},
		{
			title: "Cultura",
			icon: "🎭",
			gradient: "from-[#3366cc]/10 to-[#4d7de0]/10",
			iconColor: "text-[#3366cc]",
			count: 19,
		},
		{
			title: "Ambiente",
			icon: "🌳",
			gradient: "from-[#fcbb56]/10 to-[#fdc977]/10",
			iconColor: "text-[#fcbb56]",
			count: 23,
		},
	]

	const categoryRow2: Category[] = [
		{
			title: "Seguridad",
			icon: "🚔",
			gradient: "from-[#e8233f]/10 to-[#ec4962]/10",
			iconColor: "text-[#e8233f]",
			count: 15,
		},
		{
			title: "Deporte",
			icon: "⚽",
			gradient: "from-[#3366cc]/10 to-[#4d7de0]/10",
			iconColor: "text-[#3366cc]",
			count: 27,
		},
		{
			title: "Vivienda",
			icon: "🏠",
			gradient: "from-[#fcbb56]/10 to-[#fdc977]/10",
			iconColor: "text-[#fcbb56]",
			count: 34,
		},
		{
			title: "Empleo",
			icon: "💼",
			gradient: "from-[#e8233f]/10 to-[#ec4962]/10",
			iconColor: "text-[#e8233f]",
			count: 41,
		},
		{
			title: "Turismo",
			icon: "🏛️",
			gradient: "from-[#3366cc]/10 to-[#4d7de0]/10",
			iconColor: "text-[#3366cc]",
			count: 16,
		},
	]

	// Manejadores de eventos tipados
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
		setShowSearchSuggestions(e.target.value.length > 0)
	}

	const clearSearch = () => {
		setSearchValue("")
		setShowSearchSuggestions(false)
	}

	const handleSlide = (direction: "left" | "right", row: 1 | 2) => {
		const setPosition = row === 1 ? setSliderPosition1 : setSliderPosition2
		const currentPosition = row === 1 ? sliderPosition1 : sliderPosition2
		const cards = row === 1 ? categoryRow1 : categoryRow2

		if (direction === "left") {
			setPosition(Math.max(0, currentPosition - 1))
		} else {
			setPosition(Math.min(cards.length - 4, currentPosition + 1))
		}
	}

	const handleCategoryClick = (category: Category) => {
		setSelectedCategory(category)
	}

	const handleBackToHome = () => {
		setSelectedCategory(null)
	}

	// Si hay una categoría seleccionada, mostrar la vista detallada
	if (selectedCategory) {
		return (
			<CategoryDetail category={selectedCategory} onBack={handleBackToHome} />
		)
	}

	// Si se está mostrando la vista de agendas
	if (showAgendas) {
		return <AgendasView onBack={() => setShowAgendas(false)} />
	}

	return (
		<div className="app-container">
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

			{/* Header Principal */}
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
								setActiveMenu("sobre")
								// Aquí rediriges manualmente o actualizas el contenido
								window.history.pushState(null, "", "/sobre")
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
								setActiveMenu("transparencia")
								// Reinicia vistas si es necesario
								window.history.pushState(null, "", "/transparencia")
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
								setActiveMenu("participacion")
								window.history.pushState(null, "", "/participacion")
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
								setActiveMenu("colaboracion")
								window.history.pushState(null, "", "/colaboracion")
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
								setActiveMenu("supercade")
								window.history.pushState(null, "", "/supercade")
							}}
						>
							SuperCADE Virtual
						</a>
					</nav>
				</div>
			</header>

			{/* Hero Section con Buscador */}
			<div className="hero-section">
				<HeroSlider />
				<div className="hero-content">
					<h1 className="hero-title">Alcaldía de Bogotá</h1>
					<h2 className="hero-subtitle">Portal de Servicios Ciudadanos</h2>

					{/* Buscador Principal */}
					<div className="search-container main-search">
						<Search className="search-icon" />
						<input
							type="text"
							value={searchValue}
							onChange={handleSearch}
							placeholder="¿Qué trámite o servicio necesitas?"
							className="search-input"
						/>
						{searchValue && (
							<button onClick={clearSearch} className="clear-search">
								<X size={16} />
							</button>
						)}
					</div>

					{/* Sugerencias de búsqueda */}
					{showSearchSuggestions && (
						<div className="search-suggestions">
							<div className="suggestions-group">
								<h3>Trámites populares</h3>
								<ul>
									<li>Certificado de residencia</li>
									<li>Impuesto predial</li>
									<li>Licencia de construcción</li>
								</ul>
							</div>
						</div>
					)}
				</div>
			</div>

			{/* Buscador Sticky */}
			<div className={`sticky-search ${isSearchSticky ? "show" : ""}`}>
				<div className="sticky-search-container">
					<Search className="search-icon" />
					<input
						type="text"
						value={searchValue}
						onChange={handleSearch}
						placeholder="Buscar trámites y servicios..."
						className="search-input"
					/>
					{searchValue && (
						<button onClick={clearSearch} className="clear-search">
							<X size={16} />
						</button>
					)}
				</div>
			</div>

			{/* Cards Informativas */}
			<div className="info-cards-container">
				{infoCards.map((card, index) => (
					<div
						key={index}
						className="info-card"
						onClick={() =>
							setSelectedCard(selectedCard === index ? null : index)
						}
					>
						<div className="info-card-tag">{card.tag}</div>
						<div className="info-card-icon">{card.icon}</div>
						<h3 className="info-card-title">{card.title}</h3>
						<p className="info-card-description">{card.description}</p>
						<div className="info-card-count">
							<span className="count-number">{card.count}</span>
							<span className="count-label">disponibles</span>
						</div>
					</div>
				))}
			</div>

			{/* Sección de Categorías */}
			<div className="categories-section">
				<h2 className="categories-title">
					Explora por categorías
					<span className="categories-subtitle">
						Encuentra lo que necesitas de manera rápida
					</span>
				</h2>

				{/* Primera fila de categorías */}
				<div className="category-row">
					{sliderPosition1 > 0 && (
						<button
							onClick={() => handleSlide("left", 1)}
							className="slider-button slider-button-left"
							aria-label="Deslizar a la izquierda"
						>
							<ChevronLeft className="slider-icon" />
						</button>
					)}

					<div className="categories-slider">
						{categoryRow1
							.slice(sliderPosition1, sliderPosition1 + 4)
							.map((category, index) => (
								<div
									key={index}
									className={`category-card bg-gradient-to-br ${category.gradient} cursor-pointer`}
									onClick={() => handleCategoryClick(category)}
								>
									<span className={`category-icon ${category.iconColor}`}>
										{category.icon}
									</span>
									<div className="category-info">
										<span className="category-title">{category.title}</span>
										<span className="category-count">
											{category.count} servicios
										</span>
									</div>
								</div>
							))}
					</div>

					{sliderPosition1 < categoryRow1.length - 4 && (
						<button
							onClick={() => handleSlide("right", 1)}
							className="slider-button slider-button-right"
							aria-label="Deslizar a la derecha"
						>
							<ChevronRight className="slider-icon" />
						</button>
					)}
				</div>

				{/* Segunda fila de categorías */}
				<div className="category-row">
					{sliderPosition2 > 0 && (
						<button
							onClick={() => handleSlide("left", 2)}
							className="slider-button slider-button-left"
							aria-label="Deslizar a la izquierda"
						>
							<ChevronLeft className="slider-icon" />
						</button>
					)}

					<div className="categories-slider">
						{categoryRow2
							.slice(sliderPosition2, sliderPosition2 + 4)
							.map((category, index) => (
								<div
									key={index}
									className={`category-card bg-gradient-to-br ${category.gradient} cursor-pointer`}
									onClick={() => handleCategoryClick(category)}
								>
									<span className={`category-icon ${category.iconColor}`}>
										{category.icon}
									</span>
									<div className="category-info">
										<span className="category-title">{category.title}</span>
										<span className="category-count">
											{category.count} servicios
										</span>
									</div>
								</div>
							))}
					</div>

					{sliderPosition2 < categoryRow2.length - 4 && (
						<button
							onClick={() => handleSlide("right", 2)}
							className="slider-button slider-button-right"
							aria-label="Deslizar a la derecha"
						>
							<ChevronRight className="slider-icon" />
						</button>
					)}
				</div>
			</div>

			{/* Sección de Agendas Abiertas */}
			<div className="agendas-section">
				<div className="agendas-container">
					<div className="agendas-content">
						<div className="agendas-text">
							<h2 className="agendas-title">Agendas Abiertas</h2>
							<p className="agendas-description">
								Conoce las reuniones, eventos y compromisos de los funcionarios
								públicos de la Alcaldía Mayor de Bogotá. Esta iniciativa de
								transparencia permite a la ciudadanía hacer seguimiento a la
								gestión pública y fortalecer la rendición de cuentas.
							</p>
							<button
								className="agendas-button"
								onClick={() => setShowAgendas(true)}
							>
								Ver Agendas Abiertas
							</button>
						</div>
						<div className="agendas-illustration">
							<div className="illustration-calendar">
								<div className="calendar-header">
									<span>Febrero 2025</span>
								</div>
								<div className="calendar-grid">
									{[
										{
											date: "15",
											event: "Consejo de Gobierno",
											type: "important",
										},
										{
											date: "16",
											event: "Reunión de Movilidad",
											type: "regular",
										},
										{ date: "17", event: "Audiencia Pública", type: "special" },
										{ date: "18", event: "Mesa de Trabajo", type: "regular" },
										{
											date: "19",
											event: "Rendición de Cuentas",
											type: "important",
										},
										{
											date: "20",
											event: "Comité de Transparencia",
											type: "special",
										},
										{ date: "21", event: "Sesión Ordinaria", type: "regular" },
										{
											date: "22",
											event: "Encuentro Ciudadano",
											type: "special",
										},
										{ date: "23", event: "Junta Directiva", type: "important" },
									].map((item, index) => (
										<div key={index} className={`calendar-item ${item.type}`}>
											<span className="calendar-date">{item.date}</span>
											<span className="calendar-event-title">{item.event}</span>
											<div className="calendar-event"></div>
											<div className="calendar-hover-info">
												<p>Ver detalles del evento</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

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

			{/* FAB Chatico */}
			<div className="fab-chatico">
				<div className="fab-content">
					<h3 className="fab-title">Conoce Chatico</h3>
					<p className="fab-description">
						Te invitamos a conocer a nuestro agente virtual de Gobierno Abierto.
						Sisbén, educación, servicios para población con discapacidad y
						participación hacen parte de nuestra oferta. Cuéntanos qué más te
						gustaría saber.
					</p>
					<a
						href="https://api.whatsapp.com/send?phone=+573160231524&text=Hola,%20quiero%20hablar%20con%20Chatico"
						className="fab-button"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span>Chatear</span>
					</a>
				</div>
				<div className="fab-bubble">
					<img src="/images/bubble.png" alt="Chatico" />
				</div>
			</div>
		</div>
	)
}

export default App
