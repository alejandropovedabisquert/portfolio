import { useRef } from "react"
import emailjs from '@emailjs/browser'


const ApContact = (passData) =>{
    const titleClassStyle = passData.titleClassStyle
    const labelClass = "block mb-2 text-sm font-medium"
    const inputClass = "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
    const textAreaClass = "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
    const buttonClassStyle = "border-2 border-secondary-color p-2 px-4 mt-4 inline-block rounded-md shadow-md transition-all font-bold duration-300 relative hover:text-white before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:-z-10 before:bg-primary-color before:transition-all before:duration-300 before:hover:w-full"
    const form = useRef() 
    const sendEmail = (e) =>{
        e.preventDefault()
        emailjs.sendForm('service_ybqrbf6', 'template_uf8oruc', form.current, 'RzrOefDvuoF6uMf1O')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
        e.target.reset()
    }

    return(
        <div id="contact" className="text-left container mx-auto p-8">
            <div className="py-8 lg:pb-16 px-4 mx-auto max-w-screen-md bg-white rounded-md drop-shadow-lg">
            <h1 className={titleClassStyle}>Contacto</h1>
                <form ref={form} onSubmit={sendEmail} className="space-y-8">
                    <div>
                        <label htmlFor="email" className={labelClass}>Your email</label>
                        <input type="email" name="user_email" className={inputClass} placeholder="name@email.com" required/>
                    </div>
                    <div>
                        <label htmlFor="subject" className={labelClass}>Subject</label>
                        <input type="text" name="subject" className={inputClass} placeholder="Let us know how we can help you" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className={labelClass}>Your message</label>
                        <textarea name="message" rows="6" className={textAreaClass} placeholder="Leave a comment..."></textarea>
                    </div>
                    <input type="submit" className={buttonClassStyle} value="Send message"/>
                </form>
            </div>
            {/* <form className="grid p-8 w-9/12 h-96 box-content shadow-md rounded-md mx-auto bg-secondary-color transition-all md:grid-cols-2 lg:w-[50em]" ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>       */}
        </div>
    )

}

export default ApContact