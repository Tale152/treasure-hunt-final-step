import emailjs from 'emailjs-com'

export default function sendMail(template){
    const userCode = process.env.REACT_APP_EMAILJS_USER_CODE
    if (userCode !== null && userCode !== undefined && userCode !== "" && template !== null && template !== undefined && template !== ""){
        emailjs.send('gmail', template, {}, process.env.REACT_APP_EMAILJS_USER_CODE)
    }
}
