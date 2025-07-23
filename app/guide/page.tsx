"use client"

import Image from "next/image"
import {
  Plane,
  MapPin,
  Heart,
  Users,
  Camera,
  Utensils,
  Wine,
  Palette,
  Navigation,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GuidePage() {
  const restaurants = [
    {
      name: "Botanico",
      category: "Fine Dining",
      neighborhood: "Condesa",
      description: "Our best value pick! In a beautiful home with a large koi pond",
      highlights: ["Michelin-Guide"],
      priceRange: "$$$",
      image: "/images/guide/botanico.jpg",
      favorite: false,
    },
    {
      name: "Sushi Iwashi",
      category: "Sushi",
      neighborhood: "Polanco",
      description: "Fantastic omakase experience in Polanco",
      highlights: ["Cozy atmosphere"],
      priceRange: "$$$$",
      image: "/images/guide/sushi-iwashi.jpg",
      favorite: false
    },
    {
      name: "Beluga",
      category: "Seafood",
      neighborhood: "Polanco",
      description: "The oysters with seared tuna on top are mind blowing",
      highlights: ["Seafood"],
      priceRange: "$$$",
      image: "/images/guide/beluga.webp",
      favorite: true
    },
    {
      name: "Ryoshi",
      category: "Sushi",
      neighborhood: "Polanco",
      description: "Great sushi where you can watch the tuna carving",
      highlights: ["Tuna carving"],
      priceRange: "$$$$",
      image: "/images/guide/ryoshi.png",
      favorite: false
    },
    {
      name: "Caramela y Sal",
      category: "Mexican",
      neighborhood: "Lomas",
      description: "Cosmopolitan restaurant & bar specializing in imaginative cocktails & elevated traditional cuisine.",
      highlights: ["Authentic Mexican Food"],
      priceRange: "$$$$",
      image: "/images/guide/carmela-y-sal.webp",
      favorite: false
    },
    {
      name: "Maximo Bistrot",
      category: "French-Mexican",
      neighborhood: "Roma Norte",
      description: "Brunch options & tasting menus, including tacos, ceviche & suckling pig, paired with Mexican wines.",
      highlights: ["Michelin Guide"],
      priceRange: "$$$",
      image: "/images/guide/maximo-bistrot.jpg",
      favorite: false
    },
    {
      name: "Chetito",
      category: "Mexican",
      neighborhood: "Cuauhtemoc",
      description: "Upscale taco joint with great cocktails. Can be a wait, but great date night vibe",
      highlights: ["Date night vibe"],
      priceRange: "$$",
      image: "/images/guide/chetito.jpeg",
      favorite: true
    },
    {
      name: "Entremar",
      category: "Seafood",
      neighborhood: "Polanco",
      description: "The less fancy sister restaurant to Contramar with great seafood",
      highlights: ["Seafood"],
      priceRange: "$$$",
      image: "/images/guide/entremar.avif",
      favorite: false
    },
    {
      name: "Kasina Cafe",
      category: "Korean",
      neighborhood: "Roma Norte",
      description: "Awesome Korean restaurant",
      highlights: ["Casual"],
      priceRange: "$$",
      image: "/images/guide/kasina-cafe.jpg",
    },
    {
      name: "Choza",
      category: "Mexican",
      neighborhood: "Roma Norte",
      description: "Hip restaurant with creative tapas. Monday nights they spin vinyl and don't take reservations. Get the wagyu burger",
      highlights: ["Creative dishes"],
      priceRange: "$$$",
      image: "/images/guide/choza.jpg",
      favorite: false
    },
    {
      name: "La Corriente",
      category: "Seafood",
      neighborhood: "Roma Norte",
      description: "Fresh seafood restaurant known for their ceviches and coastal Mexican dishes",
      highlights: ["Mexican Seafood"],
      priceRange: "$$$",
      image: "/images/guide/la-corriente.jpeg",
      favorite: false
    },
    {
      name: "Tacos Orinoco",
      category: "Mexican",
      neighborhood: "Several Locations",
      description: "Famous taco chain known for their pastor tacos and late-night dining. Show up after midnight and there's a line around the block",
      highlights: ["Late night"],
      priceRange: "$",
      image: "/images/guide/tacos-orinoco.webp",
      favorite: true
    },
    {
      name: "Orale Arepas",
      category: "Venezuelan",
      neighborhood: "Polanco",
      description: "Authentic Venezuelan arepas and street food",
      highlights: ["Casual"],
      priceRange: "$",
      image: "/images/guide/orale-arepa.jpeg",
      favorite: false
    },
    {
      name: "Min Sok Chon",
      category: "Korean",
      neighborhood: "Juarez",
      description: "Authentic Korean hole in the wall restaurant. They just upgraded from Korean only menus to English and Spanish.",
      highlights: ["Casual"],
      priceRange: "$$",
      image: "/images/guide/min-sok-chon.jpg",
      favorite: false
    },
    {
      name: "Pizza Felix",
      category: "Pizza",
      neighborhood: "Roma Norte",
      description: "Artisanal pizza spot with creative toppings and a great wine selection",
      highlights: ["Date night vibe"],
      priceRange: "$$$",
      image: "/images/guide/pizza-felix.jpg",
      favorite: true
    },
    {
      name: "Blossom",
      category: "Chinese",
      neighborhood: "Several Locations",
      description: "Upscale Chinese restaurant with contemporary takes on classic dishes",
      highlights: [""],
      priceRange: "$$$",
      image: "/images/guide/blossom.jpg",
      favorite: false
    },
    {
      name: "Catamundi",
      category: "Mexican",
      neighborhood: "Polanco",
      description: "Mexican restaurant with our favorite brunch in the city.",
      highlights: ["Great brunch"],
      priceRange: "$$",
      image: "/images/guide/catamundi.jpg",
      favorite: false
    },
    {
      name: "Madre Cafe",
      category: "Cafe",
      neighborhood: "Roma Norte",
      description: "Fantastic brunch in an charming old house",
      highlights: ["Cool Building"],
      priceRange: "$$",
      image: "/images/guide/madre-cafe.webp",
      favorite: true
    },
    {
      name: "Lardo",
      category: "Mediterranean",
      neighborhood: "Condesa",
      description: "Popular Mediterranean restaurant with great brunch. Smaller portions, and there can be a wait on the weekends.",
      highlights: ["Great Brunch"],
      priceRange: "$$$",
      image: "/images/guide/lardo.jpg",
      favorite: false
    },
    {
      name: "Maque",
      category: "Mexican",
      neighborhood: "Several Locations",
      description: "Traditional Mexican restaurant. They have a few locations around the city.",
      highlights: ["Great brunch"],
      priceRange: "$$$",
      image: "/images/guide/maque.jpg",
      favorite: false
    },
    {
      name: "Chilakillers",
      category: "Mexican",
      neighborhood: "Tacubaya",
      description: "The ideal brunch after a long night out. The biggest plate of chilaquiles I've ever seen.",
      highlights: ["Casual"],
      priceRange: "$",
      image: "/images/guide/chilakillers.webp",
      favorite: false
    },
    {
      name: "Taqueria Gabriel",
      category: "Mexican",
      neighborhood: "Roma Norte",
      description: "Local taqueria known for their authentic tacos and traditional Mexican flavors",
      highlights: ["Casual"],
      priceRange: "$",
      image: "/images/guide/taqueria-gabriel.jpg",
      favorite: false
    },
  ]

  const bars = [
    {
      name: "Limantour",
      category: "Cocktail Bar",
      neighborhood: "Roma Norte & Polanco",
      description: "Award-winning cocktail bar consistently ranked among the world's best",
      highlights: ["World's 50 Best Bars", "Creative cocktails"],
      image: "/images/guide/limantour.jpg",
    },
    {
      name: "Terraza Cha Cha Cha",
      category: "Mezcal Bar",
      neighborhood: "Roma Norte",
      description: "Rooftop bar with a great view of the monument.",
      highlights: ["Great view", "Good music"],
      image: "/images/guide/terraza-cha-cha-cha.jpg",
    },
    {
      name: "Salon Rosetta",
      category: "Cocktail Bar",
      neighborhood: "Roma Norte",
      description: "Above Rosetta, a small bar with great drinks",
      highlights: ["Creative cocktails"],
      image: "/images/guide/salon-rosetta.jpg",
    },
    {
      name: "Gin Gin",
      category: "Mezcal Bar",
      neighborhood: "Roma Norte",
      description: "Great drinks and locations all across the city",
      highlights: ["Date night vibe"],
      image: "/images/guide/gin-gin.jpg",
    },
    {
      name: "Cityzen Bar",
      category: "Cocktail Bar",
      neighborhood: "Roma Norte",
      description: "The best view of the city at night. The food is underwhelming, but the drinks are good.",
      highlights: ["Great view"],
      image: "/images/guide/cityzen-bar.jpeg",
    },
    {
      name: "Departamento",
      category: "Dance Club",
      neighborhood: "Roma Norte",
      description: "Popular late-night spot with great music and dancing",
      highlights: ["Dancing", "Late night", "Local favorite"],
      image: "/images/guide/departamento.jpg",
    },
    {
      name: "Handshake",
      category: "Cocktail Bar",
      neighborhood: "Roma Norte",
      description: "Speakeasy-style cocktail bar with creative drinks and intimate atmosphere",
      highlights: ["Speakeasy", "Creative cocktails", "World's 50 Best Bars"],
      image: "/images/guide/handshake.jpg",
    },
    {
      name: "Hanky Panky",
      category: "Cocktail Bar",
      neighborhood: "Roma Norte",
      description: "Hidden speakeasy with expertly crafted cocktails and a sophisticated atmosphere",
      highlights: ["Speakeasy", "Creative cocktails"],
      image: "/images/guide/hanky-panky.jpg",
    },
  ]

  const museums = [
    {
      name: "Frida Kahlo Museum",
      category: "Art Museum",
      neighborhood: "Coyoacán",
      description: "The famous Blue House where Frida Kahlo lived and worked",
      highlights: ["Frida's actual home", "Personal artifacts", "Beautiful gardens"],
      image: "/images/guide/frida-khalo-museum.jpg",
    },
    {
      name: "National Museum of Anthropology",
      category: "History Museum",
      neighborhood: "Chapultepec",
      description: "World-class museum showcasing Mexico's pre-Columbian heritage",
      highlights: ["Aztec artifacts", "Mayan exhibits", "World-renowned collection"],
      image: "/images/guide/national-museum-of-anthropology.jpg",
    },
    {
      name: "Palacio de Bellas Artes",
      category: "Art Museum",
      neighborhood: "Centro Histórico",
      description: "Stunning Art Nouveau building housing Mexico's premier cultural center",
      highlights: ["Beautiful architecture", "Diego Rivera murals", "Opera house"],
      image: "/images/guide/palacio-de-bellas-artes.jpeg",
    },
    {
      name: "Museo Soumaya",
      category: "Art Museum",
      neighborhood: "Polanco",
      description: "Distinctive silver building with an impressive art collection",
      highlights: ["Unique architecture", "Rodin sculptures", "Free admission"],
      image: "/images/guide/museo-soumaya.jpg",
    },
    {
      name: "Casa Luis Barragán",
      category: "Architecture",
      neighborhood: "Tacubaya",
      description: "UNESCO World Heritage site showcasing the architect's colorful modernist style",
      highlights: ["UNESCO site", "Colorful architecture", "Guided tours only"],
      image: "/images/guide/casa-luis-barragan.jpg",
    },
  ]

  const experiences = [
    {
      name: "Xochimilco Boat Ride",
      category: "Cultural Experience",
      neighborhood: "Xochimilco",
      description: "Traditional trajinera boat ride through ancient canals with mariachi music",
      highlights: ["Colorful boats", "Mariachi music", "Traditional food"],
      image: "/images/guide/xochimilco-boat-ride.jpeg",
    },
    {
      name: "Chapultepec Park",
      category: "Outdoor Activity",
      neighborhood: "Chapultepec",
      description: "Massive urban park perfect for walking, picnicking, and exploring",
      highlights: ["Huge park", "Multiple museums", "Great for walking"],
      image: "/images/guide/chapultapec-park.jpeg",
    },
    {
      name: "Lucha Libre at Arena México",
      category: "Entertainment",
      neighborhood: "Doctores",
      description: "Experience Mexico's famous masked wrestling in the sport's most iconic venue",
      highlights: ["Authentic lucha libre", "Colorful masks", "Fun atmosphere"],
      image: "/images/guide/lucha-libre-at-arena-mexico.jpg",
    },
    {
      name: "Coyoacán",
      category: "Cultural Experience",
      neighborhood: "Coyoacán",
      description: "Explore the charming cobblestone streets and colonial architecture",
      highlights: ["Colonial architecture", "Artisan markets", "Historic plazas"],
      image: "/images/guide/coyoacan.jpg",
    },
    {
      name: "Teotihuacán Day Trip",
      category: "Archaeological Site",
      neighborhood: "Outside Mexico City",
      description: "Visit the ancient pyramids and archaeological site (1 hour from city)",
      highlights: ["Ancient pyramids", "Pyramid of the Sun", "Day trip"],
      image: "/images/guide/teotihuacan-day-trip.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[70vh] overflow-hidden">
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
              <MapPin className="h-8 w-8" />
              <div className="w-px h-12 bg-white/50"></div>
            </div>
            <h1 className="font-serif text-7xl md:text-8xl mb-6 font-light tracking-wide">Mexico City Guide</h1>
            <p className="text-2xl font-light tracking-[0.2em] uppercase opacity-90 mb-4">
              Our Favorite Places & Experiences
            </p>
            <p className="text-lg font-light opacity-80 max-w-2xl mx-auto">
              Everything you need to know to explore our beloved city like a local
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
                { name: "Travel", icon: Plane, href: "/travel" },
                { name: "CDMX Guide", icon: Navigation, href: "/guide", current: true },
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

      {/* Content */}
      <main className="py-16 px-6">
        <div className="container mx-auto max-w-7xl space-y-24">
          {/* Introduction */}
          <section className="text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-5xl text-[rgb(88,104,127)] mb-8 font-light">Welcome to Our City</h2>
            <p className="text-lg text-[rgb(88,104,127)] font-light leading-relaxed mb-8">
              Mexico City has been our home for the past few years, and we&apos;ve fallen in love with its incredible energy,
              rich culture, and amazing food scene. We&apos;re excited to share our favorite spots with you so you can
              experience the city like locals during your visit for our wedding.
            </p>
            <div className="bg-[rgb(242,230,229)] p-8 rounded-2xl">
              <p className="text-[rgb(88,104,127)] font-light italic">
                &ldquo;Mexico City is a place where every street corner tells a story, every meal is a celebration, and every
                sunset paints the sky in colors you&apos;ve never seen before.&rdquo;
              </p>
            </div>
          </section>

          {/* Weekend Itinerary */}
          <section className="space-y-12 py-16 px-6 bg-gradient-to-r from-[rgb(242,230,229)] to-[rgb(125,146,175)] -mx-6 rounded-3xl">
            <div className="text-center">
              <h2 className="font-serif text-5xl text-[rgb(88,104,127)] mb-4 font-light">Easter Weekend Itinerary</h2>
              <p className="text-lg text-[rgb(125,146,175)] font-light">
                Our suggested schedule for the perfect long weekend
              </p>
            </div>

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
          </section>

          {/* Restaurants Section */}
          <section className="space-y-12 py-16 px-6 bg-gradient-to-r from-[rgb(125,146,175)] to-[rgb(228,198,191)] -mx-6 rounded-3xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-[rgb(88,104,127)] rounded-full flex items-center justify-center mx-auto mb-6">
                <Utensils className="h-8 w-8 text-white" />
              </div>
              <h2 className="font-serif text-5xl text-white mb-4 font-light">Where to Eat</h2>
              <p className="text-lg text-white/80 font-light mb-8">
                From street tacos to world-class fine dining, these are our go-to spots
              </p>
            </div>

            {/* Filter Controls */}
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-[rgb(228,198,191)]/30">
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-semibold text-white mr-2">Filter by:</span>
                  <button className="px-4 py-2 bg-[rgb(88,104,127)] text-white rounded-full text-sm font-medium">
                    All
                  </button>
                  <button className="px-4 py-2 bg-white text-[rgb(88,104,127)] border border-[rgb(228,198,191)] rounded-full text-sm hover:bg-[rgb(242,230,229)] transition-colors">
                    Fine Dining
                  </button>
                  <button className="px-4 py-2 bg-white text-[rgb(88,104,127)] border border-[rgb(228,198,191)] rounded-full text-sm hover:bg-[rgb(242,230,229)] transition-colors">
                    Casual
                  </button>
                  <button className="px-4 py-2 bg-white text-[rgb(88,104,127)] border border-[rgb(228,198,191)] rounded-full text-sm hover:bg-[rgb(242,230,229)] transition-colors">
                    Street Food
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-semibold text-white mr-2">Neighborhood:</span>
                  <button className="px-4 py-2 bg-white text-[rgb(88,104,127)] border border-[rgb(228,198,191)] rounded-full text-sm hover:bg-[rgb(242,230,229)] transition-colors">
                    Roma Norte
                  </button>
                  <button className="px-4 py-2 bg-white text-[rgb(88,104,127)] border border-[rgb(228,198,191)] rounded-full text-sm hover:bg-[rgb(242,230,229)] transition-colors">
                    Polanco
                  </button>
                  <button className="px-4 py-2 bg-white text-[rgb(88,104,127)] border border-[rgb(228,198,191)] rounded-full text-sm hover:bg-[rgb(242,230,229)] transition-colors">
                    Centro
                  </button>
                  <button className="px-4 py-2 bg-white text-[rgb(88,104,127)] border border-[rgb(228,198,191)] rounded-full text-sm hover:bg-[rgb(242,230,229)] transition-colors">
                    Condesa
                  </button>
                </div>
              </div>
            </div>

            {/* Compact Restaurant Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {restaurants.map((restaurant, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-xl border border-[rgb(228,198,191)]/30 shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 relative"
                >
                  {/* Favorite Stamp */}
                  {restaurant.favorite && (
                    <div className="absolute bottom-2 left-2 z-10">
                      <div className="w-8 h-8 bg-[rgb(228,198,191)] rounded-full flex items-center justify-center shadow-lg">
                        <Heart className="h-4 w-4 text-[rgb(88,104,127)] fill-current" />
                      </div>
                    </div>
                  )}
                  
                  <div className="flex">
                    {/* Image */}
                    <div className="w-24 h-24 flex-shrink-0">
                      <Image
                        src={restaurant.image || "/placeholder.svg"}
                        alt={restaurant.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-serif text-[rgb(88,104,127)] leading-tight">{restaurant.name}</h3>
                        <span className="text-sm font-bold text-[rgb(125,146,175)] ml-2">{restaurant.priceRange}</span>
                      </div>

                      <div className="flex items-center space-x-2 mb-2">
                        <MapPin className="h-3 w-3 text-[rgb(125,146,175)]" />
                        <span className="text-xs text-[rgb(125,146,175)]">{restaurant.neighborhood}</span>
                        <span className="text-xs text-[rgb(228,198,191)]">•</span>
                        <span className="text-xs text-[rgb(125,146,175)]">{restaurant.category}</span>
                        <span className="text-xs text-[rgb(228,198,191)]">•</span>
                        <span className="text-xs text-[rgb(88,104,127)] font-medium">{restaurant.highlights[0]}</span>
                      </div>

                      <p className="text-xs text-[rgb(88,104,127)] font-light leading-relaxed mb-2 overflow-hidden max-h-2.4em">
                        {restaurant.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Reference Guide */}
            <div className="bg-[rgb(242,230,229)] p-8 rounded-2xl">
              <h3 className="text-2xl font-serif text-[rgb(88,104,127)] mb-6 text-center">Quick Reference</h3>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl mb-2">💰</div>
                  <h4 className="font-semibold text-[rgb(88,104,127)] mb-2">Price Guide</h4>
                  <div className="text-xs text-[rgb(88,104,127)] space-y-1">
                    <div>$ = Under $15 per person</div>
                    <div>$$ = $15-30 per person</div>
                    <div>$$$ = $30-60 per person</div>
                    <div>$$$$ = $60+ per person</div>
                  </div>
                </div>
                <div>
                  <div className="text-2xl mb-2">📅</div>
                  <h4 className="font-semibold text-[rgb(88,104,127)] mb-2">Reservations</h4>
                  <p className="text-xs text-[rgb(88,104,127)]">
                    Fine dining spots require reservations. Casual places are usually walk-in friendly.
                  </p>
                </div>
                <div>
                  <div className="text-2xl mb-2">🕐</div>
                  <h4 className="font-semibold text-[rgb(88,104,127)] mb-2">Timing</h4>
                  <p className="text-xs text-[rgb(88,104,127)]">
                    Lunch: 1-4pm
                    <br />
                    Dinner: 8-11pm
                    <br />
                    Many close 4-7pm
                  </p>
                </div>
                <div>
                  <div className="text-2xl mb-2">💡</div>
                  <h4 className="font-semibold text-[rgb(88,104,127)] mb-2">Pro Tips</h4>
                  <p className="text-xs text-[rgb(88,104,127)]">
                    Ask us for real-time availability and our current favorites!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Bars Section */}
          <section className="space-y-12 py-16 px-6 bg-gradient-to-r from-[rgb(228,198,191)] to-[rgb(242,230,229)] -mx-6 rounded-3xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-[rgb(88,104,127)] rounded-full flex items-center justify-center mx-auto mb-6">
                <Wine className="h-8 w-8 text-white" />
              </div>
              <h2 className="font-serif text-5xl text-[rgb(88,104,127)] mb-4 font-light">Best Bars & Nightlife</h2>
              <p className="text-lg text-[rgb(125,146,175)] font-light">
                Our favorite spots for mezcal, cocktails, and late-night fun
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bars.map((bar, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[rgb(228,198,191)]/30 shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative h-48">
                    <Image
                      src={bar.image || "/placeholder.svg"}
                      alt={bar.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-[rgb(125,146,175)] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {bar.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-serif text-[rgb(88,104,127)] mb-2">{bar.name}</h3>

                    <div className="flex items-center space-x-2 mb-3">
                      <MapPin className="h-4 w-4 text-[rgb(125,146,175)]" />
                      <span className="text-sm text-[rgb(125,146,175)] font-light">{bar.neighborhood}</span>
                    </div>

                    <p className="text-[rgb(88,104,127)] font-light text-sm mb-4">{bar.description}</p>

                    <div className="space-y-2">
                      {bar.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-[rgb(228,198,191)] rounded-full"></div>
                          <span className="text-xs text-[rgb(88,104,127)] font-light">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Museums Section */}
          <section className="space-y-12 py-16 px-6 bg-gradient-to-r from-[rgb(125,146,175)] to-[rgb(228,198,191)] -mx-6 rounded-3xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-[rgb(88,104,127)] rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <h2 className="font-serif text-5xl text-white mb-4 font-light">Museums & Culture</h2>
              <p className="text-lg text-white/80 font-light">
                Art, history, and culture - the best Mexico City has to offer
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {museums.map((museum, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[rgb(228,198,191)]/30 shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative h-48">
                    <Image
                      src={museum.image || "/placeholder.svg"}
                      alt={museum.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-[rgb(228,198,191)] text-[rgb(88,104,127)] px-3 py-1 rounded-full text-sm font-semibold">
                      {museum.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-serif text-[rgb(88,104,127)] mb-2">{museum.name}</h3>

                    <div className="flex items-center space-x-2 mb-3">
                      <MapPin className="h-4 w-4 text-[rgb(125,146,175)]" />
                      <span className="text-sm text-[rgb(125,146,175)] font-light">{museum.neighborhood}</span>
                    </div>

                    <p className="text-[rgb(88,104,127)] font-light text-sm mb-4">{museum.description}</p>

                    <div className="space-y-2">
                      {museum.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-[rgb(228,198,191)] rounded-full"></div>
                          <span className="text-xs text-[rgb(88,104,127)] font-light">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experiences Section */}
          <section className="space-y-12 py-16 px-6 bg-gradient-to-r from-[rgb(228,198,191)] to-[rgb(242,230,229)] -mx-6 rounded-3xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-[rgb(88,104,127)] rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h2 className="font-serif text-5xl text-[rgb(88,104,127)] mb-4 font-light">Unique Experiences</h2>
              <p className="text-lg text-[rgb(125,146,175)] font-light">Special activities and hidden gems we love</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl border border-[rgb(228,198,191)]/30 shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative h-48">
                    <Image
                      src={experience.image || "/placeholder.svg"}
                      alt={experience.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-[rgb(125,146,175)] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {experience.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-serif text-[rgb(88,104,127)] mb-2">{experience.name}</h3>

                    <div className="flex items-center space-x-2 mb-3">
                      <MapPin className="h-4 w-4 text-[rgb(125,146,175)]" />
                      <span className="text-sm text-[rgb(125,146,175)] font-light">{experience.neighborhood}</span>
                    </div>

                    <p className="text-[rgb(88,104,127)] font-light text-sm mb-4">{experience.description}</p>

                    <div className="space-y-2">
                      {experience.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-[rgb(228,198,191)] rounded-full"></div>
                          <span className="text-xs text-[rgb(88,104,127)] font-light">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Practical Tips */}
          <section className="space-y-12 py-16 px-6 bg-[rgb(125,146,175)] -mx-6 rounded-3xl">
            <div className="text-center">
                          <h2 className="font-serif text-5xl text-white mb-4 font-light">Practical Tips</h2>
            <p className="text-lg text-white/80 font-light">
                Local insights to help you navigate the city like a pro
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-[rgb(228,198,191)]/30 text-center">
                <div className="w-16 h-16 bg-[rgb(88,104,127)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🚇</span>
                </div>
                <h3 className="text-xl font-serif text-[rgb(88,104,127)] mb-4">Getting Around</h3>
                <p className="text-[rgb(88,104,127)] font-light text-sm">
                  Uber is reliable and affordable. The metro is extensive but can be crowded. Walking in Roma Norte and
                  Condesa is pleasant and safe during the day.
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-[rgb(228,198,191)]/30 text-center">
                <div className="w-16 h-16 bg-[rgb(88,104,127)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-serif text-[rgb(88,104,127)] mb-4">Money & Tipping</h3>
                <p className="text-[rgb(88,104,127)] font-light text-sm">
                  Credit cards are widely accepted. Tip 10-15% at restaurants. Always have some cash for street food and
                  small vendors.
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-[rgb(228,198,191)]/30 text-center">
                <div className="w-16 h-16 bg-[rgb(88,104,127)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🌮</span>
                </div>
                <h3 className="text-xl font-serif text-[rgb(88,104,127)] mb-4">Food Safety</h3>
                <p className="text-[rgb(88,104,127)] font-light text-sm">
                  Street food is generally safe if it&apos;s busy and freshly made. Drink bottled water. Most restaurants in
                  Roma Norte and Polanco meet international standards.
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-[rgb(228,198,191)]/30 text-center">
                <div className="w-16 h-16 bg-[rgb(88,104,127)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🗣️</span>
                </div>
                <h3 className="text-xl font-serif text-[rgb(88,104,127)] mb-4">Language</h3>
                <p className="text-[rgb(88,104,127)] font-light text-sm">
                  Basic Spanish is helpful but not essential in tourist areas. Download Google Translate. Most upscale
                  restaurants have English-speaking staff.
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-[rgb(228,198,191)]/30 text-center">
                <div className="w-16 h-16 bg-[rgb(88,104,127)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🏔️</span>
                </div>
                <h3 className="text-xl font-serif text-[rgb(88,104,127)] mb-4">Altitude</h3>
                <p className="text-[rgb(88,104,127)] font-light text-sm">
                  Mexico City is at 7,350 feet. Take it easy your first day, stay hydrated, and limit alcohol initially.
                  Most people adjust within 24-48 hours.
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-[rgb(228,198,191)]/30 text-center">
                <div className="w-16 h-16 bg-[rgb(88,104,127)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-serif text-[rgb(88,104,127)] mb-4">Safety</h3>
                <p className="text-[rgb(88,104,127)] font-light text-sm">
                  Roma Norte, Condesa, and Polanco are very safe. Use common sense, don&apos;t flash valuables, and stick to
                  well-lit areas at night.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-[rgb(242,230,229)] p-12 rounded-2xl">
            <h2 className="font-serif text-4xl text-[rgb(88,104,127)] mb-6 font-light">Questions About the City?</h2>
            <p className="text-[rgb(88,104,127)] font-light mb-8 max-w-2xl mx-auto">
              We&apos;re here to help! Join our WhatsApp group for real-time recommendations, meet-ups, and insider tips from
              locals (us!) who want to make sure you have the best possible experience.
            </p>
            <Button
              size="lg"
              className="bg-[rgb(88,104,127)] hover:bg-[rgb(125,146,175)] text-white px-12 py-4 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold"
            >
              <span className="mr-3 text-xl">📱</span>
              Join Our WhatsApp Group
            </Button>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-16 px-6 bg-[rgb(88,104,127)] text-white">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-6 mb-6">
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6" />
              </div>
              <span className="font-serif text-4xl tracking-wide">Mexico City Guide</span>
              <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 fill-current" />
              </div>
            </div>
            <p className="text-2xl font-light mb-2">Friday, April 3, 2026</p>
            <p className="text-[rgb(224,241,231)] text-lg">Mexico City • Private Venue</p>
          </div>

          <div className="text-sm text-[rgb(224,241,231)] uppercase tracking-[0.2em] font-light">
            Explore • Discover • Celebrate • ¡Disfruta!
          </div>
        </div>
      </footer>
    </div>
  )
}
