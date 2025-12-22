const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-700 mb-3">About Us</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We are a creative contest platform where talented individuals
          participate, showcase their skills, and get rewarded for their
          creativity.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white shadow-md rounded-2xl p-6 border">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
            🎯 Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to build a fair, transparent, and engaging platform
            where creators can participate in various contests, improve their
            skills, and gain recognition for their talent.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6 border">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
            🚀 Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We envision a global community where creativity is valued,
            opportunities are equal, and talented individuals can grow through
            healthy competition.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          Why Choose Our Platform?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-indigo-50 rounded-xl p-5 text-center">
            <h3 className="font-semibold text-indigo-700 mb-2">
              Fair Contests
            </h3>
            <p className="text-gray-600 text-sm">
              All contests are reviewed and judged fairly to ensure equal
              opportunity for everyone.
            </p>
          </div>

          <div className="bg-indigo-50 rounded-xl p-5 text-center">
            <h3 className="font-semibold text-indigo-700 mb-2">
              Secure Platform
            </h3>
            <p className="text-gray-600 text-sm">
              We prioritize user data security and safe payment systems.
            </p>
          </div>

          <div className="bg-indigo-50 rounded-xl p-5 text-center">
            <h3 className="font-semibold text-indigo-700 mb-2">Skill Growth</h3>
            <p className="text-gray-600 text-sm">
              Participate in contests to improve your skills and creativity.
            </p>
          </div>

          <div className="bg-indigo-50 rounded-xl p-5 text-center">
            <h3 className="font-semibold text-indigo-700 mb-2">
              Community Driven
            </h3>
            <p className="text-gray-600 text-sm">
              A friendly and supportive community of creators and organizers.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-linear-to-r from-indigo-600 to-blue-600 text-white rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-3">Join Our Creative Community</h2>
        <p className="mb-5 max-w-2xl mx-auto">
          Become part of our platform, participate in exciting contests, and
          showcase your talent to the world.
        </p>
        <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
