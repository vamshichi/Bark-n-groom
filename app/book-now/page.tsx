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
  parentName: string
  address: string
  pincode: string
  mobileNo: string
  emailId: string
  comment: string
  appointmentDate: Date
  appointmentSlot: string
}

export default function BookNowPage() {
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle")
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
    // Here you would typically send the data to your server
    setSubmissionStatus("success")
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-2xl mx-auto bg-background shadow-md rounded-lg overflow-hidden">
        <div className="p-6 bg-background/5 border-b">
          <h2 className="text-2xl font-bold text-foreground">Book Now</h2>
          <p className="mt-1 text-foreground/70">Fill out the form below to book an appointment for your pet.</p>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="petName" className="block text-sm font-medium text-foreground/90">
                  Pet Name
                </label>
                <input
                  id="petName"
                  {...register("petName", { required: "Pet name is required" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {errors.petName && <p className="mt-1 text-sm text-red-600">{errors.petName.message}</p>}
              </div>
              <div>
                <label htmlFor="petBreed" className="block text-sm font-medium text-foreground/90">
                  Pet Breed
                </label>
                <input
                  id="petBreed"
                  {...register("petBreed", { required: "Pet breed is required" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {errors.petBreed && <p className="mt-1 text-sm text-red-600">{errors.petBreed.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-foreground/90">
                  Select Gender
                </label>
                <select
                  id="gender"
                  {...register("gender", { required: "Gender is required" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>}
              </div>
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-foreground/90">
                  Age
                </label>
                <input
                  id="age"
                  {...register("age", { required: "Age is required" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {errors.age && <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="bloodGroup" className="block text-sm font-medium text-foreground/90">
                Blood Group
              </label>
              <input
                id="bloodGroup"
                {...register("bloodGroup")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="parentName" className="block text-sm font-medium text-foreground/90">
                Parent Name
              </label>
              <input
                id="parentName"
                {...register("parentName", { required: "Parent name is required" })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.parentName && <p className="mt-1 text-sm text-red-600">{errors.parentName.message}</p>}
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-foreground/90">
                Address
              </label>
              <textarea
                id="address"
                {...register("address", { required: "Address is required" })}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              ></textarea>
              {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="pincode" className="block text-sm font-medium text-foreground/90">
                  Pincode
                </label>
                <input
                  id="pincode"
                  {...register("pincode", { required: "Pincode is required" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {errors.pincode && <p className="mt-1 text-sm text-red-600">{errors.pincode.message}</p>}
              </div>
              <div>
                <label htmlFor="mobileNo" className="block text-sm font-medium text-foreground/90">
                  Mobile No
                </label>
                <input
                  id="mobileNo"
                  {...register("mobileNo", { required: "Mobile number is required" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                {errors.mobileNo && <p className="mt-1 text-sm text-red-600">{errors.mobileNo.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="emailId" className="block text-sm font-medium text-foreground/90">
                Email ID
              </label>
              <input
                id="emailId"
                type="email"
                {...register("emailId", { required: "Email is required" })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.emailId && <p className="mt-1 text-sm text-red-600">{errors.emailId.message}</p>}
            </div>

            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-foreground/90">
                Comment
              </label>
              <textarea
                id="comment"
                {...register("comment")}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="appointmentDate" className="block text-sm font-medium text-foreground/90">
                  Appointment Date
                </label>
                <Controller
                  control={control}
                  name="appointmentDate"
                  rules={{ required: "Appointment date is required" }}
                  render={({ field }: { field: FieldValues }) => (
                    <DatePicker
                      selected={field.value as Date}
                      onChange={(date: Date | null) => field.onChange(date)}
                      dateFormat="MM/dd/yyyy"
                      placeholderText="MM/dd/yyyy"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  )}
                />
                {errors.appointmentDate && (
                  <p className="mt-1 text-sm text-red-600">{errors.appointmentDate.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="appointmentSlot" className="block text-sm font-medium text-foreground/90">
                  Select a Slot
                </label>
                <select
                  id="appointmentSlot"
                  {...register("appointmentSlot", { required: "Appointment slot is required" })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                  <option value="">Select slot</option>
                  <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                  <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
                  <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
                </select>
                {errors.appointmentSlot && (
                  <p className="mt-1 text-sm text-red-600">{errors.appointmentSlot.message}</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>

          {submissionStatus === "success" && (
            <p className="mt-4 text-sm text-green-600 text-center">Booking submitted successfully!</p>
          )}
          {submissionStatus === "error" && (
            <p className="mt-4 text-sm text-red-600 text-center">An error occurred. Please try again.</p>
          )}
        </div>
      </div>
    </div>
  )
}

