import axios from "axios";
import { CONNECTOR_TWILIO_SMS_AND_EMAIL_INTEGRATION_44534_USERNAME, CONNECTOR_TWILIO_SMS_AND_EMAIL_INTEGRATION_44534_PASSWORD } from "react-native-dotenv";
const twilioSMSandEmail = axios.create({
  baseURL: "https://api.twilio.com",
  auth: {
    username: CONNECTOR_TWILIO_SMS_AND_EMAIL_INTEGRATION_44534_USERNAME,
    password: CONNECTOR_TWILIO_SMS_AND_EMAIL_INTEGRATION_44534_PASSWORD
  },
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function twiliosmsandemail_post_20100401_Accounts_account_sid_Keysjson_create(payload) {
  return twilioSMSandEmail.post(`/2010-04-01/Accounts/${payload.account_sid}/Keys.json`, payload);
}

function twiliosmsandemail_get_20100401_Accounts_account_sid_Keys_sidjson_read(payload) {
  return twilioSMSandEmail.get(`/2010-04-01/Accounts/${payload.account_sid}/Keys/${payload.sid}.json`);
}

export const apiService = {
  twiliosmsandemail_post_20100401_Accounts_account_sid_Keysjson_create,
  twiliosmsandemail_get_20100401_Accounts_account_sid_Keys_sidjson_read
};