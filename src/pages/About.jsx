function About() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-green-400 font-medium">DACOSTA JERSEYS</p>

          <h1 className="mt-2 text-4xl md:text-5xl font-bold">About Us</h1>

          <p className="mt-4 text-gray-300 max-w-2xl">
            Quality and affordable football wears for football supporters.
          </p>
        </div>
      </section>

      {/* About Business */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900">
              About Dacosta Jerseys
            </h2>

            <p className="mt-5 text-gray-600 leading-7">
              Dacosta Jerseys provides quality and affordable football jerseys
              for supporters who want to represent their favourite clubs in
              style.
            </p>

            <p className="mt-4 text-gray-600 leading-7">
              We offer both Player Version and Fan Version jerseys in selected
              club designs and sizes. Customers can browse the available jerseys
              online and order directly through WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-green-600 font-semibold">WHAT WE OFFER</p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Football Jerseys for Supporters
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {/* Player Version */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Player Version
              </h3>

              <p className="mt-3 text-gray-600">
                Available for GH₵180 in selected teams and sizes.
              </p>
            </div>

            {/* Fan Version */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Fan Version
              </h3>

              <p className="mt-3 text-gray-600">
                Available for GH₵150 in selected teams and sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Ordering Works */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-green-600 font-semibold">HOW IT WORKS</p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Simple Ordering Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {/* Step 1 */}
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                1
              </div>

              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Choose Your Jersey
              </h3>

              <p className="mt-3 text-gray-600">
                Browse the available jerseys and choose your preferred team and
                version.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                2
              </div>

              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Select Your Size
              </h3>

              <p className="mt-3 text-gray-600">
                Select one of the available sizes for the jersey you want.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center p-6">
              <div className="w-12 h-12 mx-auto rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">
                3
              </div>

              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Order on WhatsApp
              </h3>

              <p className="mt-3 text-gray-600">
                Send your order through WhatsApp and continue the conversation
                with Dacosta Jerseys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 text-white rounded-2xl p-6 md:p-10">
            <h2 className="text-2xl font-bold">Business Information</h2>

            <div className="mt-6 space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Location:</strong> Kumasi, Ghana
              </p>

              <p>
                <strong className="text-white">Phone:</strong> 0559999532
              </p>

              <p>
                <strong className="text-white">Payment:</strong> Telecel
                Cash-0501989232
              </p>

              <p>
                <strong className="text-white">Recipient:</strong> Festus
                Aboagye
              </p>

              <p>
                <strong className="text-white">Delivery:</strong> Delivery fee
                is paid by the buyer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
