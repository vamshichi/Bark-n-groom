"use client"

import { useState } from "react"
import { useForm, Controller, type FieldValues } from "react-hook-form"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

type FormData = {
  petName: string
  petBreed: string
  gender: string
  age: string
  bloodGroup: string
  petParentName: string
  address: string
  pincode: string
  mobileNo: string
  emailId: string
  comment: string
  bookingDate: Date
  bookingSlot: string
}

export default function BookNowPage() {
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle")
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/booknow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmissionStatus("success")
        reset() // Reset the form fields
      } else {
        setSubmissionStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmissionStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-slate-400 py-32">
      <div className="max-w-2xl mx-auto bg-blue-800 dark:bg-gray-800 py-10 shadow-md rounded-lg overflow-hidden">
        <div className="p-6 bg-background/5 border-b">
          <h2 className="text-2xl font-bold text-white py-2 dark:text-white">Book Now</h2>
          <p className="mt-1 text-white dark:text-gray-300">
            Fill out the form below to book an appointment for your pet.
          </p>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="petName" className="block text-sm font-medium text-white dark:text-gray-300">
                  Pet Name
                </label>
                <input
                  id="petName"
                  {...register("petName", { required: "Pet name is required" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2.5 bg-white dark:bg-gray-700 dark:text-white"
                />
                {errors.petName && <p className="mt-1 text-sm text-red-600">{errors.petName.message}</p>}
              </div>
              <div>
                <label htmlFor="petBreed" className="block text-sm font-medium text-white dark:text-gray-300">
                  Pet Breed
                </label>
                <input
                  id="petBreed"
                  {...register("petBreed", { required: "Pet breed is required" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2.5 bg-white dark:bg-gray-700 dark:text-white"
                />
                {errors.petBreed && <p className="mt-1 text-sm text-red-600">{errors.petBreed.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-white dark:text-gray-300">
                  Select Gender
                </label>
                <select
                  id="gender"
                  {...register("gender", { required: "Gender is required" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2.5 bg-white dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>}
              </div>
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-white dark:text-gray-300">
                  Age
                </label>
                <input
                  id="age"
                  {...register("age", { required: "Age is required" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2.5 bg-white dark:bg-gray-700 dark:text-white"
                />
                {errors.age && <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="bloodGroup" className="block text-sm font-medium text-white dark:text-gray-300">
                Blood Group
              </label>
              <input
                id="bloodGroup"
                {...register("bloodGroup")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2.5 bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="petParentName" className="block text-sm font-medium text-white dark:text-gray-300">
                Parent Name
              </label>
              <input
                id="petParentName"
                {...register("petParentName", { required: "Parent name is required" })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2.5 bg-white dark:bg-gray-700 dark:text-white"
              />
              {errors.petParentName && <p className="mt-1 text-sm text-red-600">{errors.petParentName.message}</p>}
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-white dark:text-gray-300">
                Address
              </label>
              <textarea
                id="address"
                {...register("address", { required: "Address is required" })}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2.5 bg-white dark:bg-gray-700 dark:text-white"
              ></textarea>
              {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="pincode" className="block text-sm font-medium text-white dark:text-gray-300">
                  Pincode
                </label>
                <input
                  id="pincode"
                  {...register("pincode", { required: "Pincode is required" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2.5 bg-white dark:bg-gray-700 dark:text-white"
                />
                {errors.pincode && <p className="mt-1 text-sm text-red-600">{errors.pincode.message}</p>}
              </div>
              <div>
                <label htmlFor="mobileNo" className="block text-sm font-medium text-white dark:text-gray-300">
                  Mobile No
                </label>
                <input
                  id="mobileNo"
                  {...register("mobileNo", { required: "Mobile number is required" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2.5 bg-white dark:bg-gray-700 dark:text-white"
                />
                {errors.mobileNo && <p className="mt-1 text-sm text-red-600">{errors.mobileNo.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="emailId" className="block text-sm font-medium text-white dark:text-gray-300">
                Email ID
              </label>
              <input
                id="emailId"
                type="email"
                {...register("emailId", { required: "Email is required" })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2.5 bg-white dark:bg-gray-700 dark:text-white"
              />
              {errors.emailId && <p className="mt-1 text-sm text-red-600">{errors.emailId.message}</p>}
            </div>

            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-white dark:text-gray-300">
                Comment
              </label>
              <textarea
                id="comment"
                {...register("comment")}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2.5 bg-white dark:bg-gray-700 dark:text-white"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="bookingDate" className="block text-sm font-medium text-white dark:text-gray-300">
                  Appointment Date
                </label>
                <Controller
                  control={control}
                  name="bookingDate"
                  rules={{ required: "Booking date is required" }}
                  render={({ field }: { field: FieldValues }) => (
                    <DatePicker
                      selected={field.value as Date}
                      onChange={(date: Date | null) => field.onChange(date)}
                      dateFormat="MM/dd/yyyy"
                      placeholderText="MM/dd/yyyy"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2.5 bg-white dark:bg-gray-700 dark:text-white"
                    />
                  )}
                />
                {errors.bookingDate && <p className="mt-1 text-sm text-red-600">{errors.bookingDate.message}</p>}
              </div>
              <div>
                <label htmlFor="bookingSlot" className="block text-sm font-medium text-white dark:text-gray-300">
                  Select a Slot
                </label>
                <select
                  id="bookingSlot"
                  {...register("bookingSlot", { required: "Booking slot is required" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black p-2.5 bg-white dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select slot</option>
                  <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                  <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                  <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                </select>
                {errors.bookingSlot && <p className="mt-1 text-sm text-red-600">{errors.bookingSlot.message}</p>}
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>

          {submissionStatus === "success" && (
            <p className="mt-4 text-sm text-white text-center">Booking submitted successfully!</p>
          )}
          {submissionStatus === "error" && (
            <p className="mt-4 text-sm text-red-600 text-center">An error occurred. Please try again.</p>
          )}
        </div>
      </div>
    </div>
  )
}

