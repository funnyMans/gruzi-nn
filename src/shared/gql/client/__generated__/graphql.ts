/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
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
  Perishable = 'PERISHABLE',
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

export type CreateShipmentInput = {
  brokerId: Scalars['ID']['input'];
  cargoDetails: CargoDetailsInput;
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
  Usd = 'USD',
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
  contact: Contact;
  driverId: Scalars['ID']['output'];
  licenseNumber: Scalars['String']['output'];
  name: Scalars['String']['output'];
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
  createPrivacyPolicy?: Maybe<PrivacyPolicy>;
  createShipment: Shipment;
  createTermsOfUse?: Maybe<TermsOfUse>;
  updateBroker?: Maybe<Broker>;
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
  driver?: Maybe<Driver>;
  drivers: Array<Driver>;
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

export type QueryDriverArgs = {
  driverId: Scalars['ID']['input'];
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
  Scheduled = 'SCHEDULED',
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

export type CreateBrokerMutationVariables = Exact<{
  input: CreateBrokerInput;
}>;

export type CreateBrokerMutation = {
  __typename?: 'Mutation';
  createBroker?: {
    __typename?: 'Broker';
    brokerId: string;
    name: string;
    licenseNumber: string;
    address: {
      __typename?: 'Address';
      street: string;
      city: string;
      state: string;
      zip: string;
    };
    contact: { __typename?: 'Contact'; phone: string; email: string };
  } | null;
};

export type UpdateBrokerMutationVariables = Exact<{
  input: UpdateBrokerInput;
}>;

export type UpdateBrokerMutation = {
  __typename?: 'Mutation';
  updateBroker?: {
    __typename?: 'Broker';
    brokerId: string;
    name: string;
    licenseNumber: string;
    address: {
      __typename?: 'Address';
      street: string;
      city: string;
      state: string;
      zip: string;
    };
    contact: { __typename?: 'Contact'; phone: string; email: string };
  } | null;
};

export type GetBrokerByIdQueryVariables = Exact<{
  brokerId: Scalars['ID']['input'];
}>;

export type GetBrokerByIdQuery = {
  __typename?: 'Query';
  broker?: {
    __typename?: 'Broker';
    brokerId: string;
    name: string;
    licenseNumber: string;
    associatedShipments?: Array<string | null> | null;
    address: {
      __typename?: 'Address';
      street: string;
      city: string;
      state: string;
      zip: string;
    };
    contact: { __typename?: 'Contact'; phone: string; email: string };
  } | null;
};

export type GetAllBrokersQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllBrokersQuery = {
  __typename?: 'Query';
  brokers: Array<{
    __typename?: 'Broker';
    brokerId: string;
    name: string;
    licenseNumber: string;
    contact: { __typename?: 'Contact'; phone: string; email: string };
  } | null>;
};

export type GetTruckQueryVariables = Exact<{
  truckId: Scalars['ID']['input'];
}>;

export type GetTruckQuery = {
  __typename?: 'Query';
  truck?: {
    __typename?: 'Truck';
    truckId: string;
    capacity: number;
    licensePlate: string;
    model: string;
  } | null;
};

export type CreatePrivacyPolicyMutationVariables = Exact<{
  lastUpdated: Scalars['String']['input'];
  introduction: Scalars['String']['input'];
  sections: Array<PrivacyPolicySectionInput> | PrivacyPolicySectionInput;
}>;

export type CreatePrivacyPolicyMutation = {
  __typename?: 'Mutation';
  createPrivacyPolicy?: {
    __typename?: 'PrivacyPolicy';
    id: string;
    lastUpdated: string;
    introduction: string;
    sections: Array<{
      __typename?: 'PrivacyPolicySection';
      title: string;
      content: Array<string>;
    }>;
  } | null;
};

export type UpdatePrivacyPolicyMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  lastUpdated: Scalars['String']['input'];
  introduction: Scalars['String']['input'];
  sections: Array<PrivacyPolicySectionInput> | PrivacyPolicySectionInput;
}>;

export type UpdatePrivacyPolicyMutation = {
  __typename?: 'Mutation';
  updatePrivacyPolicy?: {
    __typename?: 'PrivacyPolicy';
    id: string;
    lastUpdated: string;
    introduction: string;
    sections: Array<{
      __typename?: 'PrivacyPolicySection';
      title: string;
      content: Array<string>;
    }>;
  } | null;
};

export type GetPrivacyPolicyQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type GetPrivacyPolicyQuery = {
  __typename?: 'Query';
  privacyPolicy?: {
    __typename?: 'PrivacyPolicy';
    id: string;
    lastUpdated: string;
    introduction: string;
    sections: Array<{
      __typename?: 'PrivacyPolicySection';
      title: string;
      content: Array<string>;
    }>;
  } | null;
};

export type CreateShipmentMutationVariables = Exact<{
  input: CreateShipmentInput;
}>;

export type CreateShipmentMutation = {
  __typename?: 'Mutation';
  createShipment: {
    __typename?: 'Shipment';
    shipmentId: string;
    brokerId: string;
    driverId: string;
    truckId: string;
    status: ShipmentStatus;
    cargoDetails: {
      __typename?: 'CargoDetails';
      description: string;
      weight: number;
      volume: number;
      costValue: number;
      currency: Currency;
      handlingInstructions?: string | null;
      isHazardous: boolean;
      cargoCategory: CargoCategory;
      dimensions: {
        __typename?: 'Dimensions';
        length: number;
        width: number;
        height: number;
      };
      hazardousDetails?: {
        __typename?: 'HazardousDetails';
        unNumber?: string | null;
        class?: string | null;
        packingGroup?: string | null;
      } | null;
    };
    pickupLocation: {
      __typename?: 'Location';
      address: string;
      city: string;
      state: string;
      zip: string;
    };
    deliveryLocation: {
      __typename?: 'Location';
      address: string;
      city: string;
      state: string;
      zip: string;
    };
    timestamps: {
      __typename?: 'Timestamps';
      scheduledPickup: string;
      actualPickup?: string | null;
      scheduledDelivery: string;
      actualDelivery?: string | null;
    };
    trackingUpdates: Array<{
      __typename?: 'TrackingUpdate';
      timestamp: string;
      status: string;
      location: {
        __typename?: 'Coordinates';
        latitude: number;
        longitude: number;
      };
    } | null>;
  };
};

export type UpdateShipmentStatusMutationVariables = Exact<{
  shipmentId: Scalars['ID']['input'];
  status: ShipmentStatus;
}>;

export type UpdateShipmentStatusMutation = {
  __typename?: 'Mutation';
  updateShipmentStatus: {
    __typename?: 'Shipment';
    shipmentId: string;
    status: ShipmentStatus;
  };
};

export type AddTrackingUpdateMutationVariables = Exact<{
  shipmentId: Scalars['ID']['input'];
  input: TrackingUpdateInput;
}>;

export type AddTrackingUpdateMutation = {
  __typename?: 'Mutation';
  addTrackingUpdate: {
    __typename?: 'Shipment';
    shipmentId: string;
    trackingUpdates: Array<{
      __typename?: 'TrackingUpdate';
      timestamp: string;
      status: string;
      location: {
        __typename?: 'Coordinates';
        latitude: number;
        longitude: number;
      };
    } | null>;
  };
};

export type GetShipmentByIdQueryVariables = Exact<{
  shipmentId: Scalars['ID']['input'];
}>;

export type GetShipmentByIdQuery = {
  __typename?: 'Query';
  shipment?: {
    __typename?: 'Shipment';
    shipmentId: string;
    brokerId: string;
    driverId: string;
    truckId: string;
    status: ShipmentStatus;
    cargoDetails: {
      __typename?: 'CargoDetails';
      description: string;
      weight: number;
      volume: number;
      costValue: number;
      currency: Currency;
      handlingInstructions?: string | null;
      isHazardous: boolean;
      cargoCategory: CargoCategory;
      dimensions: {
        __typename?: 'Dimensions';
        length: number;
        width: number;
        height: number;
      };
      hazardousDetails?: {
        __typename?: 'HazardousDetails';
        unNumber?: string | null;
        class?: string | null;
        packingGroup?: string | null;
      } | null;
    };
    pickupLocation: {
      __typename?: 'Location';
      address: string;
      city: string;
      state: string;
      zip: string;
    };
    deliveryLocation: {
      __typename?: 'Location';
      address: string;
      city: string;
      state: string;
      zip: string;
    };
    timestamps: {
      __typename?: 'Timestamps';
      scheduledPickup: string;
      actualPickup?: string | null;
      scheduledDelivery: string;
      actualDelivery?: string | null;
    };
    trackingUpdates: Array<{
      __typename?: 'TrackingUpdate';
      timestamp: string;
      status: string;
      location: {
        __typename?: 'Coordinates';
        latitude: number;
        longitude: number;
      };
    } | null>;
  } | null;
};

export type GetShipmentsByStatusQueryVariables = Exact<{
  status?: InputMaybe<ShipmentStatus>;
}>;

export type GetShipmentsByStatusQuery = {
  __typename?: 'Query';
  shipments: Array<{
    __typename?: 'Shipment';
    shipmentId: string;
    brokerId: string;
    driverId: string;
    truckId: string;
    status: ShipmentStatus;
    cargoDetails: {
      __typename?: 'CargoDetails';
      description: string;
      weight: number;
      volume: number;
    };
    pickupLocation: {
      __typename?: 'Location';
      address: string;
      city: string;
      state: string;
      zip: string;
    };
    deliveryLocation: {
      __typename?: 'Location';
      address: string;
      city: string;
      state: string;
      zip: string;
    };
    timestamps: {
      __typename?: 'Timestamps';
      scheduledPickup: string;
      actualPickup?: string | null;
      scheduledDelivery: string;
      actualDelivery?: string | null;
    };
    trackingUpdates: Array<{
      __typename?: 'TrackingUpdate';
      timestamp: string;
      status: string;
      location: {
        __typename?: 'Coordinates';
        latitude: number;
        longitude: number;
      };
    } | null>;
  }>;
};

export type GetAllShipmentsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllShipmentsQuery = {
  __typename?: 'Query';
  shipments: Array<{
    __typename?: 'Shipment';
    shipmentId: string;
    brokerId: string;
    driverId: string;
    truckId: string;
    status: ShipmentStatus;
    cargoDetails: {
      __typename?: 'CargoDetails';
      description: string;
      weight: number;
      volume: number;
      costValue: number;
      currency: Currency;
      handlingInstructions?: string | null;
      isHazardous: boolean;
      cargoCategory: CargoCategory;
      dimensions: {
        __typename?: 'Dimensions';
        length: number;
        width: number;
        height: number;
      };
      hazardousDetails?: {
        __typename?: 'HazardousDetails';
        unNumber?: string | null;
        class?: string | null;
        packingGroup?: string | null;
      } | null;
    };
    pickupLocation: {
      __typename?: 'Location';
      address: string;
      city: string;
      state: string;
      zip: string;
    };
    deliveryLocation: {
      __typename?: 'Location';
      address: string;
      city: string;
      state: string;
      zip: string;
    };
    timestamps: {
      __typename?: 'Timestamps';
      scheduledPickup: string;
      actualPickup?: string | null;
      scheduledDelivery: string;
      actualDelivery?: string | null;
    };
    trackingUpdates: Array<{
      __typename?: 'TrackingUpdate';
      timestamp: string;
      status: string;
      location: {
        __typename?: 'Coordinates';
        latitude: number;
        longitude: number;
      };
    } | null>;
  }>;
};

export type CreateTermsOfUseMutationVariables = Exact<{
  effectiveDate: Scalars['String']['input'];
  terms: TermsInput;
}>;

export type CreateTermsOfUseMutation = {
  __typename?: 'Mutation';
  createTermsOfUse?: {
    __typename?: 'TermsOfUse';
    id: string;
    effectiveDate: string;
    terms: {
      __typename?: 'Terms';
      acknowledgement: string;
      general: { __typename?: 'General'; title: string; intro: string };
      sections: Array<{
        __typename?: 'Section';
        title: string;
        content: Array<{
          __typename?: 'Content';
          term: string;
          definition: string;
        }>;
      }>;
    };
  } | null;
};

export type UpdateTermsOfUseMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  terms: TermsInput;
}>;

