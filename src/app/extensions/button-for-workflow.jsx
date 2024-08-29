import React, { useState } from "react";
import {
  Button,
  Flex,
  hubspot,
  logger
} from "@hubspot/ui-extensions";

// Define the extension to be run within the Hubspot CRM
hubspot.extend(({ context, runServerlessFunction, actions }) => (
  <Extension
    context={context}
    runServerless={runServerlessFunction}
    sendAlert={actions.addAlert}
  />
));
// For HubSpot API calls
const axios = require('axios');

// Define the Extension component, taking in runServerless, context, & sendAlert as props
const Extension = ({ context, runServerless, sendAlert }) => {
  const [text, setText] = useState("");

  // Call serverless function to execute with parameters.
  // The `myFunc` function name is configured inside `serverless.json`
  const handleClick = async () => {
    const saleslotId = context.crm.objectId; 
    {console.log('saleslotId:' + saleslotId);}
    const { response } = await runServerless({ name: "myFunc", parameters: { saleslotId: saleslotId } });
    {console.log(response);}
    const message = response.status ? response.meesage : "error";
    sendAlert({ title:"TestTitle", message: message,type:"danger" });
  };

    const dealResponse = axios.get(`https://api.hubapi.com/crm/v3/objects/deals/21786397288?properties=dealstage&archived=false`, {
      headers: {
        'Authorization': `Bearer pat-na1-569412b9-6f27-4496-a664-511f9d940ee4`
      }
    });
  
      let dealstage = dealResponse.data.properties.dealstage;

      if (dealstage === null) {
          dealstage = "null";
      }

      console.log(JSON.stringify(dealResponse.data));
      console.log(dealstage);
  
  return (
    <>
    <Flex
      direction={'row'}
      justify={'center'}>
        <Button type="submit"
        variant="primary"
        onClick={handleClick}>
          Copy Saleslot
        </Button>
      </Flex>
    </>
  );
};
