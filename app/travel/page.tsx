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

  Navigation,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TravelPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-[rgb(88,104,127)]">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-4 h-4 bg-white/30 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-32 w-6 h-6 bg-white/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-white/40 rounded-full animate-bounce delay-500"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-4 mb-8">
              <div className="w-px h-12 bg-white/50"></div>
              <Plane className="h-8 w-8" />
              <div className="w-px h-12 bg-white/50"></div>
            </div>
            <h1 className="font-serif text-7xl md:text-8xl mb-6 font-light tracking-wide">Travel Guide</h1>
            <p className="text-2xl font-light tracking-[0.2em] uppercase opacity-90 mb-4">
              Your Journey to Mexico City
            </p>
            <p className="text-lg font-light opacity-80 max-w-2xl mx-auto">
              Everything you need to know for a smooth trip to our wedding celebration
            </p>
          </div>
        </div>
      </header>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[rgb(228,198,191)]/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[rgb(88,104,127)] rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-white fill-current" />
              </div>
              <span className="font-serif text-xl text-[rgb(88,104,127)]">Our Wedding Journey</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { name: "Our Home", icon: Heart, href: "/" },
                { name: "Travel", icon: Plane, href: "/travel", current: true },
                { name: "CDMX Guide", icon: Navigation, href: "/guide" },
                { name: "RSVP", icon: Users, href: "/#rsvp", disabled: true },
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

      {/* Content - Single Page Layout */}
      <main className="py-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-24">
          {/* Flights Section */}
          <section id="flights" className="space-y-12 py-16 px-6 bg-gradient-to-r from-[rgb(242,230,229)] to-[rgb(125,146,175)] -mx-6 rounded-3xl">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <Image
                  src="/favicon.png"
                  alt="Wedding Logo"
                  width={80}
                  height={80}
                  className="rounded-full shadow-lg"
                />
              </div>
              <h2 className="font-serif text-5xl text-[rgb(88,104,127)] mb-4 font-light">Getting to Mexico City</h2>
              <p className="text-lg text-[rgb(125,146,175)] font-light">
                Important flight information for your journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Correct Airport */}
              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-[rgb(228,198,191)]/30 shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-[rgb(88,104,127)] rounded-full flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-[rgb(88,104,127)] mb-2">✈️ Fly Into MEX</h3>
                    <p className="text-[rgb(125,146,175)] font-light">Recommended Airport</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-[rgb(242,230,229)] p-4 rounded-xl border border-[rgb(228,198,191)]">
                    <h4 className="font-semibold text-[rgb(88,104,127)] mb-2">Benito Juárez International Airport</h4>
                    <p className="text-[rgb(88,104,127)] text-sm mb-2">
                      Airport Code: <strong>MEX</strong>
                    </p>
                    <p className="text-[rgb(88,104,127)] text-sm">
                      This is Mexico City&apos;s main international airport, located much closer to the city center and our
                      wedding venue.
                    </p>
                  </div>

                  <div className="flex items-center space-x-3 text-[rgb(88,104,127)]">
                    <MapPin className="h-5 w-5" />
                    <span className="font-light">~30 minutes to city center</span>
                  </div>

                  <div className="flex items-center space-x-3 text-[rgb(88,104,127)]">
                    <Clock className="h-5 w-5" />
                    <span className="font-light">Direct flights from most major cities</span>
                  </div>
                </div>
              </div>

              {/* Wrong Airport Warning */}
              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-red-200 shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-red-700 mb-2">⚠️ Avoid AIFA</h3>
                    <p className="text-red-600 font-light">Not Recommended</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">Felipe Ángeles International Airport</h4>
                    <p className="text-red-700 text-sm mb-2">
                      Airport Code: <strong>NLU</strong>
                    </p>
                    <p className="text-red-700 text-sm">
                      This newer airport is much farther from the city center and will add significant travel time to
                      your journey.
                    </p>
                  </div>

                  <div className="flex items-center space-x-3 text-red-700">
                    <MapPin className="h-5 w-5" />
                    <span className="font-light">~90+ minutes to city center</span>
                  </div>

                  <div className="flex items-center space-x-3 text-red-700">
                    <Clock className="h-5 w-5" />
                    <span className="font-light">Limited flight options</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Transport Section */}
          <section id="transport" className="space-y-12 py-16 px-6 bg-gradient-to-r from-[rgb(125,146,175)] to-[rgb(228,198,191)] -mx-6 rounded-3xl">
            <div className="text-center mb-12">
              <h2 className="font-serif text-5xl text-white mb-4 font-light">Airport to Hotel</h2>
              <p className="text-lg text-white/80 font-light">
                Getting from MEX Airport to your accommodation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Uber Recommendation */}
              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-[rgb(228,198,191)]/30 shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-[rgb(88,104,127)] rounded-full flex items-center justify-center">
                    <Car className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-[rgb(88,104,127)] mb-2">🚗 Uber (Recommended)</h3>
                    <p className="text-[rgb(88,104,127)] font-semibold">Most Cost-Effective</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-[rgb(242,230,229)] p-4 rounded-xl border border-[rgb(228,198,191)]">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-[rgb(88,104,127)]">Estimated Cost:</span>
                      <span className="text-[rgb(88,104,127)] font-bold">$8-15 USD</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-[rgb(88,104,127)]">Travel Time:</span>
                      <span className="text-[rgb(88,104,127)] font-bold">25-45 minutes</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[rgb(88,104,127)] mt-0.5 flex-shrink-0" />
                      <span className="text-[rgb(88,104,127)] font-light">Much cheaper than airport taxis</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[rgb(88,104,127)] mt-0.5 flex-shrink-0" />
                      <span className="text-[rgb(88,104,127)] font-light">Fixed pricing, no surprises</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[rgb(88,104,127)] mt-0.5 flex-shrink-0" />
                      <span className="text-[rgb(88,104,127)] font-light">Easy to request via app</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Taxi Warning */}
              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-orange-200 shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                    <AlertTriangle className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif text-orange-700 mb-2">🚕 Airport Taxi</h3>
                    <p className="text-orange-600 font-semibold">Much More Expensive</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-xl border border-orange-200">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-orange-800">Estimated Cost:</span>
                      <span className="text-orange-700 font-bold">$40-60 USD</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-orange-800">Travel Time:</span>
                      <span className="text-orange-700 font-bold">30-50 minutes</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-[rgb(88,104,127)] font-light">3-4x more expensive than Uber</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-[rgb(88,104,127)] font-light">Fixed high rates for tourists</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-[rgb(88,104,127)] font-light">Long queues during busy times</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Hotels Section */}
          <section id="hotels" className="space-y-12 py-16 px-6 bg-gradient-to-r from-[rgb(228,198,191)] to-[rgb(242,230,229)] -mx-6 rounded-3xl">
            <div className="text-center mb-12">
              <h2 className="font-serif text-5xl text-[rgb(88,104,127)] mb-4 font-light">Where to Stay</h2>
              <p className="text-lg text-[rgb(125,146,175)] font-light">
                Our recommended hotels for the wedding weekend
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Andaz Hyatt Condesa */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[rgb(228,198,191)]/30 shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Andaz+Hyatt+Condesa"
                    alt="Andaz Hyatt Condesa"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[rgb(88,104,127)] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Recommended
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-serif text-[rgb(88,104,127)]">Andaz Hyatt Condesa</h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-[rgb(125,146,175)]" />
                      <span className="text-[rgb(88,104,127)] font-light">Condesa Neighborhood</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-[rgb(125,146,175)]" />
                      <span className="text-[rgb(88,104,127)] font-light">15 minutes to venue</span>
                    </div>
                  </div>

                  <div className="bg-[rgb(242,230,229)] p-4 rounded-xl mb-6">
                    <h4 className="font-semibold text-[rgb(88,104,127)] mb-2">Why We Love It:</h4>
                    <ul className="text-[rgb(88,104,127)] font-light text-sm space-y-1">
                      <li>• Boutique luxury in trendy Condesa</li>
                      <li>• Walking distance to great restaurants & bars</li>
                      <li>• Beautiful rooftop terrace</li>
                      <li>• Modern amenities & excellent service</li>
                    </ul>
                  </div>

                  <Button className="w-full bg-[rgb(88,104,127)] hover:bg-[rgb(125,146,175)] text-white rounded-full py-3 shadow-lg transform hover:scale-105 transition-all duration-300">
                    Book at Andaz Hyatt
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Campos Polanco */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[rgb(228,198,191)]/30 shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Campos+Polanco"
                    alt="Campos Polanco"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[rgb(125,146,175)] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Recommended
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-serif text-[rgb(88,104,127)]">Campos Polanco</h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-[rgb(125,146,175)]" />
                      <span className="text-[rgb(88,104,127)] font-light">Polanco Neighborhood</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-[rgb(125,146,175)]" />
                      <span className="text-[rgb(88,104,127)] font-light">20 minutes to venue</span>
                    </div>
                  </div>

                  <div className="bg-[rgb(242,230,229)] p-4 rounded-xl mb-6">
                    <h4 className="font-semibold text-[rgb(88,104,127)] mb-2">Why We Love It:</h4>
                    <ul className="text-[rgb(88,104,127)] font-light text-sm space-y-1">
                      <li>• Elegant boutique hotel experience</li>
                      <li>• Upscale Polanco location</li>
                      <li>• Close to museums & shopping</li>
                      <li>• Sophisticated design & atmosphere</li>
                    </ul>
                  </div>

                  <Button className="w-full bg-[rgb(88,104,127)] hover:bg-[rgb(125,146,175)] text-white rounded-full py-3 shadow-lg transform hover:scale-105 transition-all duration-300">
                    Book at Campos Polanco
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-16 px-6 bg-[rgb(88,104,127)] text-white">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-6 mb-6">
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                <Plane className="h-6 w-6" />
              </div>
              <span className="font-serif text-4xl tracking-wide">Travel Guide</span>
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6" />
              </div>
            </div>
            <p className="text-2xl font-light mb-2">Friday, April 3, 2026</p>
            <p className="text-[rgb(224,241,231)] text-lg">Mexico City • Private Venue</p>
          </div>

          <div className="text-sm text-[rgb(224,241,231)] uppercase tracking-[0.2em] font-light">
            Safe Travels • See You Soon • ¡Buen Viaje!
          </div>
        </div>
      </footer>
    </div>
  )
}
