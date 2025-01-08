const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="flex justify-around">
          {/* Social Media Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="text-white hover:text-blue-400">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="#" className="text-white hover:text-blue-400">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" className="text-white hover:text-pink-400">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
            <p className="mb-2">
              <strong>Phone:</strong> +62 813-1347-3034
            </p>
            <p className="mb-2">
              <strong>Email:</strong> khaerulilman10@gmail.com
            </p>
            <p>
              <strong>Address:</strong> Cibiru, Indonesia
            </p>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <p>If you have any questions, feel free to reach out to us!</p>
            <a
              href="mailto:khaerulilman10@gmail.com"
              className="text-blue-400 hover:underline"
            >
              Email Us
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-sm text-center">
          <p>&copy; 2025 My Landing Page. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
