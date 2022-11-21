import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string | number;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Time: string | number;
  Uint32: number;
  Uint64: number;
  Upload: File;
};

export type AuthenticationResponse = {
  __typename?: 'AuthenticationResponse';
  jwt: Scalars['String'];
  message: Scalars['String'];
  newAccount: Scalars['Boolean'];
  refreshToken: Scalars['String'];
  success: Scalars['Boolean'];
  user?: Maybe<User>;
  userId: Scalars['String'];
};

export type Author = {
  __typename?: 'Author';
  createdAt: Scalars['Time'];
  id: Scalars['ID'];
  image?: Maybe<Image>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['Time']>;
};

export type AuthorCollection = {
  __typename?: 'AuthorCollection';
  edges: Array<Author>;
  meta: PageInfo;
};

export type AuthorFilter = {
  createdAt?: InputMaybe<TimeRangeFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  searchTerm?: InputMaybe<Scalars['String']>;
};

export type AuthorInput = {
  image?: InputMaybe<Scalars['Upload']>;
  name: Scalars['String'];
};

export type Book = {
  __typename?: 'Book';
  approved: Scalars['Boolean'];
  authors: Array<Author>;
  bookUrl?: Maybe<Scalars['String']>;
  categories: Array<Scalars['String']>;
  createdAt: Scalars['Time'];
  description: Scalars['String'];
  format: BookFormat;
  id: Scalars['ID'];
  image?: Maybe<Image>;
  isbn: Scalars['String'];
  language: BookLanguage;
  numberOfPages: Scalars['Int'];
  price: Scalars['Float'];
  publisher: Publisher;
  releaseYear: Scalars['Int'];
  subjects: Array<Subject>;
  title: Scalars['String'];
  tracking?: Maybe<Tracking>;
  updatedAt?: Maybe<Scalars['Time']>;
  version: Scalars['String'];
};

export type BookCollection = {
  __typename?: 'BookCollection';
  edges: Array<Book>;
  meta: PageInfo;
};

export type BookFilter = {
  approved?: InputMaybe<Scalars['Boolean']>;
  favourite?: InputMaybe<Scalars['Boolean']>;
  lastRead?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  publisherId?: InputMaybe<Scalars['ID']>;
  /** You can search on the fields: title, author and isbn */
  searchTerm?: InputMaybe<Scalars['String']>;
  subjects?: InputMaybe<Array<Subject>>;
};

export enum BookFormat {
  Epub = 'epub',
  Pdf = 'pdf'
}

export enum BookLanguage {
  English = 'english',
  Other = 'other',
  Swedish = 'swedish'
}

export type BookSubjects = {
  __typename?: 'BookSubjects';
  count: Scalars['Int'];
  subject: Subject;
};

export type Bookmark = {
  __typename?: 'Bookmark';
  bookId: Scalars['ID'];
  createdAt: Scalars['Time'];
  description?: Maybe<Scalars['String']>;
  epubPage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  pdfPage?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedAt: Scalars['Time'];
  userId: Scalars['ID'];
};

export type BookmarkCollection = {
  __typename?: 'BookmarkCollection';
  edges: Array<Bookmark>;
  meta: PageInfo;
};

