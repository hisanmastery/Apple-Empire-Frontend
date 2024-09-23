const About = () => {
    return (
      <main className="bg-gray-100 text-gray-800 py-10 px-5">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-5 text-gray-900">
            About AppleEmpire
          </h1>
          <p className="text-lg leading-relaxed">
            At <span className="font-semibold text-indigo-600">AppleEmpire</span>, we believe in delivering the best smartphones and electronics to meet your modern needs.
            From the latest iPhones to Android phones and our custom-made AirBirds, we strive for quality and customer satisfaction.
          </p>
  
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-5 bg-white rounded shadow">
              <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
              <p>
                To provide cutting-edge technology that enhances everyday life, ensuring the best experience with every product.
              </p>
            </div>
  
            <div className="p-5 bg-white rounded shadow">
              <h2 className="text-xl font-semibold mb-3">Why Choose Us</h2>
              <p>
                We are committed to offering the best products at competitive prices, backed by excellent customer service and support.
              </p>
            </div>
  
            <div className="p-5 bg-white rounded shadow">
              <h2 className="text-xl font-semibold mb-3">Our Vision</h2>
              <p>
                To be the top e-commerce destination for innovative technology products globally, making lives smarter and more connected.
              </p>
            </div>
          </div>
  
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-5">Our Journey</h2>
            <p className="text-lg">
              Since our inception, we’ve been dedicated to bringing the finest gadgets to tech enthusiasts worldwide. We pride ourselves on being a leader in the e-commerce space, ensuring our customers always get the latest and greatest products.
            </p>
          </div>
        </div>
      </main>
    );
  };
  
  export default About;
  