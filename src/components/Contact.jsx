import { RiPhoneLine } from "@remixicon/react"
import { CONTACT_INFO } from "../constants"

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto" id="contact">
        <div className="my-20">
            <h2 className="text-xl lg:text-3xl tracking-tight text-center 
            uppercase mb-12">
                Contact
            </h2>
            <p className="max-w-2xl text-lg mb-12 text-center mx-auto">
                {CONTACT_INFO.text}
            </p>
            <div className="flex flex-col lg:flex-row justify-around mx-4">
                <div className="flex mb-8 lg:mb-0">
                    <RiPhoneLine className="text-3xl mr-4" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
