'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Eye, ExternalLink, Play, Youtube } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'images' | 'videos'>('images');

  const galleryImages: any[] = [];

  const youtubeVideos: any[] = [];

  const filteredImages = galleryImages;
  const filteredVideos = youtubeVideos;

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const openVideoModal = (index: number) => {
    setSelectedVideo(index);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  // Helper function to extract YouTube video ID from URL
  const extractYouTubeId = (url: string): string => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : '';
  };

  // Helper function to add new YouTube video
  const addYouTubeVideo = (url: string, title: string, description: string, category: string) => {
    const videoId = extractYouTubeId(url);
    if (!videoId) {
      console.error('Invalid YouTube URL');
      return null;
    }
    
    return {
      id: youtubeVideos.length + 1,
      title,
      description,
      thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      videoId,
      category,
      duration: '0:00', // You can update this manually
      views: '0', // You can update this manually
      date: new Date().toISOString().split('T')[0]
    };
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-accent">
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Event <span className="text-accent">Gallery</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Explore our stunning portfolio of successful event management projects.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Latest Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Browse through our carefully curated collection of event management projects 
              that showcase our expertise and creativity.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-2xl p-2 inline-flex">
              <button
                onClick={() => setActiveTab('images')}
                className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'images'
                    ? 'bg-white text-accent shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Eye className="w-5 h-5" />
                <span>Photos</span>
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'videos'
                    ? 'bg-white text-accent shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Youtube className="w-5 h-5" />
                <span>Videos</span>
              </button>
            </div>
          </div>


          {/* Gallery Grid */}
          {activeTab === 'images' && filteredImages.length === 0 ? (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No Images Available</h3>
                <p className="text-gray-600 mb-8">Gallery images will be added soon. Please check back later.</p>
              </div>
            </div>
          ) : activeTab === 'videos' && filteredVideos.length === 0 ? (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Youtube className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No Videos Available</h3>
                <p className="text-gray-600 mb-8">Gallery videos will be added soon. Please check back later.</p>
              </div>
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {activeTab === 'images' ? (
              filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={image.image}
                      alt={`${image.type} event design`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-4">
                        <button 
                          className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                          aria-label="View image details"
                        >
                          <Eye className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              filteredVideos.map((video, index) => (
                <div
                  key={video.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover cursor-pointer"
                  onClick={() => openVideoModal(index)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* YouTube Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    
                    {/* YouTube Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                        <span className="mr-1">▶</span>
                        YouTube
                      </div>
                    </div>
                    
                    {/* Video Info */}
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-bold text-lg mb-1 line-clamp-2">{video.title}</h3>
                      <div className="flex items-center justify-between text-sm">
                        <span className="bg-black/50 px-2 py-1 rounded">{video.duration}</span>
                        <span className="bg-black/50 px-2 py-1 rounded">{video.views} views</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{video.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{video.description}</p>
                    <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                      <span className="capitalize">{video.category}</span>
                      <span>{new Date(video.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-6xl max-h-[90vh] mx-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <div className="relative">
              <Image
                src={filteredImages[selectedImage].image}
                alt={`${filteredImages[selectedImage].type} interior design`}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
            </div>
          </div>
        </div>
      )}

      {/* YouTube Video Modal */}
      {selectedVideo !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-6xl max-h-[90vh] mx-4 w-full">
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Close video modal"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* YouTube Video Embed */}
            <div className="relative w-full max-w-4xl mx-auto">
              {/* For YouTube Shorts, use different aspect ratio */}
              {filteredVideos[selectedVideo].videoId === 'c6CPzSXq5s4' || filteredVideos[selectedVideo].videoId === 'OkSi1JpWYDo' ? (
                <div className="relative w-full max-w-sm mx-auto" style={{ paddingBottom: '177.78%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${filteredVideos[selectedVideo].videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                    title={filteredVideos[selectedVideo].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${filteredVideos[selectedVideo].videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                    title={filteredVideos[selectedVideo].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
            
            {/* Video Info */}
            <div className="mt-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{filteredVideos[selectedVideo].title}</h3>
              <p className="text-white/80 mb-4">{filteredVideos[selectedVideo].description}</p>
              <div className="flex items-center space-x-6 text-sm text-white/60 mb-4">
                <span>📅 {new Date(filteredVideos[selectedVideo].date).toLocaleDateString()}</span>
                <span>👁️ {filteredVideos[selectedVideo].views} views</span>
                <span>⏱️ {filteredVideos[selectedVideo].duration}</span>
                <span className="capitalize">🏷️ {filteredVideos[selectedVideo].category}</span>
              </div>
              
              {/* YouTube Link Button */}
              <div className="flex justify-center">
                <a
                  href={`https://www.youtube.com/watch?v=${filteredVideos[selectedVideo].videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  <span className="mr-2">▶</span>
                  Watch on YouTube
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
