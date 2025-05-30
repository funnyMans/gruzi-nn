import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
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

export enum CargoCategory {
  GeneralGoods = 'GENERAL_GOODS',
  Hazardous = 'HAZARDOUS',
  Military = 'MILITARY',
  Perishable = 'PERISHABLE'
}

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

export enum Currency {
  Eur = 'EUR',
  Rur = 'RUR',
  Usd = 'USD'
}

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

export type Faq = {
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


export type MutationAddTrackingUpdateArgs = {
  input: TrackingUpdateInput;
  shipmentId: Scalars['ID']['input'];
};


export type MutationCreateBrokerArgs = {
  input: CreateBrokerInput;
};


export type MutationCreateCarrierArgs = {
  input: CreateCarrierInput;
};


export type MutationCreatePrivacyPolicyArgs = {
  introduction: Scalars['String']['input'];
  lastUpdated: Scalars['String']['input'];
  sections: Array<PrivacyPolicySectionInput>;
};


export type MutationCreateShipmentArgs = {
  input: CreateShipmentInput;
};


export type MutationCreateTermsOfUseArgs = {
  effectiveDate: Scalars['String']['input'];
  terms: TermsInput;
};


export type MutationUpdateBrokerArgs = {
  input: UpdateBrokerInput;
};


export type MutationUpdateCarrierArgs = {
  input: UpdateCarrierInput;
};


export type MutationUpdatePrivacyPolicyArgs = {
  id: Scalars['ID']['input'];
  introduction: Scalars['String']['input'];
  lastUpdated: Scalars['String']['input'];
  sections: Array<PrivacyPolicySectionInput>;
};


export type MutationUpdateShipmentStatusArgs = {
  shipmentId: Scalars['ID']['input'];
  status: ShipmentStatus;
};


export type MutationUpdateTermsOfUseArgs = {
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
  faqs?: Maybe<Array<Maybe<Faq>>>;
  privacyPolicy?: Maybe<PrivacyPolicy>;
  shipment?: Maybe<Shipment>;
  shipments: Array<Shipment>;
  termsOfUse?: Maybe<TermsOfUse>;
  truck?: Maybe<Truck>;
  trucks: Array<Maybe<Truck>>;
};


export type QueryBrokerArgs = {
  brokerId: Scalars['ID']['input'];
};


export type QueryCarrierArgs = {
  carrierId: Scalars['ID']['input'];
};


export type QueryDriverArgs = {
  driverId: Scalars['ID']['input'];
};


export type QueryFaqsArgs = {
  audience?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPrivacyPolicyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryShipmentArgs = {
  shipmentId: Scalars['ID']['input'];
};


export type QueryShipmentsArgs = {
  status?: InputMaybe<ShipmentStatus>;
};


export type QueryTermsOfUseArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTruckArgs = {
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

export enum ShipmentStatus {
  Cancelled = 'CANCELLED',
  Delivered = 'DELIVERED',
  InTransit = 'IN_TRANSIT',
  Scheduled = 'SCHEDULED'
}

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

export type CreateBrokerMutationVariables = Exact<{
  input: CreateBrokerInput;
}>;


export type CreateBrokerMutation = { __typename?: 'Mutation', createBroker?: { __typename?: 'Broker', brokerId: string, name: string, licenseNumber: string, address: { __typename?: 'Address', street: string, city: string, state: string, zip: string }, contact: { __typename?: 'Contact', phone: string, email: string } } | null };

export type UpdateBrokerMutationVariables = Exact<{
  input: UpdateBrokerInput;
}>;


export type UpdateBrokerMutation = { __typename?: 'Mutation', updateBroker?: { __typename?: 'Broker', brokerId: string, name: string, licenseNumber: string, address: { __typename?: 'Address', street: string, city: string, state: string, zip: string }, contact: { __typename?: 'Contact', phone: string, email: string } } | null };

export type GetBrokerByIdQueryVariables = Exact<{
  brokerId: Scalars['ID']['input'];
}>;


export type GetBrokerByIdQuery = { __typename?: 'Query', broker?: { __typename?: 'Broker', brokerId: string, name: string, licenseNumber: string, associatedShipments?: Array<string | null> | null, address: { __typename?: 'Address', street: string, city: string, state: string, zip: string }, contact: { __typename?: 'Contact', phone: string, email: string } } | null };

export type GetAllBrokersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBrokersQuery = { __typename?: 'Query', brokers: Array<{ __typename?: 'Broker', brokerId: string, name: string, licenseNumber: string, contact: { __typename?: 'Contact', phone: string, email: string } } | null> };

export type CreateCarrierMutationVariables = Exact<{
  input: CreateCarrierInput;
}>;


export type CreateCarrierMutation = { __typename?: 'Mutation', createCarrier?: { __typename?: 'Carrier', carrierId: string, name: string, companyId: string, legalForm?: string | null, verified?: boolean | null, rating?: number | null, contact: { __typename?: 'Contact', phone: string, email: string }, address: { __typename?: 'Address', street: string, city: string, state: string, zip: string } } | null };

export type UpdateCarrierMutationVariables = Exact<{
  input: UpdateCarrierInput;
}>;


export type UpdateCarrierMutation = { __typename?: 'Mutation', updateCarrier?: { __typename?: 'Carrier', carrierId: string, name: string, companyId: string, legalForm?: string | null, verified?: boolean | null, rating?: number | null, contact: { __typename?: 'Contact', phone: string, email: string }, address: { __typename?: 'Address', street: string, city: string, state: string, zip: string } } | null };

export type GetCarrierByIdQueryVariables = Exact<{
  carrierId: Scalars['ID']['input'];
}>;


export type GetCarrierByIdQuery = { __typename?: 'Query', carrier?: { __typename?: 'Carrier', carrierId: string, name: string, companyId: string, legalForm?: string | null, verified?: boolean | null, rating?: number | null, driverIDs: Array<string>, truckIDs: Array<string>, contact: { __typename?: 'Contact', phone: string, email: string }, address: { __typename?: 'Address', street: string, city: string, state: string, zip: string } } | null };

export type GetAllCarriersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCarriersQuery = { __typename?: 'Query', carriers: Array<{ __typename?: 'Carrier', carrierId: string, name: string, companyId: string, verified?: boolean | null, rating?: number | null }> };

export type GetFaQsQueryVariables = Exact<{
  audience?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetFaQsQuery = { __typename?: 'Query', faqs?: Array<{ __typename?: 'FAQ', id: string, question: string, answer: string, category?: string | null, audience?: string | null, isActive?: boolean | null } | null> | null };

export type CreatePrivacyPolicyMutationVariables = Exact<{
  lastUpdated: Scalars['String']['input'];
  introduction: Scalars['String']['input'];
  sections: Array<PrivacyPolicySectionInput> | PrivacyPolicySectionInput;
}>;


export type CreatePrivacyPolicyMutation = { __typename?: 'Mutation', createPrivacyPolicy?: { __typename?: 'PrivacyPolicy', id: string, lastUpdated: string, introduction: string, sections: Array<{ __typename?: 'PrivacyPolicySection', title: string, content: Array<string> }> } | null };

export type UpdatePrivacyPolicyMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  lastUpdated: Scalars['String']['input'];
  introduction: Scalars['String']['input'];
  sections: Array<PrivacyPolicySectionInput> | PrivacyPolicySectionInput;
}>;


export type UpdatePrivacyPolicyMutation = { __typename?: 'Mutation', updatePrivacyPolicy?: { __typename?: 'PrivacyPolicy', id: string, lastUpdated: string, introduction: string, sections: Array<{ __typename?: 'PrivacyPolicySection', title: string, content: Array<string> }> } | null };

export type GetPrivacyPolicyQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetPrivacyPolicyQuery = { __typename?: 'Query', privacyPolicy?: { __typename?: 'PrivacyPolicy', id: string, lastUpdated: string, introduction: string, sections: Array<{ __typename?: 'PrivacyPolicySection', title: string, content: Array<string> }> } | null };

export type CreateShipmentMutationVariables = Exact<{
  input: CreateShipmentInput;
}>;


export type CreateShipmentMutation = { __typename?: 'Mutation', createShipment: { __typename?: 'Shipment', shipmentId: string, brokerId: string, driverId: string, truckId: string, status: ShipmentStatus, cargoDetails: { __typename?: 'CargoDetails', description: string, weight: number, volume: number, costValue: number, currency: Currency, handlingInstructions?: string | null, isHazardous: boolean, cargoCategory: CargoCategory, dimensions: { __typename?: 'Dimensions', length: number, width: number, height: number }, hazardousDetails?: { __typename?: 'HazardousDetails', unNumber?: string | null, class?: string | null, packingGroup?: string | null } | null }, pickupLocation: { __typename?: 'Location', address: string, city: string, state: string, zip: string }, deliveryLocation: { __typename?: 'Location', address: string, city: string, state: string, zip: string }, timestamps: { __typename?: 'Timestamps', scheduledPickup: string, actualPickup?: string | null, scheduledDelivery: string, actualDelivery?: string | null }, trackingUpdates: Array<{ __typename?: 'TrackingUpdate', timestamp: string, status: string, location: { __typename?: 'Coordinates', latitude: number, longitude: number } } | null> } };

export type UpdateShipmentStatusMutationVariables = Exact<{
  shipmentId: Scalars['ID']['input'];
  status: ShipmentStatus;
}>;


export type UpdateShipmentStatusMutation = { __typename?: 'Mutation', updateShipmentStatus: { __typename?: 'Shipment', shipmentId: string, status: ShipmentStatus } };

export type AddTrackingUpdateMutationVariables = Exact<{
  shipmentId: Scalars['ID']['input'];
  input: TrackingUpdateInput;
}>;


export type AddTrackingUpdateMutation = { __typename?: 'Mutation', addTrackingUpdate: { __typename?: 'Shipment', shipmentId: string, trackingUpdates: Array<{ __typename?: 'TrackingUpdate', timestamp: string, status: string, location: { __typename?: 'Coordinates', latitude: number, longitude: number } } | null> } };

export type GetShipmentByIdQueryVariables = Exact<{
  shipmentId: Scalars['ID']['input'];
}>;


export type GetShipmentByIdQuery = { __typename?: 'Query', shipment?: { __typename?: 'Shipment', shipmentId: string, brokerId: string, driverId: string, truckId: string, status: ShipmentStatus, cargoDetails: { __typename?: 'CargoDetails', description: string, weight: number, volume: number, costValue: number, currency: Currency, handlingInstructions?: string | null, isHazardous: boolean, cargoCategory: CargoCategory, dimensions: { __typename?: 'Dimensions', length: number, width: number, height: number }, hazardousDetails?: { __typename?: 'HazardousDetails', unNumber?: string | null, class?: string | null, packingGroup?: string | null } | null }, pickupLocation: { __typename?: 'Location', address: string, city: string, state: string, zip: string }, deliveryLocation: { __typename?: 'Location', address: string, city: string, state: string, zip: string }, timestamps: { __typename?: 'Timestamps', scheduledPickup: string, actualPickup?: string | null, scheduledDelivery: string, actualDelivery?: string | null }, trackingUpdates: Array<{ __typename?: 'TrackingUpdate', timestamp: string, status: string, location: { __typename?: 'Coordinates', latitude: number, longitude: number } } | null> } | null };

export type GetShipmentsByStatusQueryVariables = Exact<{
  status?: InputMaybe<ShipmentStatus>;
}>;


export type GetShipmentsByStatusQuery = { __typename?: 'Query', shipments: Array<{ __typename?: 'Shipment', shipmentId: string, brokerId: string, driverId: string, truckId: string, status: ShipmentStatus, cargoDetails: { __typename?: 'CargoDetails', description: string, weight: number, volume: number }, pickupLocation: { __typename?: 'Location', address: string, city: string, state: string, zip: string }, deliveryLocation: { __typename?: 'Location', address: string, city: string, state: string, zip: string }, timestamps: { __typename?: 'Timestamps', scheduledPickup: string, actualPickup?: string | null, scheduledDelivery: string, actualDelivery?: string | null }, trackingUpdates: Array<{ __typename?: 'TrackingUpdate', timestamp: string, status: string, location: { __typename?: 'Coordinates', latitude: number, longitude: number } } | null> }> };

export type GetAllShipmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllShipmentsQuery = { __typename?: 'Query', shipments: Array<{ __typename?: 'Shipment', shipmentId: string, brokerId: string, driverId: string, truckId: string, status: ShipmentStatus, cargoDetails: { __typename?: 'CargoDetails', description: string, weight: number, volume: number, costValue: number, currency: Currency, handlingInstructions?: string | null, isHazardous: boolean, cargoCategory: CargoCategory, dimensions: { __typename?: 'Dimensions', length: number, width: number, height: number }, hazardousDetails?: { __typename?: 'HazardousDetails', unNumber?: string | null, class?: string | null, packingGroup?: string | null } | null }, pickupLocation: { __typename?: 'Location', address: string, city: string, state: string, zip: string }, deliveryLocation: { __typename?: 'Location', address: string, city: string, state: string, zip: string }, timestamps: { __typename?: 'Timestamps', scheduledPickup: string, actualPickup?: string | null, scheduledDelivery: string, actualDelivery?: string | null }, trackingUpdates: Array<{ __typename?: 'TrackingUpdate', timestamp: string, status: string, location: { __typename?: 'Coordinates', latitude: number, longitude: number } } | null> }> };

export type CreateTermsOfUseMutationVariables = Exact<{
  effectiveDate: Scalars['String']['input'];
  terms: TermsInput;
}>;


export type CreateTermsOfUseMutation = { __typename?: 'Mutation', createTermsOfUse?: { __typename?: 'TermsOfUse', id: string, effectiveDate: string, terms: { __typename?: 'Terms', acknowledgement: string, general: { __typename?: 'General', title: string, intro: string }, sections: Array<{ __typename?: 'Section', title: string, content: Array<{ __typename?: 'Content', term: string, definition: string }> }> } } | null };

export type UpdateTermsOfUseMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  terms: TermsInput;
}>;


export type UpdateTermsOfUseMutation = { __typename?: 'Mutation', updateTermsOfUse?: { __typename?: 'TermsOfUse', id: string, effectiveDate: string, terms: { __typename?: 'Terms', acknowledgement: string, general: { __typename?: 'General', title: string, intro: string }, sections: Array<{ __typename?: 'Section', title: string, content: Array<{ __typename?: 'Content', term: string, definition: string }> }> } } | null };

export type GetTermsOfUseQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetTermsOfUseQuery = { __typename?: 'Query', termsOfUse?: { __typename?: 'TermsOfUse', id: string, effectiveDate: string, terms: { __typename?: 'Terms', acknowledgement: string, general: { __typename?: 'General', title: string, intro: string }, sections: Array<{ __typename?: 'Section', title: string, content: Array<{ __typename?: 'Content', term: string, definition: string }> }> } } | null };


export const CreateBrokerDocument = gql`
    mutation CreateBroker($input: CreateBrokerInput!) {
  createBroker(input: $input) {
    brokerId
    name
    licenseNumber
    address {
      street
      city
      state
      zip
    }
    contact {
      phone
      email
    }
  }
}
    `;
export type CreateBrokerMutationFn = Apollo.MutationFunction<CreateBrokerMutation, CreateBrokerMutationVariables>;

/**
 * __useCreateBrokerMutation__
 *
 * To run a mutation, you first call `useCreateBrokerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBrokerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBrokerMutation, { data, loading, error }] = useCreateBrokerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBrokerMutation(baseOptions?: Apollo.MutationHookOptions<CreateBrokerMutation, CreateBrokerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBrokerMutation, CreateBrokerMutationVariables>(CreateBrokerDocument, options);
      }
export type CreateBrokerMutationHookResult = ReturnType<typeof useCreateBrokerMutation>;
export type CreateBrokerMutationResult = Apollo.MutationResult<CreateBrokerMutation>;
export type CreateBrokerMutationOptions = Apollo.BaseMutationOptions<CreateBrokerMutation, CreateBrokerMutationVariables>;
export const UpdateBrokerDocument = gql`
    mutation UpdateBroker($input: UpdateBrokerInput!) {
  updateBroker(input: $input) {
    brokerId
    name
    licenseNumber
    address {
      street
      city
      state
      zip
    }
    contact {
      phone
      email
    }
  }
}
    `;
export type UpdateBrokerMutationFn = Apollo.MutationFunction<UpdateBrokerMutation, UpdateBrokerMutationVariables>;

/**
 * __useUpdateBrokerMutation__
 *
 * To run a mutation, you first call `useUpdateBrokerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBrokerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBrokerMutation, { data, loading, error }] = useUpdateBrokerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBrokerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBrokerMutation, UpdateBrokerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBrokerMutation, UpdateBrokerMutationVariables>(UpdateBrokerDocument, options);
      }
export type UpdateBrokerMutationHookResult = ReturnType<typeof useUpdateBrokerMutation>;
export type UpdateBrokerMutationResult = Apollo.MutationResult<UpdateBrokerMutation>;
export type UpdateBrokerMutationOptions = Apollo.BaseMutationOptions<UpdateBrokerMutation, UpdateBrokerMutationVariables>;
export const GetBrokerByIdDocument = gql`
    query GetBrokerById($brokerId: ID!) {
  broker(brokerId: $brokerId) {
    brokerId
    name
    licenseNumber
    address {
      street
      city
      state
      zip
    }
    contact {
      phone
      email
    }
    associatedShipments
  }
}
    `;

/**
 * __useGetBrokerByIdQuery__
 *
 * To run a query within a React component, call `useGetBrokerByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBrokerByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBrokerByIdQuery({
 *   variables: {
 *      brokerId: // value for 'brokerId'
 *   },
 * });
 */
export function useGetBrokerByIdQuery(baseOptions: Apollo.QueryHookOptions<GetBrokerByIdQuery, GetBrokerByIdQueryVariables> & ({ variables: GetBrokerByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBrokerByIdQuery, GetBrokerByIdQueryVariables>(GetBrokerByIdDocument, options);
      }
export function useGetBrokerByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBrokerByIdQuery, GetBrokerByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBrokerByIdQuery, GetBrokerByIdQueryVariables>(GetBrokerByIdDocument, options);
        }
export function useGetBrokerByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetBrokerByIdQuery, GetBrokerByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBrokerByIdQuery, GetBrokerByIdQueryVariables>(GetBrokerByIdDocument, options);
        }
export type GetBrokerByIdQueryHookResult = ReturnType<typeof useGetBrokerByIdQuery>;
export type GetBrokerByIdLazyQueryHookResult = ReturnType<typeof useGetBrokerByIdLazyQuery>;
export type GetBrokerByIdSuspenseQueryHookResult = ReturnType<typeof useGetBrokerByIdSuspenseQuery>;
export type GetBrokerByIdQueryResult = Apollo.QueryResult<GetBrokerByIdQuery, GetBrokerByIdQueryVariables>;
export const GetAllBrokersDocument = gql`
    query GetAllBrokers {
  brokers {
    brokerId
    name
    licenseNumber
    contact {
      phone
      email
    }
  }
}
    `;

/**
 * __useGetAllBrokersQuery__
 *
 * To run a query within a React component, call `useGetAllBrokersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBrokersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBrokersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllBrokersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBrokersQuery, GetAllBrokersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBrokersQuery, GetAllBrokersQueryVariables>(GetAllBrokersDocument, options);
      }
export function useGetAllBrokersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBrokersQuery, GetAllBrokersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBrokersQuery, GetAllBrokersQueryVariables>(GetAllBrokersDocument, options);
        }
export function useGetAllBrokersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllBrokersQuery, GetAllBrokersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllBrokersQuery, GetAllBrokersQueryVariables>(GetAllBrokersDocument, options);
        }
export type GetAllBrokersQueryHookResult = ReturnType<typeof useGetAllBrokersQuery>;
export type GetAllBrokersLazyQueryHookResult = ReturnType<typeof useGetAllBrokersLazyQuery>;
export type GetAllBrokersSuspenseQueryHookResult = ReturnType<typeof useGetAllBrokersSuspenseQuery>;
export type GetAllBrokersQueryResult = Apollo.QueryResult<GetAllBrokersQuery, GetAllBrokersQueryVariables>;
export const CreateCarrierDocument = gql`
    mutation CreateCarrier($input: CreateCarrierInput!) {
  createCarrier(input: $input) {
    carrierId
    name
    companyId
    legalForm
    contact {
      phone
      email
    }
    address {
      street
      city
      state
      zip
    }
    verified
    rating
  }
}
    `;
export type CreateCarrierMutationFn = Apollo.MutationFunction<CreateCarrierMutation, CreateCarrierMutationVariables>;

/**
 * __useCreateCarrierMutation__
 *
 * To run a mutation, you first call `useCreateCarrierMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCarrierMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCarrierMutation, { data, loading, error }] = useCreateCarrierMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCarrierMutation(baseOptions?: Apollo.MutationHookOptions<CreateCarrierMutation, CreateCarrierMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCarrierMutation, CreateCarrierMutationVariables>(CreateCarrierDocument, options);
      }
export type CreateCarrierMutationHookResult = ReturnType<typeof useCreateCarrierMutation>;
export type CreateCarrierMutationResult = Apollo.MutationResult<CreateCarrierMutation>;
export type CreateCarrierMutationOptions = Apollo.BaseMutationOptions<CreateCarrierMutation, CreateCarrierMutationVariables>;
export const UpdateCarrierDocument = gql`
    mutation UpdateCarrier($input: UpdateCarrierInput!) {
  updateCarrier(input: $input) {
    carrierId
    name
    companyId
    legalForm
    contact {
      phone
      email
    }
    address {
      street
      city
      state
      zip
    }
    verified
    rating
  }
}
    `;
export type UpdateCarrierMutationFn = Apollo.MutationFunction<UpdateCarrierMutation, UpdateCarrierMutationVariables>;

/**
 * __useUpdateCarrierMutation__
 *
 * To run a mutation, you first call `useUpdateCarrierMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCarrierMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCarrierMutation, { data, loading, error }] = useUpdateCarrierMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCarrierMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCarrierMutation, UpdateCarrierMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCarrierMutation, UpdateCarrierMutationVariables>(UpdateCarrierDocument, options);
      }
export type UpdateCarrierMutationHookResult = ReturnType<typeof useUpdateCarrierMutation>;
export type UpdateCarrierMutationResult = Apollo.MutationResult<UpdateCarrierMutation>;
export type UpdateCarrierMutationOptions = Apollo.BaseMutationOptions<UpdateCarrierMutation, UpdateCarrierMutationVariables>;
export const GetCarrierByIdDocument = gql`
    query GetCarrierById($carrierId: ID!) {
  carrier(carrierId: $carrierId) {
    carrierId
    name
    companyId
    legalForm
    contact {
      phone
      email
    }
    address {
      street
      city
      state
      zip
    }
    verified
    rating
    driverIDs
    truckIDs
  }
}
    `;

/**
 * __useGetCarrierByIdQuery__
 *
 * To run a query within a React component, call `useGetCarrierByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCarrierByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCarrierByIdQuery({
 *   variables: {
 *      carrierId: // value for 'carrierId'
 *   },
 * });
 */
export function useGetCarrierByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCarrierByIdQuery, GetCarrierByIdQueryVariables> & ({ variables: GetCarrierByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCarrierByIdQuery, GetCarrierByIdQueryVariables>(GetCarrierByIdDocument, options);
      }
export function useGetCarrierByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCarrierByIdQuery, GetCarrierByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCarrierByIdQuery, GetCarrierByIdQueryVariables>(GetCarrierByIdDocument, options);
        }
export function useGetCarrierByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCarrierByIdQuery, GetCarrierByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCarrierByIdQuery, GetCarrierByIdQueryVariables>(GetCarrierByIdDocument, options);
        }
export type GetCarrierByIdQueryHookResult = ReturnType<typeof useGetCarrierByIdQuery>;
export type GetCarrierByIdLazyQueryHookResult = ReturnType<typeof useGetCarrierByIdLazyQuery>;
export type GetCarrierByIdSuspenseQueryHookResult = ReturnType<typeof useGetCarrierByIdSuspenseQuery>;
export type GetCarrierByIdQueryResult = Apollo.QueryResult<GetCarrierByIdQuery, GetCarrierByIdQueryVariables>;
export const GetAllCarriersDocument = gql`
    query GetAllCarriers {
  carriers {
    carrierId
    name
    companyId
    verified
    rating
  }
}
    `;

/**
 * __useGetAllCarriersQuery__
 *
 * To run a query within a React component, call `useGetAllCarriersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCarriersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCarriersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCarriersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCarriersQuery, GetAllCarriersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCarriersQuery, GetAllCarriersQueryVariables>(GetAllCarriersDocument, options);
      }
export function useGetAllCarriersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCarriersQuery, GetAllCarriersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCarriersQuery, GetAllCarriersQueryVariables>(GetAllCarriersDocument, options);
        }
export function useGetAllCarriersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllCarriersQuery, GetAllCarriersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllCarriersQuery, GetAllCarriersQueryVariables>(GetAllCarriersDocument, options);
        }
export type GetAllCarriersQueryHookResult = ReturnType<typeof useGetAllCarriersQuery>;
export type GetAllCarriersLazyQueryHookResult = ReturnType<typeof useGetAllCarriersLazyQuery>;
export type GetAllCarriersSuspenseQueryHookResult = ReturnType<typeof useGetAllCarriersSuspenseQuery>;
export type GetAllCarriersQueryResult = Apollo.QueryResult<GetAllCarriersQuery, GetAllCarriersQueryVariables>;
export const GetFaQsDocument = gql`
    query GetFAQs($audience: String, $category: String, $isActive: Boolean) {
  faqs(audience: $audience, category: $category, isActive: $isActive) {
    id
    question
    answer
    category
    audience
    isActive
  }
}
    `;

/**
 * __useGetFaQsQuery__
 *
 * To run a query within a React component, call `useGetFaQsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFaQsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFaQsQuery({
 *   variables: {
 *      audience: // value for 'audience'
 *      category: // value for 'category'
 *      isActive: // value for 'isActive'
 *   },
 * });
 */
export function useGetFaQsQuery(baseOptions?: Apollo.QueryHookOptions<GetFaQsQuery, GetFaQsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFaQsQuery, GetFaQsQueryVariables>(GetFaQsDocument, options);
      }
export function useGetFaQsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFaQsQuery, GetFaQsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFaQsQuery, GetFaQsQueryVariables>(GetFaQsDocument, options);
        }
