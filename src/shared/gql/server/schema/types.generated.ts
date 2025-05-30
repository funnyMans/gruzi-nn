import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type EnumResolverSignature<T, AllowedValues = any> = { [key in keyof T]?: AllowedValues };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Address = {
  __typename?: 'Address';
  city: Scalars['String']['output'];
  state: Scalars['String']['output'];
  street: Scalars['String']['output'];
  zip: Scalars['String']['output'];
};

export type AddressInput = {
  city: Scalars['String']['input'];
  state: Scalars['String']['input'];
  street: Scalars['String']['input'];
  zip: Scalars['String']['input'];
};

export type Broker = {
  __typename?: 'Broker';
  address: Address;
  associatedShipments?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  brokerId: Scalars['ID']['output'];
  contact: Contact;
  licenseNumber: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type CargoCategory =
  | 'GENERAL_GOODS'
  | 'HAZARDOUS'
  | 'MILITARY'
  | 'PERISHABLE';

export type CargoDetails = {
  __typename?: 'CargoDetails';
  cargoCategory: CargoCategory;
  costValue: Scalars['Float']['output'];
  currency: Currency;
  description: Scalars['String']['output'];
  dimensions: Dimensions;
  handlingInstructions?: Maybe<Scalars['String']['output']>;
  hazardousDetails?: Maybe<HazardousDetails>;
  isHazardous: Scalars['Boolean']['output'];
  volume: Scalars['Float']['output'];
  weight: Scalars['Float']['output'];
};

export type CargoDetailsInput = {
  cargoCategory: CargoCategory;
  costValue: Scalars['Float']['input'];
  currency: Currency;
  description: Scalars['String']['input'];
  dimensions: DimensionsInput;
  handlingInstructions?: InputMaybe<Scalars['String']['input']>;
  hazardousDetails?: InputMaybe<HazardousDetailsInput>;
  isHazardous: Scalars['Boolean']['input'];
  volume: Scalars['Float']['input'];
  weight: Scalars['Float']['input'];
};

export type Carrier = {
  __typename?: 'Carrier';
  address: Address;
  carrierId: Scalars['ID']['output'];
  companyId: Scalars['String']['output'];
  contact: Contact;
  driverIDs: Array<Scalars['ID']['output']>;
  legalForm?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  truckIDs: Array<Scalars['ID']['output']>;
  verified?: Maybe<Scalars['Boolean']['output']>;
};

export type Contact = {
  __typename?: 'Contact';
  email: Scalars['String']['output'];
  phone: Scalars['String']['output'];
};

export type ContactInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type Content = {
  __typename?: 'Content';
  definition: Scalars['String']['output'];
  term: Scalars['String']['output'];
};

export type ContentInput = {
  definition: Scalars['String']['input'];
  term: Scalars['String']['input'];
};

export type Coordinates = {
  __typename?: 'Coordinates';
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};

export type CoordinatesInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type CreateBrokerInput = {
  address: AddressInput;
  brokerId: Scalars['ID']['input'];
  contact: ContactInput;
  licenseNumber: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateCarrierInput = {
  address: AddressInput;
  carrierId: Scalars['ID']['input'];
  companyId: Scalars['String']['input'];
  contact: ContactInput;
  driverIDs: Array<Scalars['ID']['input']>;
  legalForm?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  rating?: InputMaybe<Scalars['Float']['input']>;
  truckIDs: Array<Scalars['ID']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateShipmentInput = {
  brokerId: Scalars['ID']['input'];
  cargoDetails: CargoDetailsInput;
  carrierId?: InputMaybe<Scalars['ID']['input']>;
  deliveryLocation: LocationInput;
  driverId?: InputMaybe<Scalars['ID']['input']>;
  pickupLocation: LocationInput;
  status: ShipmentStatus;
  timestamps: TimestampsInput;
  truckId?: InputMaybe<Scalars['ID']['input']>;
};

export type Currency =
  | 'EUR'
  | 'RUR'
  | 'USD';

export type Dimensions = {
  __typename?: 'Dimensions';
  height: Scalars['Float']['output'];
  length: Scalars['Float']['output'];
  width: Scalars['Float']['output'];
};

export type DimensionsInput = {
  height: Scalars['Float']['input'];
  length: Scalars['Float']['input'];
  width: Scalars['Float']['input'];
};

export type Driver = {
  __typename?: 'Driver';
  carrierId: Scalars['ID']['output'];
  contact: Contact;
  driverId: Scalars['ID']['output'];
  licenseNumber: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type FAQ = {
  __typename?: 'FAQ';
  answer: Scalars['String']['output'];
  audience?: Maybe<Scalars['String']['output']>;
  category?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  question: Scalars['String']['output'];
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type General = {
  __typename?: 'General';
  intro: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type GeneralInput = {
  intro: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type HazardousDetails = {
  __typename?: 'HazardousDetails';
  class?: Maybe<Scalars['String']['output']>;
  packingGroup?: Maybe<Scalars['String']['output']>;
  unNumber?: Maybe<Scalars['String']['output']>;
};

export type HazardousDetailsInput = {
  class?: InputMaybe<Scalars['String']['input']>;
  packingGroup?: InputMaybe<Scalars['String']['input']>;
  unNumber?: InputMaybe<Scalars['String']['input']>;
};

export type Location = {
  __typename?: 'Location';
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  state: Scalars['String']['output'];
  zip: Scalars['String']['output'];
};

export type LocationInput = {
  address: Scalars['String']['input'];
  city: Scalars['String']['input'];
  state: Scalars['String']['input'];
  zip: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addTrackingUpdate: Shipment;
  createBroker?: Maybe<Broker>;
  createCarrier?: Maybe<Carrier>;
  createPrivacyPolicy?: Maybe<PrivacyPolicy>;
  createShipment: Shipment;
  createTermsOfUse?: Maybe<TermsOfUse>;
  updateBroker?: Maybe<Broker>;
  updateCarrier?: Maybe<Carrier>;
  updatePrivacyPolicy?: Maybe<PrivacyPolicy>;
  updateShipmentStatus: Shipment;
  updateTermsOfUse?: Maybe<TermsOfUse>;
};


export type MutationaddTrackingUpdateArgs = {
  input: TrackingUpdateInput;
  shipmentId: Scalars['ID']['input'];
};


export type MutationcreateBrokerArgs = {
  input: CreateBrokerInput;
};


export type MutationcreateCarrierArgs = {
  input: CreateCarrierInput;
};


export type MutationcreatePrivacyPolicyArgs = {
  introduction: Scalars['String']['input'];
  lastUpdated: Scalars['String']['input'];
  sections: Array<PrivacyPolicySectionInput>;
};


export type MutationcreateShipmentArgs = {
  input: CreateShipmentInput;
};


export type MutationcreateTermsOfUseArgs = {
  effectiveDate: Scalars['String']['input'];
  terms: TermsInput;
};


export type MutationupdateBrokerArgs = {
  input: UpdateBrokerInput;
};


export type MutationupdateCarrierArgs = {
  input: UpdateCarrierInput;
};


export type MutationupdatePrivacyPolicyArgs = {
  id: Scalars['ID']['input'];
  introduction: Scalars['String']['input'];
  lastUpdated: Scalars['String']['input'];
  sections: Array<PrivacyPolicySectionInput>;
};


export type MutationupdateShipmentStatusArgs = {
  shipmentId: Scalars['ID']['input'];
  status: ShipmentStatus;
};


export type MutationupdateTermsOfUseArgs = {
  id: Scalars['ID']['input'];
  terms: TermsInput;
};

export type PrivacyPolicy = {
  __typename?: 'PrivacyPolicy';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  introduction: Scalars['String']['output'];
  lastUpdated: Scalars['String']['output'];
  sections: Array<PrivacyPolicySection>;
  updatedAt: Scalars['String']['output'];
};

export type PrivacyPolicySection = {
  __typename?: 'PrivacyPolicySection';
  content: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type PrivacyPolicySectionInput = {
  content: Array<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  broker?: Maybe<Broker>;
  brokers: Array<Maybe<Broker>>;
  carrier?: Maybe<Carrier>;
  carriers: Array<Carrier>;
  driver?: Maybe<Driver>;
  drivers: Array<Driver>;
  faqs?: Maybe<Array<Maybe<FAQ>>>;
  privacyPolicy?: Maybe<PrivacyPolicy>;
  shipment?: Maybe<Shipment>;
  shipments: Array<Shipment>;
  termsOfUse?: Maybe<TermsOfUse>;
  truck?: Maybe<Truck>;
  trucks: Array<Maybe<Truck>>;
};


export type QuerybrokerArgs = {
  brokerId: Scalars['ID']['input'];
};


export type QuerycarrierArgs = {
  carrierId: Scalars['ID']['input'];
};


export type QuerydriverArgs = {
  driverId: Scalars['ID']['input'];
};


export type QueryfaqsArgs = {
  audience?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryprivacyPolicyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryshipmentArgs = {
  shipmentId: Scalars['ID']['input'];
};


export type QueryshipmentsArgs = {
  status?: InputMaybe<ShipmentStatus>;
};


export type QuerytermsOfUseArgs = {
  id: Scalars['ID']['input'];
};


export type QuerytruckArgs = {
  truckId: Scalars['ID']['input'];
};

export type Section = {
  __typename?: 'Section';
  content: Array<Content>;
  title: Scalars['String']['output'];
};

export type SectionInput = {
  content: Array<ContentInput>;
  title: Scalars['String']['input'];
};

export type Shipment = {
  __typename?: 'Shipment';
  brokerId: Scalars['ID']['output'];
  cargoDetails: CargoDetails;
  deliveryLocation: Location;
  driverId: Scalars['ID']['output'];
  pickupLocation: Location;
  shipmentId: Scalars['ID']['output'];
  status: ShipmentStatus;
  timestamps: Timestamps;
  trackingUpdates: Array<Maybe<TrackingUpdate>>;
  truckId: Scalars['ID']['output'];
};

export type ShipmentStatus =
  | 'CANCELLED'
  | 'DELIVERED'
  | 'IN_TRANSIT'
  | 'SCHEDULED';

export type Terms = {
  __typename?: 'Terms';
  acknowledgement: Scalars['String']['output'];
  general: General;
  sections: Array<Section>;
};

export type TermsInput = {
  acknowledgement: Scalars['String']['input'];
  general: GeneralInput;
  sections: Array<SectionInput>;
};

export type TermsOfUse = {
  __typename?: 'TermsOfUse';
  effectiveDate: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  terms: Terms;
};

export type Timestamps = {
  __typename?: 'Timestamps';
  actualDelivery?: Maybe<Scalars['String']['output']>;
  actualPickup?: Maybe<Scalars['String']['output']>;
  scheduledDelivery: Scalars['String']['output'];
  scheduledPickup: Scalars['String']['output'];
};

export type TimestampsInput = {
  scheduledDelivery: Scalars['String']['input'];
  scheduledPickup: Scalars['String']['input'];
};

export type TrackingUpdate = {
  __typename?: 'TrackingUpdate';
  location: Coordinates;
  status: Scalars['String']['output'];
  timestamp: Scalars['String']['output'];
};

export type TrackingUpdateInput = {
  location: CoordinatesInput;
  status: Scalars['String']['input'];
  timestamp: Scalars['String']['input'];
};

export type Truck = {
  __typename?: 'Truck';
  capacity: Scalars['Float']['output'];
  carrierId: Scalars['ID']['output'];
  licensePlate: Scalars['String']['output'];
  model: Scalars['String']['output'];
  truckId: Scalars['ID']['output'];
};

export type UpdateBrokerInput = {
  address?: InputMaybe<AddressInput>;
  brokerId: Scalars['ID']['input'];
  contact?: InputMaybe<ContactInput>;
  licenseNumber?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCarrierInput = {
  address: AddressInput;
  carrierId: Scalars['ID']['input'];
  companyId: Scalars['String']['input'];
  contact: ContactInput;
  driverIDs: Array<Scalars['ID']['input']>;
  legalForm?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  rating?: InputMaybe<Scalars['Float']['input']>;
  truckIDs: Array<Scalars['ID']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Address: ResolverTypeWrapper<Address>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  AddressInput: AddressInput;
  Broker: ResolverTypeWrapper<Broker>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  CargoCategory: ResolverTypeWrapper<'HAZARDOUS' | 'MILITARY' | 'PERISHABLE' | 'GENERAL_GOODS'>;
  CargoDetails: ResolverTypeWrapper<Omit<CargoDetails, 'cargoCategory' | 'currency'> & { cargoCategory: ResolversTypes['CargoCategory'], currency: ResolversTypes['Currency'] }>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CargoDetailsInput: CargoDetailsInput;
  Carrier: ResolverTypeWrapper<Carrier>;
  Contact: ResolverTypeWrapper<Contact>;
  ContactInput: ContactInput;
  Content: ResolverTypeWrapper<Content>;
  ContentInput: ContentInput;
  Coordinates: ResolverTypeWrapper<Coordinates>;
  CoordinatesInput: CoordinatesInput;
  CreateBrokerInput: CreateBrokerInput;
  CreateCarrierInput: CreateCarrierInput;
  CreateShipmentInput: CreateShipmentInput;
  Currency: ResolverTypeWrapper<'RUR' | 'USD' | 'EUR'>;
  Dimensions: ResolverTypeWrapper<Dimensions>;
  DimensionsInput: DimensionsInput;
  Driver: ResolverTypeWrapper<Driver>;
  FAQ: ResolverTypeWrapper<FAQ>;
  General: ResolverTypeWrapper<General>;
  GeneralInput: GeneralInput;
  HazardousDetails: ResolverTypeWrapper<HazardousDetails>;
  HazardousDetailsInput: HazardousDetailsInput;
  Location: ResolverTypeWrapper<Location>;
  LocationInput: LocationInput;
  Mutation: ResolverTypeWrapper<{}>;
  PrivacyPolicy: ResolverTypeWrapper<PrivacyPolicy>;
  PrivacyPolicySection: ResolverTypeWrapper<PrivacyPolicySection>;
  PrivacyPolicySectionInput: PrivacyPolicySectionInput;
  Query: ResolverTypeWrapper<{}>;
  Section: ResolverTypeWrapper<Section>;
  SectionInput: SectionInput;
  Shipment: ResolverTypeWrapper<Omit<Shipment, 'cargoDetails' | 'status'> & { cargoDetails: ResolversTypes['CargoDetails'], status: ResolversTypes['ShipmentStatus'] }>;
  ShipmentStatus: ResolverTypeWrapper<'SCHEDULED' | 'IN_TRANSIT' | 'DELIVERED' | 'CANCELLED'>;
  Terms: ResolverTypeWrapper<Terms>;
  TermsInput: TermsInput;
  TermsOfUse: ResolverTypeWrapper<TermsOfUse>;
  Timestamps: ResolverTypeWrapper<Timestamps>;
  TimestampsInput: TimestampsInput;
  TrackingUpdate: ResolverTypeWrapper<TrackingUpdate>;
  TrackingUpdateInput: TrackingUpdateInput;
  Truck: ResolverTypeWrapper<Truck>;
  UpdateBrokerInput: UpdateBrokerInput;
  UpdateCarrierInput: UpdateCarrierInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Address: Address;
  String: Scalars['String']['output'];
  AddressInput: AddressInput;
  Broker: Broker;
  ID: Scalars['ID']['output'];
  CargoDetails: CargoDetails;
  Float: Scalars['Float']['output'];
  Boolean: Scalars['Boolean']['output'];
  CargoDetailsInput: CargoDetailsInput;
  Carrier: Carrier;
  Contact: Contact;
  ContactInput: ContactInput;
  Content: Content;
  ContentInput: ContentInput;
  Coordinates: Coordinates;
  CoordinatesInput: CoordinatesInput;
  CreateBrokerInput: CreateBrokerInput;
  CreateCarrierInput: CreateCarrierInput;
  CreateShipmentInput: CreateShipmentInput;
  Dimensions: Dimensions;
  DimensionsInput: DimensionsInput;
  Driver: Driver;
  FAQ: FAQ;
  General: General;
  GeneralInput: GeneralInput;
  HazardousDetails: HazardousDetails;
  HazardousDetailsInput: HazardousDetailsInput;
  Location: Location;
  LocationInput: LocationInput;
  Mutation: {};
  PrivacyPolicy: PrivacyPolicy;
  PrivacyPolicySection: PrivacyPolicySection;
  PrivacyPolicySectionInput: PrivacyPolicySectionInput;
  Query: {};
  Section: Section;
  SectionInput: SectionInput;
  Shipment: Omit<Shipment, 'cargoDetails'> & { cargoDetails: ResolversParentTypes['CargoDetails'] };
  Terms: Terms;
  TermsInput: TermsInput;
  TermsOfUse: TermsOfUse;
  Timestamps: Timestamps;
  TimestampsInput: TimestampsInput;
  TrackingUpdate: TrackingUpdate;
  TrackingUpdateInput: TrackingUpdateInput;
  Truck: Truck;
  UpdateBrokerInput: UpdateBrokerInput;
  UpdateCarrierInput: UpdateCarrierInput;
};

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zip?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BrokerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Broker'] = ResolversParentTypes['Broker']> = {
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  associatedShipments?: Resolver<Maybe<Array<Maybe<ResolversTypes['ID']>>>, ParentType, ContextType>;
  brokerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contact?: Resolver<ResolversTypes['Contact'], ParentType, ContextType>;
  licenseNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CargoCategoryResolvers = EnumResolverSignature<{ GENERAL_GOODS?: any, HAZARDOUS?: any, MILITARY?: any, PERISHABLE?: any }, ResolversTypes['CargoCategory']>;

export type CargoDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['CargoDetails'] = ResolversParentTypes['CargoDetails']> = {
  cargoCategory?: Resolver<ResolversTypes['CargoCategory'], ParentType, ContextType>;
  costValue?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['Currency'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dimensions?: Resolver<ResolversTypes['Dimensions'], ParentType, ContextType>;
  handlingInstructions?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hazardousDetails?: Resolver<Maybe<ResolversTypes['HazardousDetails']>, ParentType, ContextType>;
  isHazardous?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CarrierResolvers<ContextType = any, ParentType extends ResolversParentTypes['Carrier'] = ResolversParentTypes['Carrier']> = {
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  carrierId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  companyId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contact?: Resolver<ResolversTypes['Contact'], ParentType, ContextType>;
  driverIDs?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  legalForm?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  truckIDs?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  verified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContactResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contact'] = ResolversParentTypes['Contact']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Content'] = ResolversParentTypes['Content']> = {
  definition?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  term?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CoordinatesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Coordinates'] = ResolversParentTypes['Coordinates']> = {
  latitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrencyResolvers = EnumResolverSignature<{ EUR?: any, RUR?: any, USD?: any }, ResolversTypes['Currency']>;

export type DimensionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Dimensions'] = ResolversParentTypes['Dimensions']> = {
  height?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  length?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DriverResolvers<ContextType = any, ParentType extends ResolversParentTypes['Driver'] = ResolversParentTypes['Driver']> = {
  carrierId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contact?: Resolver<ResolversTypes['Contact'], ParentType, ContextType>;
  driverId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  licenseNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FAQResolvers<ContextType = any, ParentType extends ResolversParentTypes['FAQ'] = ResolversParentTypes['FAQ']> = {
  answer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  audience?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  question?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GeneralResolvers<ContextType = any, ParentType extends ResolversParentTypes['General'] = ResolversParentTypes['General']> = {
  intro?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HazardousDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['HazardousDetails'] = ResolversParentTypes['HazardousDetails']> = {
  class?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  packingGroup?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zip?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addTrackingUpdate?: Resolver<ResolversTypes['Shipment'], ParentType, ContextType, RequireFields<MutationaddTrackingUpdateArgs, 'input' | 'shipmentId'>>;
  createBroker?: Resolver<Maybe<ResolversTypes['Broker']>, ParentType, ContextType, RequireFields<MutationcreateBrokerArgs, 'input'>>;
  createCarrier?: Resolver<Maybe<ResolversTypes['Carrier']>, ParentType, ContextType, RequireFields<MutationcreateCarrierArgs, 'input'>>;
  createPrivacyPolicy?: Resolver<Maybe<ResolversTypes['PrivacyPolicy']>, ParentType, ContextType, RequireFields<MutationcreatePrivacyPolicyArgs, 'introduction' | 'lastUpdated' | 'sections'>>;
  createShipment?: Resolver<ResolversTypes['Shipment'], ParentType, ContextType, RequireFields<MutationcreateShipmentArgs, 'input'>>;
  createTermsOfUse?: Resolver<Maybe<ResolversTypes['TermsOfUse']>, ParentType, ContextType, RequireFields<MutationcreateTermsOfUseArgs, 'effectiveDate' | 'terms'>>;
  updateBroker?: Resolver<Maybe<ResolversTypes['Broker']>, ParentType, ContextType, RequireFields<MutationupdateBrokerArgs, 'input'>>;
  updateCarrier?: Resolver<Maybe<ResolversTypes['Carrier']>, ParentType, ContextType, RequireFields<MutationupdateCarrierArgs, 'input'>>;
  updatePrivacyPolicy?: Resolver<Maybe<ResolversTypes['PrivacyPolicy']>, ParentType, ContextType, RequireFields<MutationupdatePrivacyPolicyArgs, 'id' | 'introduction' | 'lastUpdated' | 'sections'>>;
  updateShipmentStatus?: Resolver<ResolversTypes['Shipment'], ParentType, ContextType, RequireFields<MutationupdateShipmentStatusArgs, 'shipmentId' | 'status'>>;
  updateTermsOfUse?: Resolver<Maybe<ResolversTypes['TermsOfUse']>, ParentType, ContextType, RequireFields<MutationupdateTermsOfUseArgs, 'id' | 'terms'>>;
};

export type PrivacyPolicyResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrivacyPolicy'] = ResolversParentTypes['PrivacyPolicy']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  introduction?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastUpdated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sections?: Resolver<Array<ResolversTypes['PrivacyPolicySection']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrivacyPolicySectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PrivacyPolicySection'] = ResolversParentTypes['PrivacyPolicySection']> = {
  content?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  broker?: Resolver<Maybe<ResolversTypes['Broker']>, ParentType, ContextType, RequireFields<QuerybrokerArgs, 'brokerId'>>;
  brokers?: Resolver<Array<Maybe<ResolversTypes['Broker']>>, ParentType, ContextType>;
  carrier?: Resolver<Maybe<ResolversTypes['Carrier']>, ParentType, ContextType, RequireFields<QuerycarrierArgs, 'carrierId'>>;
  carriers?: Resolver<Array<ResolversTypes['Carrier']>, ParentType, ContextType>;
  driver?: Resolver<Maybe<ResolversTypes['Driver']>, ParentType, ContextType, RequireFields<QuerydriverArgs, 'driverId'>>;
  drivers?: Resolver<Array<ResolversTypes['Driver']>, ParentType, ContextType>;
  faqs?: Resolver<Maybe<Array<Maybe<ResolversTypes['FAQ']>>>, ParentType, ContextType, Partial<QueryfaqsArgs>>;
  privacyPolicy?: Resolver<Maybe<ResolversTypes['PrivacyPolicy']>, ParentType, ContextType, RequireFields<QueryprivacyPolicyArgs, 'id'>>;
  shipment?: Resolver<Maybe<ResolversTypes['Shipment']>, ParentType, ContextType, RequireFields<QueryshipmentArgs, 'shipmentId'>>;
  shipments?: Resolver<Array<ResolversTypes['Shipment']>, ParentType, ContextType, Partial<QueryshipmentsArgs>>;
  termsOfUse?: Resolver<Maybe<ResolversTypes['TermsOfUse']>, ParentType, ContextType, RequireFields<QuerytermsOfUseArgs, 'id'>>;
  truck?: Resolver<Maybe<ResolversTypes['Truck']>, ParentType, ContextType, RequireFields<QuerytruckArgs, 'truckId'>>;
  trucks?: Resolver<Array<Maybe<ResolversTypes['Truck']>>, ParentType, ContextType>;
};

export type SectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Section'] = ResolversParentTypes['Section']> = {
  content?: Resolver<Array<ResolversTypes['Content']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShipmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Shipment'] = ResolversParentTypes['Shipment']> = {
  brokerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  cargoDetails?: Resolver<ResolversTypes['CargoDetails'], ParentType, ContextType>;
  deliveryLocation?: Resolver<ResolversTypes['Location'], ParentType, ContextType>;
  driverId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pickupLocation?: Resolver<ResolversTypes['Location'], ParentType, ContextType>;
  shipmentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ShipmentStatus'], ParentType, ContextType>;
  timestamps?: Resolver<ResolversTypes['Timestamps'], ParentType, ContextType>;
  trackingUpdates?: Resolver<Array<Maybe<ResolversTypes['TrackingUpdate']>>, ParentType, ContextType>;
  truckId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShipmentStatusResolvers = EnumResolverSignature<{ CANCELLED?: any, DELIVERED?: any, IN_TRANSIT?: any, SCHEDULED?: any }, ResolversTypes['ShipmentStatus']>;

export type TermsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Terms'] = ResolversParentTypes['Terms']> = {
  acknowledgement?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  general?: Resolver<ResolversTypes['General'], ParentType, ContextType>;
  sections?: Resolver<Array<ResolversTypes['Section']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TermsOfUseResolvers<ContextType = any, ParentType extends ResolversParentTypes['TermsOfUse'] = ResolversParentTypes['TermsOfUse']> = {
  effectiveDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  terms?: Resolver<ResolversTypes['Terms'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TimestampsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Timestamps'] = ResolversParentTypes['Timestamps']> = {
  actualDelivery?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  actualPickup?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scheduledDelivery?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  scheduledPickup?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TrackingUpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['TrackingUpdate'] = ResolversParentTypes['TrackingUpdate']> = {
  location?: Resolver<ResolversTypes['Coordinates'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TruckResolvers<ContextType = any, ParentType extends ResolversParentTypes['Truck'] = ResolversParentTypes['Truck']> = {
  capacity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  carrierId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  licensePlate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  model?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  truckId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Address?: AddressResolvers<ContextType>;
  Broker?: BrokerResolvers<ContextType>;
  CargoCategory?: CargoCategoryResolvers;
  CargoDetails?: CargoDetailsResolvers<ContextType>;
  Carrier?: CarrierResolvers<ContextType>;
  Contact?: ContactResolvers<ContextType>;
  Content?: ContentResolvers<ContextType>;
  Coordinates?: CoordinatesResolvers<ContextType>;
  Currency?: CurrencyResolvers;
  Dimensions?: DimensionsResolvers<ContextType>;
  Driver?: DriverResolvers<ContextType>;
  FAQ?: FAQResolvers<ContextType>;
  General?: GeneralResolvers<ContextType>;
  HazardousDetails?: HazardousDetailsResolvers<ContextType>;
  Location?: LocationResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PrivacyPolicy?: PrivacyPolicyResolvers<ContextType>;
  PrivacyPolicySection?: PrivacyPolicySectionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Section?: SectionResolvers<ContextType>;
  Shipment?: ShipmentResolvers<ContextType>;
  ShipmentStatus?: ShipmentStatusResolvers;
  Terms?: TermsResolvers<ContextType>;
  TermsOfUse?: TermsOfUseResolvers<ContextType>;
  Timestamps?: TimestampsResolvers<ContextType>;
  TrackingUpdate?: TrackingUpdateResolvers<ContextType>;
  Truck?: TruckResolvers<ContextType>;
};

