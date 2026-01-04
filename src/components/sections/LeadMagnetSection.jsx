import React from 'react';
import { useForm } from 'react-hook-form';
import { Download, CheckCircle, Lock } from 'lucide-react';
import { Button } from '../ui/Button';

export const LeadMagnetSection = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section className="py-20 bg-orange-500 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="bg-navy-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">

                    {/* Text Content */}
                    <div className="p-10 lg:p-14 lg:w-1/2 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Get Your Free Lighting Guide</h2>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Download our comprehensive technical catalogue featuring complete certified product range, technical specifications, and OEM reference guides.
                        </p>
                        <div className="space-y-4 mb-8">
                            {['Complete Certified Range', 'Photometric Data', 'Compliance Certifications'].map((item, idx) => (
                                <div key={idx} className="flex items-center text-gray-200">
                                    <CheckCircle className="text-orange-500 mr-3" size={20} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                            <Lock size={14} className="mr-2" />
                            No spam. Instant download.
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="bg-white p-10 lg:p-14 lg:w-1/2">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Full Name</label>
                                <input {...register("fullName")} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Company Name</label>
                                <input {...register("company")} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Company Pvt Ltd" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Email Address</label>
                                <input {...register("email")} type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="john@company.com" />
                            </div>

                            <Button variant="primary" size="lg" className="w-full mt-4">
                                <Download size={20} className="mr-2" /> Download Catalogue
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
