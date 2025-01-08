import React from "react";

const BookingComponent = () => {
  return (
    <div className="bg-green-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl">
        {/* Booking Summary and Calendar */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
          {/* Booking Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/3">
            <h2 className="text-lg font-bold uppercase mb-4">Booking Summary:</h2>
            <p className="text-gray-700 mb-4">
              <span className="font-medium">Price:</span> ₱500
            </p>
            <p className="text-gray-700 mb-6">
              Would you like to rent or purchase home products?
            </p>
            <div className="flex gap-4">
              <button className="w-full py-2 border border-black rounded-md hover:bg-gray-200">
                Yes
              </button>
              <button className="w-full py-2 border border-black rounded-md hover:bg-gray-200">
                No
              </button>
            </div>
          </div>

          {/* Calendar Section */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-2/3">
            <h2 className="text-lg font-bold mb-4">Date</h2>
            <p className="text-gray-600 text-sm mb-4">
              Earliest available appointment: <span className="font-bold"> January 2025</span>
            </p>
            <p className="text-red-500 text-sm mb-4">
              To the extent possible, additional slots are made regularly.
            </p>
            <div className="mb-6">
              {/* Calendar */}
              <div className="grid grid-cols-7 gap-2 text-center text-sm">
                <div className="font-bold">Su</div>
                <div className="font-bold">Mo</div>
                <div className="font-bold">Tu</div>
                <div className="font-bold">We</div>
                <div className="font-bold">Th</div>
                <div className="font-bold">Fr</div>
                <div className="font-bold">Sa</div>
                {/* Empty spaces for previous month's days */}
                {[...Array(5)].map((_, idx) => (
                  <div key={idx}></div>
                ))}
                {/* Calendar Dates */}
                {[...Array(30)].map((_, idx) => (
                  <div
                    key={idx}
                    className={`py-1 px-2 rounded ${
                      idx === 17
                        ? "bg-blue-500 text-white font-bold"
                        : idx > 17
                        ? "bg-green-200"
                        : "text-gray-400"
                    }`}
                  >
                    {idx + 1}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <span className="text-green-500">Available</span>
                <span className="text-red-500">Fully Booked</span>
              </div>
            </div>
            {/* Time Section */}
            <h2 className="text-lg font-bold mb-4">Time</h2>
            <div className="flex flex-col gap-2">
              {[
                { time: "10:00-11:00", status: "Available", slots: 8 },
                { time: "11:00-12:00", status: "Available", slots: 9 },
                { time: "12:00-13:00", status: "Available", slots: 14 },
                { time: "13:00-14:00", status: "Fully Booked", slots: 0 },
                { time: "14:00-15:00", status: "Available", slots: 7 },
                { time: "15:00-16:00", status: "Available", slots: 9 },
                { time: "16:00-17:00", status: "Available", slots: 1 },
                { time: "17:00-18:00", status: "Fully Booked", slots: 0 },
              ].map((slot, idx) => (
                <label
                  key={idx}
                  className="flex items-center justify-between p-2 border rounded-md hover:bg-gray-100"
                >
                  <div className="flex items-center gap-2">
                    <input type="radio" name="time-slot" className="accent-blue-500" />
                    <span>{slot.time}</span>
                  </div>
                  <span
                    className={`${
                      slot.status === "Fully Booked"
                        ? "text-red-500"
                        : "text-green-500"
                    } text-sm font-medium`}
                  >
                    {slot.status} {slot.slots > 0 ? `| Slots: ${slot.slots}` : ""}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Book Button */}
        <div className="mt-8 text-center">
          <button className="w-full lg:w-auto bg-black text-white py-3 px-6 rounded-md hover:bg-gray-900 font-bold">
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingComponent;
