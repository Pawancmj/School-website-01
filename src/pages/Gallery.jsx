import React, { useState } from 'react'
import { X } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=500&h=350&fit=crop&q=80',
      title: 'Modern Classroom',
      category: 'Facilities'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=350&fit=crop&q=80',
      title: 'Computer Lab',
      category: 'Technology'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=350&fit=crop&q=80',
      title: 'Students Collaborating',
      category: 'Student Life'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1562774053-701939374585?w=500&h=350&fit=crop&q=80',
      title: 'School Building',
      category: 'Campus'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&h=350&fit=crop&q=80',
      title: 'Graduation Ceremony',
      category: 'Events'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&h=350&fit=crop&q=80',
      title: 'Library Study Area',
      category: 'Facilities'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=500&h=350&fit=crop&q=80',
      title: 'Science Laboratory',
      category: 'Technology'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=500&h=350&fit=crop&q=80',
      title: 'Study Group',
      category: 'Student Life'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?w=500&h=350&fit=crop&q=80',
      title: 'Campus Garden',
      category: 'Campus'
    }
  ]

  const categories = ['All', 'Facilities', 'Technology', 'Student Life', 'Campus', 'Events']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Gallery
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Take a visual journey through our campus, facilities, and the vibrant life at CyberForenX School.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                    <span className="text-sm bg-primary-600 px-3 py-1 rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold mb-1">{selectedImage.title}</h3>
              <span className="text-sm bg-primary-600 px-3 py-1 rounded-full">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery