import {H3Event} from "h3";
import validateContactRequest from "~/server/app/formRequests/contactRequest";

export default eventHandler(async (event: H3Event) => {
    let credentials = await readBody(event);
    console.log('credentials', credentials)
    credentials = await validateContactRequest(credentials);
    return {credentials};
});

