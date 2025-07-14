export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-blue-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl">📚</div>
            <div>
              <h1 className="text-2xl font-bold text-blue-900 dark:text-blue-100">Alachua County Library</h1>
              <p className="text-sm text-blue-600 dark:text-blue-300">Your Gateway to Knowledge</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100 transition-colors">Services</a>
            <a href="#catalog" className="text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100 transition-colors">Catalog</a>
            <a href="#events" className="text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100 transition-colors">Events</a>
            <a href="#contact" className="text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-100 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-8xl mb-6">🏛️</div>
          <h2 className="text-5xl font-bold text-blue-900 dark:text-blue-100 mb-6">
            Welcome to Your Community Library
          </h2>
          <p className="text-xl text-blue-700 dark:text-blue-300 mb-8 leading-relaxed">
            Discover thousands of books, digital resources, community programs, and quiet spaces to learn, work, and grow together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl">
              📖 Browse Catalog
            </button>
            <button className="bg-white hover:bg-blue-50 text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full font-semibold transition-colors">
              🎫 Get Library Card
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white/60 dark:bg-slate-800/60 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-blue-900 dark:text-blue-100 mb-12">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">📚</div>
              <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">Book Collection</h4>
              <p className="text-blue-700 dark:text-blue-300">Access thousands of books, magazines, and newspapers in print and digital formats.</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">💻</div>
              <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">Digital Resources</h4>
              <p className="text-blue-700 dark:text-blue-300">Free WiFi, computer access, online databases, and e-learning platforms.</p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🎭</div>
              <h4 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">Community Events</h4>
              <p className="text-blue-700 dark:text-blue-300">Story time, book clubs, workshops, and cultural events for all ages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-blue-900 dark:text-blue-100 mb-12">Quick Access</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="#" className="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-6 rounded-xl hover:scale-105 transition-transform shadow-lg">
              <div className="text-3xl mb-2">🔍</div>
              <h4 className="font-semibold mb-1">Search Catalog</h4>
              <p className="text-sm opacity-90">Find books and resources</p>
            </a>
            <a href="#" className="bg-gradient-to-br from-green-400 to-green-600 text-white p-6 rounded-xl hover:scale-105 transition-transform shadow-lg">
              <div className="text-3xl mb-2">📅</div>
              <h4 className="font-semibold mb-1">Reserve Room</h4>
              <p className="text-sm opacity-90">Book study spaces</p>
            </a>
            <a href="#" className="bg-gradient-to-br from-orange-400 to-orange-600 text-white p-6 rounded-xl hover:scale-105 transition-transform shadow-lg">
              <div className="text-3xl mb-2">⏰</div>
              <h4 className="font-semibold mb-1">Renew Items</h4>
              <p className="text-sm opacity-90">Extend your loans</p>
            </a>
            <a href="#" className="bg-gradient-to-br from-pink-400 to-pink-600 text-white p-6 rounded-xl hover:scale-105 transition-transform shadow-lg">
              <div className="text-3xl mb-2">🎪</div>
              <h4 className="font-semibold mb-1">Events</h4>
              <p className="text-sm opacity-90">Upcoming programs</p>
            </a>
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="bg-blue-600 dark:bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">📍 Visit Us</h3>
              <p className="text-lg mb-4">401 E University Ave<br />Gainesville, FL 32601</p>
              <p className="text-blue-200">Located in the heart of downtown Gainesville, easily accessible by bus and with plenty of parking available.</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">🕐 Library Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday - Saturday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>1:00 PM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📚</span>
                <span className="text-xl font-semibold">Alachua County Library</span>
              </div>
              <p className="text-slate-300">Serving our community with knowledge, resources, and a welcoming space for everyone.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Library Card Application</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital Collections</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Meeting Room Reservations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Volunteer Opportunities</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-slate-300">
                <li>📞 (352) 334-3900</li>
                <li>✉️ info@aclib.us</li>
                <li>🌐 www.aclib.us</li>
                <li>📱 Follow us on social media</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Alachua County Library. All rights reserved. Built with ❤️ for our community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
