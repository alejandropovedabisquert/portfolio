
const ApContact = (passData) =>{
    const titleClassStyle = passData.titleClassStyle
    return(
        <div id="contact" className="text-center">
            <h1 className={titleClassStyle}>Contacto</h1>
            <form>
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