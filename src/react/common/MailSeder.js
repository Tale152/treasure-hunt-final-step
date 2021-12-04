import emailjs from 'emailjs-com'

export default function sendMail(template){
    if (process.env.REACT_APP_EMAILJS_USER_CODE !== null && template !== null){
        emailjs.send('gmail', template, {}, process.env.REACT_APP_EMAILJS_USER_CODE)
    }
}