export function useGetFaQsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetFaQsQuery, GetFaQsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFaQsQuery, GetFaQsQueryVariables>(GetFaQsDocument, options);
        }
export type GetFaQsQueryHookResult = ReturnType<typeof useGetFaQsQuery>;
export type GetFaQsLazyQueryHookResult = ReturnType<typeof useGetFaQsLazyQuery>;
export type GetFaQsSuspenseQueryHookResult = ReturnType<typeof useGetFaQsSuspenseQuery>;
export type GetFaQsQueryResult = Apollo.QueryResult<GetFaQsQuery, GetFaQsQueryVariables>;
export const CreatePrivacyPolicyDocument = gql`
    mutation CreatePrivacyPolicy($lastUpdated: String!, $introduction: String!, $sections: [PrivacyPolicySectionInput!]!) {
  createPrivacyPolicy(
    lastUpdated: $lastUpdated
    introduction: $introduction
    sections: $sections
  ) {
    id
    lastUpdated
    introduction
    sections {
      title
      content
    }
  }
}
    `;
export type CreatePrivacyPolicyMutationFn = Apollo.MutationFunction<CreatePrivacyPolicyMutation, CreatePrivacyPolicyMutationVariables>;

/**
 * __useCreatePrivacyPolicyMutation__
 *
 * To run a mutation, you first call `useCreatePrivacyPolicyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePrivacyPolicyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPrivacyPolicyMutation, { data, loading, error }] = useCreatePrivacyPolicyMutation({
 *   variables: {
 *      lastUpdated: // value for 'lastUpdated'
 *      introduction: // value for 'introduction'
 *      sections: // value for 'sections'
 *   },
 * });
 */
export function useCreatePrivacyPolicyMutation(baseOptions?: Apollo.MutationHookOptions<CreatePrivacyPolicyMutation, CreatePrivacyPolicyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePrivacyPolicyMutation, CreatePrivacyPolicyMutationVariables>(CreatePrivacyPolicyDocument, options);
      }
export type CreatePrivacyPolicyMutationHookResult = ReturnType<typeof useCreatePrivacyPolicyMutation>;
export type CreatePrivacyPolicyMutationResult = Apollo.MutationResult<CreatePrivacyPolicyMutation>;
export type CreatePrivacyPolicyMutationOptions = Apollo.BaseMutationOptions<CreatePrivacyPolicyMutation, CreatePrivacyPolicyMutationVariables>;
export const UpdatePrivacyPolicyDocument = gql`
    mutation UpdatePrivacyPolicy($id: ID!, $lastUpdated: String!, $introduction: String!, $sections: [PrivacyPolicySectionInput!]!) {
  updatePrivacyPolicy(
    id: $id
    lastUpdated: $lastUpdated
    introduction: $introduction
    sections: $sections
  ) {
    id
    lastUpdated
    introduction
    sections {
      title
      content
    }
  }
}
    `;
export type UpdatePrivacyPolicyMutationFn = Apollo.MutationFunction<UpdatePrivacyPolicyMutation, UpdatePrivacyPolicyMutationVariables>;

