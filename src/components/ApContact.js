import { useRef } from "react"
import emailjs from '@emailjs/browser'



const ApContact = (passData) =>{
    const titleClassStyle = passData.titleClassStyle
    const buttonClassStyle = passData.buttonClassStyle
    const inputClass = "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-secondary-color"
    const textAreaClass = "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-secondary-color"
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
            <div className="py-8 lg:pb-8 px-4 md:px-8 mx-auto max-w-screen-md bg-white rounded-md drop-shadow-lg">
             
            <h1 className={titleClassStyle}>Contáctame</h1>
                <form ref={form} onSubmit={sendEmail} className="space-y-8">
                    <div>
                        <input type="email" name="user_email" className={inputClass} placeholder="Email" required/>
                    </div>
                    <div>
                        <input type="text" name="subject" className={inputClass} placeholder="Asunto" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <textarea name="message" rows="6" className={textAreaClass} placeholder="Mensaje" required></textarea>
                    </div>
                    <button type="submit" className={buttonClassStyle}>Enviar</button>
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