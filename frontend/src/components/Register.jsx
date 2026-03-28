import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, AlertCircle, ArrowRight, Plane } from 'lucide-react';

export default function Register({ onNavigate }) {
    const { register, user } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    React.useEffect(() => {
        if (user) {
             onNavigate('/profile');
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await register(email, password);
            onNavigate('/login');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex bg-white font-sans">
            {/* Left side: Form */}
            <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:w-[500px] xl:w-[600px] lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96 animate-fade-in-up">
                    <button onClick={() => onNavigate('/')} className="flex items-center gap-2.5 mb-10 group">
                        <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
                            <Plane size={24} className="text-primary" />
                        </div>
                        <span className="text-2xl font-black tracking-tight text-slate-900">AviaSearch</span>
                    </button>
                    
                    <div>
                        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Create an account</h2>
                        <p className="mt-2 text-sm text-slate-500">
                            Already a member?{' '}
                            <button onClick={() => onNavigate('/login')} className="font-semibold text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline">
                                Sign in to your account
                            </button>
                        </p>
                    </div>

                    <div className="mt-8">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {error && (
                                <div className="bg-red-50 p-4 rounded-xl flex items-start gap-3 border border-red-100 text-red-700 animate-fade-in">
                                    <AlertCircle size={20} className="mt-0.5 shrink-0" />
                                    <span className="text-sm font-medium">{error}</span>
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Email address</label>
                                <div className="relative rounded-xl group">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors group-focus-within:text-primary text-slate-400">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white sm:text-sm outline-none transition-all duration-200 font-medium text-slate-900 placeholder-slate-400 hover:border-slate-300"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
                                <div className="relative rounded-xl group">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none transition-colors group-focus-within:text-primary text-slate-400">
                                        <Lock className="h-5 w-5" />
                                    </div>
                                    <input
                                        type="password"
                                        required
                                        minLength="6"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white sm:text-sm outline-none transition-all duration-200 font-medium text-slate-900 placeholder-slate-400 hover:border-slate-300"
                                        placeholder="Create a strong password"
                                    />
                                </div>
                                <p className="mt-2 text-xs text-slate-500">Must be at least 6 characters long.</p>
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full flex justify-center items-center gap-2 py-3.5 px-4 border border-transparent rounded-xl shadow-lg shadow-primary/20 text-sm font-bold text-white bg-primary hover:bg-primary/95 focus:outline-none focus:ring-4 focus:ring-primary/20 focus:ring-offset-0 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5"
                                >
                                    {loading ? 'Creating account...' : 'Create Account'}
                                    {!loading && <ArrowRight size={18} />}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            {/* Right side: Image */}
            <div className="hidden lg:block relative w-0 flex-1 bg-slate-900">
                <img 
                    className="absolute inset-0 h-full w-full object-cover" 
                    src="/articles/bangkok1.jpg" 
                    alt="Bangkok city view" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80" />
                
                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 p-16 xl:p-24 text-white">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold tracking-wider uppercase mb-6 shadow-xl">
                        Join For Free
                    </span>
                    <h2 className="text-4xl xl:text-5xl font-black mb-6 leading-tight tracking-tight">
                        Your next great adventure starts right here.
                    </h2>
                    <p className="text-xl text-white/80 font-medium max-w-xl leading-relaxed">
                        Create an account to save itineraries, unlock exclusive member discounts, and speed through checkout.
                    </p>
                </div>
            </div>
        </div>
    );
}