/**
 * __useUpdatePrivacyPolicyMutation__
 *
 * To run a mutation, you first call `useUpdatePrivacyPolicyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePrivacyPolicyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePrivacyPolicyMutation, { data, loading, error }] = useUpdatePrivacyPolicyMutation({
 *   variables: {
 *      id: // value for 'id'
 *      lastUpdated: // value for 'lastUpdated'
 *      introduction: // value for 'introduction'
 *      sections: // value for 'sections'
 *   },
 * });
 */
export function useUpdatePrivacyPolicyMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePrivacyPolicyMutation, UpdatePrivacyPolicyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePrivacyPolicyMutation, UpdatePrivacyPolicyMutationVariables>(UpdatePrivacyPolicyDocument, options);
      }
export type UpdatePrivacyPolicyMutationHookResult = ReturnType<typeof useUpdatePrivacyPolicyMutation>;
export type UpdatePrivacyPolicyMutationResult = Apollo.MutationResult<UpdatePrivacyPolicyMutation>;
export type UpdatePrivacyPolicyMutationOptions = Apollo.BaseMutationOptions<UpdatePrivacyPolicyMutation, UpdatePrivacyPolicyMutationVariables>;
export const GetPrivacyPolicyDocument = gql`
    query getPrivacyPolicy($id: ID!) {
  privacyPolicy(id: $id) {
    id
    lastUpdated
    introduction
    sections {
      title
      content
    }
  }
}
    `;

