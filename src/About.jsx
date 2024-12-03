import React from 'react'

const About = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">About Acme Real Estate</h1>
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold mb-2">Our Story</h2>
                <p className="mb-4">
                    Founded in 2000, Acme Real Estate has been a trusted name in the property market for over two decades. Our journey began with a simple mission: to help people find their perfect homes and make sound real estate investments.
                </p>
                <p>
                    Today, we're proud to be one of the leading real estate agencies, known for our expertise, integrity, and commitment to client satisfaction.
                </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold mb-2">Our Values</h2>
                <ul className="list-disc list-inside">
                    <li>Integrity in every transaction</li>
                    <li>Client-focused approach</li>
                    <li>Innovation in real estate solutions</li>
                    <li>Community engagement and support</li>
                </ul>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-2">Our Team</h2>
                <p className="mb-4">
                    Our strength lies in our team of experienced real estate professionals. From our seasoned agents to our dedicated support staff, every member of the Acme family is committed to providing you with the best service possible.
                </p>
                <p>
                    Whether you're buying, selling, or renting, you can trust Acme Real Estate to guide you through every step of your real estate journey.
                </p>
            </div>
        </div>
    )
}

export default About