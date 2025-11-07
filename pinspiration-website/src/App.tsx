import { useState } from 'react';
import { Instagram, Music, ShoppingBag, MessageSquare, Menu, X, Sparkles, Star } from 'lucide-react';

export default function Pinspiration() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-fuchsia-900 to-pink-800 font-['Space_Grotesk',sans-serif]">
      {/* Animated background circles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Sparkles className="w-7 h-7 text-pink-400 animate-pulse" />
              <Star className="w-3 h-3 text-yellow-300 absolute -top-1 -right-1" />
            </div>
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-300 to-purple-300">
              Pinspiration
            </h1>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="text-pink-200 hover:text-pink-400 font-semibold transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('order')} className="text-pink-200 hover:text-pink-400 font-semibold transition-colors">
              Order
            </button>
            <button onClick={() => scrollToSection('team')} className="text-pink-200 hover:text-pink-400 font-semibold transition-colors">
              Team
            </button>
            <button onClick={() => scrollToSection('feedback')} className="text-pink-200 hover:text-pink-400 font-semibold transition-colors">
              Feedback
            </button>
            <a 
              href="https://instagram.com/pinspiration_ldhss" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-6 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all duration-300 hover:scale-105 font-bold"
            >
              <Instagram className="w-4 h-4" />
              Order Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-pink-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/30 backdrop-blur-md border-t border-white/10">
            <div className="flex flex-col p-4 gap-3">
              <button onClick={() => scrollToSection('home')} className="text-left text-pink-200 hover:text-pink-400 font-semibold py-2">
                Home
              </button>
              <button onClick={() => scrollToSection('order')} className="text-left text-pink-200 hover:text-pink-400 font-semibold py-2">
                Order
              </button>
              <button onClick={() => scrollToSection('team')} className="text-left text-pink-200 hover:text-pink-400 font-semibold py-2">
                Team
              </button>
              <button onClick={() => scrollToSection('feedback')} className="text-left text-pink-200 hover:text-pink-400 font-semibold py-2">
                Feedback
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
        <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-pink-400/30">
          <span className="text-pink-300 font-bold text-sm">✨ Custom Buttons That Pop</span>
        </div>
        <h2 className="text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-fuchsia-200 to-purple-300 tracking-tight leading-tight">
          Design Your<br />Perfect Button
        </h2>
        <p className="text-xl text-pink-100 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          Turn any design into a stunning custom button. Perfect for bags, jackets, and showing off your unique style.
        </p>
        
        {/* Pricing Cards */}
        <div className="flex gap-8 justify-center mb-16 flex-wrap">
          <div className="bg-gradient-to-br from-pink-500/10 to-fuchsia-500/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300 hover:scale-105 w-56">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-fuchsia-400 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg shadow-pink-500/50">
              <ShoppingBag className="w-10 h-10 text-white" />
            </div>
            <h3 className="font-bold text-2xl mb-2 text-white">Small</h3>
            <p className="text-5xl font-black text-pink-300 mb-2">$1.50</p>
            <p className="text-sm text-pink-200">Classic size</p>
          </div>
          <div className="bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-fuchsia-400/20 hover:border-fuchsia-400/40 transition-all duration-300 hover:scale-105 w-56">
            <div className="w-24 h-24 bg-gradient-to-br from-fuchsia-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg shadow-fuchsia-500/50">
              <ShoppingBag className="w-12 h-12 text-white" />
            </div>
            <h3 className="font-bold text-2xl mb-2 text-white">Large</h3>
            <p className="text-5xl font-black text-fuchsia-300 mb-2">$2.00</p>
            <p className="text-sm text-pink-200">Statement piece</p>
          </div>
        </div>

        {/* How to Order */}
        <div id="order" className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-md rounded-3xl p-12 max-w-4xl mx-auto mb-20 shadow-2xl border border-pink-400/20">
          <h3 className="text-4xl font-black mb-10 text-white tracking-tight">How to Order</h3>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-pink-500/30">
                <span className="text-4xl">🎨</span>
              </div>
              <h4 className="font-bold text-xl mb-2 text-white">Pick Design</h4>
              <p className="text-sm text-pink-200 leading-relaxed">Any image, logo, or artwork you love</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-fuchsia-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-fuchsia-500/30">
                <span className="text-4xl">📏</span>
              </div>
              <h4 className="font-bold text-xl mb-2 text-white">Choose Size</h4>
              <p className="text-sm text-pink-200 leading-relaxed">Small or large, your choice</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30">
                <Instagram className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-bold text-xl mb-2 text-white">Send to Us</h4>
              <p className="text-sm text-pink-200 leading-relaxed">DM on Instagram or TikTok</p>
            </div>
          </div>
          <div className="mt-12 flex gap-4 justify-center flex-wrap">
            <a 
              href="https://instagram.com/pinspiration_ldhss" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-10 py-4 rounded-full hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all duration-300 hover:scale-105 font-black text-lg"
            >
              <Instagram className="w-6 h-6" />
              @pinspiration_ldhss
            </a>
            <a 
              href="https://tiktok.com/@pinspiration_ldhss" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white px-10 py-4 rounded-full hover:shadow-[0_0_30px_rgba(217,70,239,0.6)] transition-all duration-300 hover:scale-105 font-black text-lg"
            >
              <Music className="w-6 h-6" />
              @pinspiration_ldhss
            </a>
          </div>
        </div>

        {/* About Us */}
        <div id="team" className="mb-20">
          <h3 className="text-5xl font-black mb-12 text-white tracking-tight">Meet the Team</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Marwa', role: 'VP of Finance', color: 'from-pink-400 to-fuchsia-400', emoji: '💰' },
              { name: 'Layan', role: 'VP of Marketing', color: 'from-fuchsia-400 to-purple-400', emoji: '📣' },
              { name: 'Hala', role: 'VP of Production', color: 'from-purple-400 to-pink-400', emoji: '⚙️' },
              { name: 'Yumna', role: 'VP of Design', color: 'from-pink-400 to-rose-400', emoji: '🎨' }
            ].map((member) => (
              <div key={member.name} className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300 hover:scale-105">
                <div className={`w-32 h-32 bg-gradient-to-br ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center text-5xl shadow-lg`}>
                  {member.emoji}
                </div>
                <h4 className="font-bold text-2xl mb-2 text-white">{member.name}</h4>
                <p className="text-sm text-pink-200 font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-pink-100 max-w-2xl mx-auto text-lg leading-relaxed">
            We're a Grade 9 business class team bringing custom button designs to life. All proceeds support CHEO.
          </p>
        </div>

        {/* Feedback Section */}
        <div id="feedback" className="mb-20">
          <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-md rounded-3xl p-10 max-w-4xl mx-auto shadow-2xl border border-pink-400/20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MessageSquare className="w-10 h-10 text-pink-400" />
              <h3 className="text-5xl font-black text-white tracking-tight">Your Feedback</h3>
            </div>
            <p className="text-pink-100 mb-8 text-lg">
              Help us improve! Share your thoughts in our quick questionnaire.
            </p>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-2 shadow-lg overflow-hidden border border-pink-400/10">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSc47X-E-tAEq68rgGtl5dFu4-nQiFbWnr67wcXwR5KF-Obvag/viewform?embedded=true" 
                width="100%" 
                height="800" 
                frameBorder="0" 
                marginHeight={0}
                marginWidth={0}
                className="rounded-xl"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 rounded-3xl p-14 text-white shadow-[0_0_50px_rgba(236,72,153,0.4)]">
          <Sparkles className="w-16 h-16 mx-auto mb-4 animate-pulse" />
          <h3 className="text-5xl font-black mb-6 tracking-tight">Ready to Create?</h3>
          <p className="text-2xl max-w-2xl mx-auto mb-10 font-semibold">
            Send us your design and we'll make it happen! 🎨
          </p>
          <a 
            href="https://instagram.com/pinspiration_ldhss" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-fuchsia-600 px-10 py-5 rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-105 font-black text-xl"
          >
            <Instagram className="w-7 h-7" />
            Order Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-md mt-20 py-8 border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center text-pink-200">
          <p className="mb-2 font-bold">© 2025 Pinspiration</p>
          <p className="text-sm text-pink-300">Mr. Lind's Grade 9 Business Class Project</p>
        </div>
      </footer>
    </div>
  );
}