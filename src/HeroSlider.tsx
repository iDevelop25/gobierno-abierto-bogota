import React, { useEffect, useState } from "react"

const HeroSlider: React.FC = () => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const [imagesLoaded, setImagesLoaded] = useState(false)
	const [loadedImages, setLoadedImages] = useState<number>(0)

	const images = ["/images/bogota-day.jpg", "/images/bogota-night.jpg"]

	useEffect(() => {
		const loadImages = () => {
			const imagePromises = images.map((src) => {
				return new Promise((resolve) => {
					const img = new Image()
					img.src = src
					img.onload = () => {
						setLoadedImages((prev) => prev + 1)
						resolve(true)
					}
				})
			})

			Promise.all(imagePromises).then(() => {
				setImagesLoaded(true)
			})
		}

		loadImages()

		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev === 0 ? 1 : 0))
		}, 5000)

		return () => clearInterval(timer)
	}, [])

	if (!imagesLoaded) {
		return (
			<div className="hero-slider loading">
				<div className="spinner-container">
					<div className="spinner"></div>
					<p>
						Cargando {loadedImages} de {images.length} imágenes...
					</p>
				</div>
			</div>
		)
	}

	return (
		<div className="hero-slider">
			{images.map((img, index) => (
				<div
					key={index}
					className={`hero-slide ${index === currentSlide ? "active" : ""}`}
					style={{
						backgroundImage: `url(${img})`,
					}}
				/>
			))}
		</div>
	)
}

export default HeroSlider
