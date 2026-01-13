"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  role: string;
  serviceInterest: string;
  message: string;
  partyAffiliation: string;
}

export default function ConsultationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // In production, this would send to a backend
    console.log("Form submitted:", data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold text-brand-black mb-2">
          Thank You!
        </h3>
        <p className="text-gray-600">
          We&apos;ve received your consultation request. Our team will be in touch within 24-48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all"
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone")}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all"
            placeholder="(555) 123-4567"
          />
        </div>

        {/* Organization */}
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
            Organization/Campaign
          </label>
          <input
            type="text"
            id="organization"
            {...register("organization")}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all"
            placeholder="Your organization or campaign"
          />
        </div>

        {/* Role */}
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
            Your Role *
          </label>
          <select
            id="role"
            {...register("role", { required: "Please select your role" })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all"
          >
            <option value="">Select your role</option>
            <option value="candidate">Political Candidate</option>
            <option value="elected">Elected Official</option>
            <option value="campaign-manager">Campaign Manager</option>
            <option value="nonprofit">Nonprofit/Advocacy Organization</option>
            <option value="other">Other</option>
          </select>
          {errors.role && (
            <p className="mt-1 text-sm text-red-600">{errors.role.message}</p>
          )}
        </div>

        {/* Party Affiliation */}
        <div>
          <label htmlFor="partyAffiliation" className="block text-sm font-medium text-gray-700 mb-2">
            Party Affiliation
          </label>
          <select
            id="partyAffiliation"
            {...register("partyAffiliation")}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all"
          >
            <option value="">Select affiliation</option>
            <option value="democratic">Democratic</option>
            <option value="republican">Republican</option>
            <option value="forward">Forward</option>
            <option value="unaffiliated">Unaffiliated/Independent</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Service Interest */}
      <div>
        <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-700 mb-2">
          Service Interest *
        </label>
        <select
          id="serviceInterest"
          {...register("serviceInterest", { required: "Please select a service" })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all"
        >
          <option value="">What can we help you with?</option>
          <option value="campaign-strategy">Campaign Strategy & Management</option>
          <option value="leadership">Leadership Development & Candidate Training</option>
          <option value="messaging">Message Development & Brand Positioning</option>
          <option value="media">Public Speaking & Media Coaching</option>
          <option value="creative">Creative & Digital Campaign Assets</option>
          <option value="community">Community Engagement Strategy</option>
          <option value="comprehensive">Comprehensive Campaign Support</option>
          <option value="other">Other/Not Sure</option>
        </select>
        {errors.serviceInterest && (
          <p className="mt-1 text-sm text-red-600">{errors.serviceInterest.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Tell Us About Your Needs *
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message", { required: "Please describe your needs" })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all resize-none"
          placeholder="Share details about your campaign, organization, or the support you're seeking..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Request Consultation"}
      </button>

      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to our confidentiality practices. All information
        shared is kept strictly confidential.
      </p>
    </form>
  );
}
