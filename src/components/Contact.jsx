import ContactInfo from "./ContactInfo"
import ContactForm from "./ContactForm"
import Footer from "./Footer"

function Contact({ pageInfo, socials }) {
    return (
        <div className="md:min-h-screen md:max-h-fit flex relative text-center md:text-left px-4 md:px-10 mx-auto items-center justify-center w-full">
            <h1 className="section_heads">contact</h1>
            <div className="mt-48 mb-48 flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-4 md:space-y-0">
                <ContactInfo socials={socials} pageInfo={pageInfo} />
                <ContactForm email={pageInfo?.email} />
            </div>
            <Footer />
        </div>
    )
}

export default Contact
