import { useEffect } from "react";

export default function TestHome() {
  useEffect(() => {
    // Debug scroll containers
    const checkScrollContainers = () => {
      console.log("=== CLEAN LAYOUT DEBUG ===");
      console.log("Viewport height:", window.innerHeight);
      console.log("Document height:", document.documentElement.scrollHeight);

      const scrollableElements = [];
      document.querySelectorAll("*").forEach((el) => {
        const style = window.getComputedStyle(el);
        if (
          style.overflow === "auto" ||
          style.overflow === "scroll" ||
          style.overflowY === "auto" ||
          style.overflowY === "scroll"
        ) {
          scrollableElements.push({
            element: el,
            className: el.className,
            tag: el.tagName,
          });
        }
      });

      console.log("Scrollable elements found:", scrollableElements.length);
      scrollableElements.forEach((el) => {
        console.log("Scroll container:", el.tagName, el.className);
      });
    };

    setTimeout(checkScrollContainers, 1000);
  }, []);

  return (
    <>
      {/* Test Section 1 */}
      <section className="min-h-screen bg-blue-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            TEST SECTION 1
          </h1>
          <p className="text-gray-600">
            Can you scroll past this section smoothly?
          </p>
        </div>
      </section>

      {/* Test Section 2 */}
      <section className="min-h-screen bg-green-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            TEST SECTION 2
          </h2>
          <p className="text-gray-600">
            You should see this immediately when scrolling
          </p>
        </div>
      </section>

      {/* Test Section 3 */}
      <section className="min-h-screen bg-yellow-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            TEST SECTION 3
          </h2>
          <p className="text-gray-600">And this section too!</p>
        </div>
      </section>
    </>
  );
}
