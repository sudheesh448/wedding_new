import { useState, useEffect } from "react";
import { Calendar, Clock,MessageCircle, MapPin, Plane, Train } from "lucide-react";



function App() {
  const weddingDate = new Date("2025-05-04T00:00:00").getTime();
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = weddingDate - now;

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);

      if (timeLeft < 0) {
        clearInterval(interval);
        setCountdown("The big day is here!");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-200 to-purple-300 font-['Great_Vibes',_cursive]">
      {/* Hero Section with Blurred Background */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center backdrop-blur-lg bg-[url('/sudheesh-small.jpeg')] sm:bg-[url('/sudheesh-new.jpeg')] md:bg-[url('/sudheesh-new.jpeg')]"
          />
          <div className="absolute inset-0 bg-black opacity-50 z-10" />
        </div>

        <div className="z-10 max-w-3xl mx-auto text-white space-y-10">
          <h3 className="text-xl md:text-2xl font-light tracking-widest uppercase">We're getting married</h3>
          <h3 className="text-8xl md:text-7xl lg:text-8xl font-tangerine  font-bold">
            Sudheesh <span className="font-extrabold">&</span> Rincy
          </h3>
          <p className="text-2xl md:text-3xl font-light mt-4">May 4, 2025</p>
          <div className="bg-white/50 w-40 mx-auto my-6 h-[2px]" />
          <p className="text-xl md:text-2xl font-light">{countdown}</p>
        </div>
      </section>

      {/* Wedding Details */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-['Dancing_Script',_cursive] text-pink-600 mb-6">Our Special Day</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We invite you to join us as we celebrate the beginning of our new life together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="border-none shadow-lg bg-pink-100 rounded-lg p-8">
              <h3 className="text-3xl font-['Sacramento',_cursive] text-pink-700">Wedding Ceremony</h3>
              <div className="flex flex-col items-center gap-3 text-gray-600 mt-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-pink-600" />
                  <span>May 4, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-pink-600" />
                  <span>9:45 AM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-pink-600" />
                  <span>Bride's Residence</span>
                </div>
              </div>
            </div>

            <div className="border-none shadow-lg  bg-purple-100 rounded-lg p-8">
              <h3 className="text-3xl font-['Sacramento',_cursive] text-purple-700">Reception</h3>
              <div className="flex flex-col items-center gap-3 text-gray-600 mt-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-purple-600" />
                  <span>May 4, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <span>4:00 PM to 9:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-purple-600" />
                  <span>Groom's Residence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue and Directions */}
      <section className="border-none shadow-lg  bg-pink-100 rounded-lg p-8 py-8 px-4 text-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center">Venue & Directions</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-lg shadow-lg space-y-4">
                <h4 className="font-medium text-lg">Travel Information</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Plane className="h-5 w-5 text-gray-900" />
                    <span>Nearest Airport: Calicut International (CCJ) (10 KM)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Train className="h-5 w-5 text-gray-900" />
                    <span>Nearest Station: Kozhikkode (CLT) (20 KM)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden relative">
              <iframe
                className="w-full h-full border-none rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.1713680815673!2d75.8421601!3d11.112311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA2JzQ0LjMiTiA3NcKwNTAnNDEuMSJF!5e0!3m2!1sen!2sin!4v1710427593691"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="bg-gradient-to-br from-pink-300 to-purple-500 text-white py-8 px-4 text-center" id="rsvp">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-['Dancing_Script',_cursive] mb-6">Join Our Celebration</h2>
          <p className="mb-8 text-lg">We look forward to celebrating with you. Please RSVP by May 01, 2025.</p>
          <a
            href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20RSVP%20for%20Sudheesh%20%26%20Rincy's%20wedding."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-pink-600 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-pink-100 gap-2"
          >
            <MessageCircle className="h-6 w-6 text-green-500" />
           
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h3 className="font-['Great_Vibes',_cursive] text-3xl text-pink-700 mb-2">Sudheesh & Rincy</h3>
          <p className="text-gray-600">#Sudheesh&Rincy</p>
        </div>
      </footer>
    </main>
  );
}


export default App