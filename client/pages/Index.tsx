import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUp, Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const creators = [
    { name: "Deddy Corbuzier", channel: "Deddy Corbuzier", subscribers: "15M" },
    { name: "Raditya Dika", channel: "Raditya Dika", subscribers: "8.2M" },
    { name: "Atta Halilintar", channel: "Atta Halilintar", subscribers: "25M" },
    { name: "Baim Wong", channel: "Baim Paula", subscribers: "18M" },
    { name: "Ria Ricis", channel: "Ria Ricis", subscribers: "32M" },
    { name: "Arief Muhammad", channel: "Arief Muhammad", subscribers: "5.1M" },
    { name: "Jerome Polin", channel: "Nihongo Mantappu", subscribers: "6.8M" },
    { name: "Awkarin", channel: "Karin Novilda", subscribers: "3.2M" },
    { name: "Gita Savitri", channel: "Gita Savitri Devi", subscribers: "2.1M" },
  ];

  const clients = [
    "Tokopedia",
    "Shopee",
    "Gojek",
    "Grab",
    "Traveloka",
    "Bukalapak",
    "OVO",
    "Dana",
    "LinkAja",
    "Blibli",
    "Lazada",
    "JD.ID",
    "Pegipegi",
    "Tiket",
    "RedDoorz",
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "rgb(26, 26, 26)" }}
    >
      {/* Fixed Header */}
      <header
        className="fixed top-0 w-full z-50 h-20 flex items-center"
        style={{ backgroundColor: "rgba(26, 26, 26, 0.95)" }}
      >
        <div className="w-full flex items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center ml-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F462b2f34de624179831f23996a13c371%2Fd4877b51a9414bdeb0f3815da676e4b0?format=webp&width=800"
              alt="CLOSETHEDOOR CORBUZIER PODCAST"
              className="h-12 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center" style={{ paddingLeft: "20%" }}>
            <Link
              to="/"
              className="text-white px-4 py-2 hover:text-gray-300 transition-colors nav-link"
            >
              Home
            </Link>
            <Link
              to="/creators"
              className="text-white px-4 py-2 hover:text-gray-300 transition-colors nav-link"
              style={{ margin: "0 30px 0 30px" }}
            >
              Creators
            </Link>
            <Link
              to="/privacy"
              className="text-white px-4 py-2 hover:text-gray-300 transition-colors nav-link"
            >
              Privacy
            </Link>
            <Link
              to="/faq"
              className="text-white px-4 py-2 hover:text-gray-300 transition-colors nav-link"
              style={{ margin: "0 30px 0 30px" }}
            >
              FAQ
            </Link>
            </nav>

          {/* Login Button */}
          <nav className="ml-auto mr-16">
            <Button
              className="text-white font-semibold"
              style={{
                backgroundColor: "#BA1E1C",
                borderRadius: "10px",
                padding: "8px 16px",
              }}
            >
              Login
            </Button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Banner */}
        <section className="relative h-screen flex items-center justify-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url("https://api-ctd.dmmspot.id/app/banner/bn20230919112616.webp")`,
            }}
          />

          {/* Hero Content */}
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              The Largest Creators
              <br />
              <span className="text-4xl md:text-6xl">Hub In Indonesia</span>
            </h1>
            <p className="text-lg md:text-xl font-light mb-4 max-w-4xl mx-auto leading-relaxed">
              Explore million of content with creative creators around
              Indonesia.
            </p>
            <p className="text-lg md:text-xl font-light max-w-4xl mx-auto leading-relaxed">
              Close The Door, the home of creators
            </p>
          </div>

          {/* Carousel Indicator */}
          <div className="absolute bottom-8 left-[15%] right-[15%] flex justify-center">
            <div className="flex space-x-3">
              <div className="w-3 h-3 bg-white rounded-full opacity-100"></div>
              <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
              <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-7xl mx-auto py-16 px-4">
          <div className="flex flex-wrap items-start">
            {/* About Text */}
            <div className="w-full lg:w-7/12 text-white pr-8">
              <h2 className="text-2xl font-bold mb-6">About</h2>
              <p className="text-base leading-relaxed text-gray-300 text-justify">
                CLOSETHEDOOR is a brand run by PT Dektos Digital Corbuzier and
                founded by Deddy Corbuzier. We are the largest content creator
                network in Indonesia, bringing together the most influential
                creators to deliver engaging content across multiple platforms.
                Our mission is to create a platform where creativity meets
                opportunity, connecting brands with authentic voices that
                resonate with millions of viewers.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="w-full lg:w-5/12 mt-8 lg:mt-0">
              <div className="space-y-3">
                <Card
                  className="h-24 flex flex-col justify-center items-center text-white border-0 bg-gradient-to-r from-purple-600 to-blue-600"
                  style={{
                    borderRadius: "20px",
                  }}
                >
                  <div className="text-lg font-bold">40 Million+</div>
                  <div className="text-sm">Subscribers</div>
                </Card>

                <Card
                  className="h-24 flex flex-col justify-center items-center text-white border-0 bg-gradient-to-r from-green-600 to-teal-600"
                  style={{
                    borderRadius: "20px",
                  }}
                >
                  <div className="text-lg font-bold">25+</div>
                  <div className="text-sm">Creators</div>
                </Card>

                <Card
                  className="h-24 flex flex-col justify-center items-center text-white border-0 bg-gradient-to-r from-orange-600 to-red-600"
                  style={{
                    borderRadius: "20px",
                  }}
                >
                  <div className="text-lg font-bold">100 Million+</div>
                  <div className="text-sm">Viewers</div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Creators Hero Section */}
        <section
          className="relative h-80 flex items-center justify-center text-center"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='1920' height='315' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23333'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='%23fff' text-anchor='middle' dy='.3em'%3ECreators Background%3C/text%3E%3C/svg%3E")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2
            className="text-white text-3xl font-bold"
            style={{ textShadow: "rgb(251, 221, 13) 0px 0px 6px" }}
          >
            Explore Million Of Content With
          </h2>
        </section>

        {/* Creators Grid Section */}
        <section className="max-w-7xl mx-auto py-4 px-3">
          <div className="flex flex-wrap -mx-2 mt-3">
            {creators.map((creator, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-2 mt-4">
                {/* Creator Image */}
                <div
                  className="w-full h-72 bg-cover bg-center"
                  style={{
                    borderRadius: "25px",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='290' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23${(index * 111 + 333).toString(16).slice(-3)}'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='%23fff' text-anchor='middle' dy='.3em'%3E${creator.name}%3C/text%3E%3C/svg%3E")`,
                  }}
                />

                {/* Creator Info */}
                <div className="flex items-start mt-3">
                  <div
                    className="w-12 h-12 rounded-full bg-cover bg-center flex-shrink-0"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='25' fill='%23${(index * 123 + 456).toString(16).slice(-3)}'/%3E%3C/svg%3E")`,
                    }}
                  />
                  <div className="ml-5 flex flex-col">
                    <div className="text-white text-lg font-bold">
                      {creator.name}
                    </div>
                    <div className="text-white font-light">
                      {creator.channel}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-16 relative"
          style={{
            backgroundColor: "rgb(20, 20, 20)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">
                Let's create your campaign with us!
              </h2>
              <Button
                className="rounded-lg px-6 py-3 text-white font-semibold"
                style={{ backgroundColor: "rgb(186, 30, 28)" }}
              >
                Place Ads Now
              </Button>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="max-w-7xl mx-auto py-16 px-4 text-center">
          <h2 className="text-white text-3xl font-bold mb-10">Our Clients</h2>

          <div className="relative h-20 overflow-hidden bg-gray-800/20 rounded-lg">
            <div className="flex animate-scroll space-x-6 py-4">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-12 bg-white/10 rounded-md flex items-center justify-center border border-gray-700/50"
                >
                  <span className="text-white text-xs font-medium">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            {/* Footer Logo */}
            <div className="flex items-center">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center mr-2">
                <Play className="w-3 h-3 text-white" />
              </div>
              <span className="text-white text-base font-bold">
                CLOSETHEDOOR
              </span>
            </div>

            {/* Footer Links & Copyright */}
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/about" className="text-white hover:text-gray-300">
                About
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/privacy" className="text-white hover:text-gray-300">
                Privacy Policy
              </Link>
              <span className="text-gray-400 ml-6">
                2024 © Copyright Close The Door - All rights reserved.
              </span>
            </div>

            {/* Back to Top */}
            <div>
              <Button
                variant="outline"
                size="sm"
                className="rounded-md border-gray-600 text-white text-xs hover:bg-white hover:text-black"
                onClick={scrollToTop}
              >
                <ArrowUp className="w-3 h-3 mr-1" />
                Top
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
