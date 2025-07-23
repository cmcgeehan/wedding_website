"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Plane, MapPin, Calendar, Heart, Users, SparklesIcon as Champagne, Music, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const [currentScene, setCurrentScene] = useState("landing")
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredRow, setHoveredRow] = useState<string | null>(null)

  // Helper function to get animation style based on hover state
  const getAnimationStyle = (rowId: string) => {
    return {
      animationPlayState: hoveredRow === rowId ? 'paused' : 'running'
    }
  }

  // Helper function to handle image loading
  const handleImageLoad = (src: string) => {
    console.log(`Successfully loaded image: ${src}`);
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, src: string) => {
    console.error(`Failed to load image: ${src}`);
    // For Next.js Image component, we can't directly set src, but the error is logged
  }

  

  useEffect(() => {
    setIsLoaded(true)
    // Auto-progress through scenes
    const timer = setTimeout(() => {
      if (currentScene === "landing") {
        setCurrentScene("arrival")
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [currentScene])

  const handleEnterWedding = () => {
    setCurrentScene("welcome")
  }
  

  if (currentScene === "landing") {
    return (
      <div className="h-screen bg-gradient-to-b from-blue-400 via-blue-300 to-blue-100 relative overflow-hidden">
        {/* Clouds Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-16 bg-white/60 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-12 bg-white/40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-20 bg-white/50 rounded-full animate-pulse delay-500"></div>
        </div>

        {/* Jet Window Frame */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Window Frame */}
            <div className="w-96 h-64 bg-gray-800 rounded-3xl p-4 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-b from-blue-400 via-blue-300 to-green-200 rounded-2xl relative overflow-hidden">
                {/* Mexico City Skyline Silhouette */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-800 to-transparent"></div>

                {/* Floating Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div
                      className={`transform transition-all duration-2000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                    >
                      <p className="text-lg font-light tracking-wide">Approaching Mexico City...</p>
                      <p className="text-sm opacity-80 mt-2">Friday, April 3, 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Window Reflection */}
            <div className="absolute inset-4 bg-gradient-to-br from-white/20 to-transparent rounded-2xl pointer-events-none"></div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="bg-black/80 text-white px-6 py-3 rounded-full backdrop-blur-sm">
            <p className="text-sm font-light tracking-wide">Flight Status: Landing Soon</p>
          </div>
        </div>
      </div>
    )
  }

  if (currentScene === "arrival") {
    return (
      <div className="h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden">
        {/* Runway Lights */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
          <div className="flex justify-between items-end h-32">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`w-2 bg-yellow-400 rounded-full animate-pulse`}
                style={{
                  height: `${Math.random() * 20 + 10}px`,
                  animationDelay: `${i * 200}ms`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Boarding Pass */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-6xl px-8">
            <div
              className={`transform transition-all duration-2000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="mb-8">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/favicon.png"
                    alt="Wedding Logo"
                    width={60}
                    height={60}
                    className="rounded-full shadow-lg"
                  />
                </div>
                <h1 className="text-4xl font-serif mb-4">Welcome to Mexico City</h1>
                <p className="text-xl font-light opacity-90 mb-8">
                  You&apos;ve arrived at Gaby & Conor&apos;s wedding destination
                </p>
              </div>

              {/* Authentic Boarding Pass Design */}
              <div
                className="bg-white text-gray-800 rounded-lg shadow-2xl w-full max-w-6xl mx-auto mb-8 overflow-hidden"
              >
                {/* Red Header */}
                <div className="bg-[rgb(228,198,191)] text-[rgb(88,104,127)] px-8 py-3 flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <span className="font-bold text-lg tracking-wide">BOARDING PASS</span>
                    <Plane className="h-5 w-5" />
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-sm tracking-wider">BOARDING PASS</span>
                  </div>
                </div>

                {/* Main Body */}
                <div className="px-8 py-6 bg-white relative">
                  {/* Left Barcode */}
                  <div className="absolute left-4 top-4 bottom-4 w-8 flex flex-col justify-between">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-[rgb(88,104,127)] rounded-full"
                        style={{
                          height: `${Math.random() * 3 + 1}px`,
                          width: `${Math.random() * 2 + 1}px`,
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Main Content */}
                  <div className="ml-16 mr-20">
                    <div className="flex justify-between items-start mb-6 flex-wrap gap-8">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">Passenger</p>
                        <p className="font-bold text-lg">You</p>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">Flight</p>
                        <p className="font-bold text-lg">LOVE2026</p>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">From</p>
                        <p className="font-bold text-lg">Everywhere</p>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">To</p>
                        <p className="font-bold text-lg">Mexico City</p>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">Date</p>
                        <p className="font-bold text-lg">FRI 03 APR</p>
                      </div>
                    </div>

                    {/* Center Airplane */}
                    <div className="text-center mb-6">
                      <Plane className="h-8 w-8 text-[rgb(88,104,127)] mx-auto mb-2" />
                      <div className="flex justify-center space-x-1">
                        {[...Array(12)].map((_, i) => (
                          <span key={i} className="text-[rgb(88,104,127)]">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-dashed border-gray-300 my-4"></div>

                    <div className="flex justify-between items-start text-sm flex-wrap gap-8">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">Seat</p>
                        <p className="font-bold text-lg">VIP</p>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">Class</p>
                        <p className="font-bold text-lg">First</p>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">Duration</p>
                        <p className="font-bold text-lg">Weekend</p>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">Boarding</p>
                        <p className="font-bold text-lg">Anytime</p>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">Gate</p>
                        <p className="font-bold text-lg">LOVE</p>
                      </div>
                    </div>
                  </div>

                  {/* Right QR Code */}
                  <div className="absolute right-4 top-4 w-12 h-12 border-2 border-[rgb(88,104,127)] flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-px">
                      {[...Array(9)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1 h-1 ${Math.random() > 0.5 ? "bg-[rgb(88,104,127)]" : "bg-transparent"}`}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Barcode */}
                  <div className="absolute bottom-4 right-4 flex space-x-px">
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-[rgb(88,104,127)]"
                        style={{
                          width: `${Math.random() * 2 + 1}px`,
                          height: "20px",
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              <Button
                onClick={handleEnterWedding}
                size="lg"
                className="bg-[rgb(228,198,191)] hover:bg-[rgb(228,198,191)]/80 text-[rgb(88,104,127)] font-semibold px-12 py-4 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Enter the Wedding Experience
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[rgb(224,241,231)]">
      {/* Immersive Header */}
      <header className="relative h-screen overflow-hidden">
        {/* Background with parallax effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(88,104,127)] via-[rgb(125,146,175)] to-[rgb(228,198,191)]">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-4 h-4 bg-white/30 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-32 w-6 h-6 bg-white/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-white/40 rounded-full animate-bounce delay-500"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            {/* Elegant Arrival Animation */}
            <div
              className={`transform transition-all duration-3000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
            >
              <div className="mb-12">
                <div className="inline-flex items-center space-x-4 mb-8">
                  <div className="w-px h-12 bg-white/50"></div>
                  <Image
                    src="/favicon.png"
                    alt="Wedding Logo"
                    width={32}
                    height={32}
                    className="rounded-full shadow-lg"
                  />
                  <div className="w-px h-12 bg-white/50"></div>
                </div>
                <h1 className="font-serif text-8xl md:text-9xl mb-6 font-light tracking-wide">
                  <span className="italic">Gaby</span>
                  <span className="mx-8 text-[rgb(242,230,229)]">&</span>
                  <span className="italic">Conor</span>
                </h1>
                <p className="text-2xl font-light tracking-[0.3em] uppercase opacity-90">Are Getting Married</p>
              </div>

              {/* Immersive Date Display */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-12 mb-12">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="space-y-4">
                    <Calendar className="h-12 w-12 mx-auto opacity-80" />
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] opacity-70 mb-2">Date</p>
                      <p className="text-2xl font-serif">Friday</p>
                      <p className="text-3xl font-serif">April 3rd, 2026</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <MapPin className="h-12 w-12 mx-auto opacity-80" />
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] opacity-70 mb-2">Location</p>
                      <p className="text-3xl font-serif">Mexico City</p>
                      <p className="text-xl opacity-80">Mexico</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Users className="h-12 w-12 mx-auto opacity-80" />
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] opacity-70 mb-2">Celebration</p>
                      <p className="text-3xl font-serif">Extended</p>
                      <p className="text-xl opacity-80">Weekend</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xl font-light opacity-90 mb-8">
                Pack your bags & book your flights for an unforgettable adventure
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Immersive Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[rgb(228,198,191)]/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[rgb(88,104,127)] to-[rgb(125,146,175)] rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-white fill-current" />
              </div>
              <span className="font-serif text-xl text-[rgb(88,104,127)]">Our Wedding Journey</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { name: "Our Home", icon: Heart, href: "#our-story", current: true },
                { name: "Travel", icon: Plane, href: "/travel" },
                { name: "CDMX Guide", icon: Navigation, href: "/guide" },
                { name: "RSVP", icon: Users, href: "#rsvp", disabled: true },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.disabled ? "#" : item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 group ${
                    item.current
                      ? "bg-[rgb(88,104,127)] text-white shadow-lg"
                      : item.disabled
                      ? "text-gray-400 cursor-not-allowed opacity-50"
                      : "text-[rgb(88,104,127)] hover:text-[rgb(125,146,175)] hover:bg-[rgb(88,104,127)]/10"
                  }`}
                  onClick={item.disabled ? (e) => e.preventDefault() : undefined}
                >
                  <item.icon className={`h-4 w-4 ${!item.disabled ? "group-hover:scale-110" : ""} transition-transform`} />
                  <span className="font-light tracking-wide">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Immersive Story Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-[rgb(242,230,229)] to-[rgb(125,146,175)]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <h2 className="font-serif text-6xl text-[rgb(88,104,127)] mb-8 font-light">Welcome to Our Adventure</h2>
              <div className="w-24 h-px bg-[rgb(228,198,191)] mx-auto mb-8"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 text-left">
                <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-[rgb(228,198,191)]/30">
                  <h3 className="text-2xl font-serif text-[rgb(88,104,127)] mb-4">Our Mexico City Home</h3>
                  <p className="text-[rgb(88,104,127)] leading-relaxed font-light">
                    We&apos;ve called Mexico City home for the past few years, and now we can&apos;t wait to share this incredible
                    city with all of you. From the vibrant culture to the amazing food, it&apos;s become such a special place
                    for us.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-[rgb(228,198,191)]/30">
                  <h3 className="text-2xl font-serif text-[rgb(88,104,127)] mb-4">Extended Weekend</h3>
                  <p className="text-[rgb(88,104,127)] leading-relaxed font-light">
                    Join us for an extended weekend full of love, tequila, and unforgettable moments as we celebrate our
                    biggest adventure yet. We&apos;ve planned something truly special for everyone.
                  </p>
                </div>

                {/* WhatsApp Updates Integration */}
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-[rgb(228,198,191)]/30 shadow-lg mb-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <span className="text-2xl">💬</span>
                      <h3 className="text-2xl font-serif text-[rgb(88,104,127)]">Stay Updated</h3>
                    </div>
                    <p className="text-[rgb(88,104,127)] font-light mb-6">
                      Join our WhatsApp group for venue details, group dinner plans, and travel coordination
                    </p>

                    <Button
                      size="sm"
                      className="bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
                    >
                      <span className="mr-2 text-lg">📱</span>
                      Join WhatsApp Group
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[rgb(125,146,175)] to-[rgb(228,198,191)] rounded-3xl transform rotate-3 opacity-20"></div>
                <div className="relative bg-white p-6 rounded-3xl shadow-2xl">
                  <Image
                    src="/images/carousel/IMG_2498.jpg"
                    alt="Our Save the Date Design"
                    width={400}
                    height={300}
                    className="rounded-2xl w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Photo Carousel */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-6 mb-12">
          <div className="text-center">
            <h2 className="font-serif text-5xl text-[rgb(88,104,127)] mb-4 font-light">Our Adventures Together</h2>
            <p className="text-lg text-[rgb(125,146,175)] font-light">
              A glimpse into the journeys that brought us here
            </p>
          </div>
        </div>

        {/* Infinite Horizontal Scroll - Collage Style */}
        <div className="relative h-[900px] overflow-hidden">
          {/* Row 1 - Top */}
          <div 
            className={`absolute top-0 flex animate-scroll-slow`}
            style={getAnimationStyle('row1')}
            onMouseEnter={() => setHoveredRow('row1')}
            onMouseLeave={() => setHoveredRow(null)}
          >
            <div className="flex space-x-8 shrink-0">
              {[
                { src: "/images/carousel/CA861E7D-0C70-4710-ADB6-E62A2FBEA9CE.JPEG", alt: "Our adventures together", size: "large" },
                { src: "/images/carousel/CB07FF00-F7F1-4BE6-B788-FC282CEF2916.JPG", alt: "Beautiful moments captured", size: "square" },
                { src: "/images/carousel/FullSizeRender.JPG", alt: "Exploring new places", size: "tall" },
                { src: "/images/carousel/IMG_0006.JPG", alt: "Travel memories", size: "wide" },
                { src: "/images/carousel/IMG_0030.JPG", alt: "Special moments", size: "square" },
                { src: "/images/carousel/IMG_1323.JPG", alt: "Memorable", size: "tall" },
                { src: "/images/carousel/IMG_0261.JPG", alt: "Memories made", size: "square" },
                { src: "/images/carousel/IMG_0382.JPG", alt: "Fun times", size: "square" },
                { src: "/images/carousel/IMG_0570.JPG", alt: "Exploring", size: "tall" },
                { src: "/images/carousel/IMG_0587.JPG", alt: "Travel", size: "tall" },
                { src: "/images/carousel/IMG_0612.JPG", alt: "Special moments", size: "tall" },
                { src: "/images/carousel/IMG_0709.JPG", alt: "Special", size: "square" },
                { src: "/images/carousel/IMG_0957.JPG", alt: "Scenic overlook", size: "wide" },
                { src: "/images/carousel/IMG_0758.JPG", alt: "Memorable", size: "tall" },
                { src: "/images/carousel/IMG_08183.JPG", alt: "Beautiful", size: "square" },
              ].map((photo, index) => (
                <div key={index} className="relative group shrink-0">
                  <div
                    className={`bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${
                      photo.size === "large"
                        ? "w-[350px] h-[250px]"
                        : photo.size === "square"
                          ? "w-[220px] h-[220px]"
                          : photo.size === "tall"
                            ? "w-[240px] h-[300px]"
                            : "w-[320px] h-[200px]" // wide
                    }`}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[rgb(125,146,175)] to-[rgb(228,198,191)] rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative bg-white p-3 rounded-2xl h-full">
                      <Image
                        src={photo.src || "/placeholder.svg"}
                        alt={photo.alt}
                        width={
                          photo.size === "large" ? 350 : photo.size === "wide" ? 320 : photo.size === "tall" ? 240 : 220
                        }
                        height={
                          photo.size === "large" ? 250 : photo.size === "wide" ? 200 : photo.size === "tall" ? 300 : 220
                        }
                        className="w-full h-full object-cover rounded-xl"
                        loading="lazy"
                        onLoad={() => handleImageLoad(photo.src)}
                        onError={(e) => handleImageError(e, photo.src)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Middle (offset and different speed) */}
          <div 
            className={`absolute top-[300px] flex animate-scroll-medium`}
            style={getAnimationStyle('row2')}
            onMouseEnter={() => setHoveredRow('row2')}
            onMouseLeave={() => setHoveredRow(null)}
          >
            <div className="flex space-x-6 shrink-0">
              {[
                { src: "/images/carousel/IMG_0256.JPG", alt: "Beautiful destinations", size: "wide" },
                { src: "/images/carousel/IMG_2122.JPG", alt: "Museum visit", size: "tall" },
                { src: "/images/carousel/IMG_2722.JPG", alt: "Road trip adventure", size: "large" },
                { src: "/images/carousel/IMG_3705.JPG", alt: "Historic site", size: "tall" },
                { src: "/images/carousel/IMG_0983.JPG", alt: "Boat ride", size: "tall" },
                { src: "/images/carousel/IMG_1030.JPG", alt: "Art gallery", size: "tall" },
                { src: "/images/carousel/IMG_7970.JPG", alt: "Local festival", size: "square" },
                { src: "/images/carousel/IMG_2363.JPG", alt: "City exploration", size: "tall" },
                { src: "/images/carousel/IMG_1879.JPG", alt: "Memories", size: "square" },
                { src: "/images/carousel/IMG_1279.JPG", alt: "Special", size: "square" },
                { src: "/images/carousel/IMG_9137.JPG", alt: "Another adventure", size: "large" },
                { src: "/images/carousel/IMG_2298.JPG", alt: "Fun times", size: "square" },
                { src: "/images/carousel/IMG_2283.JPG", alt: "Exploring", size: "tall" },
                { src: "/images/carousel/IMG_2168.JPG", alt: "Special", size: "square" },
                { src: "/images/carousel/IMG_2875.JPG", alt: "Memorable", size: "tall" },
                { src: "/images/carousel/IMG_3186.JPG", alt: "Memories", size: "square" },
                { src: "/images/carousel/IMG_6900.JPG", alt: "Memories", size: "square" },
              ].map((photo, index) => (
                <div key={index} className="relative group shrink-0">
                  <div
                    className={`bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${
                      photo.size === "large"
                        ? "w-[340px] h-[220px]"
                        : photo.size === "square"
                          ? "w-[200px] h-[200px]"
                          : photo.size === "tall"
                            ? "w-[200px] h-[280px]"
                            : "w-[300px] h-[180px]" // wide
                    }`}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[rgb(228,198,191)] to-[rgb(125,146,175)] rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative bg-white p-3 rounded-2xl h-full">
                      <Image
                        src={photo.src || "/placeholder.svg"}
                        alt={photo.alt}
                        width={
                          photo.size === "large" ? 340 : photo.size === "wide" ? 300 : photo.size === "tall" ? 200 : 200
                        }
                        height={
                          photo.size === "large" ? 220 : photo.size === "wide" ? 180 : photo.size === "tall" ? 280 : 200
                        }
                        className="w-full h-full object-cover rounded-xl"
                        loading="lazy"
                        onLoad={() => handleImageLoad(photo.src)}
                        onError={(e) => handleImageError(e, photo.src)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - Bottom (different speed again) */}
          <div 
            className={`absolute top-[600px] flex animate-scroll-fast`}
            style={getAnimationStyle('row3')}
            onMouseEnter={() => setHoveredRow('row3')}
            onMouseLeave={() => setHoveredRow(null)}
          >
            <div className="flex space-x-7 shrink-0">
              {[
                { src: "/images/carousel/IMG_0825.JPG", alt: "Morning coffee", size: "square" },
                { src: "/images/carousel/IMG_0231.JPG", alt: "Adventure awaits", size: "tall" },
                { src: "/images/carousel/IMG_3925.JPG", alt: "Sunset drinks", size: "square" },
                { src: "/images/carousel/IMG_0961.JPG", alt: "Architecture tour", size: "tall" },
                { src: "/images/carousel/IMG_0978.JPG", alt: "Local cuisine", size: "square" },
                { src: "/images/carousel/IMG_1061.JPG", alt: "Garden stroll", size: "wide" },
                { src: "/images/carousel/IMG_3753.JPG", alt: "Beautiful", size: "tall" },
                { src: "/images/carousel/IMG_1080.JPG", alt: "Evening lights", size: "square" },
                { src: "/images/carousel/IMG_1177.JPG", alt: "Another adventure", size: "large" },
                { src: "/images/carousel/IMG_1203.JPG", alt: "Fun times", size: "square" },
                { src: "/images/carousel/IMG_2498.jpg", alt: "Beach walk", size: "wide" },
                { src: "/images/carousel/IMG_1220.JPG", alt: "Exploring", size: "tall" },
                { src: "/images/carousel/IMG_1229.JPG", alt: "Travel", size: "wide" },
                { src: "/images/carousel/PNGimage.png", alt: "Cooking class together", size: "wide" },
                { src: "/images/carousel/IMG_1432.JPG", alt: "Beautiful", size: "wide" },
                { src: "/images/carousel/IMG_0266.JPG", alt: "Another adventure", size: "square" },
                { src: "/images/carousel/IMG_1966.JPG", alt: "Memories", size: "square" },
              ].map((photo, index) => (
                <div key={index} className="relative group shrink-0">
                  <div
                    className={`bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl ${
                      photo.size === "square"
                        ? "w-[210px] h-[210px]"
                        : photo.size === "tall"
                          ? "w-[210px] h-[270px]"
                          : "w-[310px] h-[190px]" // wide
                    }`}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-[rgb(125,146,175)] to-[rgb(242,230,229)] rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative bg-white p-3 rounded-2xl h-full">
                      <Image
                        src={photo.src || "/placeholder.svg"}
                        alt={photo.alt}
                        width={photo.size === "square" ? 210 : photo.size === "tall" ? 210 : 310}
                        height={photo.size === "square" ? 210 : photo.size === "tall" ? 270 : 190}
                        className="w-full h-full object-cover rounded-xl"
                        loading="lazy"
                        onLoad={() => handleImageLoad(photo.src)}
                        onError={(e) => handleImageError(e, photo.src)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>

        <div className="text-center mt-12">
          <p className="text-[rgb(125,146,175)] font-light italic">
            &ldquo;Not all who wander are lost&rdquo; - and we&apos;ve wandered quite a bit together
          </p>
        </div>
      </section>

      {/* Immersive Venue Section */}
      <section className="py-24 px-6 bg-[rgb(88,104,127)] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-full"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-6xl text-white mb-8 font-light">The Venue</h2>
              <p className="text-2xl text-[rgb(224,241,231)] font-light">
                Where architectural beauty meets celebration
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-[rgb(228,198,191)] to-[rgb(224,241,231)] rounded-3xl transform -rotate-2 opacity-20"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                  <Image
                    src="/images/weddingVenue.jpg"
                    alt="Our Wedding Venue"
                    width={600}
                    height={400}
                    className="rounded-2xl w-full h-auto"
                  />
                </div>
              </div>

              <div className="space-y-8 text-white">
                <div>
                  <h3 className="text-3xl font-serif mb-6 font-light">Architectural Marvel</h3>
                  <p className="text-[rgb(224,241,231)] leading-relaxed font-light text-lg">
                    This magnificent estate, designed by a renowned architect, stands as a testament to Mexican
                    architectural excellence. The classical stonework and ornate details create an atmosphere of
                    timeless elegance.
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-serif mb-6 font-light">Garden Paradise</h3>
                  <p className="text-[rgb(224,241,231)] leading-relaxed font-light text-lg">
                    Now serving as a museum, the sprawling gardens are adorned with lush tropical vegetation, creating
                    an intimate paradise perfect for our wedding celebration.
                  </p>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mexico City Guide Section */}
      <section className="py-24 px-6 bg-[rgb(224,241,231)]">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-6xl text-[rgb(88,104,127)] mb-8 font-light">Explore Mexico City</h2>
              <p className="text-2xl text-[rgb(88,104,127)] font-light mb-4">Easter Weekend Adventure</p>
              <p className="text-lg text-[rgb(88,104,127)] font-light max-w-3xl mx-auto">
                Since our wedding falls on Easter weekend, we encourage you to make it a long weekend! Mexico City has
                incredible food, culture, and experiences waiting for you.
              </p>
            </div>

            {/* Suggested Itinerary */}
            <div className="mb-16">
              <h3 className="text-4xl font-serif text-[rgb(88,104,127)] text-center mb-12 font-light">
                Suggested Long Weekend Itinerary
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-[rgb(228,198,191)]/30">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-[rgb(88,104,127)] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">WED</span>
                    </div>
                    <h4 className="text-lg font-serif text-[rgb(88,104,127)] mb-2">April 1st</h4>
                    <p className="text-sm text-[rgb(88,104,127)] uppercase tracking-wide">Arrival Day</p>
                  </div>
                  <ul className="text-sm text-[rgb(88,104,127)] space-y-2">
                    <li>• Arrive & check into hotel</li>
                    <li>• Welcome drinks (location TBA)</li>
                    <li>• Explore Roma Norte neighborhood</li>
                    <li>• Dinner at local favorites</li>
                  </ul>
                </div>

                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-[rgb(228,198,191)]/30">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-[rgb(125,146,175)] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">THU</span>
                    </div>
                    <h4 className="text-lg font-serif text-[rgb(88,104,127)] mb-2">April 2nd</h4>
                    <p className="text-sm text-[rgb(88,104,127)] uppercase tracking-wide">Explore Day</p>
                  </div>
                  <ul className="text-sm text-[rgb(88,104,127)] space-y-2">
                    <li>• Visit Frida Kahlo Museum</li>
                    <li>• Lunch in Coyoacán</li>
                    <li>• Afternoon in Xochimilco</li>
                    <li>• Pre-wedding celebration</li>
                  </ul>
                </div>

                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-[rgb(228,198,191)]/30 ring-2 ring-[rgb(228,198,191)]">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-[rgb(228,198,191)] rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="h-6 w-6 text-[rgb(88,104,127)] fill-current" />
                    </div>
                    <h4 className="text-lg font-serif text-[rgb(88,104,127)] mb-2">April 3rd</h4>
                    <p className="text-sm text-[rgb(88,104,127)] uppercase tracking-wide font-semibold">Wedding Day</p>
                  </div>
                  <ul className="text-sm text-[rgb(88,104,127)] space-y-2">
                    <li>• Morning at leisure</li>
                    <li>• Wedding ceremony</li>
                    <li>• Reception & celebration</li>
                    <li>• Dancing until late!</li>
                  </ul>
                </div>

                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-[rgb(228,198,191)]/30">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-[rgb(125,146,175)] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">SAT</span>
                    </div>
                    <h4 className="text-lg font-serif text-[rgb(88,104,127)] mb-2">April 4th</h4>
                    <p className="text-sm text-[rgb(88,104,127)] uppercase tracking-wide">Recovery Day</p>
                  </div>
                  <ul className="text-sm text-[rgb(88,104,127)] space-y-2">
                    <li>• Brunch together</li>
                    <li>• Visit Chapultepec Park</li>
                    <li>• Anthropology Museum</li>
                    <li>• Farewell dinner</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-[rgb(228,198,191)]/30 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-[rgb(88,104,127)] to-[rgb(125,146,175)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🍹</span>
                </div>
                <h3 className="text-xl font-serif text-[rgb(88,104,127)] mb-4">Best Bars</h3>
                <p className="text-[rgb(88,104,127)] font-light">
                  Our favorite spots for mezcal, cocktails, and late-night fun
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-[rgb(228,198,191)]/30 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-[rgb(88,104,127)] to-[rgb(125,146,175)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🌮</span>
                </div>
                <h3 className="text-xl font-serif text-[rgb(88,104,127)] mb-4">Restaurants</h3>
                <p className="text-[rgb(88,104,127)] font-light">From street tacos to fine dining - our go-to spots</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-[rgb(228,198,191)]/30 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-[rgb(88,104,127)] to-[rgb(125,146,175)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-serif text-[rgb(88,104,127)] mb-4">Museums</h3>
                <p className="text-[rgb(88,104,127)] font-light">
                  Art, history, and culture - the best Mexico City has to offer
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-[rgb(228,198,191)]/30 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-[rgb(88,104,127)] to-[rgb(125,146,175)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-serif text-[rgb(88,104,127)] mb-4">Experiences</h3>
                <p className="text-[rgb(88,104,127)] font-light">Unique activities and hidden gems we love</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-[rgb(88,104,127)] font-light mb-6">
                We&apos;ll be sharing more detailed recommendations and insider tips soon!
              </p>
              <Link href="/guide">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[rgb(88,104,127)] to-[rgb(125,146,175)] hover:from-[rgb(125,146,175)] hover:to-[rgb(88,104,127)] text-white px-12 py-4 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Get Our Complete Mexico City Guide
                </Button>
              </Link>
              {/* WhatsApp Updates Section */}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive RSVP Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[rgb(242,230,229)] to-[rgb(125,146,175)]">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-6xl text-[rgb(88,104,127)] mb-12 font-light">Ready for Takeoff?</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: Champagne, title: "Love & Celebration", desc: "An unforgettable weekend of joy" },
                { icon: Music, title: "Tequila & Dancing", desc: "Mexican hospitality at its finest" },
                { icon: Heart, title: "Memories Forever", desc: "Moments that will last a lifetime" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-[rgb(228,198,191)]/30 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[rgb(88,104,127)] to-[rgb(125,146,175)] rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif text-[rgb(88,104,127)] mb-4">{item.title}</h3>
                  <p className="text-[rgb(88,104,127)] font-light">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-12 rounded-3xl border border-[rgb(228,198,191)]/30 shadow-2xl">
              <p className="text-xl text-[rgb(88,104,127)] mb-8 font-light">
                Formal invitations and detailed itinerary coming soon
              </p>

              <div className="space-y-6">
                <Button
                  size="lg"
                  disabled
                  className="bg-gray-400 text-gray-600 px-12 py-4 rounded-full text-lg shadow-xl mr-4 cursor-not-allowed opacity-50"
                >
                  Save Your Seat
                </Button>

                <div className="text-[rgb(88,104,127)] font-light">or</div>

                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold"
                >
                  <span className="mr-3 text-xl">📱</span>
                  Get Updates via WhatsApp
                </Button>
              </div>

              <p className="text-sm text-[rgb(125,146,175)] mt-6 font-light">
                Join our WhatsApp group for real-time wedding updates, group plans, and travel coordination
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-[rgb(88,104,127)] text-white">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-6 mb-6">
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                <Plane className="h-6 w-6" />
              </div>
              <span className="font-serif text-4xl tracking-wide">Gaby & Conor</span>
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 fill-current" />
              </div>
            </div>
            <p className="text-2xl font-light mb-2">Friday, April 3, 2026</p>
            <p className="text-[rgb(224,241,231)] text-lg">Mexico City • Private Venue</p>
          </div>

          <div className="text-sm text-[rgb(224,241,231)] uppercase tracking-[0.2em] font-light">
            Extended Weekend • Love • Tequila • Unforgettable Moments
          </div>
        </div>
      </footer>
    </div>
  )
}