export type UpdateTermsOfUseMutation = {
  __typename?: 'Mutation';
  updateTermsOfUse?: {
    __typename?: 'TermsOfUse';
    id: string;
    effectiveDate: string;
    terms: {
      __typename?: 'Terms';
      acknowledgement: string;
      general: { __typename?: 'General'; title: string; intro: string };
      sections: Array<{
        __typename?: 'Section';
        title: string;
        content: Array<{
          __typename?: 'Content';
          term: string;
          definition: string;
        }>;
      }>;
    };
  } | null;
};

export type GetTermsOfUseQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type GetTermsOfUseQuery = {
  __typename?: 'Query';
  termsOfUse?: {
    __typename?: 'TermsOfUse';
    id: string;
    effectiveDate: string;
    terms: {
      __typename?: 'Terms';
      acknowledgement: string;
      general: { __typename?: 'General'; title: string; intro: string };
      sections: Array<{
        __typename?: 'Section';
        title: string;
        content: Array<{
          __typename?: 'Content';
          term: string;
          definition: string;
        }>;
      }>;
    };
  } | null;
};

export const CreateBrokerDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateBroker' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateBrokerInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createBroker' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'brokerId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'licenseNumber' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'address' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'street' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contact' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateBrokerMutation,
  CreateBrokerMutationVariables
