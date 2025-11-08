import { useState } from 'react';
import { Instagram, Music, ShoppingBag, MessageSquare, Menu, X, Sparkles } from 'lucide-react';

// Import images
import layanImg from '/img/Cinnamoroll with glasses.jpg';
import marwaImg from '/img/download.jpg';
import halaImg from '/img/HelloKitty.jpg';
import youmnaImg from '/img/kuromi plush.jpg';

export default function Pinspiration() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-blue-50" style={{fontFamily: "'Poppins', 'Segoe UI', system-ui, sans-serif"}}>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-xl shadow-xl sticky top-0 z-50 border-b-2 border-blue-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-xl flex items-center justify-center shadow-lg transform rotate-12">
              <Sparkles className="w-6 h-6 text-white transform -rotate-12" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Pinspiration
            </h1>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 hover:scale-105">
              Home
            </button>
            <button onClick={() => scrollToSection('order')} className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 hover:scale-105">
              Order
            </button>
            <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 hover:scale-105">
              Team
            </button>
            <button onClick={() => scrollToSection('feedback')} className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 hover:scale-105">
              Feedback
            </button>
            <a 
              href="https://instagram.com/pinspiration_ldhss" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold"
            >
              <Instagram className="w-5 h-5" />
              Order Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t-2 border-blue-200">
            <div className="flex flex-col p-6 gap-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-blue-600 font-semibold py-3 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('order')} className="text-left text-gray-700 hover:text-blue-600 font-semibold py-3 transition-colors">
                Order
              </button>
              <button onClick={() => scrollToSection('team')} className="text-left text-gray-700 hover:text-blue-600 font-semibold py-3 transition-colors">
                Team
              </button>
              <button onClick={() => scrollToSection('feedback')} className="text-left text-gray-700 hover:text-blue-600 font-semibold py-3 transition-colors">
                Feedback
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="max-w-7xl mx-auto px-6 py-24 text-center relative z-10">
        <h2 className="text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent tracking-tight leading-tight">
          Design Your<br />Perfect Button
        </h2>
        <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed">
          Turn any design into a stunning custom button. Perfect for bags, jackets, and showing off your unique style. 🎨
        </p>
        
        {/* Pricing Cards */}
        <div className="flex gap-10 justify-center mb-20 flex-wrap">
          <div className="bg-white rounded-3xl p-10 shadow-2xl border-3 border-blue-300 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:-rotate-1 w-64 transform">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl transform rotate-6">
              <ShoppingBag className="w-12 h-12 text-white transform -rotate-6" />
            </div>
            <h3 className="font-bold text-3xl mb-3 text-gray-900">Small</h3>
            <p className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">$1.50</p>
            <p className="text-base text-gray-600">Classic size</p>
          </div>
          <div className="bg-white rounded-3xl p-10 shadow-2xl border-3 border-yellow-300 hover:border-yellow-500 transition-all duration-300 hover:scale-105 hover:rotate-1 w-64 transform">
            <div className="w-28 h-28 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl transform -rotate-6">
              <ShoppingBag className="w-14 h-14 text-white transform rotate-6" />
            </div>
            <h3 className="font-bold text-3xl mb-3 text-gray-900">Large</h3>
            <p className="text-6xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent mb-3">$2.00</p>
            <p className="text-base text-gray-600">Statement piece</p>
          </div>
        </div>

        {/* How to Order */}
        <div id="order" className="bg-white/90 backdrop-blur-xl rounded-3xl p-14 max-w-5xl mx-auto mb-24 shadow-2xl border-3 border-blue-200">
          <h3 className="text-5xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">How to Order</h3>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mb-5 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-5xl">🎨</span>
              </div>
              <h4 className="font-semibold text-2xl mb-3 text-gray-900">Pick Design</h4>
              <p className="text-base text-gray-600 leading-relaxed">Any image, logo, or artwork you love</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-3xl flex items-center justify-center mb-5 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-5xl">📏</span>
              </div>
              <h4 className="font-semibold text-2xl mb-3 text-gray-900">Choose Size</h4>
              <p className="text-base text-gray-600 leading-relaxed">Small or large, your choice</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl flex items-center justify-center mb-5 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Instagram className="w-12 h-12 text-white" />
              </div>
              <h4 className="font-semibold text-2xl mb-3 text-gray-900">Send to Us</h4>
              <p className="text-base text-gray-600 leading-relaxed">DM on Instagram or TikTok</p>
            </div>
          </div>
          <div className="mt-14 flex gap-5 justify-center flex-wrap">
            <a 
              href="https://instagram.com/pinspiration_ldhss" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-5 rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold text-lg"
            >
              <Instagram className="w-7 h-7" />
              @pinspiration_ldhss
            </a>
            <a 
              href="https://tiktok.com/@pinspiration_ldhss" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-sky-500 text-white px-12 py-5 rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold text-lg"
            >
              <Music className="w-7 h-7" />
              @pinspiration_ldhss
            </a>
          </div>
        </div>

        {/* About Us */}
        <div id="team" className="mb-24">
          <h3 className="text-6xl font-bold mb-14 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Meet the Team</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Marwa', role: 'VP of Finance', gradient: 'from-blue-500 to-cyan-500', img: marwaImg},
              { name: 'Layan', role: 'VP of Marketing', gradient: 'from-cyan-500 to-sky-500', img: layanImg},
              { name: 'Hala', role: 'VP of Production', gradient: 'from-yellow-500 to-amber-500', img: halaImg},
              { name: 'Youmna', role: 'VP of Design', gradient: 'from-amber-500 to-blue-500', img: youmnaImg}
            ].map((member) => (
              <div key={member.name} className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border-3 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:scale-105 group">
                <div className={`w-36 h-36 bg-gradient-to-br ${member.gradient} rounded-3xl mx-auto mb-6 overflow-hidden shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-semibold text-3xl mb-3 text-gray-900">{member.name}</h4>
                <p className="text-base text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-gray-700 max-w-3xl mx-auto text-xl leading-relaxed">
            We're a Grade 9 business class team bringing custom button designs to life. <br />Proceeds support CHEO. 💙
          </p>
        </div>

        {/* Feedback Section */}
        <div id="feedback" className="mb-24">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-12 max-w-5xl mx-auto shadow-2xl border-3 border-blue-200">
            <div className="flex items-center justify-center gap-4 mb-8">
              <MessageSquare className="w-12 h-12 text-blue-600" />
              <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Your Feedback</h3>
            </div>
            <p className="text-gray-700 mb-10 text-xl">
              Help us improve! Share your thoughts in our quick questionnaire.
            </p>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-3 shadow-xl overflow-hidden border-3 border-blue-200">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSc47X-E-tAEq68rgGtl5dFu4-nQiFbWnr67wcXwR5KF-Obvag/viewform?embedded=true" 
                width="100%" 
                height="800" 
                frameBorder="0" 
                marginHeight={0}
                marginWidth={0}
                className="rounded-2xl"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur-xl mt-24 py-10 border-t-3 border-blue-200 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-700">
          <p className="mb-3 font-semibold text-xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">© 2025 Pinspiration</p>
          <p className="text-base text-gray-600">Mr Lind's Grade 9 Business Class Project</p>
        </div>
      </footer>
    </div>
  );
}