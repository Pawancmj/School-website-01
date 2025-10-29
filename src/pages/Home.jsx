import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Users, Award, Zap, Quote } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary-600" />,
      title: 'Quality Education',
      description: 'Comprehensive curriculum designed to meet modern educational standards and prepare students for the future.'
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: 'Expert Faculty',
      description: 'Experienced and dedicated teachers committed to nurturing each student\'s potential and growth.'
    },
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: 'Excellence Awards',
      description: 'Recognized for outstanding academic performance and innovative teaching methodologies.'
    },
    {
      icon: <Zap className="h-8 w-8 text-primary-600" />,
      title: 'Modern Facilities',
      description: 'State-of-the-art classrooms, laboratories, and technology to enhance the learning experience.'
    }
  ]

  const testimonials = [
    {
      quote: "CyberForenX School provided me with an incredible foundation in cybersecurity. The hands-on projects and expert instructors were invaluable!",
      name: "Alice Johnson",
      role: "Alumni, Class of 2022",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80"
    },
    {
      quote: "My child has thrived at CyberForenX. The supportive community and challenging curriculum have truly brought out their best.",
      name: "Robert Smith",
      role: "Parent",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80"
    },
    {
      quote: "The commitment to innovation here is inspiring. We're constantly exploring new teaching methods to keep our students ahead.",
      name: "Dr. Emily White",
      role: "Faculty Member",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&q=80"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Excellence in <span className="text-yellow-400">Education</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Empowering students with knowledge, skills, and values to succeed in the digital age. 
                Join CyberForenX School where innovation meets education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/courses" className="btn-primary inline-flex items-center">
                  Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link to="/about" className="btn-secondary bg-white hover:bg-gray-100">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=600&h=400&fit=crop&q=80" 
                alt="Students learning" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}\
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose CyberForenX School?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive educational experience that prepares students for success in an ever-evolving world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our students, parents, and faculty about their experience at CyberForenX School.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
                <Quote className="h-10 w-10 text-primary-400 mb-4" />
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-primary-600"
                />
                <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-primary-600 text-sm">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">1200+</div>
              <div className="text-blue-200">Students</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Expert Teachers</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">25+</div>
              <div className="text-blue-200">Courses</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Educational Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of students who have chosen excellence. Contact us today to learn more about our programs.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center">
            Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home