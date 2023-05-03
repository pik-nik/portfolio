// import { useForm } from "react-hook-form"
import { useForm, ValidationError } from "@formspree/react"
import { RiChatSmileLine } from "react-icons/ri"

function ContactForm() {
    const [state, handleSubmit] = useForm(
        process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT
    )

    return (
        <form
            className="flex flex-col max-w-full space-y-2 font-sans text-sm md:text-base px-2"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-2 md:space-y-0">
                <input
                    className="contactInput"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                />
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />
                <input
                    className="contactInput"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>
            <input
                className="contactInput"
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                required
            />
            <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
            />
            <textarea
                className="contactInput"
                id="message"
                placeholder="Message"
                rows="4"
                name="message"
                required
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button
                className="button disabled:opacity-30 disabled:pointer-events-none"
                type="submit"
                disabled={state.submitting || state.succeeded}
            >
                {state.succeeded
                    ? "Sent!"
                    : state.submitting
                    ? "Sending..."
                    : "Send message"}
            </button>
            {state.succeeded ? (
                <div className="item-center text-center text-primary dark:text-primary_dark flex items-center justify-center space-x-2">
                    <p>Thank you for your message</p>
                    <RiChatSmileLine />
                </div>
            ) : (
                " "
            )}
        </form>
    )
}

export default ContactForm
