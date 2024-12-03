

import React from 'react'
import { Link } from 'react-router-dom';


const IconHome = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
)

const IconSearch = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
    </svg>
)

const IconMapPin = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
)

const IconBed = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 4v16"></path>
        <path d="M2 8h18a2 2 0 0 1 2 2v10"></path>
        <path d="M2 17h20"></path>
        <path d="M6 8v9"></path>
    </svg>
)

const IconBath = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"></path>
        <line x1="10" x2="8" y1="5" y2="7"></line>
        <line x1="2" x2="22" y1="12" y2="12"></line>
        <line x1="7" x2="7" y1="19" y2="21"></line>
        <line x1="17" x2="17" y1="19" y2="21"></line>
    </svg>
)

const IconExpand = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"></path>
        <path d="M3 16.2V21m0 0h4.8M3 21l6-6"></path>
        <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6"></path>
        <path d="M3 7.8V3m0 0h4.8M3 3l6 6"></path>
    </svg>
)

const IconFacebook = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
)

const IconTwitter = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
)

const IconInstagram = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
    </svg>
)

const IconLinkedin = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect width="4" height="12" x="2" y="9"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
)

const PropertyCard = ({ title,image, location, beds, baths, size }) => (
    <div className="rounded-lg border bg-white shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
        <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4">
                <div className="flex items-center mr-4 mb-2">
                    <IconMapPin className="w-4 h-4 mr-1" />
                    <span>{location}</span>
                </div>
                <div className="flex items-center mr-4 mb-2">
                    <IconBed className="w-4 h-4 mr-1" />
                    <span>{beds} Beds</span>
                </div>
                <div className="flex items-center mr-4 mb-2">
                    <IconBath className="w-4 h-4 mr-1" />
                    <span>{baths} Baths</span>
                </div>
                <div className="flex items-center mb-2">
                    <IconExpand className="w-4 h-4 mr-1" />
                    <span>{size}</span>
                </div>
            </div>
        </div>
        <div className="px-6 pb-6">
            <Link to="/buy">
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                Buy Property
                </button>
            </Link>
        </div>
    </div>
)



export default function RealEstateHome() {
    const properties = [
        {
            title: "Beautiful Family Home",
            image:"/images/first.jpg",
            location: "Cityville, State",
            beds: 3,
            baths: 2,
            size: "2,000 sqft"
        },
        {
            title: "Modern City Apartment",
            image: "/images/second.jpg",
            location: "Downtown, Metropolis",
            beds: 2,
            baths: 1,
            size: "1,200 sqft"
        },
        {
            title: "Cozy Suburban Cottage",
            image: "/images/third.jpg",
            location: "Suburbia, State",
            beds: 2,
            baths: 1,
            size: "1,500 sqft"
        },
        {
            title: "Luxury Beachfront Villa",
            image: "/images/forth.jpg",
            location: "Coastal Paradise, State",
            beds: 5,
            baths: 4,
            size: "4,500 sqft"
        },
        {
            title: "Mountain Retreat Cabin",
            image: "/images/fifth.jpg",
            location: "Mountain View, State",
            beds: 3,
            baths: 2,
            size: "2,200 sqft"
        },
        {
            title: "Historic Downtown Loft",
            image: "/images/sixth.jpg",
            location: "Historic District, City",
            beds: 1,
            baths: 1,
            size: "1,800 sqft"
        }
    ]

    return (
        
          
        <div className="flex flex-col min-h-screen">
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="/" className="flex items-center">
                                <IconHome className="h-8 w-auto sm:h-10 text-blue-600" />
                                <span className="ml-2 text-xl font-bold text-gray-900">Acme Real Estate</span>
                            </a>
                        </div>
                        <nav className="hidden md:flex space-x-10">
                            <Link to="/buy" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Buy
                            </Link>
                            <Link to="/rent" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Rent
                            </Link>
                            <Link to="/sell" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Sell
                            </Link>
                            <Link to="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                About
                            </Link>
                           
                            <Link to="/support" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                Support
                            </Link>
                            </nav>
                          
                    </div>
                </div>
            </header>

            <main className="flex-grow">
                <section className="bg-blue-600 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
                        <div className="text-center">
                            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
                                Find Your Dream Home
                            </h1>
                            <p className="mt-3 max-w-md mx-auto text-xl sm:text-2xl md:mt-5 md:max-w-3xl">
                                Discover the perfect property that fits your lifestyle and budget.
                            </p>
                            
                        </div>
                    </div>
                </section>

                <section className="bg-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">
                            Featured Properties
                        </h2>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {properties.map((property, index) => (
                                <PropertyCard key={index} {...property} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">About Us</h3>
                            <p className="text-sm text-gray-400">
                                Acme Real Estate is your trusted partner in finding the perfect home. With years of experience and a
                                commitment to excellence, we're here to make your real estate dreams a reality.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                {['Home', 'Properties', 'Agents', 'Blog', 'Contact Us'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-sm text-gray-400 hover:text-white">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                            <address className="text-sm text-gray-400 not-italic">
                                <p>123 Real Estate Street</p>
                                <p>Cityville, State 12345</p>
                                <p>Phone: (123) 456-7890</p>
                                <p>Email: info@acmerealestate.com</p>
                            </address>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                            <p className="text-sm text-gray-400 mb-2">Stay updated with our latest properties and news</p>
                            <form className="flex">
                                <input
                                    type="email"
                                    className="flex-grow px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your email"
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-sm text-gray-400">© 2024 Acme Real Estate. All rights reserved.</p>
                        <div className="flex space-x-6 mt-4 sm:mt-0">
                            {[IconFacebook, IconTwitter, IconInstagram, IconLinkedin].map((Icon, index) => (
                                <a key={index} href="#" className="text-gray-400 hover:text-white">
                                    <Icon className="h-6 w-6" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
            </div>
            
    )
}
