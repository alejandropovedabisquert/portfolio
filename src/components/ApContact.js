import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import { FaRegCheckCircle } from "react-icons/fa";



const ApContact = (passData) =>{
    const titleClassStyle = passData.titleClassStyle
    const buttonClassStyle = passData.buttonClassStyle
    const inputClass = "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-secondary-color"
    const textAreaClass = "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-secondary-color"
    const form = useRef() 
    const [statusMessage, setStatusMessage] = useState([]);

    const prueba = ()=>{
        setStatusMessage({type: "success" , message: "El email se envió correctamente", opacity: true});
        setTimeout(() => setStatusMessage({type: "success" , message: "El email se envió correctamente", opacity: false}), 5000)
        setTimeout(() => setStatusMessage([]), 6000)
    }
  
    const sendEmail = (e) =>{
        e.preventDefault()
        emailjs.sendForm('service_ybqrbf6', 'template_uf8oruc', form.current, 'RzrOefDvuoF6uMf1O')
            .then((result) => {
                console.log(result.text);
                e.target.reset()
                setStatusMessage({type: "success" , message: "El email se envió correctamente", opacity: true});
                setTimeout(() => setStatusMessage({type: "success" , message: "El email se envió correctamente", opacity: false}), 2000)
                setTimeout(() => setStatusMessage([]), 3000)
            }, (error) => {
                console.log(error.text);
                setStatusMessage({type: "error" , message: `Hubo un error en el envio (${error.text})`});
            })
    }

    return(
        <div id="contact" className="text-left container relative mx-auto p-8 md:px-0">
            <div className="py-8 lg:pb-8 px-4 md:px-8 mx-auto max-w-screen-md bg-white rounded-md drop-shadow-lg">
             
                <h1 className={`${titleClassStyle} pb-4 md:pb-8`}>Contáctame</h1>
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
                <button onClick={prueba}>Pureba</button>
                <div className={`${statusMessage.opacity === true ? 'opacity-100': 'opacity-0'} duration-500 transition-all p-4 bg-green-500 absolute bottom-0 right-0 md:-right-28 md:-bottom-7 drop-shadow-lg rounded-md w-auto`}>
                    {statusMessage.type === 'success' ? <div className="flex items-center"><FaRegCheckCircle className="mr-2"/>{statusMessage.message}</div>:null}
                </div>
                {console.log(statusMessage)}
            </div>
        </div>
    )

}

export default ApContact