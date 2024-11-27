import React, { useState, useRef } from 'react';
import { Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';
import Accordion from '../components/Accordion';

const More = () => {
  const faqs = [
    {
      question: "What should I wear?",
      answer: "We recommend comfortable, breathable clothing suitable for dancing. The venue can get warm, so dress accordingly. There's no strict dress code, but most attendees wear black or dark colors to match the underground atmosphere."
    },
    {
      question: "Is there parking available?",
      answer: "Limited parking is available near the venue. We recommend using public transportation or ride-sharing services, especially if you plan to drink. There are several paid parking garages within walking distance."
    },
    {
      question: "Can I get a refund?",
      answer: "Tickets are non-refundable but transferable. You can sell or transfer your ticket to another person up to 24 hours before the event. Contact our support team for assistance with transfers."
    },
    {
      question: "Is there food available?",
      answer: "We offer a limited selection of snacks and water at the bar. There are several late-night food options within walking distance of the venue. We recommend eating before arriving."
    },
    {
      question: "What's the age requirement?",
      answer: "This is a strictly 21+ event. Valid government-issued photo ID is required for entry. International passports are accepted. No exceptions will be made."
    },
    {
      question: "What items are prohibited?",
      answer: "Prohibited items include: outside food and drinks, illegal substances, weapons, professional cameras, and recording equipment. Small personal cameras (non-professional) are allowed."
    },
    {
      question: "Is there a smoking area?",
      answer: "There is a designated outdoor smoking area. The venue itself is non-smoking. Vaping is only permitted in the designated smoking area."
    },
    {
      question: "What time should I arrive?",
      answer: "Doors open at 21:30. We recommend arriving early to avoid queues and ensure you don't miss any of the performances. The main event starts at 22:00 sharp."
    }
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        'service_g2u22ok',
        'template_heat',
        formRef.current,
        '0lGPf6DVnEGSAjCs3'
      );
      
      toast.success('Message sent successfully!');
      setFormData({ email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-black pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gradient-pink">
            FAQ
          </h1>
          <p className="text-xl text-gray-400">Everything you need to know about HEAT</p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 mb-16">
          {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.question}>
              {faq.answer}
            </Accordion>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 text-gradient-pink">Contact Us</h2>
            <p className="text-gray-400">Can't find what you're looking for? Send us a message!</p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Your Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="block w-full pl-12 pr-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:ring-hot-pink focus:border-hot-pink text-white placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="block w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:ring-hot-pink focus:border-hot-pink text-white placeholder-gray-400"
                placeholder="Type your message here..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-hot-pink hover:bg-hot-pink/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hot-pink transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
    </div>
   </div>
  );
};

export default More;