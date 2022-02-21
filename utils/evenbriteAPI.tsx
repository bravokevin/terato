// Every request to the Eventbrite platform must be authenticated; 
// you'll send this token(Oauth) to the server so that it knows whom the request came from and what that request is allowed to do.

const BASE_URL = "https://www.eventbriteapi.com/v3"

const getListOfFutureEvents = async (): Promise<string[]> => {
    return [];
}

// TODO: dejarle a la parsona la oportunidad de listar su evento informandole que quedara en la plataforma de eventbrite, bajo su username