>;
export const UpdateBrokerDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateBroker' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateBrokerInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateBroker' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'brokerId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'licenseNumber' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'address' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'street' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contact' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateBrokerMutation,
  UpdateBrokerMutationVariables
>;
export const GetBrokerByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetBrokerById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'brokerId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'broker' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'brokerId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'brokerId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'brokerId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'licenseNumber' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'address' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'street' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contact' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'associatedShipments' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetBrokerByIdQuery, GetBrokerByIdQueryVariables>;
export const GetAllBrokersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAllBrokers' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'brokers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'brokerId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'licenseNumber' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contact' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAllBrokersQuery, GetAllBrokersQueryVariables>;
export const GetTruckDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetTruck' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'truckId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'truck' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'truckId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'truckId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'truckId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'capacity' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'licensePlate' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'model' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetTruckQuery, GetTruckQueryVariables>;
export const CreatePrivacyPolicyDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreatePrivacyPolicy' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'lastUpdated' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'introduction' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'sections' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'PrivacyPolicySectionInput' },
                },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createPrivacyPolicy' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'lastUpdated' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'lastUpdated' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'introduction' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'introduction' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sections' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sections' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastUpdated' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'introduction' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'sections' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'content' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreatePrivacyPolicyMutation,
  CreatePrivacyPolicyMutationVariables
