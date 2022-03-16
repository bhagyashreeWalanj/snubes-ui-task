import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import ThankYouForm from './ThankYouForm'
import { format } from 'libphonenumber-js'
import PhoneInput from 'react-phone-input-2'
import { RiErrorWarningLine } from 'react-icons/ri';
import 'react-phone-input-2/lib/style.css'
import '../css/phone-input.css'

function ContactForm() {
  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [isFormSubmit, setFormSubmit] = useState(false); // boolean validation if form is valid or not
  const [submittedData, setSubmittedData] = useState([]); // pass submitted data to Thank You form 
  const [country, setCountry] = useState('de'); // To get country name for international phone number formatting
  const [countryCode, setCountryCode] = useState('de'); // to get Country code to set on phone input

  const onSubmit = async (data) => {
    const fields = []
    data.phoneNumber = format(
      JSON.stringify(data.phoneNumber),
      countryCode,
      'International',
    )
    fields.push(data)
    setSubmittedData(fields)
    setFormSubmit(true)

  }

  useEffect(() => {
    fetch('http://ip-api.com/json')
      .then((res) => res.json())
      .then((response) => {
        if (!response.country) {
          setCountry('de')
        } else {
          setCountry(response.country)
          setCountryCode(response.countryCode)
        }
      })
      .catch((error) => {
        console.log('catch Error :', error)
      })
  }, [])

  return (
    <div className="md:text-center px-6 py-4">
      {isFormSubmit ? (
        <ThankYouForm
          submittedData={submittedData}
          phoneNumber={watch('phoneNumber')}
        />
      ) : (
        <React.Fragment>
          <div className="md:text-center px-6 py-4">
            <h2 className="font-bold text-2xl">
              Find inbound call centers for your company
            </h2>
            <p className="hidden md:block">
              Use our AI and Big Data driven call center sourcing solution
            </p>
            <form
              className="mt-6 grid grid-flow-row gap-3 "
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex-grow m-auto w-auto mx-auto">
                <label className="mr-[4.4rem] text-gray-600 font-medium">
                  Company
                </label>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company"
                  className={`px-6 py-2 rounded w-80 ${errors.companyName ? 'border-1 border-red-600' : 'border'
                    }`}
                  {...register('companyName', {
                    required: true,
                    maxLength: 80,
                    pattern: /^[a-zA-Z]+$/,
                  })}
                />
              </div>

              <div className="flex-grow w-auto mx-auto">
                <label className="mr-24 text-gray-600 font-medium">Name</label>
                <input
                  type="text"
                  name="fullName"
                  id="nameId"
                  placeholder="Full name"
                  className={`px-6 py-2 rounded w-80 ${errors.fullName ? 'border-1 border-red-600' : 'border'
                    }`}
                  {...register('fullName', {
                    required: true,
                    maxLength: 50,
                    pattern: /^[a-zA-Z]+$/
                  })}
                />

              </div>

              <div className="flex lg:flex-row flex-col items-start sm:items-center mx-auto">
                <label className="mr-8 lg:ml-0 -ml-5 text-gray-600 font-medium">
                  Phone
                </label>
                <Controller
                  control={control}
                  name="phoneNumber"
                  rules={{ required: true }}
                  render={({ field: { ref, ...field } }) => (
                    <PhoneInput
                      {...field}
                      inputProps={{
                        ref,
                        required: true,
                      }}
                      inputStyle={{
                        padding: '0.5rem -1.5rem',
                        paddingLeft: '15px',
                        borderColor: '#dee2e6',
                      }}
                      className={`w-64 rounded-md lg:ml-20 ml-0 left-0 ${errors.phoneNumber
                        ? 'border-1 border-red-600'
                        : 'border'
                        }`}
                      specialLabel={null}
                      autoFormat={true}
                      country={country.toLowerCase()}
                      countryCodeEditable={true}
                    />
                  )}
                />
              </div>

              <div className="flex-grow m-auto w-auto mx-auto">
                <label className="ml-auto mr-24 text-gray-600 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="emailId"
                  placeholder="name@email.com"
                  {...register('email', { required: true })}
                  className={`px-6 py-2 rounded w-80 ${errors.email ? 'border-1 border-red-600' : 'border'
                    }`}
                />
              </div>

              <input
                type="submit"
                value="Get Informed"
                className="px-6 py-2 w-60 bg-blue-500 text-white rounded  mx-auto my-2"
              />
              {errors?.companyName?.type === "required" && <span className="flex justify-center text-xs m-0 text-red-500">
                <RiErrorWarningLine className="m-1" />Company Name field is required</span>}
              {errors?.companyName?.type === "maxLength" && (
                <span className="flex justify-center text-xs m-0 text-red-500"><RiErrorWarningLine className="m-1" />Company name cannot exceed 80 characters</span>
              )}
              {errors?.companyName?.type === "pattern" && (
                <span className="flex justify-center text-xs m-0 text-red-500"><RiErrorWarningLine className="m-1" />Company name Alphabetical characters only</span>
              )}
              {errors?.fullName?.type === "required" && <span className="flex justify-center text-xs m-0 text-red-500"><RiErrorWarningLine className="m-1" />First Name field is required</span>}
              {errors?.fullName?.type === "maxLength" && (
                <span className="flex justify-center text-xs m-0 text-red-500"><RiErrorWarningLine className="m-1" />First name cannot exceed 50 characters</span>
              )}
              {errors?.fullName?.type === "pattern" && (
                <span className="flex justify-center text-xs m-0 text-red-500"><RiErrorWarningLine className="m-1" />First name Alphabetical characters only</span>
              )}
              {errors?.phoneNumber?.type === "required" && <span className="flex justify-center text-xs m-0 text-red-500"><RiErrorWarningLine className="m-1" />phone Number field is required</span>}

              {errors?.email?.type === "required" && <span className="flex justify-center text-xs m-0 text-red-500"><RiErrorWarningLine className="m-1" />Email ID field is required</span>}

            </form>
          </div>
        </React.Fragment>
      )}
    </div>
  )
}

export default ContactForm
