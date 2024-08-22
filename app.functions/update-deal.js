// For HubSpot API calls
const hubspot = require('@hubspot/api-client');

exports.main = async (context = {}) => {
  const { dealId } = context.parameters;
  const hubspotClient = new hubspot.Client({
    accessToken: process.env['PRIVATE_APP_ACCESS_TOKEN']
  });

  const response = await hubspotClient.crm.deals.basicApi.update(
    dealId,
    {
      properties: { sap_quotation_flag: true }
    }
  );
  
  return response;
};