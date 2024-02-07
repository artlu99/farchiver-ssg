// @dyamic-labs / sdk-react-core
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
  refId?: string
  /**
   *
   * @type {string}
   * @memberof JwtVerifiedCredential
   */
  signerRefId?: string
  /**
   *
   * @type {string}
   * @memberof JwtVerifiedCredential
   */
  email?: string
  /**
   *
   * @type {string}
   * @memberof JwtVerifiedCredential
   */
  id: string
  /**
   *
   * @type {NameServiceData}
   * @memberof JwtVerifiedCredential
   */
  nameService?: NameServiceData
  /**
   * This is used to publicly identify a verified credential in a human-friendly way. For example, this will be the email address if credential format=email.
   * @type {string}
   * @memberof JwtVerifiedCredential
   */
  publicIdentifier?: string
  /**
   *
   * @type {string}
   * @memberof JwtVerifiedCredential
   */
  walletName?: string
  /**
   *
   * @type {WalletProviderEnum}
   * @memberof JwtVerifiedCredential
   */
  walletProvider?: WalletProviderEnum
  /**
   *
   * @type {WalletProperties}
   * @memberof JwtVerifiedCredential
   */
  walletProperties?: WalletProperties
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
  oauthProvider?: ProviderEnum
  /**
   *
   * @type {string}
   * @memberof JwtVerifiedCredential
   */
  oauthUsername?: string
  /**
   *
   * @type {string}
   * @memberof JwtVerifiedCredential
   */
  oauthDisplayName?: string
  /**
   *
   * @type {string}
   * @memberof JwtVerifiedCredential
   */
  oauthAccountId?: string
  /**
   *
   * @type {Array<string>}
   * @memberof JwtVerifiedCredential
   */
  oauthAccountPhotos?: Array<string>
  /**
   *
   * @type {Array<string>}
   * @memberof JwtVerifiedCredential
   */
  oauthEmails?: Array<string>
  /**
   * This will only be provided in the responses for GET /users/{userId}.Previous user IDs that owned this verified credential and was tranfered to the current user ID.
   * @type {Array<string>}
   * @memberof JwtVerifiedCredential
   */
  previousUsers?: Array<string>
  /**
   *
   * @type {string}
   * @memberof JwtVerifiedCredential
   */
  embeddedWalletId?: string | null
}
interface NameServiceData {
  /**
   *
   * @type {string}
   * @memberof NameServiceData
   */
  avatar?: string
  /**
   *
   * @type {string}
   * @memberof NameServiceData
   */
  name?: string
}
declare enum WalletProviderEnum {
  BrowserExtension = 'browserExtension',
  CustodialService = 'custodialService',
  WalletConnect = 'walletConnect',
  QrCode = 'qrCode',
  DeepLink = 'deepLink',
  EmbeddedWallet = 'embeddedWallet',
  SmartContractWallet = 'smartContractWallet',
}
type WalletProperties = {
  /**
   *
   * @type {string}
   * @memberof WalletProperties
   */
  turnkeySubOrganizationId: string
  /**
   *
   * @type {string}
   * @memberof WalletProperties
   */
  turnkeyPrivateKeyId: string
  /**
   * Whether or not the wallet has an authenticator (passkey, api key, etc) attached to it. If false, the wallet cannot currently be accessed
   * @type {boolean}
   * @memberof WalletProperties
   */
  isAuthenticatorAttached: boolean
}
declare enum JwtVerifiedCredentialFormatEnum {
  Blockchain = 'blockchain',
  Email = 'email',
  Oauth = 'oauth',
  Passkey = 'passkey',
}
declare enum ProviderEnum {
  EmailOnly = 'emailOnly',
  MagicLink = 'magicLink',
  Apple = 'apple',
  Bitbucket = 'bitbucket',
  Discord = 'discord',
  Facebook = 'facebook',
  Github = 'github',
  Gitlab = 'gitlab',
  Google = 'google',
  Instagram = 'instagram',
  Linkedin = 'linkedin',
  Microsoft = 'microsoft',
  Twitch = 'twitch',
  Twitter = 'twitter',
  Blocto = 'blocto',
  Banxa = 'banxa',
  Dynamic = 'dynamic',
  Alchemy = 'alchemy',
  Zerodev = 'zerodev',
  Turnkey = 'turnkey',
}
