import { Check, X } from "lucide-react";

const Pricing = () => {
  const features = [
    {
      name: "Free Delivery",
      basic: false,
      prime: true,
    },
    {
      name: "Priority Customer Support",
      basic: false,
      prime: true,
    },
    {
      name: "Early Access to Sales",
      basic: false,
      prime: true,
    },
    {
      name: "Product Reviews",
      basic: true,
      prime: true,
    },
    {
      name: "Wishlist",
      basic: true,
      prime: true,
    },
    {
      name: "Return Window",
      description: "Basic: 7 days, Prime: 14 days",
      basic: true,
      prime: true,
    },
  ];

  const StatusIcon = ({ available }) => (
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center ${
        available ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {available ? (
        <Check className="w-5 h-5 text-white" />
      ) : (
        <X className="w-5 h-5 text-white" />
      )}
    </div>
  );

  return (
    <div className="w-full py-12 px-4 bg-white mt-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-orange-500">
        Pricing
      </h2>

      <div className="max-w-5xl mx-auto">
        <div className="lg:hidden space-y-8">
          <div className="rounded-lg border border-gray-200 p-6 bg-gray-50">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Basic</h3>
              <div className="text-orange-500 font-bold">
                <span className="text-3xl">₹0</span>
                <span className="text-lg">/month</span>
              </div>
            </div>
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex items-center gap-4">
                  <StatusIcon available={feature.basic} />
                  <div>
                    <p className="font-medium text-gray-700">{feature.name}</p>
                    {feature.description && (
                      <p className="text-sm text-gray-500">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 px-4 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-400 active:bg-black transition-colors">
              Currently Applied &#x2713;
            </button>
          </div>

          <div className="rounded-lg border-2 border-orange-500 p-6 bg-white relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                RECOMMENDED
              </span>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Prime</h3>
              <div className="text-orange-500 font-bold">
                <span className="text-3xl">₹199</span>
                <span className="text-lg">/month</span>
              </div>
            </div>
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex items-center gap-4">
                  <StatusIcon available={feature.prime} />
                  <div>
                    <p className="font-medium text-gray-700">{feature.name}</p>
                    {feature.description && (
                      <p className="text-sm text-gray-500">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 px-4 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-400 active:bg-black transition-colors">
              Upgrade to Prime
            </button>
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-3 gap-6">
          <div>
            <div className="h-36"></div>
            <div className="space-y-8">
              {features.map((feature) => (
                <div key={feature.name} className="flex items-center h-8">
                  <div className="text-gray-700">
                    <p className="font-medium">{feature.name}</p>
                    {feature.description && (
                      <p className="text-sm text-gray-500">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 p-6 bg-gray-50">
            <div className="text-center h-32">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Basic</h3>
              <div className="text-orange-500 font-bold">
                <span className="text-3xl">₹0</span>
                <span className="text-lg">/month</span>
              </div>
            </div>
            <div className="space-y-8">
              {features.map((feature) => (
                <div key={feature.name} className="flex justify-center h-8">
                  <StatusIcon available={feature.basic} />
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-2 px-4 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-400 active:bg-black transition-colors">
              Currently Applied &#x2713;
            </button>
          </div>

          <div className="rounded-lg border-2 border-orange-500 p-6 bg-white relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                RECOMMENDED
              </span>
            </div>
            <div className="text-center h-32">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Prime</h3>
              <div className="text-orange-500 font-bold">
                <span className="text-3xl">₹199</span>
                <span className="text-lg">/month</span>
              </div>
            </div>
            <div className="space-y-8">
              {features.map((feature) => (
                <div key={feature.name} className="flex justify-center h-8">
                  <StatusIcon available={feature.prime} />
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-2 px-4 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-400 active:bg-black transition-colors">
              Upgrade to Prime
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