/**
 * __useGetPrivacyPolicyQuery__
 *
 * To run a query within a React component, call `useGetPrivacyPolicyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPrivacyPolicyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPrivacyPolicyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPrivacyPolicyQuery(baseOptions: Apollo.QueryHookOptions<GetPrivacyPolicyQuery, GetPrivacyPolicyQueryVariables> & ({ variables: GetPrivacyPolicyQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPrivacyPolicyQuery, GetPrivacyPolicyQueryVariables>(GetPrivacyPolicyDocument, options);
      }
export function useGetPrivacyPolicyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPrivacyPolicyQuery, GetPrivacyPolicyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPrivacyPolicyQuery, GetPrivacyPolicyQueryVariables>(GetPrivacyPolicyDocument, options);
        }
export function useGetPrivacyPolicySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPrivacyPolicyQuery, GetPrivacyPolicyQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPrivacyPolicyQuery, GetPrivacyPolicyQueryVariables>(GetPrivacyPolicyDocument, options);
        }
export type GetPrivacyPolicyQueryHookResult = ReturnType<typeof useGetPrivacyPolicyQuery>;
export type GetPrivacyPolicyLazyQueryHookResult = ReturnType<typeof useGetPrivacyPolicyLazyQuery>;
export type GetPrivacyPolicySuspenseQueryHookResult = ReturnType<typeof useGetPrivacyPolicySuspenseQuery>;
export type GetPrivacyPolicyQueryResult = Apollo.QueryResult<GetPrivacyPolicyQuery, GetPrivacyPolicyQueryVariables>;
export const CreateShipmentDocument = gql`
    mutation CreateShipment($input: CreateShipmentInput!) {
  createShipment(input: $input) {
    shipmentId
    brokerId
    driverId
    truckId
    cargoDetails {
      description
      weight
      volume
      dimensions {
        length
        width
        height
      }
      costValue
      currency
      handlingInstructions
      isHazardous
      hazardousDetails {
        unNumber
        class
        packingGroup
      }
      cargoCategory
    }
    pickupLocation {
      address
      city
      state
      zip
    }
    deliveryLocation {
      address
      city
      state
      zip
    }
    status
    timestamps {
      scheduledPickup
      actualPickup
      scheduledDelivery
      actualDelivery
    }
    trackingUpdates {
      timestamp
      location {
        latitude
        longitude
      }
      status
    }
  }
}
    `;
export type CreateShipmentMutationFn = Apollo.MutationFunction<CreateShipmentMutation, CreateShipmentMutationVariables>;

/**
 * __useCreateShipmentMutation__
 *
 * To run a mutation, you first call `useCreateShipmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateShipmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createShipmentMutation, { data, loading, error }] = useCreateShipmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateShipmentMutation(baseOptions?: Apollo.MutationHookOptions<CreateShipmentMutation, CreateShipmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateShipmentMutation, CreateShipmentMutationVariables>(CreateShipmentDocument, options);
      }
export type CreateShipmentMutationHookResult = ReturnType<typeof useCreateShipmentMutation>;
export type CreateShipmentMutationResult = Apollo.MutationResult<CreateShipmentMutation>;
export type CreateShipmentMutationOptions = Apollo.BaseMutationOptions<CreateShipmentMutation, CreateShipmentMutationVariables>;
export const UpdateShipmentStatusDocument = gql`
    mutation UpdateShipmentStatus($shipmentId: ID!, $status: ShipmentStatus!) {
  updateShipmentStatus(shipmentId: $shipmentId, status: $status) {
    shipmentId
    status
  }
}
    `;
export type UpdateShipmentStatusMutationFn = Apollo.MutationFunction<UpdateShipmentStatusMutation, UpdateShipmentStatusMutationVariables>;

/**
 * __useUpdateShipmentStatusMutation__
 *
 * To run a mutation, you first call `useUpdateShipmentStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateShipmentStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateShipmentStatusMutation, { data, loading, error }] = useUpdateShipmentStatusMutation({
 *   variables: {
 *      shipmentId: // value for 'shipmentId'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdateShipmentStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateShipmentStatusMutation, UpdateShipmentStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateShipmentStatusMutation, UpdateShipmentStatusMutationVariables>(UpdateShipmentStatusDocument, options);
      }
export type UpdateShipmentStatusMutationHookResult = ReturnType<typeof useUpdateShipmentStatusMutation>;
export type UpdateShipmentStatusMutationResult = Apollo.MutationResult<UpdateShipmentStatusMutation>;
export type UpdateShipmentStatusMutationOptions = Apollo.BaseMutationOptions<UpdateShipmentStatusMutation, UpdateShipmentStatusMutationVariables>;
export const AddTrackingUpdateDocument = gql`
    mutation AddTrackingUpdate($shipmentId: ID!, $input: TrackingUpdateInput!) {
  addTrackingUpdate(shipmentId: $shipmentId, input: $input) {
    shipmentId
    trackingUpdates {
      timestamp
      location {
        latitude
        longitude
      }
      status
    }
  }
}
    `;
export type AddTrackingUpdateMutationFn = Apollo.MutationFunction<AddTrackingUpdateMutation, AddTrackingUpdateMutationVariables>;

/**
 * __useAddTrackingUpdateMutation__
 *
 * To run a mutation, you first call `useAddTrackingUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTrackingUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTrackingUpdateMutation, { data, loading, error }] = useAddTrackingUpdateMutation({
 *   variables: {
 *      shipmentId: // value for 'shipmentId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddTrackingUpdateMutation(baseOptions?: Apollo.MutationHookOptions<AddTrackingUpdateMutation, AddTrackingUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTrackingUpdateMutation, AddTrackingUpdateMutationVariables>(AddTrackingUpdateDocument, options);
      }
export type AddTrackingUpdateMutationHookResult = ReturnType<typeof useAddTrackingUpdateMutation>;
export type AddTrackingUpdateMutationResult = Apollo.MutationResult<AddTrackingUpdateMutation>;
export type AddTrackingUpdateMutationOptions = Apollo.BaseMutationOptions<AddTrackingUpdateMutation, AddTrackingUpdateMutationVariables>;
export const GetShipmentByIdDocument = gql`
    query GetShipmentById($shipmentId: ID!) {
  shipment(shipmentId: $shipmentId) {
    shipmentId
    brokerId
    driverId
    truckId
    cargoDetails {
      description
      weight
      volume
      dimensions {
        length
        width
        height
      }
      costValue
      currency
      handlingInstructions
      isHazardous
      hazardousDetails {
        unNumber
        class
        packingGroup
      }
      cargoCategory
    }
    pickupLocation {
      address
      city
      state
      zip
    }
    deliveryLocation {
      address
      city
      state
      zip
    }
    status
    timestamps {
      scheduledPickup
      actualPickup
      scheduledDelivery
      actualDelivery
    }
    trackingUpdates {
      timestamp
      location {
        latitude
        longitude
      }
      status
    }
  }
}
    `;

/**
 * __useGetShipmentByIdQuery__
 *
 * To run a query within a React component, call `useGetShipmentByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShipmentByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShipmentByIdQuery({
 *   variables: {
 *      shipmentId: // value for 'shipmentId'
 *   },
 * });
 */