>;
export const UpdatePrivacyPolicyDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdatePrivacyPolicy' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'lastUpdated' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'introduction' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'sections' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'PrivacyPolicySectionInput' },
                },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updatePrivacyPolicy' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'lastUpdated' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'lastUpdated' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'introduction' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'introduction' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sections' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sections' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastUpdated' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'introduction' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'sections' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'content' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdatePrivacyPolicyMutation,
  UpdatePrivacyPolicyMutationVariables
>;
export const GetPrivacyPolicyDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getPrivacyPolicy' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'privacyPolicy' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'lastUpdated' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'introduction' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'sections' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'content' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetPrivacyPolicyQuery,
  GetPrivacyPolicyQueryVariables
>;
export const CreateShipmentDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateShipment' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateShipmentInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createShipment' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'shipmentId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'brokerId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'driverId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'truckId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'cargoDetails' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'weight' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'volume' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'dimensions' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'length' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'width' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'height' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'costValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'handlingInstructions' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isHazardous' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hazardousDetails' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'unNumber' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'class' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'packingGroup' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cargoCategory' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pickupLocation' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'deliveryLocation' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'timestamps' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'scheduledPickup' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'actualPickup' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'scheduledDelivery' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'actualDelivery' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'trackingUpdates' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'timestamp' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'location' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'latitude' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'longitude' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateShipmentMutation,
  CreateShipmentMutationVariables
