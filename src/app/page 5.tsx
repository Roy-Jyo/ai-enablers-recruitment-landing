"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Brain, Users, Calendar, FileText, TrendingUp } from "lucide-react";

export default function LandingPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.success ? "✅ Email sent successfully!" : "❌ Failed to send. Please try again.");
      if (data.success) setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="text-center py-24 px-6 max-w-5xl mx-auto">
        <motion.h1
          className="text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Revolutionise Recruitment with AI
        </motion.h1>
        <p className="text-lg text-gray-600 mb-8">
          Streamline your entire hiring journey — from job advertisement to first interview — powered by intelligent automation.
        </p>
        <Button className="px-6 py-3 text-lg">Get Started</Button>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="shadow-md border-0">
            <CardContent className="text-center p-6">
              <FileText className="mx-auto text-blue-600 mb-4" size={40} />
              <h3 className="font-semibold text-xl mb-2">Smart Job Ads</h3>
              <p className="text-gray-600">
                Automatically generate engaging job descriptions and publish across multiple job boards.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md border-0">
            <CardContent className="text-center p-6">
              <Users className="mx-auto text-blue-600 mb-4" size={40} />
              <h3 className="font-semibold text-xl mb-2">AI CV Sorting</h3>
              <p className="text-gray-600">
                Rank and shortlist candidates instantly based on skills, experience, and cultural fit.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md border-0">
            <CardContent className="text-center p-6">
              <Calendar className="mx-auto text-blue-600 mb-4" size={40} />
              <h3 className="font-semibold text-xl mb-2">Auto Interview Booking</h3>
              <p className="text-gray-600">
                Seamlessly schedule initial screening interviews and manage calendars automatically.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md border-0">
            <CardContent className="text-center p-6">
              <Brain className="mx-auto text-blue-600 mb-4" size={40} />
              <h3 className="font-semibold text-xl mb-2">AI Interviewer</h3>
              <p className="text-gray-600">
                Conduct structured first-round interviews with natural-language AI — fair, fast, and consistent.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Value Added Section */}
      <section className="py-24 bg-blue-50 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">
          Where RecruitAI Adds Value
        </h2>
        <div className="max-w-4xl mx-auto text-gray-700 space-y-4">
          <p>
            <CheckCircle className="inline text-blue-600 mr-2" />
            Eliminate dependency on separate ATS systems — manage the entire recruitment lifecycle in one place.
          </p>
          <p>
            <CheckCircle className="inline text-blue-600 mr-2" />
            24/7 background processing for faster candidate review, screening, and interview scheduling.
          </p>
          <p>
            <CheckCircle className="inline text-blue-600 mr-2" />
            Fully automated shortlisting and interview coordination with minimal human intervention.
          </p>
          <p>
            <CheckCircle className="inline text-blue-600 mr-2" />
            Significantly reduce recruitment overheads while improving speed and consistency in decision-making.
          </p>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900">
          Proven Results: The Anstel Global Success Story
        </h2>
        <div className="max-w-4xl mx-auto text-gray-700 space-y-6">
          <p>
            Anstel Global, a multinational electronics manufacturer, integrated RecruitAI into its end-to-end recruitment workflow.
            Within three months, they transformed their hiring process across Asia-Pacific.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { percent: "65%", text: "Reduction in time-to-hire" },
              { percent: "40%", text: "Decrease in recruitment costs" },
              { percent: "24/7", text: "Continuous AI-driven candidate processing" },
            ].map((item, idx) => (
              <Card key={idx} className="shadow-md border-0">
                <CardContent className="text-center p-6">
                  <TrendingUp className="mx-auto text-blue-600 mb-3" size={36} />
                  <h3 className="text-2xl font-bold text-gray-800">{item.percent}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p>
            By leveraging RecruitAI, Anstel Global eliminated manual CV screening and interview scheduling, achieving a seamless recruitment process that scales globally without adding headcount.
          </p>
        </div>
      </section>

      {/* Call to Action + Book a Demo Form */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Recruitment?</h2>
        <p className="text-lg mb-8">
          Start your AI hiring journey today and experience efficiency like never before.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-md text-gray-800"
        >
          <h3 className="text-xl font-semibold mb-4 text-center text-gray-900">
            Book a Demo
          </h3>
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="border p-2 mb-3 w-full rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="border p-2 mb-3 w-full rounded"
          />
          <textarea
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="border p-2 mb-4 w-full rounded"
            rows={4}
          />
          <Button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 w-full rounded hover:bg-blue-700"
          >
            Send
          </Button>
          <p className="text-center text-sm mt-2 text-gray-700">{status}</p>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} RecruitAI. All rights reserved.
      </footer>
    </div>
  );
}
