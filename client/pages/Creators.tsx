import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function Creators() {
  const creators = [
    {
      name: "Deddy Corbuzier",
      channel: "Deddy Corbuzier",
      subscribers: "15M",
      image: "creator1.jpg",
      avatar: "avatar1.jpg",
    },
    {
      name: "Raditya Dika",
      channel: "Raditya Dika",
      subscribers: "8.2M",
      image: "creator2.jpg",
      avatar: "avatar2.jpg",
    },
    {
      name: "Atta Halilintar",
      channel: "Atta Halilintar",
      subscribers: "25M",
      image: "creator3.jpg",
      avatar: "avatar3.jpg",
    },
    {
      name: "Baim Wong",
      channel: "Baim Paula",
      subscribers: "18M",
      image: "creator4.jpg",
      avatar: "avatar4.jpg",
    },
    {
      name: "Ria Ricis",
      channel: "Ria Ricis",
      subscribers: "32M",
      image: "creator5.jpg",
      avatar: "avatar5.jpg",
    },
    {
      name: "Arief Muhammad",
      channel: "Arief Muhammad",
      subscribers: "5.1M",
      image: "creator6.jpg",
      avatar: "avatar6.jpg",
    },
    {
      name: "Jerome Polin",
      channel: "Nihongo Mantappu",
      subscribers: "6.8M",
      image: "creator7.jpg",
      avatar: "avatar7.jpg",
    },
    {
      name: "Awkarin",
      channel: "Karin Novilda",
      subscribers: "3.2M",
      image: "creator8.jpg",
      avatar: "avatar8.jpg",
    },
    {
      name: "Gita Savitri",
      channel: "Gita Savitri Devi",
      subscribers: "2.1M",
      image: "creator9.jpg",
      avatar: "avatar9.jpg",
    },
  ];

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

      <main className="pt-20">
        {/* Creators Hero Section */}
        <section
          className="relative h-80 flex items-center justify-center text-center"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='1920' height='315' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23444'/%3E%3Ctext x='50%25' y='50%25' font-size='32' fill='%23fff' text-anchor='middle' dy='.3em'%3ECreators Hub%3C/text%3E%3C/svg%3E")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1
            className="text-white text-4xl font-bold"
            style={{ textShadow: "rgb(251, 221, 13) 0px 0px 6px" }}
          >
            Explore Million Of Content With
          </h1>
        </section>

        {/* Creators Grid Section */}
        <section className="max-w-7xl mx-auto py-4 px-3">
          <div className="flex flex-wrap -mx-2 mt-3">
            {creators.map((creator, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-2 mt-4">
                {/* Creator Image */}
                <div
                  className="w-full h-72 bg-cover bg-center relative group cursor-pointer"
                  style={{
                    borderRadius: "25px",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='290' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23${(index * 111 + 333).toString(16).slice(-3)}'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='%23fff' text-anchor='middle' dy='.3em'%3E${creator.name}%3C/text%3E%3C/svg%3E")`,
                  }}
                >
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                </div>

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
                    <div className="text-gray-400 text-sm">
                      {creator.subscribers} subscribers
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="rounded-lg border-white text-white hover:bg-white hover:text-black px-8 py-3"
            >
              Load More Creators
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-6 border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            {/* Footer Logo */}
            <div className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F462b2f34de624179831f23996a13c371%2Fd4877b51a9414bdeb0f3815da676e4b0?format=webp&width=800"
                alt="CLOSETHEDOOR CORBUZIER PODCAST"
                className="h-8 w-auto"
              />
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
          </div>
        </div>
      </footer>
    </div>
  );
}
