// For HubSpot API calls
const axios = require('axios');

exports.main = async (context = {}) => {
  const { dealId } = context.parameters;
  
  try {
    await callWebhookEndpoint(dealId);
    return { status: 'success' };
  } catch (err) {
    return { status: 'error', message: err.message }
  }
};

const callWebhookEndpoint = async (dealId) => {
  return axios.post(
    `https://api-na1.hubapi.com/automation/v4/webhook-triggers/39703267/rLAu7nm`,
    {
        dealId: dealId,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};