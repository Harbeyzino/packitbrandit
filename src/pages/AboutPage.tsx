import React from 'react';
import Hero from '../components/sections/Hero';
import Container from '../components/ui/Container';
import FAQSection from '../components/sections/FAQSection';
import ContactForm from '../components/sections/ContactForm';
import { Award, Clock, HeartHandshake, Target } from 'lucide-react';

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Value: React.FC<ValueProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const AboutPage: React.FC = () => {
  return (
    <>
      <Hero
        title="About Dabi Packaging"
        subtitle="Building brands through innovative packaging solutions since 2005"
        image="https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg"
      />
      
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Dabi (Our Brand Promise)</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  At Dabi Packaging, we're more than just a packaging supplier; we are your strategic partner in building a brand that resonates and endures. Our promise is built on three core pillars:
                </p>
                <ul className="list-disc space-y-3 pl-5">
                  <li>
                    <strong>Innovation that Elevates:</strong> We don't just create boxes; we craft experiences. Our team is dedicated to pushing the boundaries of packaging design, utilizing cutting-edge technology and sustainable materials to ensure your product not only stands out but also tells a compelling story. From a unique unboxing experience to smart packaging features, we innovate to elevate your brand's perception and value.
                  </li>
                  <li>
                    <strong>Quality that Protects & Impresses:</strong> Your product's integrity is paramount. We commit to the highest standards of quality in every solution we deliver. Our rigorous testing and quality control processes ensure your packaging withstands the rigors of transit, preserves product freshness, and arrives looking impeccable, reinforcing your brand's commitment to excellence.
                  </li>
                  <li>
                    <strong>Partnership that Empowers:</strong> We believe in collaborative success. Your vision is our blueprint. We work closely with you, understanding your specific needs, market challenges, and brand aspirations. Our dedicated experts provide end-to-end support, from concept to delivery, ensuring a seamless process and a final product that perfectly aligns with your brand identity and business goals. With Dabi, you gain a partner invested in your growth and success.
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/6169673/pexels-photo-6169673.jpeg" 
                alt="Dabi Packaging team at work" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do at Dabi Packaging.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Value 
              icon={<Award className="w-8 h-8 text-blue-500" />}
              title="Excellence"
              description="We strive for excellence in every aspect of our business, from design to delivery."
            />
            
            <Value 
              icon={<Target className="w-8 h-8 text-blue-500" />}
              title="Innovation"
              description="We continuously explore new ideas and technologies to create better packaging solutions."
            />
            
            <Value 
              icon={<HeartHandshake className="w-8 h-8 text-blue-500" />}
              title="Partnership"
              description="We build collaborative relationships with our clients based on trust and mutual success."
            />
            
            <Value 
              icon={<Clock className="w-8 h-8 text-blue-500" />}
              title="Reliability"
              description="We deliver on our promises, meeting deadlines and maintaining consistent quality."
            />
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Commitment to Sustainability</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're dedicated to reducing the environmental impact of packaging through innovative materials and designs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-green-50 rounded-lg border border-green-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Eco-Friendly Materials</h3>
              <p className="text-gray-600">
                We prioritize recyclable, biodegradable, and sustainably sourced materials that minimize environmental impact.
              </p>
            </div>
            
            <div className="p-6 bg-green-50 rounded-lg border border-green-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Waste Reduction</h3>
              <p className="text-gray-600">
                Our designs optimize material usage and reduce waste throughout the production process and product lifecycle.
              </p>
            </div>
            
            <div className="p-6 bg-green-50 rounded-lg border border-green-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Carbon Footprint</h3>
              <p className="text-gray-600">
                We continuously work to reduce the carbon footprint of our operations and the packaging solutions we provide.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      <FAQSection />
      
      <ContactForm 
        title="Get in Touch"
        subtitle="Have questions about our company or want to learn more about how we can help with your packaging needs? We'd love to hear from you."
      />
    </>
  );
};

export default AboutPage;