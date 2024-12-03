import React from 'react'

const Support = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Support</h1>
            <p className="mb-4">We're here to help you with any questions or concerns.</p>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                <p>Email: support@acmerealestate.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Hours: Monday - Friday, 9am - 5pm</p>
            </div>
            <div className="mt-6 bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-2">FAQs</h2>
                <ul className="list-disc list-inside">
                    <li>How do I schedule a property viewing?</li>
                    <li>What documents do I need to rent a property?</li>
                    <li>How long does the buying process typically take?</li>
                    <li>What fees are involved in selling my property?</li>
                </ul>
            </div>
        </div>
    )
}

export default Support