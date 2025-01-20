'use client'

import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export function BookNow() {
  const [formData, setFormData] = useState<{
    petName: string
    petBreed: string
    sex: string
    age: string
    bloodGroup: string
    petParentName: string
    address: string
    pincode: string
    mobileNo: string
    emailId: string
    comment: string
    bookingDate: Date | null
    bookingSlot: string
  }>({
    petName: '',
    petBreed: '',
    sex: '',
    age: '',
    bloodGroup: '',
    petParentName: '',
    address: '',
    pincode: '',
    mobileNo: '',
    emailId: '',
    comment: '',
    bookingDate: null,
    bookingSlot: '',
  })

  const timeSlots = [
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 1:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM',
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleDateChange = (date: Date | null) => {
    setFormData({ ...formData, bookingDate: date })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form Submitted:', formData)
    // Add form submission logic here
  }

  return (
    <section id="book-now" className="bg-gray-100 py-40 text-black">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Book Now</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Pet Name */}
          <div>
            <label htmlFor="petName" className="block text-sm font-medium text-gray-700">
              Pet Name
            </label>
            <input
              type="text"
              id="petName"
              name="petName"
              value={formData.petName}
              onChange={handleChange}
              placeholder="Enter your pet's name"
              required
              className="mt-1 block w-full bg-slate-200 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3"
            />
          </div>

          {/* Pet Breed */}
          <div>
            <label htmlFor="petBreed" className="block text-sm font-medium text-gray-700">
              Pet Breed
            </label>
            <input
              type="text"
              id="petBreed"
              name="petBreed"
              value={formData.petBreed}
              onChange={handleChange}
              placeholder="Enter your pet's breed"
              required
              className="mt-1 block w-full bg-slate-200 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3"
            />
          </div>

          {/* Sex */}
          <div>
            <label htmlFor="sex" className="block text-sm font-medium text-gray-700">
              Sex
            </label>
            <select
              id="sex"
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              required
              className="mt-1 block w-full bg-slate-200 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Age */}
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your pet's age"
              required
              className="mt-1 block w-full bg-slate-200 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3"
            />
          </div>

          {/* Blood Group */}
          <div>
            <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700">
              Blood Group
            </label>
            <input
              type="text"
              id="bloodGroup"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              placeholder="Enter your pet's blood group"
              className="mt-1 block w-full bg-slate-200 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3"
            />
          </div>

          {/* Pet Parent Name */}
          <div>
            <label htmlFor="petParentName" className="block text-sm font-medium text-gray-700">
              Pet Parent Name
            </label>
            <input
              type="text"
              id="petParentName"
              name="petParentName"
              value={formData.petParentName}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="mt-1 block w-full bg-slate-200 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3"
            />
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              required
              className="mt-1 block w-full bg-slate-200 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3"
            />
          </div>

          {/* Pincode */}
          <div>
            <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Enter your area's pincode"
              required
              className="mt-1 block w-full bg-slate-200 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label htmlFor="mobileNo" className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              required
              className="mt-1 block w-full bg-slate-200 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3"
            />
          </div>

          {/* Email ID */}
          <div>
            <label htmlFor="emailId" className="block text-sm font-medium text-gray-700">
              Email ID
            </label>
            <input
              type="email"
              id="emailId"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="mt-1 block w-full bg-slate-200 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3"
            />
          </div>

          {/* Comment */}
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
              Comment
            </label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Any additional details or instructions"
              className="mt-1 block w-full bg-slate-200 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3"
            />
          </div>

          {/* Booking Date */}
          <div>
            <label htmlFor="bookingDate" className="block text-sm font-medium text-gray-700">
              Select Booking Date
            </label>
            <DatePicker
              selected={formData.bookingDate}
              onChange={handleDateChange}
              dateFormat="MMMM d, yyyy"
              className="mt-1 block w-full bg-slate-200 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3"
              placeholderText="Select a date"
            />
          </div>

          {/* Booking Slot */}
          <div>
            <label htmlFor="bookingSlot" className="block text-sm font-medium text-gray-700">
              Select Time Slot
            </label>
            <select
              id="bookingSlot"
              name="bookingSlot"
              value={formData.bookingSlot}
              onChange={handleChange}
              required
              className="mt-1 block w-full bg-slate-200 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-3"
            >
              <option value="">Select a slot</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="px-6 text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 py-3"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
