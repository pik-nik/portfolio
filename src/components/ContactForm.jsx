// import { useForm } from "react-hook-form"
import { useForm, ValidationError } from "@formspree/react"
import { RiChatSmileLine } from "react-icons/ri"

function ContactForm() {
    // const { register, handleSubmit } = useForm({ email })
    // const onSubmit = data => {
    //     console.log(data)
    //     window.location.href = `mailto:${email}?subject=${data.subject}&body=Hi, my name is ${data.name}. My email is ${data.email}. ${data.message} `
    // }

    const [state, handleSubmit] = useForm(
        process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT
    )

    return (
        <div>
            <form
                className=" flex flex-col w-full space-y-2 mx-auto font-sans text-sm md:text-base"
                // onSubmit={handleSubmit(onSubmit)}
                onSubmit={handleSubmit}
            >
                <div className="flex space-x-2">
                    <input
                        className="contactInput"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        // {...register("name")}
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
                        // {...register("email")}
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
                    // {...register("subject")}
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
                    // {...register("message")}
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
        </div>
    )
}

export default ContactForm
