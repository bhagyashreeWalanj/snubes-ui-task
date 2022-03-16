import React from 'react'

function ThankYouForm(props) {
  return (
    <div className="px-6 py-4 md:text-center">
      <h1 className="text-gray-600 font-extrabold text-2xl m-auto px-auto ">
        Thank You for your request!
      </h1>
      <p className="mt-3">
        You’ve taken the first step. Our experts will get in touch with you
        soon.
      </p>
      <hr className="mt-3 stroke-black"></hr>
      <table className="mt-6 mx-auto ">
        <tbody>
          {props.submittedData.map((form, index) => {
            return (
              <tr key={index}>
                <td className="text-left">
                  <p className="pt-3">Company</p>
                  <p className="pt-3">Name</p>
                  <p className="pt-3">Phone</p>
                  <p className="pt-3">E-mail</p>
                </td>
                <td className="text-left pl-10">
                  <p className="font-bold pt-3">{form.companyName}</p>
                  <p className="font-bold pt-3">{form.fullName}</p>
                  <p className="font-bold pt-3">{form.phoneNumber}</p>
                  <p className="font-bold pt-3"> {form.email}</p>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ThankYouForm
