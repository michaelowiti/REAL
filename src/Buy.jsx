import React, { useState } from 'react'

const properties = [
    {
        id: 1,
        image: "/images/first.jpg",
        title: "Spacious Family Home",
        price: 450000,
        bedrooms: 4,
        bathrooms: 3,
        area: 2500,
        location: "123 Main St, Cityville",
        description: "A beautiful family home with a large backyard and modern amenities.",
        owner: {
            name: "John Doe",
            phone: "(555) 123-4567",
            email: "john.doe@example.com"
        }
    },
    {
        id: 2,
        image: "/images/second.jpg",
        title: "Downtown Loft",
        price: 350000,
        bedrooms: 2,
        bathrooms: 2,
        area: 1500,
        location: "456 Urban Ave, Metropolis",
        description: "Stylish loft in the heart of downtown with stunning city views.",
        owner: {
            name: "Jane Smith",
            phone: "(555) 987-6543",
            email: "jane.smith@example.com"
        }
    },
    {
        id: 3,
        image: "/images/third.jpg",
        title: "Cozy Suburban Cottage",
        price: 275000,
        bedrooms: 3,
        bathrooms: 2,
        area: 1800,
        location: "789 Oak Rd, Suburbia",
        description: "Charming cottage with a picturesque garden in a quiet neighborhood.",
        owner: {
            name: "Bob Johnson",
            phone: "(555) 246-8135",
            email: "bob.johnson@example.com"
        }
    },
    {
        id: 4,
        image: "/images/forth.jpg",
        title: "Luxury Beachfront Villa",
        price: 1200000,
        bedrooms: 5,
        bathrooms: 4,
        area: 4000,
        location: "101 Ocean Dr, Seaside",
        description: "Exquisite beachfront property with panoramic ocean views and private beach access.",
        owner: {
            name: "Alice Brown",
            phone: "(555) 369-2580",
            email: "alice.brown@example.com"
        }
    },
    {
        id: 5,
        image: "/images/fifth.jpg",
        title: "Modern City Apartment",
        price: 320000,
        bedrooms: 2,
        bathrooms: 1,
        area: 1200,
        location: "202 Skyline Blvd, Urbanville",
        description: "Contemporary apartment with state-of-the-art amenities in a prime location.",
        owner: {
            name: "Charlie Wilson",
            phone: "(555) 147-2589",
            email: "charlie.wilson@example.com"
        }
    }
]

const PropertyCard = ({ property }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
            <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <div className="grid grid-cols-2 gap-2 mb-4">
                <div>Price: ${property.price.toLocaleString()}</div>
                <div>Bedrooms: {property.bedrooms}</div>
                <div>Bathrooms: {property.bathrooms}</div>
                <div>Area: {property.area} sq ft</div>
            </div>
            <div className="mb-4">
                <strong>Location:</strong> {property.location}
            </div>
            <p className="mb-4">{property.description}</p>
            <div>
                <strong>Owner Contact:</strong>
                <p>{property.owner.name}</p>
                <p>Phone: {property.owner.phone}</p>
                <p>Email: {property.owner.email}</p>
            </div>
        </div>
        
    </div>
)

const Buy = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [priceFilter, setPriceFilter] = useState('')
    const [bedroomFilter, setBedroomFilter] = useState('')
    const itemsPerPage = 3

    const filteredProperties = properties.filter(property => {
        if (priceFilter && property.price > parseInt(priceFilter)) return false
        if (bedroomFilter && property.bedrooms < parseInt(bedroomFilter)) return false
        return true
    })

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentProperties = filteredProperties.slice(indexOfFirstItem, indexOfLastItem)

    const totalPages = Math.ceil(filteredProperties.length / itemsPerPage)

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Properties for Sale</h1>

          

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {currentProperties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>

            <div className="mt-8 flex justify-center">
                <nav className="inline-flex rounded-md shadow">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                    >
                        Previous
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-3 py-2 border border-gray-300 bg-white text-sm font-medium ${currentPage === index + 1
                                    ? 'text-blue-600 bg-blue-50'
                                    : 'text-gray-500 hover:bg-gray-50'
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                    >
                        Next
                    </button>
                </nav>
            </div>
        </div>
    )
}

export default Buy