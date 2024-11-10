'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Ethio Tour',
    description: 'A comprehensive tourism management system for customized travel experiences in Ethiopia.',
    longDescription: 'As a full-stack developer using Svelte.js, Node.js, MongoDB, and Express, I created EthioTour, a comprehensive tourism management system. It features a user-friendly interface, secure booking and payment, interactive maps, reviews, multilingual support, and responsive customer support.',
    images: [
        '/ethiotour/image_original (6).png',
      '/ethiotour/image_original (1).png',
      '/ethiotour/image_original (2).png',
      '/ethiotour/image_original (3).png',
      '/ethiotour/image_original (4).png',
      '/ethiotour/image_original (5).png',
      '/ethiotour/image_original.png',
    ],
    tags: ['Svelte.js', 'Node.js', 'MongoDB', 'Express'],
    liveUrl: 'https://ethiotour.com',
    githubUrl: 'https://github.com/yourusername/ethiotour',
    features: [
      'User-friendly interface',
      'Secure booking and payment',
      'Interactive maps',
      'Multilingual support',
      'Customer reviews',
      'Responsive design'
    ]
  },
  {
    id: 2,
    title: 'Brandualist Agency',
    description: 'A dynamic marketing agency platform showcasing creative services and portfolio management.',
    longDescription: 'Developed a sophisticated marketing agency platform for Brandualist, a Ukraine-based creative agency. The platform revolutionizes how the agency manages and presents their creative work. Built with SvelteKit, it features an immersive portfolio showcase with dynamic animations, real-time project updates, and interactive case studies. The platform includes a custom CMS for easy content management, automated client reporting, and integrated analytics for campaign performance tracking. Advanced features include multi-language support for international clients, a dynamic pricing calculator, and a streamlined project onboarding system.',
    images: [
      '/brandualist/brandualist9.png',
      '/brandualist/brandualist.png',
      '/brandualist/brandualist1.png',
      '/brandualist/brandualist2.png',
      '/brandualist/brandualist3.png',
      '/brandualist/brandualist4.png',
      '/brandualist/brandualist5.png',
      '/brandualist/brandualist6.png',
      '/brandualist/brandualist7.png',
      '/brandualist/brandualist8.png',
        
    ],
    tags: ['SvelteKit', 'Three.js','Scss'],
    liveUrl: 'https://brandualist.com',
    githubUrl: 'https://github.com/yourusername/brandualist',
    features: [
      'Interactive portfolio showcase',
      'Custom CMS integration',
      'Real-time project updates',
      'Campaign performance analytics',
      'Dynamic pricing calculator',
      'Client collaboration portal',
      'Automated reporting system',
      'Multi-language support'
    ]
  },
  {
    id: 3,
    title: 'Niguss Shoe',
    description: 'A modern e-commerce platform for premium Ethiopian handcrafted shoes.',
    longDescription: 'Engineered a sophisticated e-commerce platform for Niguss Shoe, showcasing Ethiopia\'s finest handcrafted footwear. Built with Svelte and integrated with a robust backend, the platform offers an immersive shopping experience. Features include a dynamic product catalog with advanced filtering, 360-degree product views, size customization, and real-time inventory management. The platform also includes a custom order tracking system, integrated payment processing with local Ethiopian payment methods, and a sophisticated analytics dashboard for sales and inventory insights. Special features include a virtual try-on system, customer loyalty program, and automated email marketing integration.',
    images: [
      '/nigus/nigus.png',
      '/nigus/nigus1.png',
      '/nigus/nigus2.png',
      '/nigus/nigus3.png',
      '/nigus/nigus4.png',
      '/nigus/nigus5.png',
      '/nigus/nigus6.png',
    ],
    tags: ['Next js', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: 'https://niguss-shoe.com',
    githubUrl: 'https://github.com/yourusername/niguss-shoe',
    features: [ 
      'Size customization system',
      'Real-time inventory tracking',
      'Virtual try-on feature',
      'Multiple payment integrations',
      'Customer loyalty program',
      'Advanced order tracking',
      'Analytics dashboard',
      'Automated email marketing',
      'Mobile-first responsive design'
    ]
  },
  {
    id: 4,
    title: 'Felagi Jobs',
    description: 'A comprehensive job posting and finding platform connecting Ethiopian talent with opportunities.',
    longDescription: 'Developed Felagi Jobs, an innovative job marketplace platform specifically designed for the Ethiopian market. This platform bridges the gap between local talent and employers through advanced technology. Built with React and Node.js, it features AI-powered job matching algorithms that consider both technical skills and cultural fit. The platform includes an advanced resume builder with local context awareness, automated application tracking, and a sophisticated company verification system. Notable features include interview scheduling with timezone management, integrated video conferencing for remote interviews, and a built-in messaging system for seamless communication. The platform also offers comprehensive analytics for both employers and job seekers, helping them make data-driven decisions.',
    images: [
        '/felagijobs/image_original9.png',
        '/felagijobs/image_original.png',
        '/felagijobs/image_original1.png',
        '/felagijobs/image_original2.png',
        '/felagijobs/image_original3.png',
        '/felagijobs/image_original4.png',
        '/felagijobs/image_original5.png',
        '/felagijobs/image_original6.png',
        '/felagijobs/image_original7.png',
        '/felagijobs/image_original8.png', 
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveUrl: 'https://felagi-jobs.com',
    githubUrl: 'https://github.com/yourusername/felagi-jobs',
    features: [
      'AI-powered job matching',
      'Local context-aware resume builder',
      'Company verification system',
      'Integrated video interviewing',
      'Advanced search filters',
      'Real-time notifications',
      'Interview scheduling system',
      'Analytics dashboard',
      'Messaging platform',
      'Mobile responsive design'
    ]
  },
  {
    id: 5,
    title: 'VR Technologies',
    description: 'An innovative virtual reality solutions platform for enterprise and education sectors.',
    longDescription: 'Engineered a cutting-edge VR technology platform using Svelte, showcasing immersive virtual reality solutions for businesses and educational institutions. The platform features interactive 3D demonstrations, virtual training simulations, and comprehensive VR product catalogs. Implemented real-time WebGL rendering, advanced user analytics, and seamless integration with various VR hardware. The system includes virtual showrooms, interactive product demonstrations, and immersive training modules for corporate clients.',
    images: [
      '/vr/vr.png',
      '/vr/vr2.png',
      '/vr/vr3.png',
      '/vr/vr4.png',	
    ],
    tags: ['Svelte', 'Firebase'],
    liveUrl: 'https://vr-technologies.com',
    githubUrl: 'https://github.com/yourusername/vr-tech',
    features: [
      'Interactive 3D demonstrations',
      'Virtual training modules',
      'Hardware compatibility checker',
      'Real-time rendering',
      'Performance analytics',
      'Cross-platform support',
      'Virtual showroom',
      'Technical documentation'
    ]
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showAll, setShowAll] = useState(false)
 
  const visibleProjects = showAll ? projects : projects.slice(0, 4)
 
  const nextImage = () => {
    const project = projects.find(p => p.id === selectedProject)
    if (project) {
      setCurrentImageIndex((prev) => 
        prev === project.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    const project = projects.find(p => p.id === selectedProject)
    if (project) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.images.length - 1 : prev - 1
      )
    }
  }
 
  const handleCloseModal = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  return (
    <section id="projects" className="min-h-screen relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Explore my portfolio of web applications, showcasing expertise in modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div 
                className="glass rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative aspect-[4/3] bg-gray-900">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-base font-bold mb-1 text-white">{project.title}</h3>
                    <p className="text-gray-200 text-xs line-clamp-2">{project.description}</p>
                  </div>
                </div>
                <div className="p-3 bg-gray-900/50 backdrop-blur-sm flex-1 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="text-xs text-purple-300">+{project.tags.length - 2}</span>
                    )}
                  </div>
                  <button className="flex items-center text-xs text-purple-400 hover:text-purple-300 transition-colors group mt-auto">
                    View Details
                    <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && projects.length > 4 && (
          <div className="flex justify-center mt-8">
            <motion.button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg font-medium transition-colors flex items-center space-x-2 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>See All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={handleCloseModal}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass rounded-2xl p-6 md:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative z-10 scrollbar-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject)
                if (!project) return null

                return (
                  <>
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-3xl font-bold">{project.title}</h3>
                      <button
                        onClick={handleCloseModal}
                        className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="relative aspect-video rounded-lg overflow-hidden mb-6 bg-gray-900">
                      <img
                        src={project.images[currentImageIndex]}
                        alt={`${project.title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-full object-contain"
                      />
                      
                      {/* Navigation Arrows */}
                      {project.images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                          >
                            <ChevronRight className="w-6 h-6" />
                          </button>
                          
                          {/* Image Indicators */}
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                            {project.images.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                  idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    <p className="text-gray-300 mb-6">
                      {project.longDescription}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.features.map((feature) => (
                          <li 
                            key={feature}
                            className="flex items-center space-x-2 text-gray-300"
                          >
                            <div className="w-2 h-2 bg-purple-500 rounded-full" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        View Live
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white rounded-lg transition-colors"
                      >
                        <Github className="w-5 h-5 mr-2" />
                        View Code
                      </a>
                    </div>
                  </>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
} 