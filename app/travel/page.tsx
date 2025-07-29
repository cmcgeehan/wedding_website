"use client"

import Image from "next/image"
import {
  Plane,
  MapPin,
  Car,
  Clock,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Star,
  Heart,
  Users,
  Menu,
  X,
  Navigation,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function TravelPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[40vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-[rgb(88,104,127)]">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 md:top-20 left-10 md:left-20 w-3 md:w-4 h-3 md:h-4 bg-white/30 rounded-full animate-ping"></div>
          <div className="absolute top-20 md:top-40 right-16 md:right-32 w-4 md:w-6 h-4 md:h-6 bg-white/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-16 md:bottom-32 left-1/4 w-2 md:w-3 h-2 md:h-3 bg-white/40 rounded-full animate-bounce delay-500"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4 md:px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 md:space-x-4 mb-6 md:mb-8">
              <div className="w-px h-8 md:h-12 bg-white/50"></div>
              <Plane className="h-6 w-6 md:h-8 md:w-8" />
              <div className="w-px h-8 md:h-12 bg-white/50"></div>
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl mb-4 md:mb-6 font-light tracking-wide" style={{ 
              fontFamily: 'Adobe Lindsey Signature, serif',
              WebkitTextStroke: '2px white'
            }}>Travel Guide</h1>
            <p className="text-lg md:text-2xl font-light tracking-[0.1em] md:tracking-[0.2em] uppercase opacity-90 mb-2 md:mb-4">
              Your Journey to Mexico City
            </p>
            <p className="text-sm md:text-lg font-light opacity-80 max-w-2xl mx-auto">
              Everything you need to know for a smooth trip to our wedding celebration
            </p>
          </div>
        </div>
      </header>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[rgb(228,198,191)]/20">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 md:space-x-3">
              <div className="flex items-center justify-center">
                <Image
                  src="/monogram.svg"
                  alt="Gaby & Conor Monogram"
                  width={32}
                  height={32}
                  className="rounded-full md:w-12 md:h-12"
                />
              </div>
              <span className="font-serif text-xl md:text-2xl text-[rgb(88,104,127)]" style={{ 
                fontFamily: 'Adobe Lindsey Signature, serif',
                WebkitTextStroke: '1px rgb(88,104,127)'
              }}>Gaby & Conor</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 md:space-x-8">
              {[
                { name: "Homepage", icon: Heart, href: "/" },
                { name: "Travel", icon: Plane, href: "/travel", current: true },
                { name: "CDMX Guide", icon: Navigation, href: "/guide" },
                { name: "RSVP", icon: Users, href: "/#rsvp", disabled: true },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.disabled ? "#" : item.href}
                  className={`flex items-center space-x-2 px-3 md:px-4 py-2 rounded-full transition-all duration-300 group ${
                    item.current
                      ? "bg-[rgb(88,104,127)] text-white shadow-lg"
                      : item.disabled
                      ? "text-gray-400 cursor-not-allowed opacity-50"
                      : "text-[rgb(88,104,127)] hover:text-[rgb(125,146,175)] hover:bg-[rgb(88,104,127)]/10"
                  }`}
                  onClick={item.disabled ? (e) => e.preventDefault() : undefined}
                >
                  <item.icon className={`h-4 w-4 ${!item.disabled ? "group-hover:scale-110" : ""} transition-transform`} />
                  <span className="font-light tracking-wide text-sm md:text-base">{item.name}</span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-3 rounded-lg bg-[rgb(88,104,127)] text-white shadow-lg hover:bg-[rgb(125,146,175)] transition-colors duration-200 border-2 border-white/20"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-[rgb(228,198,191)]/20 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
              <div className="flex flex-col space-y-1 pt-4 px-2">
                {[
                  { name: "Homepage", icon: Heart, href: "/" },
                  { name: "Travel", icon: Plane, href: "/travel", current: true },
                  { name: "CDMX Guide", icon: Navigation, href: "/guide" },
                  { name: "RSVP", icon: Users, href: "/#rsvp", disabled: true },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.disabled ? "#" : item.href}
                    className={`flex items-center space-x-3 px-4 py-4 rounded-lg transition-all duration-300 text-lg ${
                      item.current
                        ? "bg-[rgb(88,104,127)] text-white shadow-md"
                        : item.disabled
                        ? "text-gray-400 cursor-not-allowed opacity-50"
                        : "text-[rgb(88,104,127)] hover:text-[rgb(125,146,175)] hover:bg-[rgb(88,104,127)]/10"
                    }`}
                    onClick={item.disabled ? (e) => e.preventDefault() : undefined}
                  >
                    <item.icon className="h-6 w-6" />
                    <span className="font-medium tracking-wide">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Content - Single Page Layout */}
      <main className="py-8 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl space-y-16 md:space-y-24">
          {/* Flights Section */}
          <section id="flights" className="space-y-8 md:space-y-12 py-8 md:py-16 px-4 md:px-6 bg-gradient-to-r from-[rgb(242,230,229)] to-[rgb(125,146,175)] -mx-4 md:-mx-6 rounded-2xl md:rounded-3xl">
            <div className="text-center mb-8 md:mb-12">
              <div className="flex justify-center mb-4 md:mb-6">
                <Image
                  src="/monogram.svg"
                  alt="Wedding Logo"
                  width={80}
                  height={80}
                  className="rounded-full shadow-lg md:w-24 md:h-24"
                />
              </div>
              <h2 className="font-serif text-3xl md:text-5xl text-[rgb(88,104,127)] mb-3 md:mb-4 font-light">Getting to Mexico City</h2>
              <p className="text-base md:text-lg text-[rgb(125,146,175)] font-light">
                Important flight information for your journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Correct Airport */}
              <div className="bg-white/60 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-[rgb(228,198,191)]/30 shadow-lg">
                <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[rgb(88,104,127)] rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-serif text-[rgb(88,104,127)] mb-1 md:mb-2">✈️ Fly Into MEX</h3>
                    <p className="text-[rgb(125,146,175)] font-light text-sm md:text-base">Recommended Airport</p>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <div className="bg-[rgb(242,230,229)] p-3 md:p-4 rounded-xl border border-[rgb(228,198,191)]">
                    <h4 className="font-semibold text-[rgb(88,104,127)] mb-1 md:mb-2 text-sm md:text-base">Benito Juárez International Airport</h4>
                    <p className="text-[rgb(88,104,127)] text-xs md:text-sm mb-1 md:mb-2">
                      Airport Code: <strong>MEX</strong>
                    </p>
                    <p className="text-[rgb(88,104,127)] text-xs md:text-sm">
                      This is Mexico City&apos;s main international airport, located much closer to the city center and our
                      wedding venue.
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 md:space-x-3 text-[rgb(88,104,127)]">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="font-light text-sm md:text-base">~30 minutes to city center</span>
                  </div>

                  <div className="flex items-center space-x-2 md:space-x-3 text-[rgb(88,104,127)]">
                    <Clock className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="font-light text-sm md:text-base">Direct flights from most major cities</span>
                  </div>
                </div>
              </div>

              {/* Wrong Airport Warning */}
              <div className="bg-white/60 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-red-200 shadow-lg">
                <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-red-500 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-serif text-red-700 mb-1 md:mb-2">⚠️ Avoid AIFA</h3>
                    <p className="text-red-600 font-light text-sm md:text-base">Not Recommended</p>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <div className="bg-red-50 p-3 md:p-4 rounded-xl border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-1 md:mb-2 text-sm md:text-base">Felipe Ángeles International Airport</h4>
                    <p className="text-red-700 text-xs md:text-sm mb-1 md:mb-2">
                      Airport Code: <strong>NLU</strong>
                    </p>
                    <p className="text-red-700 text-xs md:text-sm">
                      This newer airport is much farther from the city center and will add significant travel time to
                      your journey.
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 md:space-x-3 text-red-700">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="font-light text-sm md:text-base">~90+ minutes to city center</span>
                  </div>

                  <div className="flex items-center space-x-2 md:space-x-3 text-red-700">
                    <Clock className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="font-light text-sm md:text-base">Limited flight options</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Transport Section */}
          <section id="transport" className="space-y-8 md:space-y-12 py-8 md:py-16 px-4 md:px-6 bg-gradient-to-r from-[rgb(125,146,175)] to-[rgb(228,198,191)] -mx-4 md:-mx-6 rounded-2xl md:rounded-3xl">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="font-serif text-3xl md:text-5xl text-white mb-3 md:mb-4 font-light">Airport to Hotel</h2>
              <p className="text-base md:text-lg text-white/80 font-light">
                Getting from MEX Airport to your accommodation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Uber Recommendation */}
              <div className="bg-white/60 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-[rgb(228,198,191)]/30 shadow-lg">
                <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[rgb(88,104,127)] rounded-full flex items-center justify-center">
                    <Car className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-serif text-[rgb(88,104,127)] mb-1 md:mb-2">🚗 Uber (Recommended)</h3>
                    <p className="text-[rgb(88,104,127)] font-semibold text-sm md:text-base">Most Cost-Effective</p>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <div className="bg-[rgb(242,230,229)] p-3 md:p-4 rounded-xl border border-[rgb(228,198,191)]">
                    <div className="flex justify-between items-center mb-1 md:mb-2">
                      <span className="font-semibold text-[rgb(88,104,127)] text-sm md:text-base">Estimated Cost:</span>
                      <span className="text-[rgb(88,104,127)] font-bold text-sm md:text-base">$8-15 USD</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-[rgb(88,104,127)] text-sm md:text-base">Travel Time:</span>
                      <span className="text-[rgb(88,104,127)] font-bold text-sm md:text-base">25-45 minutes</span>
                    </div>
                  </div>

                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-start space-x-2 md:space-x-3">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[rgb(88,104,127)] mt-0.5 flex-shrink-0" />
                      <span className="text-[rgb(88,104,127)] font-light text-sm md:text-base">Much cheaper than airport taxis</span>
                    </div>
                    <div className="flex items-start space-x-2 md:space-x-3">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[rgb(88,104,127)] mt-0.5 flex-shrink-0" />
                      <span className="text-[rgb(88,104,127)] font-light text-sm md:text-base">Fixed pricing, no surprises</span>
                    </div>
                    <div className="flex items-start space-x-2 md:space-x-3">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[rgb(88,104,127)] mt-0.5 flex-shrink-0" />
                      <span className="text-[rgb(88,104,127)] font-light text-sm md:text-base">Easy to request via app</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Taxi Warning */}
              <div className="bg-white/60 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-orange-200 shadow-lg">
                <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-500 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-serif text-orange-700 mb-1 md:mb-2">🚕 Airport Taxi</h3>
                    <p className="text-orange-600 font-semibold text-sm md:text-base">Much More Expensive</p>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <div className="bg-orange-50 p-3 md:p-4 rounded-xl border border-orange-200">
                    <div className="flex justify-between items-center mb-1 md:mb-2">
                      <span className="font-semibold text-orange-800 text-sm md:text-base">Estimated Cost:</span>
                      <span className="text-orange-700 font-bold text-sm md:text-base">$40-60 USD</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-orange-800 text-sm md:text-base">Travel Time:</span>
                      <span className="text-orange-700 font-bold text-sm md:text-base">30-50 minutes</span>
                    </div>
                  </div>

                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-start space-x-2 md:space-x-3">
                      <AlertTriangle className="h-4 w-4 md:h-5 md:w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-[rgb(88,104,127)] font-light text-sm md:text-base">3-4x more expensive than Uber</span>
                    </div>
                    <div className="flex items-start space-x-2 md:space-x-3">
                      <AlertTriangle className="h-4 w-4 md:h-5 md:w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-[rgb(88,104,127)] font-light text-sm md:text-base">Fixed high rates for tourists</span>
                    </div>
                    <div className="flex items-start space-x-2 md:space-x-3">
                      <AlertTriangle className="h-4 w-4 md:h-5 md:w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-[rgb(88,104,127)] font-light text-sm md:text-base">Long queues during busy times</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Hotels Section */}
          <section id="hotels" className="space-y-8 md:space-y-12 py-8 md:py-16 px-4 md:px-6 bg-gradient-to-r from-[rgb(228,198,191)] to-[rgb(242,230,229)] -mx-4 md:-mx-6 rounded-2xl md:rounded-3xl">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="font-serif text-3xl md:text-5xl text-[rgb(88,104,127)] mb-3 md:mb-4 font-light">Where to Stay</h2>
              <p className="text-base md:text-lg text-[rgb(125,146,175)] font-light">
                To make your travel planning easier, we&apos;ve reserved room blocks at three nearby hotels. Each offers a comfortable stay, convenient access to the venue, and a special rate just for our guests.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Parque España */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[rgb(228,198,191)]/30 shadow-lg overflow-hidden">
                <div className="relative h-48 md:h-64">
                  <Image
                    src="/images/hotels/parque-espana.jpg"
                    alt="Parque España"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-[rgb(88,104,127)] text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                    Recommended
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <h3 className="text-lg md:text-2xl font-serif text-[rgb(88,104,127)]">Parque España</h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                    <div className="flex items-center space-x-2 md:space-x-3">
                      <MapPin className="h-4 w-4 md:h-5 md:w-5 text-[rgb(125,146,175)]" />
                      <span className="text-[rgb(88,104,127)] font-light text-sm md:text-base">Roma Norte Neighborhood</span>
                    </div>

                    <div className="flex items-center space-x-2 md:space-x-3">
                      <Clock className="h-4 w-4 md:h-5 md:w-5 text-[rgb(125,146,175)]" />
                      <span className="text-[rgb(88,104,127)] font-light text-sm md:text-base">10 minutes to venue</span>
                    </div>
                  </div>

                  <div className="bg-[rgb(242,230,229)] p-3 md:p-4 rounded-xl mb-4 md:mb-6">
                    <h4 className="font-semibold text-[rgb(88,104,127)] mb-2 text-sm md:text-base">Why We Love It:</h4>
                    <ul className="text-[rgb(88,104,127)] font-light text-xs md:text-sm space-y-1">
                      <li>• Historic charm in vibrant Roma Norte</li>
                      <li>• Walking distance to trendy cafes & shops</li>
                      <li>• Beautiful courtyard and garden</li>
                      <li>• Authentic local neighborhood feel</li>
                    </ul>
                  </div>

                  <Button 
                    onClick={() => window.open('https://hotelparqueespana.com/', '_blank')}
                    className="w-full bg-[rgb(88,104,127)] hover:bg-[rgb(125,146,175)] text-white rounded-full py-2 md:py-3 shadow-lg transform hover:scale-105 transition-all duration-300 text-sm md:text-base"
                  >
                    Book at Parque España
                    <ArrowRight className="h-3 w-3 md:h-4 md:w-4 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Andaz Hyatt Condesa */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[rgb(228,198,191)]/30 shadow-lg overflow-hidden">
                <div className="relative h-48 md:h-64">
                  <Image
                    src="/images/hotels/andaz.webp"
                    alt="Andaz Hyatt Condesa"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-[rgb(88,104,127)] text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                    Recommended
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <h3 className="text-lg md:text-2xl font-serif text-[rgb(88,104,127)]">Andaz Hyatt Condesa</h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                    <div className="flex items-center space-x-2 md:space-x-3">
                      <MapPin className="h-4 w-4 md:h-5 md:w-5 text-[rgb(125,146,175)]" />
                      <span className="text-[rgb(88,104,127)] font-light text-sm md:text-base">Condesa Neighborhood</span>
                    </div>

                    <div className="flex items-center space-x-2 md:space-x-3">
                      <Clock className="h-4 w-4 md:h-5 md:w-5 text-[rgb(125,146,175)]" />
                      <span className="text-[rgb(88,104,127)] font-light text-sm md:text-base">15 minutes to venue</span>
                    </div>
                  </div>

                  <div className="bg-[rgb(242,230,229)] p-3 md:p-4 rounded-xl mb-4 md:mb-6">
                    <h4 className="font-semibold text-[rgb(88,104,127)] mb-2 text-sm md:text-base">Why We Love It:</h4>
                    <ul className="text-[rgb(88,104,127)] font-light text-xs md:text-sm space-y-1">
                      <li>• Boutique luxury in trendy Condesa</li>
                      <li>• Walking distance to great restaurants & bars</li>
                      <li>• Beautiful rooftop terrace</li>
                      <li>• Modern amenities & excellent service</li>
                    </ul>
                  </div>

                  <Button className="w-full bg-[rgb(88,104,127)] hover:bg-[rgb(125,146,175)] text-white rounded-full py-2 md:py-3 shadow-lg transform hover:scale-105 transition-all duration-300 text-sm md:text-base">
                    Book at Andaz Hyatt
                    <ArrowRight className="h-3 w-3 md:h-4 md:w-4 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Campos Polanco */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[rgb(228,198,191)]/30 shadow-lg overflow-hidden">
                <div className="relative h-48 md:h-64">
                  <Image
                    src="/images/hotels/camposPolanco.webp"
                    alt="Campos Polanco"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-[rgb(125,146,175)] text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                    Recommended
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <h3 className="text-lg md:text-2xl font-serif text-[rgb(88,104,127)]">Campos Polanco</h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                    <div className="flex items-center space-x-2 md:space-x-3">
                      <MapPin className="h-4 w-4 md:h-5 md:w-5 text-[rgb(125,146,175)]" />
                      <span className="text-[rgb(88,104,127)] font-light text-sm md:text-base">Polanco Neighborhood</span>
                    </div>

                    <div className="flex items-center space-x-2 md:space-x-3">
                      <Clock className="h-4 w-4 md:h-5 md:w-5 text-[rgb(125,146,175)]" />
                      <span className="text-[rgb(88,104,127)] font-light text-sm md:text-base">8 minutes to venue</span>
                    </div>
                  </div>

                  <div className="bg-[rgb(242,230,229)] p-3 md:p-4 rounded-xl mb-4 md:mb-6">
                    <h4 className="font-semibold text-[rgb(88,104,127)] mb-2 text-sm md:text-base">Why We Love It:</h4>
                    <ul className="text-[rgb(88,104,127)] font-light text-xs md:text-sm space-y-1">
                      <li>• Elegant boutique hotel experience</li>
                      <li>• Upscale Polanco location</li>
                      <li>• Close to museums & shopping</li>
                      <li>• Sophisticated design & atmosphere</li>
                      <li>• Includes breakfast and free transportation to nearby activities daily</li>
                    </ul>
                  </div>

                  <Button className="w-full bg-[rgb(88,104,127)] hover:bg-[rgb(125,146,175)] text-white rounded-full py-2 md:py-3 shadow-lg transform hover:scale-105 transition-all duration-300 text-sm md:text-base">
                    Book at Campos Polanco
                    <ArrowRight className="h-3 w-3 md:h-4 md:w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 md:py-16 px-4 md:px-6 bg-[rgb(88,104,127)] text-white">
        <div className="container mx-auto text-center">
          <div className="mb-6 md:mb-8">
            <div className="flex items-center justify-center space-x-4 md:space-x-6 mb-4 md:mb-6">
              <div className="w-8 h-8 md:w-12 md:h-12 border-2 border-white rounded-full flex items-center justify-center">
                <Plane className="h-4 w-4 md:h-6 md:w-6" />
              </div>
              <span className="text-2xl md:text-4xl tracking-wide" style={{
                fontFamily: 'Adobe Lindsey Signature, serif',
                WebkitTextStroke: '1px white'
              }}>Travel Guide</span>
              <div className="w-8 h-8 md:w-12 md:h-12 border-2 border-white rounded-full flex items-center justify-center">
                <MapPin className="h-4 w-4 md:h-6 md:w-6" />
              </div>
            </div>
            <p className="text-lg md:text-2xl font-light mb-1 md:mb-2">Friday, April 3, 2026</p>
            <p className="text-[rgb(224,241,231)] text-base md:text-lg">Mexico City • Private Venue</p>
          </div>

          <div className="text-xs md:text-sm text-[rgb(224,241,231)] uppercase tracking-[0.2em] font-light">
            Safe Travels • ¡Buen Viaje!
          </div>
        </div>
      </footer>
    </div>
  )
}
