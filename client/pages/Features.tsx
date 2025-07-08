import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function Features() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "rgb(26, 26, 26)" }}
    >
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-white">
                CLOSETHEDOOR
              </span>
            </Link>
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-white mb-6">Creators</h1>
        <div className="text-lg text-gray-300 space-y-6">
          <p>
            This is a placeholder page for the Creators section. The full
            content will be implemented in the next iteration.
          </p>
          <p>
            Here we'll showcase all our amazing content creators and their
            channels, subscriber counts, and featured content.
          </p>
        </div>
      </div>
    </div>
  );
}
