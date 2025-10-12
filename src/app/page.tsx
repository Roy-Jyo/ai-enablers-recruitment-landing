'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) setStatus('✅ Message sent successfully!');
      else setStatus('❌ Failed to send message.');
    } catch {
      setStatus('❌ Failed to send message.');
    }
  };

  return (
    <main className="bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 md:px-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight max-w-3xl">
          Revolutionise Recruitment with AI
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-blue-100">
          Streamline your entire hiring journey — from job advertisement to interview scheduling — powered by intelligent automation.
        </p>
        <a
          href="#book-demo"
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          Book a Demo
        </a>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: 'Smart Job Ads',
            desc: 'Automatically generate engaging job descriptions and publish them across job boards.',
            icon: '📄',
          },
          {
            title: 'AI CV Sorting',
            desc: 'Instantly shortlist candidates based on skills, experience, and fit.',
            icon: '👥',
          },
          {
            title: 'Auto Scheduling',
            desc: 'Schedule initial screening interviews and sync calendars automatically.',
            icon: '📅',
          },
          {
            title: 'AI Interviewer',
            desc: 'Conduct structured, bias-free interviews with our AI interviewer.',
            icon: '🤖',
          },
        ].map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition-shadow"
          >
            <div className="text-5xl mb-4">{f.icon}</div>
            <h3 className="font-semibold text-xl mb-2 text-blue-700">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Value Section */}
      <section className="bg-blue-50 py-20 px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold mb-10 text-blue-700">Where RecruitAI Adds Value</h2>
        <ul className="max-w-2xl mx-auto text-left text-gray-700 space-y-4 text-lg leading-relaxed">
          <li>✅ Eliminate dependency on external ATS tools — manage everything in one place.</li>
          <li>✅ 24/7 candidate review, screening, and interview scheduling.</li>
          <li>✅ Automated shortlisting and coordination with minimal manual effort.</li>
          <li>✅ Reduce hiring overheads while increasing speed and consistency.</li>
        </ul>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-white px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">Proven Results: Anstel Global</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Anstel Global streamlined their recruitment across Asia-Pacific with RecruitAI.
          Within 3 months, they achieved faster hiring and significant cost reduction.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-blue-50 rounded-2xl p-8 shadow-md">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">65%</h3>
            <p className="text-gray-700">Reduction in time-to-hire</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-8 shadow-md">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">40%</h3>
            <p className="text-gray-700">Decrease in recruitment costs</p>
          </div>
          <div className="bg-blue-50 rounded-2xl p-8 shadow-md">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">24/7</h3>
            <p className="text-gray-700">Continuous AI-driven candidate processing</p>
          </div>
        </div>
      </section>

      {/* Book a Demo Section */}
      <section
        id="book-demo"
        className="py-24 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center px-4"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Recruitment?</h2>
        <p className="mb-10 text-lg text-blue-100">
          Start your AI hiring journey today and experience efficiency like never before.
        </p>

        <div className="max-w-md mx-auto bg-white text-gray-900 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center text-blue-700">
            Book a Demo
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
          {status && <p className="text-center mt-4 text-sm text-blue-600">{status}</p>}
        </div>
      </section>
    </main>
  );
}
