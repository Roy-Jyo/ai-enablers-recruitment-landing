"use client";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center px-6 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Transform Recruitment with{" "}
          <span className="text-blue-600">AI Automation</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Anstel Global helps organisations revolutionise hiring —
          automating everything from job ads to AI-powered interviews. Save
          time, cut costs, and recruit smarter.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#demo"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md"
          >
            Book a Demo
          </a>
          <a
            href="#learn"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section id="learn" className="max-w-5xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          End-to-End Recruitment Efficiency with AI
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-white shadow-lg rounded-2xl">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">
              AI-Powered Job Ads
            </h3>
            <p>
              Automatically generate and publish job descriptions to leading
              platforms — no need for separate ATS tools or manual uploads.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-2xl">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">
              24/7 Candidate Screening
            </h3>
            <p>
              Let our AI analyse CVs continuously, shortlist qualified
              candidates, and schedule interviews — even while you sleep.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-2xl">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">
              AI-Driven Interviews
            </h3>
            <p>
              Conduct structured AI interviews with real-time insights,
              reducing human bias and freeing your team for final decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="max-w-5xl px-6 py-16 bg-blue-50 rounded-3xl my-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Case Study: Anstel Global
        </h2>
        <p className="text-gray-700 mb-4">
          Anstel Global streamlined its recruitment process using our AI
          platform, cutting hiring time by 60% and removing the need for
          multiple recruitment tools.
        </p>
        <p className="text-gray-700 mb-8">
          With 24/7 candidate analysis and automated interview scheduling,
          they achieved faster shortlisting and improved candidate experience.
        </p>
        <a
          href="#demo"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md"
        >
          See the Results
        </a>
      </section>

      {/* Demo Section */}
      <section id="demo" className="max-w-xl text-center py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Book a Live Demo
        </h2>
        <p className="text-gray-600 mb-8">
          See how AI can transform your recruitment pipeline — from sourcing to
          interviewing — in action.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Demo request submitted for ${email}`);
            setEmail("");
          }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your business email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md"
          >
            Request Demo
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 text-center border-t border-gray-200 mt-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} Anstel Global — AI Recruitment Automation.
        All rights reserved.
      </footer>

      {/* Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
      ></script>
      <script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `,
        }}
      />
    </main>
  );
}
