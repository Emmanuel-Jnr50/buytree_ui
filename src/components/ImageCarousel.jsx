// src/components/ImageCarousel.jsx
import image1 from '../assets/logoipsum-297 1.png'
import image2 from '../assets/logoipsum-311 1.png'
import image3 from '../assets/logoipsum-317 1.png'
import image4 from '../assets/logoipsum-334 1.png'
import image5 from '../assets/logoipsum-345 1.png'
import image6 from '../assets/logoipsum-372 1.png'

const images = [
    image1,
    image2,
    image3,
    image4, 
    image5, 
    image6
]

const ImageCarousel = () => {
  // Duplicate the array to create seamless loop
    const doubled = [...images, ...images]

    return (
        <div className="overflow-hidden w-full relative">
            <div className="fade-left absolute h-full bg-white w-65 z-40 top-0 left-0 mask-r-from-10 max-sm:w-30 max-sm:mask-r-from-5"></div>
            <div className="fade-left absolute h-full bg-white w-65 z-40 top-0 right-0 mask-l-from-10 max-sm:w-30 max-sm:mask-l-from-5"></div>
            <div className="flex animate-scroll w-max">
                {doubled.map((src, index) => (
                <div key={index} className="mx-12 shrink-0 max-sm:mx-6">
                    <img
                    src={src}
                    alt={`slide-${index}`}
                    className="w-50 max-sm:w-35"
                    />
                </div>
                ))}
            </div>
        </div>
    )
}

export default ImageCarousel