"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';

const PreOrder: React.FC = () => {
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!image) {
            alert('Please upload an image.');
            return;
        }
        const formData = new FormData();
        formData.append('productImage', image);
        console.log('Form submitted with image:', image);
    };

    return (
        <div className="flex flex-col items-center py-10 bg-gray-50">
            {/* Heading */}
            <h2 className="text-_orange text-2xl font-bold mb-2">Looking For Something Different ??</h2>
            <p className="text-gray-600 mb-6">Put Your Information in The Box...</p>

            {/* Form */}
            <div className="bg-_white shadow-md rounded-lg p-6 w-full max-w-2xl">
                <form onSubmit={handleSubmit}>
                    {/* Product Information */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Product Information</label>
                        <input
                            type="text"
                            placeholder="Enter Product Name/URL"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    {/* Image Upload */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Insert Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />

                        {/* Preview */}
                        {preview && (
                            <div className="mt-4">
                                <img
                                src={preview}
                                alt="Preview"
                                 className="h-20 w-20 object-cover rounded-lg shadow-md"
                            />
                            </div>
                        )}
                    </div>

                    {/* Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    {/* Phone and Email */}
                    <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Phone</label>
                            <input
                                type="text"
                                placeholder="Enter Phone No"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="Enter Email Address"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                    </div>

                    {/* Address */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Address</label>
                        <textarea
                            placeholder="Enter Address"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                            rows={3}
                        ></textarea>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="mb-4">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-4 w-4 text-blue-600"
                            />
                            <span className="ml-2 text-gray-700">I hereby accept the terms and conditions of pre-order and read the pre-order terms and conditions carefully.</span>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-_orange text-white rounded-lg hover:bg-_orange/80 focus:outline-none focus:ring focus:border-blue-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            {/* How to Pre-Order Section */}
            <div className="mt-10 w-full max-w-lg">
                <h3 className="text-center text-xl font-semibold text-gray-700 mb-4">How to Pre-Order</h3>
                <p className="text-center text-gray-600 mb-4">Watch the video and learn more about the pre-order process</p>
                <div className="w-full">
                    {/* Video Embed */}
                    <iframe
                        className="w-full h-64 rounded-lg"
                        src="https://www.youtube.com/embed/7fkif715igA"
                        title="How to Pre-Order"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default PreOrder;
