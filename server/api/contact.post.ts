import {H3Event} from "h3";
import validateContactRequest from "~/server/app/formRequests/contactRequest";
import {sendMail} from "~/server/app/email/sendMaill";

export default eventHandler(async (event: H3Event) => {
    let credentials = await readBody(event);
    console.log('credentials', credentials)
    credentials = await validateContactRequest(credentials);

    const text = `
        Nom: ${credentials.last_name} ${credentials.first_name} \n 
        Email: ${credentials.email} \n 
        Message: ${credentials.message}
    `;
    const recipient = credentials.email;
    credentials = {recipient, subject: 'Contact', text};
    await sendMail(credentials);
    return {credentials};
});