export type BookmarkFilter = {
  bookId?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  searchTerm?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export enum ContactFormCategory {
  Account = 'account',
  Books = 'books',
  Other = 'other',
  Subscription = 'subscription',
  Technical = 'technical'
}

export type ContactFormInput = {
  category: ContactFormCategory;
  email: Scalars['String'];
  message: Scalars['String'];
  name: Scalars['String'];
};

export type Coupon = {
  __typename?: 'Coupon';
  id: Scalars['ID'];
  promoCode: Scalars['String'];
  user: User;
};

export type CreateBookInput = {
  authors: Array<Scalars['ID']>;
  categories: Array<Scalars['String']>;
  description: Scalars['String'];
  format: BookFormat;
  image?: InputMaybe<Scalars['Upload']>;
  isbn: Scalars['String'];
  language: BookLanguage;
  numberOfPages: Scalars['Int'];
  publisherId: Scalars['ID'];
  releaseYear: Scalars['Int'];
  subjects: Array<Subject>;
  title: Scalars['String'];
  version: Scalars['String'];
};

export type CreateBookmarkInput = {
  bookId: Scalars['ID'];
  description?: InputMaybe<Scalars['String']>;
  epubPage?: InputMaybe<Scalars['String']>;
  pdfPage?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type CreateCheckoutPortalInput = {
  cancelUrl?: InputMaybe<Scalars['String']>;
  priceId: Scalars['String'];
  successUrl?: InputMaybe<Scalars['String']>;
};

export type CreateHighlightInput = {
  bookId: Scalars['ID'];
  epubPage?: InputMaybe<Scalars['String']>;
  highlight: Scalars['String'];
  pdfPage?: InputMaybe<Scalars['Int']>;
};

export type CreatePublisherInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  email: Scalars['String'];
  image?: InputMaybe<Scalars['Upload']>;
  name: Scalars['String'];
  organisationNumber: Scalars['String'];
  phoneNumber: Scalars['String'];
  postalCode: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  image?: InputMaybe<Scalars['Upload']>;
  language?: InputMaybe<Language>;
  lastName: Scalars['String'];
  mobileNumber?: InputMaybe<Scalars['String']>;
  newsletter?: InputMaybe<Scalars['Boolean']>;
  password: Scalars['String'];
  role?: InputMaybe<UserRole>;
};

export type FloatRangeFilter = {
  from?: InputMaybe<Scalars['Float']>;
  to?: InputMaybe<Scalars['Float']>;
};

export type Highlight = {
  __typename?: 'Highlight';
  bookId: Scalars['ID'];
  createdAt: Scalars['Time'];
  epubPage?: Maybe<Scalars['String']>;
  highlight: Scalars['String'];
  id: Scalars['ID'];
  pdfPage?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['Time'];
  userId: Scalars['ID'];
};

export type HighlightCollection = {
  __typename?: 'HighlightCollection';
  edges: Array<Highlight>;
  meta: PageInfo;
};

export type HighlightFilter = {
  bookId?: InputMaybe<Scalars['ID']>;
  epubPage?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  pdfPage?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type Image = {
  __typename?: 'Image';
  contentType: Scalars['String'];
  createdAt: Scalars['Time'];
  filename: Scalars['String'];
  height: Scalars['Uint32'];
  id: Scalars['ID'];
  originalName: Scalars['String'];
  sizeInBytes: Scalars['Uint64'];
  uri: Scalars['String'];
  width: Scalars['Uint32'];
};

export type ImageCollection = {
  __typename?: 'ImageCollection';
  edges: Array<Image>;
  meta: PageInfo;
};

export type ImageFilter = {
  limit?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type ImageUpdate = {
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['Upload']>;
};

export type IntRangeFilter = {
  from?: InputMaybe<Scalars['Int']>;
  to?: InputMaybe<Scalars['Int']>;
};

export type JoinReason = {
  __typename?: 'JoinReason';
  id: Scalars['ID'];
  occupation: JoinReasonOccupation;
  school?: Maybe<School>;
  subject?: Maybe<Subject>;
};

export type JoinReasonInput = {
  occupation: JoinReasonOccupation;
  school?: InputMaybe<School>;
  subject?: InputMaybe<Subject>;
};

export enum JoinReasonOccupation {
  PersonalInterest = 'personal_interest',
  Studies = 'studies',
  Work = 'work'
}

export enum Language {
  English = 'english',
  Swedish = 'swedish'
}

export type MissedSearch = {
  __typename?: 'MissedSearch';
  rows: Scalars['Int'];
  searchTerm: Scalars['String'];
  user?: Maybe<User>;
};

export type MissedSearchCollection = {
  __typename?: 'MissedSearchCollection';
  edges: Array<MissedSearch>;
  meta: PageInfo;
};

export type MissedSearchFilter = {
  createdAt?: InputMaybe<TimeRangeFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  searchTerm?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** addSignupReason: adds signup reson to the current user */
  addSignupReason: User;
  /** createAuthor, creates author from input */
  createAuthor?: Maybe<Author>;
  /** createBook, create a new book */
  createBook?: Maybe<Book>;
  /** createBookmark, create a new bookmark */
  createBookmark?: Maybe<Bookmark>;
  /** createHighlight, create a new highlight */
  createHighlight?: Maybe<Highlight>;
  /** createPublisher, create a new publisher */
  createPublisher?: Maybe<Publisher>;
  /**
   * createStripeCustomerPortal, returns a session id for you to create a stripe checkout porta
   * if a user has a subscription an error will be returned, use createStripeCustomerPortal instead
   */
  createStripeCheckoutPortal?: Maybe<Scalars['String']>;
  /** createStripeCustomerPortal, returns a url to navigate to the stripe customer portal */
  createStripeCustomerPortal?: Maybe<Scalars['String']>;
  /** createUser, create a new user */
  createUser: AuthenticationResponse;
  /** deleteAuthor, deletes author by id */
  deleteAuthor: NoContent;
  /** deleteBook, removes an existing book */
  deleteBook: NoContent;
  /** deleteBookmark, removes an existing bookmark */
  deleteBookmark: NoContent;
  /** deleteHighlight, removes an existing highlight */
  deleteHighlight: NoContent;
  /** deletePublisher, removes an existing publisher */
  deletePublisher: NoContent;
  /** deleteUser, removes a user in the system */
  deleteUser: NoContent;
  /** exportBooksCSV, creates and saves csv file for download of all the books within the filter, returning the url for that file */
  exportBooksCSV?: Maybe<Scalars['String']>;
  /** exportCSV, creates and saves csv file for download, returning the url for that file */
  exportCSV?: Maybe<Scalars['String']>;
  /** exportPacktSalesCSV, creates a report from a date and to a date, marking it as fixed */
  exportPacktSalesCSV?: Maybe<Scalars['String']>;
  /** exportSearchesCSV, creates and saves csv file for download, returning the url for that file */
  exportSearchesCSV?: Maybe<Scalars['String']>;
  /** inactivateBook, sets a book as inactive */
  inactivateBook: NoContent;
  /**
   * loginApple, This endpoint is used by users which have loged in the apple and sent the apple token to backend for validation.
   * If the validation is successful the user have access to the website the jwt token
   * Apple only returns the name of the users in frontend and only in the first request
   */
  loginApple: AuthenticationResponse;
  /** loginEmail, This endpoint is used by users with a valid email and password. Get access to the website with the jwt token */
  loginEmail: AuthenticationResponse;
  /**
   * loginGoogle, This endpoint is used by users which have loged in the google and sent the google token to backend for validation.
   * If the validation is successful the user have access to the website the jwt token
   */
  loginGoogle: AuthenticationResponse;
  /** preSignup, registers email for email when service is launched, and/ or newsletter interest */
  preSignup: NoContent;
  /** reSendUserInvite, resend the activation email */
  reSendUserInvite: NoContent;
  /** refreshToken, called when jwt has expired. Param, the refresh token, returns new AuthenticationResponse */
  refreshToken: AuthenticationResponse;
  /** removePreSignup, removes signed up user */
  removePreSignup: NoContent;
  /** resendVerifyEmail, resends the users email */
  resendVerifyEmail?: Maybe<User>;
  /** resetPasswordFinalize, finilize the reset of password and returns a jwt token. */
  resetPasswordFinalize: AuthenticationResponse;
  /** resetPasswordInitiate, sends an email to the user for initiation of reset password. */
  resetPasswordInitiate: NoContent;
  /** sendContactForm, takes the arguments from contact form and emails to booksquare */
  sendContactForm: NoContent;
  /** approveBook set a  book as approved, making it searchable */
  setApproveBook?: Maybe<Book>;
  /** setFavourite, takes book id as parameter and adds as favourite in tracking */
  setFavourite: Tracking;
  /** track, adds tracking session if tracking has not been created it will create, otherwise updates last opened at, taking the book id as identifier */
  track?: Maybe<Tracking>;
  /** unregisterNewsletter, removes the user from newsletter signup */
  unregisterNewsletter: NoContent;
  /** updateAuthor, updates the author specified by id */
  updateAuthor?: Maybe<Author>;
  /** updateBook, update an existing book */
  updateBook?: Maybe<Book>;
  /** updateBookmark, update an existing bookmark */
  updateBookmark?: Maybe<Bookmark>;
  /** updateHighlight, update an existing highlight */
  updateHighlight?: Maybe<Highlight>;
  /** updatePlacement, updates tracking session page placement, taking the book id as identifier */
  updatePlacement?: Maybe<Tracking>;
  /** updatePublisher, update an existing publisher */
  updatePublisher?: Maybe<Publisher>;
  /** updateUser, update a user in the system */
  updateUser?: Maybe<User>;
  /** userChangePassword, change the password of the user */
  userChangePassword: NoContent;
  /** verifyEmail, sets user  email to verified, consuming nonce */
  verifyEmail?: Maybe<User>;
};


export type MutationAddSignupReasonArgs = {
  input: JoinReasonInput;
};


export type MutationCreateAuthorArgs = {
  input: AuthorInput;
};


export type MutationCreateBookArgs = {
  input: CreateBookInput;
};


export type MutationCreateBookmarkArgs = {
  input: CreateBookmarkInput;
};


export type MutationCreateHighlightArgs = {
  input: CreateHighlightInput;
};


export type MutationCreatePublisherArgs = {
  input: CreatePublisherInput;
};


export type MutationCreateStripeCheckoutPortalArgs = {
  input: CreateCheckoutPortalInput;
};


export type MutationCreateStripeCustomerPortalArgs = {
  returnUrl?: InputMaybe<Scalars['String']>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationDeleteAuthorArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBookArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBookmarkArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteHighlightArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePublisherArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationExportBooksCsvArgs = {
  filter?: InputMaybe<BookFilter>;
};


export type MutationExportCsvArgs = {
  filter: StatisticsFilter;
  sorting?: InputMaybe<SortOrdering>;
};


export type MutationExportPacktSalesCsvArgs = {
  from: Scalars['Time'];
  to: Scalars['Time'];
};


export type MutationExportSearchesCsvArgs = {
  filter: MissedSearchFilter;
  sorting?: InputMaybe<SortOrdering>;
};


export type MutationInactivateBookArgs = {
  id: Scalars['ID'];
};


export type MutationLoginAppleArgs = {
  appleToken: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};


export type MutationLoginEmailArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLoginGoogleArgs = {
  googleToken: Scalars['String'];
};


export type MutationPreSignupArgs = {
  input: PreSignupInput;
};


export type MutationReSendUserInviteArgs = {
  id: Scalars['ID'];
};


export type MutationRefreshTokenArgs = {
  token: Scalars['String'];
};


export type MutationRemovePreSignupArgs = {
  email: Scalars['String'];
};


export type MutationResendVerifyEmailArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordFinalizeArgs = {
  input: ResetPasswordFinalizeInput;
};


export type MutationResetPasswordInitiateArgs = {
  email: Scalars['String'];
};


export type MutationSendContactFormArgs = {
  input: ContactFormInput;
};


export type MutationSetApproveBookArgs = {
  approved: Scalars['Boolean'];
  id: Scalars['ID'];
};


export type MutationSetFavouriteArgs = {
  favourite: Scalars['Boolean'];
  id: Scalars['ID'];
};


export type MutationTrackArgs = {
  id: Scalars['ID'];
  startSession: Scalars['Boolean'];
};


export type MutationUnregisterNewsletterArgs = {
  email: Scalars['String'];
};


export type MutationUpdateAuthorArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<AuthorInput>;
};


export type MutationUpdateBookArgs = {
  id: Scalars['ID'];
  input: UpdateBookInput;
};


export type MutationUpdateBookmarkArgs = {
  id: Scalars['ID'];
  input: UpdateBookmarkInput;
};


export type MutationUpdateHighlightArgs = {
  id: Scalars['ID'];
  input: UpdateHighlightInput;
};


export type MutationUpdatePlacementArgs = {
  currentPlacementEpub?: InputMaybe<Scalars['String']>;
  currentPlacementPdf?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
};


export type MutationUpdatePublisherArgs = {
  id: Scalars['ID'];
  input: UpdatePublisherInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  input?: InputMaybe<UpdateUserInput>;
};


export type MutationUserChangePasswordArgs = {
  input: UserChangePasswordInput;
};


export type MutationVerifyEmailArgs = {
  email: Scalars['String'];
  nonce: Scalars['String'];
};

export type NoContent = {
  __typename?: 'NoContent';
  success: Scalars['Boolean'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  total: Scalars['Int'];
};

export type PreSignup = {
  __typename?: 'PreSignup';
  createdAt: Scalars['Time'];
  email: Scalars['String'];
  newsletter: Scalars['Boolean'];
};

export type PreSignupCollection = {
  __typename?: 'PreSignupCollection';
  edges: Array<PreSignup>;
  meta: PageInfo;
};

export type PreSignupFilter = {
  createdAt?: InputMaybe<TimeRangeFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  newsletter?: InputMaybe<Scalars['Boolean']>;
  offset?: InputMaybe<Scalars['Int']>;
  searchTerm?: InputMaybe<Scalars['String']>;
};

export type PreSignupInput = {
  email: Scalars['String'];
  newsletter: Scalars['Boolean'];
};

export type Price = {
  __typename?: 'Price';
  active: Scalars['Boolean'];
  billingScheme: Scalars['String'];
  currency: Scalars['String'];
  id: Scalars['String'];
  interval: Scalars['String'];
  intervalCount: Scalars['Int'];
  unitAmountDecimal?: Maybe<Scalars['Float']>;
};

export type Product = {
  __typename?: 'Product';
  active: Scalars['Boolean'];
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  prices: Array<Price>;
  url?: Maybe<Scalars['String']>;
};

export type Publisher = {
  __typename?: 'Publisher';
  address: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  createdAt: Scalars['Time'];
  deletedAt?: Maybe<Scalars['Time']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<Image>;
  name: Scalars['String'];
  organisationNumber: Scalars['String'];
  phoneNumber: Scalars['String'];
  postalCode: Scalars['String'];
  updatedAt: Scalars['Time'];
};

export type PublisherCollection = {
  __typename?: 'PublisherCollection';
  edges: Array<Publisher>;
  meta: PageInfo;
};

export type PublisherFilter = {
  approved?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  searchTerm?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** author returns the author by its id */
  author?: Maybe<Author>;
  /** author returns the authors adjusted from filter */
  authors: AuthorCollection;
  book?: Maybe<Book>;
  bookIsbn?: Maybe<Book>;
  bookUrl?: Maybe<Book>;
  /** bookmark returns a specific bookmarks */
  bookmark?: Maybe<Bookmark>;
  /**
   * bookmarks returns a list of bookmarks, if the user isn't an admin
   * the returned bookmarks will be filtered on the current user
   */
  bookmarks: BookmarkCollection;
  books: BookCollection;
  /** highlight returns a specific highlight */
  highlight?: Maybe<Highlight>;
  /**
   * highlights returns a list of highlights, if the user isn't an admin
   * the returned highlights will be filtered on the current user
   */
  highlights: HighlightCollection;
  me?: Maybe<User>;
  /** missedSearches, returns a list of searches that got no hits */
  missedSearches: MissedSearchCollection;
  /** preSignups, returns a list of users that has signed up for email before release */
  preSignups: PreSignupCollection;
  products: Array<Product>;
  publisher?: Maybe<Publisher>;
  publishers: PublisherCollection;
  referral?: Maybe<Referral>;
  referrals: ReferralCollection;
  /**
   * statistics, returns books and number of times read, and the sum earnings per book.
   * For sorting on mediatedIncome, use field share_points, and for total use period_points
   */
  statistics: StatisticsCollection;
  subjects: Array<BookSubjects>;
  /** tracking, returns a tracking by it's id */
  tracking?: Maybe<Tracking>;
  /** trackings, returns a list of tracking */
  trackings: TrackingCollection;
  user?: Maybe<User>;
  /** userCoupon return the current users coupon for sharing */
  userCoupon?: Maybe<Coupon>;
  users: UserCollection;
};


export type QueryAuthorArgs = {
  id: Scalars['ID'];
};


export type QueryAuthorsArgs = {
  filter?: InputMaybe<AuthorFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryBookArgs = {
  id: Scalars['ID'];
};


export type QueryBookIsbnArgs = {
  isbn: Scalars['String'];
};


export type QueryBookUrlArgs = {
  checksum: Scalars['String'];
  id: Scalars['ID'];
};


export type QueryBookmarkArgs = {
  id: Scalars['ID'];
};


export type QueryBookmarksArgs = {
  filter?: InputMaybe<BookmarkFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryBooksArgs = {
  filter?: InputMaybe<BookFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryHighlightArgs = {
  id: Scalars['ID'];
};


export type QueryHighlightsArgs = {
  filter?: InputMaybe<HighlightFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryMissedSearchesArgs = {
  filter: MissedSearchFilter;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryPreSignupsArgs = {
  filter?: InputMaybe<PreSignupFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryPublisherArgs = {
  id: Scalars['ID'];
};


export type QueryPublishersArgs = {
  filter?: InputMaybe<PublisherFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryReferralArgs = {
  id: Scalars['ID'];
};


export type QueryReferralsArgs = {
  filter?: InputMaybe<ReferralFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryStatisticsArgs = {
  filter: StatisticsFilter;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryTrackingArgs = {
  bookId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type QueryTrackingsArgs = {
  filter?: InputMaybe<TrackingFilter>;
  sorting?: InputMaybe<SortOrdering>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  sorting?: InputMaybe<SortOrdering>;
};

export type Referral = {
  __typename?: 'Referral';
  coupon: Coupon;
  createdAt: Scalars['Time'];
  id: Scalars['ID'];
  receiver: User;
  rewarded: Scalars['Boolean'];
  updatedAt: Scalars['Time'];
};

export type ReferralCollection = {
  __typename?: 'ReferralCollection';
  edges: Array<Referral>;
  meta: PageInfo;
};

export type ReferralFilter = {
  CreatedAt?: InputMaybe<TimeRangeFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  receiver?: InputMaybe<Scalars['ID']>;
  sender?: InputMaybe<Scalars['ID']>;
  used?: InputMaybe<Scalars['Boolean']>;
};

export type ResetPasswordFinalizeInput = {
  email: Scalars['String'];
  nonce: Scalars['String'];
  password: Scalars['String'];
};

export enum School {
  BeckmansDesignhogskola = 'beckmans_designhogskola',
  BlekingeTekniskaHogskola = 'blekinge_tekniska_hogskola',
  BrunnsviksFolkhogskola = 'brunnsviks_folkhogskola',
  ChalmersTekniskaHogskola = 'chalmers_tekniska_hogskola',
  EnskildaHogskolanStockholm = 'enskilda_hogskolan_stockholm',
  Ericastiftelsen = 'ericastiftelsen',
  ErstaSkondalBrackeHogskola = 'ersta_skondal_bracke_hogskola',
  Forsvarshogskolan = 'forsvarshogskolan',
  GammelkroppaSkogsskola = 'gammelkroppa_skogsskola',
  GoteborgsUniversitet = 'goteborgs_universitet',
  GymnastikOchIdrottshogskolan = 'gymnastik_och_idrottshogskolan',
  HandelshogskolanIStockholm = 'handelshogskolan_i_stockholm',
  HogskolanDalarna = 'hogskolan_dalarna',
  HogskolanEvidens = 'hogskolan_evidens',
  HogskolanIBoras = 'hogskolan_i_boras',
  HogskolanIGavle = 'hogskolan_i_gavle',
  HogskolanIHalmstad = 'hogskolan_i_halmstad',
  HogskolanISkovde = 'hogskolan_i_skovde',
  HogskolanKristianstad = 'hogskolan_kristianstad',
  HogskolanVast = 'hogskolan_vast',
  JohannelundsTeologiskaHogskola = 'johannelunds_teologiska_hogskola',
  KarlstadsUniversitet = 'karlstads_universitet',
  KarolinskaInstitutet = 'karolinska_institutet',
  Konstfack = 'konstfack',
  KunglKonsthogskolan = 'kungl_konsthogskolan',
  KunglMusikhogskolanIStockholm = 'kungl_musikhogskolan_i_stockholm',
  KunglTekniskaHogskolan = 'kungl_tekniska_hogskolan',
  LinkopingsUniversitet = 'linkopings_universitet',
  Linneuniversitetet = 'linneuniversitetet',
  LuleaTekniskaUniversitet = 'lulea_tekniska_universitet',
  LundsUniversitet = 'lunds_universitet',
  MalardalensHogskola = 'malardalens_hogskola',
  MalmoUniversitet = 'malmo_universitet',
  Mittuniversitetet = 'mittuniversitetet',
  Newmaninstitutet = 'newmaninstitutet',
  OrebroTeologiskaHogskola = 'orebro_teologiska_hogskola',
  OrebroUniversitet = 'orebro_universitet',
  Other = 'other',
  RodaKorsetsHogskola = 'roda_korsets_hogskola',
  SkandinaviensAkademiForPsykoterapiutveckling = 'skandinaviens_akademi_for_psykoterapiutveckling',
  SodertornsHogskola = 'sodertorns_hogskola',
  SophiahemmetHogskola = 'sophiahemmet_hogskola',
  StiftelsenHogskolanIJonkoping = 'stiftelsen_hogskolan_i_jonkoping',
  StockholmsKonstnarligaHogskola = 'stockholms_konstnarliga_hogskola',
  StockholmsMusikpedagogiskaInstitut = 'stockholms_musikpedagogiska_institut',
  StockholmsUniversitet = 'stockholms_universitet',
  SvenskaInstitutetForKognitivPsykoterapi = 'svenska_institutet_for_kognitiv_psykoterapi',
  SverigesLantbruksuniversitet = 'sveriges_lantbruksuniversitet',
  UmeaUniversitet = 'umea_universitet',
  UppsalaUniversitet = 'uppsala_universitet'
}

export type SortOrdering = {
  sorting?: InputMaybe<Array<SortOrderingInput>>;
};

export type SortOrderingInput = {
  direction: Scalars['String'];
  field: Scalars['String'];
};

export type Statistics = {
  __typename?: 'Statistics';
  book: Book;
  mediatedIncome: Scalars['Float'];
  rows: Scalars['Int'];
  totalIncome: Scalars['Float'];
};

export type StatisticsCollection = {
  __typename?: 'StatisticsCollection';
  edges: Array<Statistics>;
  meta: PageInfo;
  mrr: Scalars['Float'];
};

export type StatisticsFilter = {
  bookId?: InputMaybe<Scalars['ID']>;
  interval?: InputMaybe<TimeRangeFilter>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  publisherIds?: InputMaybe<Array<Scalars['ID']>>;
  searchTerm?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type StripeSubscription = {
  __typename?: 'StripeSubscription';
  PaidAt?: Maybe<Scalars['Time']>;
  amount?: Maybe<Scalars['Int']>;
  cancelAtPeriodEnd: Scalars['Boolean'];
  createdAt: Scalars['Time'];
  currency?: Maybe<Scalars['String']>;
  currentPeriodEnd?: Maybe<Scalars['Time']>;
  customerId: Scalars['String'];
  id: Scalars['ID'];
  interval?: Maybe<Scalars['Int']>;
  plan?: Maybe<Scalars['String']>;
  planBillingInterval: Scalars['String'];
  status?: Maybe<Scalars['String']>;
  trialUntil?: Maybe<Scalars['Time']>;
  updatedAt?: Maybe<Scalars['Time']>;
};

export enum Subject {
  AgricultureHorticultureForestryAndFishery = 'agriculture_horticulture_forestry_and_fishery',
  ArtsDesignAndMedia = 'arts_design_and_media',
  BusinessAdministrationAndEconomics = 'business_administration_and_economics',
  ComputerScienceAndEngineering = 'computer_science_and_engineering',
  EducationEducationalSciencesDidactics = 'education_educational_sciences_didactics',
  HealthAndMedicalCare = 'health_and_medical_care',
  Humanities = 'humanities',
  JournalismCommunicationAndInformation = 'journalism_communication_and_information',
  Languages = 'languages',
  LawAndLegalStudies = 'law_and_legal_studies',
  MaterialsConstructionAndManufactoring = 'materials_construction_and_manufactoring',
  Mathematics = 'mathematics',
  NaturalScience = 'natural_science',
  Other = 'other',
  ReligiousStudies = 'religious_studies',
  SocialScienceAndBehaviouralScience = 'social_science_and_behavioural_science',
  SocialWorkAndWelfare = 'social_work_and_welfare',
  Technology = 'technology',
  VeterinaryMedicineAndNursing = 'veterinary_medicine_and_nursing'
}

export type TimeRangeFilter = {
  from: Scalars['Time'];
  to: Scalars['Time'];
};

export type Tracking = {
  __typename?: 'Tracking';
  bookmarkedAt?: Maybe<Scalars['Time']>;
  createdAt: Scalars['Time'];
  currentPlacementEpub?: Maybe<Scalars['String']>;
  currentPlacementPdf?: Maybe<Scalars['Int']>;
  favourite: Scalars['Boolean'];
  finishedAt?: Maybe<Scalars['Time']>;
  id: Scalars['String'];
  readAtLeastOneMin: Scalars['Boolean'];
  totalDuration: Scalars['Float'];
  updatedAt?: Maybe<Scalars['Time']>;
};

export type TrackingCollection = {
  __typename?: 'TrackingCollection';
  edges: Array<Tracking>;
  meta: PageInfo;
};

export type TrackingFilter = {
  bookId?: InputMaybe<Scalars['ID']>;
  bookTitle?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<TimeRangeFilter>;
  favourite?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  publisherId?: InputMaybe<Scalars['ID']>;
  updatedAt?: InputMaybe<TimeRangeFilter>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type UpdateBookInput = {
  authors: Array<Scalars['ID']>;
  categories: Array<Scalars['String']>;
  description: Scalars['String'];
  format: BookFormat;
  image?: InputMaybe<Scalars['Upload']>;
  isbn: Scalars['String'];
  language: BookLanguage;
  numberOfPages: Scalars['Int'];
  publisherId: Scalars['ID'];
  releaseYear: Scalars['Int'];
  subjects: Array<Subject>;
  title: Scalars['String'];
  version: Scalars['String'];
};

export type UpdateBookmarkInput = {
  bookId: Scalars['ID'];
  description?: InputMaybe<Scalars['String']>;
  epubPage?: InputMaybe<Scalars['String']>;
  pdfPage?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type UpdateHighlightInput = {
  bookId: Scalars['ID'];
  epubPage?: InputMaybe<Scalars['String']>;
  highlight: Scalars['String'];
  pdfPage?: InputMaybe<Scalars['Int']>;
};

export type UpdatePublisherInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  email: Scalars['String'];
  image?: InputMaybe<Scalars['Upload']>;
  name: Scalars['String'];
  organisationNumber: Scalars['String'];
  phoneNumber: Scalars['String'];
  postalCode: Scalars['String'];
};

export type UpdateUserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  image?: InputMaybe<Scalars['Upload']>;
  language?: InputMaybe<Language>;
  lastName: Scalars['String'];
  mobileNumber?: InputMaybe<Scalars['String']>;
  newsletter?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<UserRole>;
};

export type User = {
  __typename?: 'User';
  blocked: Scalars['Boolean'];
  createdAt: Scalars['Time'];
  deletedAt?: Maybe<Scalars['Time']>;
  email: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<Image>;
  joinReason?: Maybe<JoinReason>;
  language?: Maybe<Language>;
  lastName: Scalars['String'];
  mobileNumber?: Maybe<Scalars['String']>;
  newsletter?: Maybe<Scalars['Boolean']>;
  role: UserRole;
  signupReason: Scalars['Boolean'];
  subscription?: Maybe<StripeSubscription>;
  updatedAt: Scalars['Time'];
};

export type UserChangePasswordInput = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type UserCollection = {
  __typename?: 'UserCollection';
  edges: Array<User>;
  meta: PageInfo;
};

export type UserFilter = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<TimeRangeFilter>;
  deleted?: InputMaybe<Scalars['Boolean']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  roles?: InputMaybe<Array<UserRole>>;
  searchTerm?: InputMaybe<Scalars['String']>;
};

export enum UserRole {
  Admin = 'admin',
  User = 'user'
}

export type UsersQueryVariables = Exact<{
  filter?: InputMaybe<UserFilter>;
  sorting?: InputMaybe<SortOrdering>;
}>;


export type UsersQuery = { __typename?: 'Query', users: { __typename?: 'UserCollection', edges: Array<{ __typename?: 'User', id: string | number, firstName: string, email: string, lastName: string, createdAt: string | number }>, meta: { __typename?: 'PageInfo', limit: number, offset: number, total: number } } };

export type RefreshTokenMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'AuthenticationResponse', jwt: string, refreshToken: string } };

export type LoginEmailMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginEmailMutation = { __typename?: 'Mutation', loginEmail: { __typename?: 'AuthenticationResponse', jwt: string, refreshToken: string, userId: string, message: string, success: boolean, newAccount: boolean, user?: { __typename?: 'User', id: string | number, firstName: string, lastName: string, email: string, mobileNumber?: string | null, role: UserRole, blocked: boolean, emailVerified: boolean, signupReason: boolean, newsletter?: boolean | null, language?: Language | null, createdAt: string | number, updatedAt: string | number, deletedAt?: string | number | null, image?: { __typename?: 'Image', id: string | number, uri: string, width: number, height: number, sizeInBytes: number, contentType: string, filename: string, originalName: string, createdAt: string | number } | null, subscription?: { __typename?: 'StripeSubscription', id: string | number, customerId: string, plan?: string | null, status?: string | null, PaidAt?: string | number | null, currentPeriodEnd?: string | number | null, cancelAtPeriodEnd: boolean, planBillingInterval: string, currency?: string | null, interval?: number | null, amount?: number | null, createdAt: string | number, updatedAt?: string | number | null, trialUntil?: string | number | null } | null, joinReason?: { __typename?: 'JoinReason', id: string | number, occupation: JoinReasonOccupation, school?: School | null, subject?: Subject | null } | null } | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string | number, firstName: string, lastName: string, email: string, mobileNumber?: string | null, role: UserRole, blocked: boolean, emailVerified: boolean, signupReason: boolean, newsletter?: boolean | null, language?: Language | null, createdAt: string | number, updatedAt: string | number, deletedAt?: string | number | null, image?: { __typename?: 'Image', id: string | number, uri: string, width: number, height: number, sizeInBytes: number, contentType: string, filename: string, originalName: string, createdAt: string | number } | null, subscription?: { __typename?: 'StripeSubscription', id: string | number, customerId: string, plan?: string | null, status?: string | null, PaidAt?: string | number | null, currentPeriodEnd?: string | number | null, cancelAtPeriodEnd: boolean, planBillingInterval: string, currency?: string | null, interval?: number | null, amount?: number | null, createdAt: string | number, updatedAt?: string | number | null, trialUntil?: string | number | null } | null, joinReason?: { __typename?: 'JoinReason', id: string | number, occupation: JoinReasonOccupation, school?: School | null, subject?: Subject | null } | null } | null };


export const UsersDocument = gql`
    query Users($filter: UserFilter, $sorting: SortOrdering) {
  users(filter: $filter, sorting: $sorting) {
    edges {
      id
      firstName
      email
      lastName
      createdAt
    }
    meta {
      limit
      offset
      total
    }
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const RefreshTokenDocument = gql`
    mutation RefreshToken($token: String!) {
  refreshToken(token: $token) {
    jwt
    refreshToken
  }
}
    `;
export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const LoginEmailDocument = gql`
    mutation LoginEmail($email: String!, $password: String!) {
  loginEmail(email: $email, password: $password) {
    jwt
    refreshToken
    userId
    message
    success
    newAccount
    user {
      id
      firstName
      lastName
      email
      mobileNumber
      role
      blocked
      emailVerified
      image {
        id
        uri
        width
        height
        sizeInBytes
        contentType
        filename
        originalName
        createdAt
      }
      subscription {
        id
        customerId
        plan
        status
        PaidAt
        currentPeriodEnd
        cancelAtPeriodEnd
        planBillingInterval
        currency
        interval
        amount
        createdAt
        updatedAt
        trialUntil
      }
      signupReason
      joinReason {
        id
        occupation
        school
        subject
      }
      newsletter
      language
      createdAt
      updatedAt
      deletedAt
    }
  }
}
    `;
export type LoginEmailMutationFn = Apollo.MutationFunction<LoginEmailMutation, LoginEmailMutationVariables>;

/**
 * __useLoginEmailMutation__
 *
 * To run a mutation, you first call `useLoginEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginEmailMutation, { data, loading, error }] = useLoginEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginEmailMutation(baseOptions?: Apollo.MutationHookOptions<LoginEmailMutation, LoginEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginEmailMutation, LoginEmailMutationVariables>(LoginEmailDocument, options);
      }
export type LoginEmailMutationHookResult = ReturnType<typeof useLoginEmailMutation>;
export type LoginEmailMutationResult = Apollo.MutationResult<LoginEmailMutation>;
export type LoginEmailMutationOptions = Apollo.BaseMutationOptions<LoginEmailMutation, LoginEmailMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    firstName
    lastName
    email
    mobileNumber
    role
    blocked
    emailVerified
    image {
      id
      uri
      width
      height
      sizeInBytes
      contentType
      filename
      originalName
      createdAt
    }
    subscription {
      id
      customerId
      plan
      status
      PaidAt
      currentPeriodEnd
      cancelAtPeriodEnd
      planBillingInterval
      currency
      interval
      amount
      createdAt
      updatedAt
      trialUntil
    }
    signupReason
    joinReason {
      id
      occupation
      school
      subject
    }
    newsletter
    language
    createdAt
    updatedAt
    deletedAt
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;