export function useGetShipmentByIdQuery(baseOptions: Apollo.QueryHookOptions<GetShipmentByIdQuery, GetShipmentByIdQueryVariables> & ({ variables: GetShipmentByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetShipmentByIdQuery, GetShipmentByIdQueryVariables>(GetShipmentByIdDocument, options);
      }
export function useGetShipmentByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetShipmentByIdQuery, GetShipmentByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetShipmentByIdQuery, GetShipmentByIdQueryVariables>(GetShipmentByIdDocument, options);
        }
export function useGetShipmentByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetShipmentByIdQuery, GetShipmentByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetShipmentByIdQuery, GetShipmentByIdQueryVariables>(GetShipmentByIdDocument, options);
        }
export type GetShipmentByIdQueryHookResult = ReturnType<typeof useGetShipmentByIdQuery>;
export type GetShipmentByIdLazyQueryHookResult = ReturnType<typeof useGetShipmentByIdLazyQuery>;
export type GetShipmentByIdSuspenseQueryHookResult = ReturnType<typeof useGetShipmentByIdSuspenseQuery>;
export type GetShipmentByIdQueryResult = Apollo.QueryResult<GetShipmentByIdQuery, GetShipmentByIdQueryVariables>;
export const GetShipmentsByStatusDocument = gql`
    query GetShipmentsByStatus($status: ShipmentStatus) {
  shipments(status: $status) {
    shipmentId
    brokerId
    driverId
    truckId
    cargoDetails {
      description
      weight
      volume
    }
    pickupLocation {
      address
      city
      state
      zip
    }
    deliveryLocation {
      address
      city
      state
      zip
    }
    status
    timestamps {
      scheduledPickup
      actualPickup
      scheduledDelivery
      actualDelivery
    }
    trackingUpdates {
      timestamp
      location {
        latitude
        longitude
      }
      status
    }
  }
}
    `;

