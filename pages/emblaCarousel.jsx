import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { ...options, loop: true },
    [AutoScroll({ playOnInit: true })] // Autoplay enabled by default
  )

  const handleMouseEnter = () => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (autoScroll) {
      autoScroll.stop()
    }
  }

  const handleMouseLeave = () => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (autoScroll) {
      autoScroll.play()
    }
  }

  useEffect(() => {
    if (!emblaApi) return

    const autoScroll = emblaApi.plugins()?.autoScroll
    if (autoScroll && !autoScroll.isPlaying()) {
      autoScroll.play() // Ensure autoplay starts if it isn't already running
    }
  }, [emblaApi])

  return (
    <div
      className="embla"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
