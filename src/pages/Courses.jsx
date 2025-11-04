import React, { useState } from 'react'
import { BookOpen, Clock, Users, Award } from 'lucide-react'

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const courses = [
    {
      id: 1,
      title: 'Computer Science & Programming',
      description: 'Comprehensive program covering programming languages, algorithms, data structures, and software development.',
      duration: '4 Years',
      students: '150+',
      level: 'Beginner to Advanced',
      category: 'Programming',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Digital Forensics',
      description: 'Learn the fundamentals of digital investigation, cyber security, and forensic analysis techniques.',
      duration: '3 Years',
      students: '80+',
      level: 'Intermediate',
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Cybersecurity',
      description: 'Master the skills needed to protect organizations from cyber threats and security breaches.',
      duration: '3 Years',
      students: '120+',
      level: 'Intermediate to Advanced',
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop&q=80'
    },
    {
      id: 4,
      title: 'Data Science & Analytics',
      description: 'Explore data analysis, machine learning, statistical modeling, and business intelligence.',
      duration: '3 Years',
      students: '90+',
      level: 'Beginner to Advanced',
      category: 'Data Science',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&q=80'
    },
    {
      id: 5,
      title: 'Web Development',
      description: 'Learn modern web technologies including HTML, CSS, JavaScript, and popular frameworks.',
      duration: '2 Years',
      students: '200+',
      level: 'Beginner',
      category: 'Programming',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop&q=80'
    },
    {
      id: 6,
      title: 'Artificial Intelligence',
      description: 'Dive into AI concepts, neural networks, machine learning algorithms, and practical applications.',
      duration: '4 Years',
      students: '70+',
      level: 'Advanced',
      category: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=250&fit=crop&q=80'
    }
  ]

  const categories = ['All', 'Programming', 'Cybersecurity', 'Data Science', 'AI/ML']

  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeCategory)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Courses
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Discover our comprehensive range of technology-focused courses designed to prepare you for the digital future.
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

      {/* Courses Grid */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              // <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">

                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                {/* <div className="p-6"> */}
                <div className="p-6 flex flex-col flex-grow">

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {course.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      Duration: {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-2" />
                      Students: {course.students}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Award className="h-4 w-4 mr-2" />
                      Level: {course.level}
                    </div>
                  </div>
                  
                  {/* <button className="w-full btn-primary">
                    Learn More
                  </button> */}
                  <a 
                      href="https://yourwebsite.com/course-details" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full btn-primary inline-block text-center mt-auto"
                    >
                     Load More
                      </a>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Makes Our Courses Special?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our programs are designed with industry requirements in mind, ensuring you graduate with practical skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Industry-Relevant Curriculum
              </h3>
              <p className="text-gray-600">
                Our courses are constantly updated to reflect the latest industry trends and technologies.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Expert Instructors
              </h3>
              <p className="text-gray-600">
                Learn from experienced professionals who bring real-world expertise to the classroom.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hands-on Learning
              </h3>
              <p className="text-gray-600">
                Practical projects and labs ensure you gain valuable experience with the tools and technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Courses