/**
 * __useGetShipmentsByStatusQuery__
 *
 * To run a query within a React component, call `useGetShipmentsByStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShipmentsByStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShipmentsByStatusQuery({
 *   variables: {
 *      status: // value for 'status'
 *   },
 * });
 */
export function useGetShipmentsByStatusQuery(baseOptions?: Apollo.QueryHookOptions<GetShipmentsByStatusQuery, GetShipmentsByStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetShipmentsByStatusQuery, GetShipmentsByStatusQueryVariables>(GetShipmentsByStatusDocument, options);
      }
export function useGetShipmentsByStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetShipmentsByStatusQuery, GetShipmentsByStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetShipmentsByStatusQuery, GetShipmentsByStatusQueryVariables>(GetShipmentsByStatusDocument, options);
        }
export function useGetShipmentsByStatusSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetShipmentsByStatusQuery, GetShipmentsByStatusQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetShipmentsByStatusQuery, GetShipmentsByStatusQueryVariables>(GetShipmentsByStatusDocument, options);
        }
export type GetShipmentsByStatusQueryHookResult = ReturnType<typeof useGetShipmentsByStatusQuery>;
export type GetShipmentsByStatusLazyQueryHookResult = ReturnType<typeof useGetShipmentsByStatusLazyQuery>;
export type GetShipmentsByStatusSuspenseQueryHookResult = ReturnType<typeof useGetShipmentsByStatusSuspenseQuery>;
export type GetShipmentsByStatusQueryResult = Apollo.QueryResult<GetShipmentsByStatusQuery, GetShipmentsByStatusQueryVariables>;
export const GetAllShipmentsDocument = gql`
    query GetAllShipments {
  shipments {
    shipmentId
    brokerId
    driverId
    truckId
    cargoDetails {
      description
      weight
      volume
      dimensions {
        length
        width
        height
      }
      costValue
      currency
      handlingInstructions
      isHazardous
      hazardousDetails {
        unNumber
        class
        packingGroup
      }
      cargoCategory
    }
    pickupLocation {
      address
      city
      state
      zip
    }
    deliveryLocation {
      address
      city
      state
      zip
    }
    status
    timestamps {
      scheduledPickup
      actualPickup
      scheduledDelivery
      actualDelivery
    }
    trackingUpdates {
      timestamp
      location {
        latitude
        longitude
      }
      status
    }
  }
}
    `;

