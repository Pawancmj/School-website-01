import React from 'react'
import { Target, Eye, Heart, Users } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary-600" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, setting high standards for academic achievement.'
    },
    {
      icon: <Eye className="h-8 w-8 text-primary-600" />,
      title: 'Innovation',
      description: 'We embrace innovative teaching methods and cutting-edge technology to enhance learning.'
    },
    {
      icon: <Heart className="h-8 w-8 text-primary-600" />,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards and foster honest, respectful relationships.'
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: 'Community',
      description: 'We build a strong, supportive community that nurtures growth and collaboration.'
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About CyberForenX School
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded on the principles of excellence, innovation, and community, CyberForenX School has been 
              shaping minds and building futures for over two decades.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6">
                CyberForenX School was established in 2000 with a vision to provide world-class education 
                that prepares students for the challenges of tomorrow. What started as a small institution 
                with 50 students has grown into a thriving educational community of over 1200 students.
              </p>
              <p className="text-gray-600 mb-6">
                Our commitment to excellence has earned us recognition as one of the leading educational 
                institutions in the region. We continue to evolve and adapt our teaching methods to ensure 
                our students receive the best possible education.
              </p>
              <p className="text-gray-600">
                Today, we stand proud as a beacon of quality education, having graduated thousands of 
                successful alumni who are making their mark in various fields around the world.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop&q=80" 
                alt="School building" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional education that empowers students with knowledge, critical thinking 
                skills, and moral values necessary to become responsible global citizens and leaders of tomorrow. 
                We are committed to fostering an environment where every student can reach their full potential.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be recognized as a premier educational institution that sets the standard for academic 
                excellence, character development, and innovation in education. We envision a future where 
                our graduates contribute meaningfully to society and make a positive impact on the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape the character of our institution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who lead our institution with vision and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80" 
                alt="Principal" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Michael Johnson</h3>
              <p className="text-primary-600 mb-3">Principal</p>
              <p className="text-gray-600 text-sm">
                With over 20 years in education, Dr. Johnson leads our school with a vision for excellence and innovation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616c96494d9?w=300&h=300&fit=crop&q=80" 
                alt="Vice Principal" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Williams</h3>
              <p className="text-primary-600 mb-3">Vice Principal</p>
              <p className="text-gray-600 text-sm">
                Sarah brings 15 years of academic leadership and is passionate about student development and curriculum design.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&q=80" 
                alt="Academic Director" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prof. David Chen</h3>
              <p className="text-primary-600 mb-3">Academic Director</p>
              <p className="text-gray-600 text-sm">
                Prof. Chen oversees our academic programs and ensures the highest standards of educational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About