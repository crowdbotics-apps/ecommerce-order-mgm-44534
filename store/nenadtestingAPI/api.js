import axios from "axios"
const nenadtestingAPI = axios.create({
  baseURL: "https://ecommerce-order-mgm-44534.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return nenadtestingAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return nenadtestingAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return nenadtestingAPI.post(`/api/v1/signup/`, payload)
}
function modules_social_auth_apple_connect_create(payload) {
  return nenadtestingAPI.post(`/modules/social-auth/apple/connect/`, payload)
}
function modules_social_auth_apple_login_create(payload) {
  return nenadtestingAPI.post(`/modules/social-auth/apple/login/`, payload)
}
function modules_social_auth_facebook_connect_create(payload) {
  return nenadtestingAPI.post(`/modules/social-auth/facebook/connect/`, payload)
}
function modules_social_auth_facebook_login_create(payload) {
  return nenadtestingAPI.post(`/modules/social-auth/facebook/login/`, payload)
}
function modules_social_auth_google_connect_create(payload) {
  return nenadtestingAPI.post(`/modules/social-auth/google/connect/`, payload)
}
function modules_social_auth_google_login_create(payload) {
  return nenadtestingAPI.post(`/modules/social-auth/google/login/`, payload)
}
function modules_social_auth_socialaccounts_list(payload) {
  return nenadtestingAPI.get(`/modules/social-auth/socialaccounts/`)
}
function modules_social_auth_socialaccounts_disconnect_create(payload) {
  return nenadtestingAPI.post(
    `/modules/social-auth/socialaccounts/${payload.id}/disconnect/`,
    payload
  )
}
function modules_two_factor_authentication_2fa_retrieve(payload) {
  return nenadtestingAPI.get(`/modules/two-factor-authentication/2fa`)
}
function modules_two_factor_authentication_2fa_create(payload) {
  return nenadtestingAPI.post(`/modules/two-factor-authentication/2fa`)
}
function modules_two_factor_authentication_twofactorauth_list(payload) {
  return nenadtestingAPI.get(
    `/modules/two-factor-authentication/twofactorauth/`
  )
}
function modules_two_factor_authentication_twofactorauth_create(payload) {
  return nenadtestingAPI.post(
    `/modules/two-factor-authentication/twofactorauth/`,
    payload
  )
}
function modules_two_factor_authentication_twofactorauth_retrieve(payload) {
  return nenadtestingAPI.get(
    `/modules/two-factor-authentication/twofactorauth/${payload.id}/`
  )
}
function modules_two_factor_authentication_twofactorauth_update(payload) {
  return nenadtestingAPI.put(
    `/modules/two-factor-authentication/twofactorauth/${payload.id}/`,
    payload
  )
}
function modules_two_factor_authentication_twofactorauth_partial_update(
  payload
) {
  return nenadtestingAPI.patch(
    `/modules/two-factor-authentication/twofactorauth/${payload.id}/`,
    payload
  )
}
function modules_two_factor_authentication_twofactorauth_destroy(payload) {
  return nenadtestingAPI.delete(
    `/modules/two-factor-authentication/twofactorauth/${payload.id}/`
  )
}
function modules_two_factor_authentication_twofactorauth_send_otp_create(
  payload
) {
  return nenadtestingAPI.post(
    `/modules/two-factor-authentication/twofactorauth/send_otp/`,
    payload
  )
}
function modules_two_factor_authentication_verify_destroy(payload) {
  return nenadtestingAPI.delete(
    `/modules/two-factor-authentication/verify/${payload.id}/`
  )
}
function rest_auth_login_create(payload) {
  return nenadtestingAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return nenadtestingAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return nenadtestingAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return nenadtestingAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return nenadtestingAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return nenadtestingAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return nenadtestingAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return nenadtestingAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return nenadtestingAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return nenadtestingAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return nenadtestingAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_social_auth_apple_connect_create,
  modules_social_auth_apple_login_create,
  modules_social_auth_facebook_connect_create,
  modules_social_auth_facebook_login_create,
  modules_social_auth_google_connect_create,
  modules_social_auth_google_login_create,
  modules_social_auth_socialaccounts_list,
  modules_social_auth_socialaccounts_disconnect_create,
  modules_two_factor_authentication_2fa_retrieve,
  modules_two_factor_authentication_2fa_create,
  modules_two_factor_authentication_twofactorauth_list,
  modules_two_factor_authentication_twofactorauth_create,
  modules_two_factor_authentication_twofactorauth_retrieve,
  modules_two_factor_authentication_twofactorauth_update,
  modules_two_factor_authentication_twofactorauth_partial_update,
  modules_two_factor_authentication_twofactorauth_destroy,
  modules_two_factor_authentication_twofactorauth_send_otp_create,
  modules_two_factor_authentication_verify_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
