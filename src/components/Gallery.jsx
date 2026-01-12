import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

// Import images from menus folder
import dessertMenu from '../assets/menus/EA_ORO_Dessert_Menu.jpg';
import dinnerMenu from '../assets/menus/EA_ORO_Dinner_Menu.jpg';
import signatureCocktail from '../assets/menus/EA_ORO_Signature_Cocktail.jpg';
import specialityDrinks from '../assets/menus/EA_ORO_Speciality_Drinks.jpg';

// Import images from air folder
import southernThingMenu from '../assets/air/Ebony_Angels_Its_A_Southern_Thing_Menu.png';
import saunaHouse from '../assets/air/Ebony_Angels_Sauna_House_Durham.png';
import angierHouse from '../assets/air/Ebony_Angels_The_Angier_House_AirBNB.png';
import womensEmpowerment from '../assets/air/Ebony_Angels_Womens_Empowerment.png';
import zincHouseFlyer from '../assets/air/Ebony_Angels_ZincHouse_Flyer.png';
import full1 from '../assets/air/full_1.jfif';
import full from '../assets/air/full.jfif';
import image5 from '../assets/air/image-5.jpeg';
import medium1 from '../assets/air/medium_1.jfif';
import medium2 from '../assets/air/medium_2.jfif';
import medium3 from '../assets/air/medium_3.jfif';
import medium from '../assets/air/medium.jfif';
import returnLegends from '../assets/air/Return_of_the_Legends.png';
import zincOutdoor from '../assets/air/zinchouse-summer-outdoor-9.jpg';
import zincAerial1 from '../assets/air/zinchouse-winery-and-brewery-aerial-view-1.jpg';
import zincAerial10 from '../assets/air/zinchouse-winery-and-brewery-aerial-view-10.jpg';
import zincAerial5 from '../assets/air/zinchouse-winery-and-brewery-aerial-view-5.jpg';
import zincInside17 from '../assets/air/zinchouse-winery-and-brewery-inside-17.jpg';
import zincInside18 from '../assets/air/zinchouse-winery-and-brewery-inside-18.jpg';
import zincGlasses from '../assets/air/zinchouse-winery-glasses-1.jpg';

const galleryImages = [
  { src: womensEmpowerment, alt: "Women's Empowerment" },
  { src: returnLegends, alt: 'Return of the Legends' },
  { src: full1, alt: 'Ebony Angels Gathering' },
  { src: full, alt: 'Ebony Angels Sisters' },
  { src: image5, alt: 'Sisterhood Moments' },
  { src: medium1, alt: 'Celebration' },
  { src: medium2, alt: 'Together' },
  { src: medium3, alt: 'Unity' },
  { src: medium, alt: 'Memories' },
  { src: southernThingMenu, alt: 'Its A Southern Thing Menu' },
  { src: saunaHouse, alt: 'Sauna House Durham' },
  { src: angierHouse, alt: 'The Angier House AirBNB' },
  { src: zincHouseFlyer, alt: 'ZincHouse Flyer' },
  { src: dessertMenu, alt: 'ORO Dessert Menu' },
  { src: dinnerMenu, alt: 'ORO Dinner Menu' },
  { src: signatureCocktail, alt: 'ORO Signature Cocktail' },
  { src: specialityDrinks, alt: 'ORO Speciality Drinks' },
  { src: zincOutdoor, alt: 'ZincHouse Outdoor' },
  { src: zincAerial1, alt: 'ZincHouse Aerial View' },
  { src: zincAerial5, alt: 'ZincHouse Winery' },
  { src: zincAerial10, alt: 'ZincHouse Brewery' },
  { src: zincInside17, alt: 'ZincHouse Interior' },
  { src: zincInside18, alt: 'ZincHouse Inside' },
  { src: zincGlasses, alt: 'ZincHouse Wine Glasses' },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [direction, setDirection] = useState(0);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <>
      {/* Main Gallery Container */}
      <div className="relative aspect-square max-w-md mx-auto">
        {/* Decorative Frame */}
        <motion.div
          className="absolute inset-0 border-2 border-gold/30 rounded-2xl"
          animate={{ rotate: 3 }}
        />
        <motion.div
          className="absolute inset-0 border-2 border-crimson/30 rounded-2xl"
          animate={{ rotate: -3 }}
        />

        {/* Image Container */}
        <div className="absolute inset-4 bg-gradient-to-br from-crimson-dark via-black to-gold-dark rounded-xl overflow-hidden">
          {/* Current Image */}
          <div 
            className="relative w-full h-full cursor-pointer"
            onClick={openModal}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.img
                key={currentIndex}
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

            {/* Image Caption */}
            <motion.div
              key={`caption-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-4 left-4 right-4 text-center"
            >
              <p className="text-gold text-sm font-medium">{galleryImages[currentIndex].alt}</p>
              <p className="text-white/60 text-xs mt-1">Click to enlarge</p>
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-gold/80 flex items-center justify-center text-white hover:text-black transition-all duration-300 z-10"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-gold/80 flex items-center justify-center text-white hover:text-black transition-all duration-300 z-10"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Thumbnail Dots */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {galleryImages.slice(0, 8).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gold w-6'
                  : 'bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
          {galleryImages.length > 8 && (
            <span className="text-white/50 text-xs ml-1">+{galleryImages.length - 8}</span>
          )}
        </div>

        {/* Image Counter */}
        <div className="absolute -top-6 right-0 text-gold/70 text-sm">
          {currentIndex + 1} / {galleryImages.length}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center text-white hover:text-black transition-all duration-300 z-10"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Modal Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.img
                  key={currentIndex}
                  src={galleryImages[currentIndex].src}
                  alt={galleryImages[currentIndex].alt}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-contain max-h-[85vh]"
                />
              </AnimatePresence>

              {/* Modal Navigation */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/50 hover:bg-gold flex items-center justify-center text-white hover:text-black transition-all duration-300"
              >
                <FaChevronLeft className="text-xl" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/50 hover:bg-gold flex items-center justify-center text-white hover:text-black transition-all duration-300"
              >
                <FaChevronRight className="text-xl" />
              </button>

              {/* Modal Caption */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                <p className="text-gold text-lg font-medium">{galleryImages[currentIndex].alt}</p>
                <p className="text-white/60 text-sm mt-1">
                  {currentIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4 py-2">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); goToSlide(index); }}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentIndex
                      ? 'ring-2 ring-gold scale-110'
                      : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
