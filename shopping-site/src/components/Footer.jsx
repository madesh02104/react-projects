import React from "react";

const Footer = () => {
  return (
    <footer className="mt-8">
      <div className="mx-2 rounded bg-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 p-6">

          <div className="w-full md:w-2/3 space-y-4">
            <h4 className="text-xl font-medium text-orange-600">
              Our Promise
            </h4>
            <p className="tracking-wide leading-relaxed">
              We at Kadai shopping aim to deliver products that provide higher
              value to our customers. Our service both in product quality and
              delivery time stands out from others. And still we constantly try
              to improve our service to better satisfy our customers by
              listening to your feedback. Keep shopping with us to support the
              community and feel free to contact us for any queries or details.
            </p>
          </div>

          <div className="w-full md:w-1/3 space-y-4">
            <h4 className="text-xl font-medium text-orange-600">
              Contact Us
            </h4>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <span>📧</span>
                <span>kadai@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                <span>+91 7904855050</span>
              </p>
              <p className="flex items-start gap-2">
                <span>🏠</span>
                <span>No. 6, Vivekanandar St., Dubai Kurukku sandhu, Dubai
                main road, Dubai.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center py-4 text-orange-500 border-t border-gray-300">
          Developed by{" "}
          <a
            className="hover:text-orange-600 transition-colors"
            href="https://github.com/madesh02104"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Madesh
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;