/**
 * __useGetAllShipmentsQuery__
 *
 * To run a query within a React component, call `useGetAllShipmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllShipmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllShipmentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllShipmentsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllShipmentsQuery, GetAllShipmentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllShipmentsQuery, GetAllShipmentsQueryVariables>(GetAllShipmentsDocument, options);
      }
export function useGetAllShipmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllShipmentsQuery, GetAllShipmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllShipmentsQuery, GetAllShipmentsQueryVariables>(GetAllShipmentsDocument, options);
        }
export function useGetAllShipmentsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllShipmentsQuery, GetAllShipmentsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllShipmentsQuery, GetAllShipmentsQueryVariables>(GetAllShipmentsDocument, options);
        }
export type GetAllShipmentsQueryHookResult = ReturnType<typeof useGetAllShipmentsQuery>;
export type GetAllShipmentsLazyQueryHookResult = ReturnType<typeof useGetAllShipmentsLazyQuery>;
export type GetAllShipmentsSuspenseQueryHookResult = ReturnType<typeof useGetAllShipmentsSuspenseQuery>;
export type GetAllShipmentsQueryResult = Apollo.QueryResult<GetAllShipmentsQuery, GetAllShipmentsQueryVariables>;
export const CreateTermsOfUseDocument = gql`
    mutation CreateTermsOfUse($effectiveDate: String!, $terms: TermsInput!) {
  createTermsOfUse(effectiveDate: $effectiveDate, terms: $terms) {
    id
    effectiveDate
    terms {
      general {
        title
        intro
      }
      sections {
        title
        content {
          term
          definition
        }
      }
      acknowledgement
    }
  }
}
    `;
export type CreateTermsOfUseMutationFn = Apollo.MutationFunction<CreateTermsOfUseMutation, CreateTermsOfUseMutationVariables>;

/**
 * __useCreateTermsOfUseMutation__
 *
 * To run a mutation, you first call `useCreateTermsOfUseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTermsOfUseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTermsOfUseMutation, { data, loading, error }] = useCreateTermsOfUseMutation({
 *   variables: {
 *      effectiveDate: // value for 'effectiveDate'
 *      terms: // value for 'terms'
 *   },
 * });
 */
export function useCreateTermsOfUseMutation(baseOptions?: Apollo.MutationHookOptions<CreateTermsOfUseMutation, CreateTermsOfUseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTermsOfUseMutation, CreateTermsOfUseMutationVariables>(CreateTermsOfUseDocument, options);
      }
export type CreateTermsOfUseMutationHookResult = ReturnType<typeof useCreateTermsOfUseMutation>;
export type CreateTermsOfUseMutationResult = Apollo.MutationResult<CreateTermsOfUseMutation>;
export type CreateTermsOfUseMutationOptions = Apollo.BaseMutationOptions<CreateTermsOfUseMutation, CreateTermsOfUseMutationVariables>;
export const UpdateTermsOfUseDocument = gql`
    mutation UpdateTermsOfUse($id: ID!, $terms: TermsInput!) {
  updateTermsOfUse(id: $id, terms: $terms) {
    id
    effectiveDate
    terms {
      general {
        title
        intro
      }
      sections {
        title
        content {
          term
          definition
        }
      }
      acknowledgement
    }
  }
}
    `;
export type UpdateTermsOfUseMutationFn = Apollo.MutationFunction<UpdateTermsOfUseMutation, UpdateTermsOfUseMutationVariables>;

/**
 * __useUpdateTermsOfUseMutation__
 *
 * To run a mutation, you first call `useUpdateTermsOfUseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTermsOfUseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTermsOfUseMutation, { data, loading, error }] = useUpdateTermsOfUseMutation({
 *   variables: {
 *      id: // value for 'id'
 *      terms: // value for 'terms'
 *   },
 * });
 */
export function useUpdateTermsOfUseMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTermsOfUseMutation, UpdateTermsOfUseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTermsOfUseMutation, UpdateTermsOfUseMutationVariables>(UpdateTermsOfUseDocument, options);
      }
export type UpdateTermsOfUseMutationHookResult = ReturnType<typeof useUpdateTermsOfUseMutation>;
export type UpdateTermsOfUseMutationResult = Apollo.MutationResult<UpdateTermsOfUseMutation>;
export type UpdateTermsOfUseMutationOptions = Apollo.BaseMutationOptions<UpdateTermsOfUseMutation, UpdateTermsOfUseMutationVariables>;
export const GetTermsOfUseDocument = gql`
    query GetTermsOfUse($id: ID!) {
  termsOfUse(id: $id) {
    id
    effectiveDate
    terms {
      general {
        title
        intro
      }
      sections {
        title
        content {
          term
          definition
        }
      }
      acknowledgement
    }
  }
}
    `;

/**
 * __useGetTermsOfUseQuery__
 *
 * To run a query within a React component, call `useGetTermsOfUseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTermsOfUseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTermsOfUseQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTermsOfUseQuery(baseOptions: Apollo.QueryHookOptions<GetTermsOfUseQuery, GetTermsOfUseQueryVariables> & ({ variables: GetTermsOfUseQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTermsOfUseQuery, GetTermsOfUseQueryVariables>(GetTermsOfUseDocument, options);
      }
export function useGetTermsOfUseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTermsOfUseQuery, GetTermsOfUseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTermsOfUseQuery, GetTermsOfUseQueryVariables>(GetTermsOfUseDocument, options);
        }
export function useGetTermsOfUseSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTermsOfUseQuery, GetTermsOfUseQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTermsOfUseQuery, GetTermsOfUseQueryVariables>(GetTermsOfUseDocument, options);
        }
export type GetTermsOfUseQueryHookResult = ReturnType<typeof useGetTermsOfUseQuery>;
export type GetTermsOfUseLazyQueryHookResult = ReturnType<typeof useGetTermsOfUseLazyQuery>;
export type GetTermsOfUseSuspenseQueryHookResult = ReturnType<typeof useGetTermsOfUseSuspenseQuery>;
export type GetTermsOfUseQueryResult = Apollo.QueryResult<GetTermsOfUseQuery, GetTermsOfUseQueryVariables>;