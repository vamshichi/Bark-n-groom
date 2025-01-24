"use client"

import type React from "react"
import { useState } from "react"

interface FormData {
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
  bookingDate: string
  bookingSlot: string
}

const BookNowForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    petName: "",
    petBreed: "",
    sex: "",
    age: "",
    bloodGroup: "",
    petParentName: "",
    address: "",
    pincode: "",
    mobileNo: "",
    emailId: "",
    comment: "",
    bookingDate: "",
    bookingSlot: "",
  })

  // Predefined slot timings
  const availableSlots = [
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 01:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM",
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/booknow", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        alert(data.message)
        setFormData({
          petName: "",
          petBreed: "",
          sex: "",
          age: "",
          bloodGroup: "",
          petParentName: "",
          address: "",
          pincode: "",
          mobileNo: "",
          emailId: "",
          comment: "",
          bookingDate: "",
          bookingSlot: "",
        })
      } else {
        alert(`Error: ${data.message}`)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Failed to submit the form. Please try again later.")
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Book Now</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="petName"
            placeholder="Pet Name"
            value={formData.petName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="text"
            name="petBreed"
            placeholder="Pet Breed"
            value={formData.petBreed}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <select
            name="gender"
            value={formData.sex}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="text"
            name="bloodGroup"
            placeholder="Blood Group"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="petParentName"
            placeholder="Parent Name"
            value={formData.petParentName}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="text"
            name="mobileNo"
            placeholder="Mobile No"
            value={formData.mobileNo}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="email"
            name="emailId"
            placeholder="Email ID"
            value={formData.emailId}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <textarea
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          type="date"
          name="bookingDate"
          value={formData.bookingDate}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <select
          name="bookingSlot"
          value={formData.bookingSlot}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        >
          <option value="">Select a Slot</option>
          {availableSlots.map((slot, index) => (
            <option key={index} value={slot}>
              {slot}
            </option>
          ))}
        </select>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  )
}

export default BookNowForm