>;
export const UpdateShipmentStatusDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateShipmentStatus' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'shipmentId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'status' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'ShipmentStatus' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateShipmentStatus' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'shipmentId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'shipmentId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'status' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'status' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'shipmentId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateShipmentStatusMutation,
  UpdateShipmentStatusMutationVariables
>;
export const AddTrackingUpdateDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AddTrackingUpdate' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'shipmentId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'TrackingUpdateInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'addTrackingUpdate' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'shipmentId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'shipmentId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'shipmentId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'trackingUpdates' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'timestamp' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'location' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'latitude' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'longitude' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AddTrackingUpdateMutation,
  AddTrackingUpdateMutationVariables
>;
export const GetShipmentByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetShipmentById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'shipmentId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'shipment' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'shipmentId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'shipmentId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'shipmentId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'brokerId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'driverId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'truckId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'cargoDetails' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'weight' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'volume' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'dimensions' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'length' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'width' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'height' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'costValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'handlingInstructions' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isHazardous' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hazardousDetails' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'unNumber' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'class' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'packingGroup' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cargoCategory' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pickupLocation' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'deliveryLocation' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'timestamps' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'scheduledPickup' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'actualPickup' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'scheduledDelivery' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'actualDelivery' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'trackingUpdates' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'timestamp' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'location' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'latitude' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'longitude' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetShipmentByIdQuery,
  GetShipmentByIdQueryVariables
>;
export const GetShipmentsByStatusDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetShipmentsByStatus' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'status' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'ShipmentStatus' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'shipments' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'status' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'status' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'shipmentId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'brokerId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'driverId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'truckId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'cargoDetails' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'weight' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'volume' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pickupLocation' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'deliveryLocation' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'timestamps' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'scheduledPickup' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'actualPickup' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'scheduledDelivery' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'actualDelivery' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'trackingUpdates' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'timestamp' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'location' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'latitude' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'longitude' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetShipmentsByStatusQuery,
  GetShipmentsByStatusQueryVariables
>;
export const GetAllShipmentsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAllShipments' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'shipments' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'shipmentId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'brokerId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'driverId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'truckId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'cargoDetails' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'weight' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'volume' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'dimensions' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'length' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'width' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'height' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'costValue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'currency' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'handlingInstructions' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isHazardous' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'hazardousDetails' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'unNumber' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'class' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'packingGroup' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'cargoCategory' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pickupLocation' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'deliveryLocation' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'city' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'zip' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'timestamps' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'scheduledPickup' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'actualPickup' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'scheduledDelivery' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'actualDelivery' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'trackingUpdates' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'timestamp' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'location' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'latitude' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'longitude' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAllShipmentsQuery,
  GetAllShipmentsQueryVariables
>;
export const CreateTermsOfUseDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateTermsOfUse' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'effectiveDate' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'terms' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'TermsInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createTermsOfUse' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'effectiveDate' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'effectiveDate' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'terms' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'terms' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'effectiveDate' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'terms' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'general' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'intro' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'sections' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'content' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'term' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'definition' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'acknowledgement' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateTermsOfUseMutation,
  CreateTermsOfUseMutationVariables
>;
export const UpdateTermsOfUseDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateTermsOfUse' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'terms' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'TermsInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateTermsOfUse' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'terms' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'terms' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'effectiveDate' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'terms' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'general' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'intro' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'sections' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'content' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'term' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'definition' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'acknowledgement' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateTermsOfUseMutation,
  UpdateTermsOfUseMutationVariables
>;
export const GetTermsOfUseDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetTermsOfUse' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'termsOfUse' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'effectiveDate' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'terms' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'general' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'intro' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'sections' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'content' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'term' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'definition' },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'acknowledgement' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetTermsOfUseQuery, GetTermsOfUseQueryVariables>;
