"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormData {
  contactName: string;
  email: string;
  phone: string;
  organization: string;
  eventName: string;
  eventDate: string;
  eventLocation: string;
  eventType: string;
  audienceSize: string;
  topicInterest: string;
  budget: string;
  additionalInfo: string;
}

export default function SpeakerRequestForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log("Speaker request submitted:", data);
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
          Request Received!
        </h3>
        <p className="text-gray-600">
          Thank you for your interest in our Speakers Bureau. We&apos;ll review your request and follow up within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Name */}
        <div>
          <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
            Contact Name *
          </label>
          <input
            type="text"
            id="contactName"
            {...register("contactName", { required: "Contact name is required" })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
            placeholder="Your full name"
          />
          {errors.contactName && (
            <p className="mt-1 text-sm text-red-600">{errors.contactName.message}</p>
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
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone", { required: "Phone number is required" })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
            placeholder="(555) 123-4567"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        {/* Organization */}
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
            Organization *
          </label>
          <input
            type="text"
            id="organization"
            {...register("organization", { required: "Organization is required" })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
            placeholder="Your organization name"
          />
          {errors.organization && (
            <p className="mt-1 text-sm text-red-600">{errors.organization.message}</p>
          )}
        </div>

        {/* Event Name */}
        <div>
          <label htmlFor="eventName" className="block text-sm font-medium text-gray-700 mb-2">
            Event Name *
          </label>
          <input
            type="text"
            id="eventName"
            {...register("eventName", { required: "Event name is required" })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
            placeholder="Name of your event"
          />
          {errors.eventName && (
            <p className="mt-1 text-sm text-red-600">{errors.eventName.message}</p>
          )}
        </div>

        {/* Event Date */}
        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
            Event Date *
          </label>
          <input
            type="date"
            id="eventDate"
            {...register("eventDate", { required: "Event date is required" })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
          />
          {errors.eventDate && (
            <p className="mt-1 text-sm text-red-600">{errors.eventDate.message}</p>
          )}
        </div>

        {/* Event Location */}
        <div>
          <label htmlFor="eventLocation" className="block text-sm font-medium text-gray-700 mb-2">
            Event Location
          </label>
          <input
            type="text"
            id="eventLocation"
            {...register("eventLocation")}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
            placeholder="City, State or Virtual"
          />
        </div>

        {/* Event Type */}
        <div>
          <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
            Event Type *
          </label>
          <select
            id="eventType"
            {...register("eventType", { required: "Please select event type" })}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
          >
            <option value="">Select event type</option>
            <option value="conference">Conference/Summit</option>
            <option value="workshop">Workshop/Training</option>
            <option value="panel">Panel Discussion</option>
            <option value="keynote">Keynote Address</option>
            <option value="fundraiser">Fundraising Event</option>
            <option value="corporate">Corporate Event</option>
            <option value="academic">Academic/University</option>
            <option value="other">Other</option>
          </select>
          {errors.eventType && (
            <p className="mt-1 text-sm text-red-600">{errors.eventType.message}</p>
          )}
        </div>

        {/* Audience Size */}
        <div>
          <label htmlFor="audienceSize" className="block text-sm font-medium text-gray-700 mb-2">
            Expected Audience Size
          </label>
          <select
            id="audienceSize"
            {...register("audienceSize")}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
          >
            <option value="">Select audience size</option>
            <option value="under-50">Under 50</option>
            <option value="50-100">50-100</option>
            <option value="100-250">100-250</option>
            <option value="250-500">250-500</option>
            <option value="500-1000">500-1,000</option>
            <option value="over-1000">Over 1,000</option>
          </select>
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
            Speaker Budget Range
          </label>
          <select
            id="budget"
            {...register("budget")}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
          >
            <option value="">Select budget range</option>
            <option value="negotiable">Negotiable</option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-10k">$5,000 - $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="over-25k">Over $25,000</option>
          </select>
        </div>
      </div>

      {/* Topic Interest */}
      <div>
        <label htmlFor="topicInterest" className="block text-sm font-medium text-gray-700 mb-2">
          Topic of Interest *
        </label>
        <select
          id="topicInterest"
          {...register("topicInterest", { required: "Please select a topic" })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
        >
          <option value="">Select topic area</option>
          <option value="political-strategy">Political Strategy & Campaigns</option>
          <option value="leadership">Leadership Development</option>
          <option value="women-politics">Women in Politics</option>
          <option value="civic-engagement">Civic Engagement</option>
          <option value="communications">Political Communications</option>
          <option value="diversity">Diversity in Political Leadership</option>
          <option value="other">Other/Custom Topic</option>
        </select>
        {errors.topicInterest && (
          <p className="mt-1 text-sm text-red-600">{errors.topicInterest.message}</p>
        )}
      </div>

      {/* Additional Information */}
      <div>
        <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
          Additional Information
        </label>
        <textarea
          id="additionalInfo"
          rows={4}
          {...register("additionalInfo")}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all resize-none"
          placeholder="Tell us more about your event, audience, or any specific requirements..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-secondary w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit Speaker Request"}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Speaker availability and fees vary. We will follow up within 48 hours to discuss your needs.
      </p>
    </form>
  );
}
