"use client";

import { useState } from "react";
import ConsultationForm from "@/components/ConsultationForm";
import SpeakerRequestForm from "@/components/SpeakerRequestForm";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"consultation" | "speaker">("consultation");

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-white via-gray-50 to-pink-50 section-padding">
        <div className="container-custom mx-auto text-center">
          <p className="text-brand-pink font-semibold text-sm tracking-widest uppercase mb-4">Get In Touch</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-black mb-6">
            Let&apos;s Start the <span className="text-brand-green">Conversation</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Whether you&apos;re ready to launch a campaign or bring an expert speaker to your event, we&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-8 sticky top-28">
                <h2 className="font-display text-2xl font-bold text-brand-black mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-pink/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-brand-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-black mb-1">Phone</h3>
                      <a href="tel:+12525086343" className="text-gray-600 hover:text-brand-pink">(252) 508-6343</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-black mb-1">Email</h3>
                      <a href="mailto:strategemshe@gmail.com" className="text-gray-600 hover:text-brand-green break-all">strategemshe@gmail.com</a>
                    </div>
                  </div>
                </div>
                <hr className="my-8 border-gray-200" />
                <div className="text-sm text-gray-500">
                  <p className="mb-4"><strong className="text-brand-black">Confidentiality:</strong> All information is held in strict confidence.</p>
                  <p><strong className="text-brand-black">Cross-Partisan:</strong> We work with candidates across party lines.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setActiveTab("consultation")}
                  className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all ${activeTab === "consultation" ? "bg-brand-pink text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                >
                  Book a Consultation
                </button>
                <button
                  onClick={() => setActiveTab("speaker")}
                  className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all ${activeTab === "speaker" ? "bg-brand-green text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                >
                  Request a Speaker
                </button>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                {activeTab === "consultation" ? (
                  <>
                    <div className="mb-8">
                      <h2 className="font-display text-2xl font-bold text-brand-black mb-2">Book a Consultation</h2>
                      <p className="text-gray-600">Tell us about your campaign or leadership development needs.</p>
                    </div>
                    <ConsultationForm />
                  </>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="font-display text-2xl font-bold text-brand-black mb-2">Request a Speaker</h2>
                      <p className="text-gray-600">Tell us about your speaking engagement needs.</p>
                    </div>
                    <SpeakerRequestForm />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
