import React from 'react';
import { Menu, X, Mail, Phone, Github, Linkedin, ExternalLink, Download } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">Ashmil Abdulla</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
              <a href="#education" className="text-gray-300 hover:text-white transition">Education</a>
              <a href="#skills" className="text-gray-300 hover:text-white transition">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-300 hover:text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-white transition">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white transition">About</a>
              <a href="#education" className="block px-3 py-2 text-gray-300 hover:text-white transition">Education</a>
              <a href="#skills" className="block px-3 py-2 text-gray-300 hover:text-white transition">Skills</a>
              <a href="#projects" className="block px-3 py-2 text-gray-300 hover:text-white transition">Projects</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white transition">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Hi, I'm Ashmil Abdulla
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                A passionate software developer specializing in web development and data analyst.
              </p>
              <div className="flex space-x-4">
                <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                  Contact Me
                </a>
                <a href="/resume.pdf" className="flex items-center border border-gray-600 text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                  <Download size={20} className="mr-2" />
                  Resume
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="ASH.jpeg" 
                alt="Profile" 
                className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg ring-2 ring-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
          <div className="bg-gray-900 rounded-lg shadow-xl p-8 border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Personal Info</h3>
                <div className="space-y-4 text-gray-300">
                  <p><span className="font-medium text-blue-400">Name:</span> Ashmil Abdulla</p>
                  <p><span className="font-medium text-blue-400">Date of Birth:</span> January 1, 2000</p>
                  <p><span className="font-medium text-blue-400">Location:</span> Kerala, India</p>
                  <p><span className="font-medium text-blue-400">Email:</span> ahmilabdulla.24mca@kct.ac.in</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Career Aspirations</h3>
                <p className="text-gray-300">
                  I am passionate about creating innovative solutions that make a positive impact. 
                  My goal is to become a full-stack developer specializing in cloud technologies 
                  and contribute to cutting-edge projects that push the boundaries of what's possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Education</h2>
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white">Master of Computer Applications</h3>
              <p className="text-gray-300">Kumaraguru College of Technology</p>
              <p className="text-gray-400">2024 - Present</p>
              <p className="text-blue-400 mt-2">CGPA: 8.5</p>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white">Bachelor of Computer Applications</h3>
              <p className="text-gray-300">Calicut University</p>
              <p className="text-gray-400">2020 - 2023</p>
              <p className="text-blue-400 mt-2">CGPA: 8.0</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg shadow-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Programming Languages</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">JavaScript</span>
                    <span className="text-blue-400">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Python</span>
                    <span className="text-blue-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Java</span>
                    <span className="text-blue-400">80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Frameworks</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">React</span>
                    <span className="text-blue-400">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Node.js</span>
                    <span className="text-blue-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Django</span>
                    <span className="text-blue-400">75%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Tools & Technologies</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Git</span>
                    <span className="text-blue-400">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Docker</span>
                    <span className="text-blue-400">80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">AWS</span>
                    <span className="text-blue-400">75%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop" 
                alt="Project 1" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">E-Commerce Platform</h3>
                <p className="text-gray-300 mb-4">
                  A full-stack e-commerce platform built with React, Node.js, and MongoDB.
                </p>
                <div className="flex space-x-2">
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <ExternalLink size={20} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop" 
                alt="Project 2" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Task Management App</h3>
                <p className="text-gray-300 mb-4">
                  A collaborative task management application with real-time updates.
                </p>
                <div className="flex space-x-2">
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <ExternalLink size={20} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700">
              <img 
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=500&h=300&fit=crop" 
                alt="Project 3" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Weather Dashboard</h3>
                <p className="text-gray-300 mb-4">
                  A weather dashboard with location-based forecasts and alerts.
                </p>
                <div className="flex space-x-2">
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    <ExternalLink size={20} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Contact Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <a href="mailto:ahmilabdulla.24mca@kct.ac.in" className="flex items-center text-gray-300 hover:text-white transition">
                  <Mail size={20} className="mr-2" />
                  ahmilabdulla.24mca@kct.ac.in
                </a>
                <a href="https://www.linkedin.com/in/ashmil-abdulla-02821624a?" className="flex items-center text-gray-300 hover:text-white transition">
                  <Linkedin size={20} className="mr-2" />
                  LinkedIn
                </a>
                <a href="https://github.com/yourusername" className="flex items-center text-gray-300 hover:text-white transition">
                  <Github size={20} className="mr-2" />
                  GitHub
                </a>
              </div>
            </div>
            <div>
              <form className="space-y-4"  action="https://formspree.io/f/xeoawodq"
  method="POST">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>© 2025 Ashmil Abdulla. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;