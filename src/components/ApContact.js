import { useRef } from "react"
import emailjs from '@emailjs/browser'


const ApContact = (passData) =>{
    const titleClassStyle = passData.titleClassStyle

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
        <div id="contact" className="text-center container mx-auto p-8">
            <h1 className={titleClassStyle}>Contacto</h1>
            <form className="grid p-8 w-9/12 h-96 box-content shadow-md rounded-md mx-auto bg-secondary-color transition-all lg:w-[50em]" ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>      
        </div>
    )

}

export default ApContact