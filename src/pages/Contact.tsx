import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import PageLayout from '../components/templates/PageLayout';
import Card from '../components/Card';
import Button from '../components/atoms/Button';
import { contactInfo } from '../data/company';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <PageLayout
      title="Let's Build Something Amazing Together"
      subtitle="Ready to start your next project? We'd love to hear about your goals and explore how we can help you achieve them."
    >
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <h2 className="text-2xl font-bold text-aa-primary-dark mb-8">Get in Touch</h2>

            {submitStatus.type && (
              <div
                className={`mb-6 p-4 rounded-xl ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 border border-green-200 text-green-800'
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-aa-primary-dark mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-aa-blue-primary focus:border-aa-blue-primary transition-colors duration-200"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-aa-primary-dark mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-aa-blue-primary focus:border-aa-blue-primary transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-aa-primary-dark mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-aa-blue-primary focus:border-aa-blue-primary transition-colors duration-200"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>
        </div>

        {/* Contact Information */}
        <div>
          <Card>
            <h3 className="text-xl font-bold text-aa-primary-dark mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-aa-blue-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-aa-primary-dark">Address</p>
                  <p className="text-sm text-gray-700 whitespace-pre-line">{contactInfo.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-aa-blue-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-aa-primary-dark">Phone</p>
                  <p className="text-sm text-gray-700">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-aa-blue-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-aa-primary-dark">Email</p>
                  <p className="text-sm text-gray-700">{contactInfo.email}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;