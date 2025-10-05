import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import vennDiagram from '@/assets/venn-diagram.png';

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  phone: z.string().trim().max(20, { message: "Phone must be less than 20 characters" }).optional(),
  company: z.string().trim().max(100, { message: "Company must be less than 100 characters" }).optional(),
  message: z.string().trim().min(1, { message: "Message is required" }).max(1000, { message: "Message must be less than 1000 characters" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Value Proposition */}
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-light text-[#0B3041] mb-8 leading-tight">
                We are in the sweetspot...
                <br />
                and now so are you.
              </h1>

              {/* Venn Diagram */}
              <div className="relative w-full max-w-md mx-auto lg:mx-0 my-12">
                <img 
                  src={vennDiagram} 
                  alt="QUARX Sweet Spot - Market Access & Commercial Strategy, Life Sciences Data & Analytical Expertise, Intentional Infusion of AI & Technology" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
              <h2 className="text-3xl lg:text-4xl font-light text-[#0B3041] mb-8 leading-tight">
                Let's connect and explore possibilities!
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-[#0B3041] text-lg font-light mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    {...register('name')}
                    className="w-full border-gray-300 focus:border-[#5A9BA6] focus:ring-[#5A9BA6]"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-[#0B3041] text-lg font-light mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="w-full border-gray-300 focus:border-[#5A9BA6] focus:ring-[#5A9BA6]"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-[#0B3041] text-lg font-light mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    className="w-full border-gray-300 focus:border-[#5A9BA6] focus:ring-[#5A9BA6]"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* Company Field */}
                <div>
                  <label htmlFor="company" className="block text-[#0B3041] text-lg font-light mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    type="text"
                    {...register('company')}
                    className="w-full border-gray-300 focus:border-[#5A9BA6] focus:ring-[#5A9BA6]"
                  />
                  {errors.company && (
                    <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-[#0B3041] text-lg font-light mb-2">
                    How can we help you?
                  </label>
                  <Textarea
                    id="message"
                    {...register('message')}
                    rows={5}
                    className="w-full border-gray-300 focus:border-[#5A9BA6] focus:ring-[#5A9BA6]"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0B3041] hover:bg-[#156082] text-white text-lg py-6 rounded-md transition-colors duration-200"
                >
                  {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
