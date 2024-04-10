// @dyamic-labs / sdk-api src models JwtVerifiedCredential.d.ts
export interface JwtVerifiedCredential {
  /**
   * Valid blockchain wallet address, must be an alphanumeric string without any special characters
   * @type {string}
   * @memberof JwtVerifiedCredential
   */
  address?: string
  /**
   *
   * @type {string}
   * @memberof JwtVerifiedCredential
   */
  chain?: string
  /**
   *
   * @type {string}
   * @memberof JwtVerifiedCredential
   */
  id: string
  /**
   *
   * @type {JwtVerifiedCredentialFormatEnum}
   * @memberof JwtVerifiedCredential
   */
  format: JwtVerifiedCredentialFormatEnum
  /**
   *
   * @type {ProviderEnum}
   * @memberof JwtVerifiedCredential
   */
  oauth_provider?: ProviderEnum
  /**
   *
   * @type {string}
   * @memberof JwtVerifiedCredential
   */
  oauth_username?: string
  /**
   *
   * @type {string}
   * @memberof JwtVerifiedCredential
   */
  oauth_account_id?: string
  /**
   *
   * @type {Array<string>}
   * @memberof JwtVerifiedCredential
   */
  oauth_account_photos?: Array<string>
}
enum JwtVerifiedCredentialFormatEnum {
  Blockchain = 'blockchain',
  Email = 'email',
  Oauth = 'oauth',
  Passkey = 'passkey',
}
declare enum ProviderEnum {
  Farcaster = "farcaster",
}
