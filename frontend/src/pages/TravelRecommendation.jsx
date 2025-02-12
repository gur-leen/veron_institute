import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const TravelRecommendation = () => {
    const [imageFile, setImageFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState(null);
    const [dragActive, setDragActive] = useState(false);

    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) setImageFile(file);
    };

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        const file = e.dataTransfer.files[0];
        if (file.type.startsWith('image/')) {
            setImageFile(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setResults(null);

        const token = localStorage.getItem('token');
        if (!token) {
            toast.error('Please login to use this feature');
            setIsLoading(false);
            setTimeout(() => {
                navigate('/login-register');
            }, 2000);
        }

        if (!imageFile) {
            toast.error('Please upload an image');
            setIsLoading(false);
            return;
        }

        const formData = new FormData();
        formData.append('image', imageFile);

        try {
            const response = await axios.post('http://localhost:8000/emotion/emotion_detection/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                },
            });

            if (response.data.success) {
                setResults(response.data);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || 'Error processing request');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-r from-[#ff69b4] to-[#ffb347] py-12 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-6xl mx-auto"
                >
                    <h1 className="mt-30 text-4xl font-bold text-white text-center mb-8">
                        Travel Destination Recommendations
                    </h1>

                    <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
                        <motion.form
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <div className="mb-8">
                                <label className="block text-white mb-4 text-lg">Upload Facial Image</label>
                                <div
                                    onDragEnter={handleDrag}
                                    onDragLeave={handleDrag}
                                    onDragOver={handleDrag}
                                    onDrop={handleDrop}
                                    className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${dragActive ? 'border-purple-400 bg-white/10' : 'border-white/20'
                                        }`}
                                >
                                    <input
                                        type="file"
                                        onChange={handleFileChange}
                                        accept="image/*"
                                        className="hidden"
                                        id="image-upload"
                                    />
                                    <label htmlFor="image-upload" className="cursor-pointer">
                                        <div className="text-white">
                                            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {imageFile ? (
                                                <p className="text-sm">{imageFile.name}</p>
                                            ) : (
                                                <p className="text-sm">Drag & Drop or Click to Upload</p>
                                            )}
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                disabled={isLoading}
                                className="w-full bg-[#ff69b4] hover:bg-[#ffb347] text-white py-3 rounded-lg font-bold text-lg transition-all disabled:opacity-50"
                            >
                                {isLoading ? 'Analyzing...' : 'Get Recommendations'}
                            </motion.button>
                        </motion.form>

                        {results && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mt-12"
                            >
                                {results.recommendations.length === 0 && (
                                    <div className="text-white text-center py-8">
                                        No recommendations found for this emotion
                                    </div>
                                )}
                                {results.recommendations.length > 0 && (
                                    <>
                                        <div className="text-center mb-12">
                                            <h2 className="text-2xl font-bold text-white mb-2">
                                                Recommended Destinations Based On: {results.dominant_emotion}
                                            </h2>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {results.recommendations.map((rec) => (
                                                <div key={rec.id} className="bg-white/10 rounded-lg p-4">
                                                    <img
                                                        src={rec.destination_thumbnail || 'https://via.placeholder.com/400x200?text=No+Preview'}
                                                        alt={rec.destination_name || 'Travel destination'}
                                                        className="w-full h-48 object-cover rounded-lg mb-4"
                                                    />
                                                    <h3 className="text-white text-lg font-semibold mb-2">
                                                        {rec.destination_name || 'Travel destination'}
                                                    </h3>
                                                    <a
                                                        href={rec.destination_url || 'https://via.placeholder.com/400x200?text=No+Preview'}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-purple-300 hover:text-purple-400 transition-colors"
                                                    >
                                                        Learn More →
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
            <Footer />
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                toastStyle={{ backgroundColor: '#6a0dad', color: 'white' }}
            />
        </>
    );
};

export default TravelRecommendation;