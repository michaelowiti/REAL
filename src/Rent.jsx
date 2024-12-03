import React, { useState } from 'react'

const rentalProperties = [
    {
        id: 1,
        image: "/images/first.jpg",
        title: "Modern Downtown Apartment",
        price: 2500,
        bedrooms: 2,
        bathrooms: 2,
        area: 1200,
        location: "123 City Center, Metropolis",
        description: "Sleek and modern apartment in the heart of downtown, featuring high-end appliances and a stunning city view.",
        amenities: ["In-unit Laundry", "Fitness Center", "Rooftop Terrace", "Pet Friendly"],
        availableFrom: "2024-07-01",
        leaseTerm: "12 months",
        owner: {
            name: "Urban Living LLC",
            phone: "(555) 234-5678",
            email: "info@urbanliving.com"
        }
    },
    {
        id: 2,
        image: "/images/second.jpg",
        title: "Cozy Suburban House",
        price: 1800,
        bedrooms: 3,
        bathrooms: 2,
        area: 1800,
        location: "456 Maple Street, Suburbia",
        description: "Charming family home in a quiet neighborhood, featuring a spacious backyard and newly renovated kitchen.",
        amenities: ["Garage", "Fenced Yard", "Fireplace", "Central Air"],
        availableFrom: "2024-08-15",
        leaseTerm: "12-24 months",
        owner: {
            name: "Sarah Johnson",
            phone: "(555) 876-5432",
            email: "sarah.johnson@email.com"
        }
    },
    {
        id: 3,
        image: "/images/third.jpg",
        title: "Luxury Waterfront Condo",
        price: 3500,
        bedrooms: 3,
        bathrooms: 3,
        area: 2200,
        location: "789 Harbor View, Seaside",
        description: "Upscale condo with breathtaking ocean views, featuring high-end finishes and resort-style amenities.",
        amenities: ["Private Balcony", "Pool", "Gym", "24/7 Security"],
        availableFrom: "2024-09-01",
        leaseTerm: "12 months",
        owner: {
            name: "Coastal Properties Inc.",
            phone: "(555) 789-0123",
            email: "rentals@coastalproperties.com"
        }
    },
    {
        id: 4,
        image: "/images/forth.jpg",
        title: "Rustic Mountain Cabin",
        price: 1500,
        bedrooms: 2,
        bathrooms: 1,
        area: 1000,
        location: "101 Pine Ridge, Mountain View",
        description: "Cozy cabin retreat surrounded by nature, perfect for those seeking a peaceful getaway or work-from-home haven.",
        amenities: ["Wood Stove", "Hiking Trails", "Scenic Views", "Fully Furnished"],
        availableFrom: "2024-10-01",
        leaseTerm: "6-12 months",
        owner: {
            name: "Mountain Escapes Rentals",
            phone: "(555) 321-6547",
            email: "bookings@mountainescapes.com"
        }
    },
    {
        id: 5,
        image: "/images/fifth.jpg",
        title: "Student-Friendly Studio",
        price: 1000,
        bedrooms: 1,
        bathrooms: 1,
        area: 500,
        location: "202 College Ave, University Town",
        description: "Compact and affordable studio apartment, ideally located near campus with all the essentials for student living.",
        amenities: ["High-Speed Internet", "Study Areas", "Bike Storage", "On-site Laundry"],
        availableFrom: "2024-08-20",
        leaseTerm: "9-12 months",
        owner: {
            name: "Campus Living Solutions",
            phone: "(555) 111-2222",
            email: "leasing@campusliving.com"
        }
    }
]

const RentalPropertyCard = ({ property }) => (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
            src={property.image}
            alt={property.title}
            className="w-full h-48 object-cover"
        />
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{property.title}</h2>
            <p className="text-gray-600 mb-4">{property.location}</p>
            <div className="flex justify-between mb-4">
                <span className="text-xl font-semibold">${property.price}/month</span>
                <span>{property.bedrooms} bed • {property.bathrooms} bath • {property.area} sqft</span>
            </div>
            <p className="text-gray-700 mb-4">{property.description}</p>
            <div className="mb-4">
                <h3 className="font-semibold mb-2">Amenities:</h3>
                <ul className="list-disc list-inside">
                    {property.amenities.map((amenity, index) => (
                        <li key={index}>{amenity}</li>
                    ))}
                </ul>
            </div>
            <div className="mb-4">
                <p><strong>Available from:</strong> {property.availableFrom}</p>
                <p><strong>Lease term:</strong> {property.leaseTerm}</p>
            </div>
            <div>
                <h3 className="font-semibold mb-2">Contact:</h3>
                <p>{property.owner.name}</p>
                <p>Phone: {property.owner.phone}</p>
                <p>Email: {property.owner.email}</p>
            </div>
        </div>
        <div className="px-6 py-4 bg-gray-100">
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              Call to schedule viewing
            </button>
        </div>
    </div>
)

const Rent = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [priceFilter, setPriceFilter] = useState('')
    const [bedroomFilter, setBedroomFilter] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
    const itemsPerPage = 3

    const filteredProperties = rentalProperties.filter(property => {
        const matchesPrice = !priceFilter || property.price <= parseInt(priceFilter)
        const matchesBedrooms = !bedroomFilter || property.bedrooms >= parseInt(bedroomFilter)
        const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            property.location.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesPrice && matchesBedrooms && matchesSearch
    })

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentProperties = filteredProperties.slice(indexOfFirstItem, indexOfLastItem)

    const totalPages = Math.ceil(filteredProperties.length / itemsPerPage)

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Rental Properties</h1>

           
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {currentProperties.map(property => (
                    <RentalPropertyCard key={property.id} property={property} />
                ))}
            </div>

            {filteredProperties.length === 0 && (
                <p className="text-center text-gray-600 mt-8">No properties found matching your criteria.</p>
            )}

            {filteredProperties.length > itemsPerPage && (
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
            )}
        </div>
    )
}

export default Rent