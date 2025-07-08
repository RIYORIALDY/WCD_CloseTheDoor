import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Privacy() {
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

      {/* Main Content */}
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-white mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

          <div className="text-gray-300 space-y-6 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Information We Collect
              </h2>
              <p>
                At CLOSETHEDOOR CORBUZIER PODCAST, we are committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, and safeguard your information when you visit our
                website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                How We Use Your Information
              </h2>
              <p>
                We may use the information we collect from you in the following
                ways:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>To personalize your experience on our website</li>
                <li>To improve our website and services</li>
                <li>
                  To send periodic emails regarding our content and updates
                </li>
                <li>
                  To respond to your inquiries and provide customer support
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Information Protection
              </h2>
              <p>
                We implement appropriate security measures to maintain the
                safety of your personal information. Your personal information
                is contained behind secured networks and is only accessible by a
                limited number of persons who have special access rights to such
                systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Cookies
              </h2>
              <p>
                We use cookies to enhance your experience, gather general
                visitor information, and track visits to our website. You can
                choose to disable cookies through your browser settings, but
                this may affect your ability to use certain features of our
                website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Third-Party Disclosure
              </h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                described in this Privacy Policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Contact Information
              </h2>
              <p>
                If you have any questions about this Privacy Policy or our
                practices, please contact us through our official channels.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Changes to This Policy
              </h2>
              <p>
                We reserve the right to update this Privacy Policy at any time.
                When we do, we will revise the updated date at the bottom of
                this page. We encourage users to frequently check this page for
                any changes.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-sm text-gray-500">
                Last updated: December 2024
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black py-6 border-t border-gray-800">
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
