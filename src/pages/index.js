import { useEffect, useState } from "react";
import PageMetaTags from "@/containers/PageMetaTags";
import TestBanner from "@/components/home/TestBanner";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-base-100 flex items-center justify-center">
        <div className="text-center">
          <div className="loading loading-spinner loading-lg text-primary mb-4"></div>
          <p className="text-base-content/70">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageMetaTags title="Test Page" description="Test page" url="/" />
      <div className="scroll-smooth">
        <TestBanner />
        <TestBanner />
        <TestBanner />
      </div>
    </>
  );
}
