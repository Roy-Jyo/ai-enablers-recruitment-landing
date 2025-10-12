'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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
      if (res.ok) setStatus('Message sent successfully!');
      else setStatus('Failed to send message.');
    } catch {
      setStatus('Failed to send message.');
    }
  };

  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-24 bg-blue-50">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Revolutionise Recruitment with AI
        </h1>
        <p className="text-lg mb-8 text-gray-600">
          Streamline your entire hiring journey — from job advertisement to first interview — powered by intelligent automation.
        </p>
        <a href="#book-demo" className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800">
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 px-8 md:px-24 py-16 text-center bg-white">
        {[
          {
            title: 'Smart Job Ads',
            desc: 'Automatically generate engaging job descriptions and publish across multiple job boards.',
            icon: '📄',
          },
          {
            title: 'AI CV Sorting',
            desc: 'Rank and shortlist candidates instantly based on skills, experience, and cultural fit.',
            icon: '👥',
          },
          {
            title: 'Auto Interview Booking',
            desc: 'Seamlessly schedule initial screening interviews and manage calendars automatically.',
            icon: '📅',
          },
          {
            title: 'AI Interviewer',
            desc: 'Conduct structured first-round interviews with natural-language AI — fair, fast, and consistent.',
            icon: '🧠',
          },
        ].map((item, idx) => (
          <div key={idx} className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Value Section */}
      <section className="py-16 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold mb-8">Where RecruitAI Adds Value</h2>
        <ul className="max-w-2xl mx-auto text-left text-gray-700 space-y-4">
          <li>✅ Eliminate dependency on separate ATS systems — manage the entire recruitment lifecycle in one place.</li>
          <li>✅ 24/7 background processing for faster candidate review, screening, and interview scheduling.</li>
          <li>✅ Fully automated shortlisting and interview coordination with minimal human intervention.</li>
          <li>✅ Significantly reduce recruitment overheads while improving speed and consistency in decision-making.</li>
        </ul>
      </section>

      {/* Case Study */}
      <section className="py-16 text-center bg-white">
        <h2 className="text-3xl font-bold mb-6">
          Proven Results: The Anstel Global Success Story
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Anstel Global, a multinational electronics manufacturer, integrated RecruitAI into its end-to-end recruitment workflow. Within three months, they transformed their hiring process across Asia-Pacific.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 md:px-24">
          <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
            <h3 className="text-3xl font-bold text-blue-600 mb-2">65%</h3>
            <p className="text-gray-600">Reduction in time-to-hire</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
            <h3 className="text-3xl font-bold text-blue-600 mb-2">40%</h3>
            <p className="text-gray-600">Decrease in recruitment costs</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
            <h3 className="text-3xl font-bold text-blue-600 mb-2">24/7</h3>
            <p className="text-gray-600">Continuous AI-driven candidate processing</p>
          </div>
        </div>
      </section>

      {/* Book a Demo */}
      <section id="book-demo" className="py-20 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Recruitment?</h2>
        <p className="mb-10 text-lg">
          Start your AI hiring journey today and experience efficiency like never before.
        </p>
        <div className="max-w-md mx-auto bg-white text-gray-900 p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-center">Book a Demo</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send
            </button>
          </form>
          {status && <p className="text-center mt-4 text-sm">{status}</p>}
        </div>
      </section>
    </main>
  );
}
