/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { broker as Query_broker } from './brokers/resolvers/Query/broker';
import    { brokers as Query_brokers } from './brokers/resolvers/Query/brokers';
import    { carrier as Query_carrier } from './carriers/resolvers/Query/carrier';
import    { carriers as Query_carriers } from './carriers/resolvers/Query/carriers';
import    { driver as Query_driver } from './drivers/resolvers/Query/driver';
import    { drivers as Query_drivers } from './drivers/resolvers/Query/drivers';
import    { faqs as Query_faqs } from './faqs/resolvers/Query/faqs';
import    { privacyPolicy as Query_privacyPolicy } from './privacy-policy/resolvers/Query/privacyPolicy';
import    { shipment as Query_shipment } from './shipments/resolvers/Query/shipment';
import    { shipments as Query_shipments } from './shipments/resolvers/Query/shipments';
import    { termsOfUse as Query_termsOfUse } from './terms-of-use/resolvers/Query/termsOfUse';
import    { truck as Query_truck } from './trucks/resolvers/Query/truck';
import    { trucks as Query_trucks } from './trucks/resolvers/Query/trucks';
import    { addTrackingUpdate as Mutation_addTrackingUpdate } from './shipments/resolvers/Mutation/addTrackingUpdate';
import    { createBroker as Mutation_createBroker } from './brokers/resolvers/Mutation/createBroker';
import    { createCarrier as Mutation_createCarrier } from './carriers/resolvers/Mutation/createCarrier';
import    { createPrivacyPolicy as Mutation_createPrivacyPolicy } from './privacy-policy/resolvers/Mutation/createPrivacyPolicy';
import    { createShipment as Mutation_createShipment } from './shipments/resolvers/Mutation/createShipment';
import    { createTermsOfUse as Mutation_createTermsOfUse } from './terms-of-use/resolvers/Mutation/createTermsOfUse';
import    { updateBroker as Mutation_updateBroker } from './brokers/resolvers/Mutation/updateBroker';
import    { updateCarrier as Mutation_updateCarrier } from './carriers/resolvers/Mutation/updateCarrier';
import    { updatePrivacyPolicy as Mutation_updatePrivacyPolicy } from './privacy-policy/resolvers/Mutation/updatePrivacyPolicy';
import    { updateShipmentStatus as Mutation_updateShipmentStatus } from './shipments/resolvers/Mutation/updateShipmentStatus';
import    { updateTermsOfUse as Mutation_updateTermsOfUse } from './terms-of-use/resolvers/Mutation/updateTermsOfUse';
import    { Address } from './brokers/resolvers/Address';
import    { Broker } from './brokers/resolvers/Broker';
import    { CargoDetails } from './shipments/resolvers/CargoDetails';
import    { Carrier } from './carriers/resolvers/Carrier';
import    { Contact } from './brokers/resolvers/Contact';
import    { Content } from './terms-of-use/resolvers/Content';
import    { Coordinates } from './shipments/resolvers/Coordinates';
import    { Dimensions } from './shipments/resolvers/Dimensions';
import    { Driver } from './drivers/resolvers/Driver';
import    { FAQ } from './faqs/resolvers/FAQ';
import    { General } from './terms-of-use/resolvers/General';
import    { HazardousDetails } from './shipments/resolvers/HazardousDetails';
import    { Location } from './shipments/resolvers/Location';
import    { PrivacyPolicy } from './privacy-policy/resolvers/PrivacyPolicy';
import    { PrivacyPolicySection } from './privacy-policy/resolvers/PrivacyPolicySection';
import    { Section } from './terms-of-use/resolvers/Section';
import    { Shipment } from './shipments/resolvers/Shipment';
import    { Terms } from './terms-of-use/resolvers/Terms';
import    { TermsOfUse } from './terms-of-use/resolvers/TermsOfUse';
import    { Timestamps } from './shipments/resolvers/Timestamps';
import    { TrackingUpdate } from './shipments/resolvers/TrackingUpdate';
import    { Truck } from './trucks/resolvers/Truck';
    export const resolvers: Resolvers = {
      Query: { broker: Query_broker,brokers: Query_brokers,carrier: Query_carrier,carriers: Query_carriers,driver: Query_driver,drivers: Query_drivers,faqs: Query_faqs,privacyPolicy: Query_privacyPolicy,shipment: Query_shipment,shipments: Query_shipments,termsOfUse: Query_termsOfUse,truck: Query_truck,trucks: Query_trucks },
      Mutation: { addTrackingUpdate: Mutation_addTrackingUpdate,createBroker: Mutation_createBroker,createCarrier: Mutation_createCarrier,createPrivacyPolicy: Mutation_createPrivacyPolicy,createShipment: Mutation_createShipment,createTermsOfUse: Mutation_createTermsOfUse,updateBroker: Mutation_updateBroker,updateCarrier: Mutation_updateCarrier,updatePrivacyPolicy: Mutation_updatePrivacyPolicy,updateShipmentStatus: Mutation_updateShipmentStatus,updateTermsOfUse: Mutation_updateTermsOfUse },
      
      Address: Address,
Broker: Broker,
CargoDetails: CargoDetails,
Carrier: Carrier,
Contact: Contact,
Content: Content,
Coordinates: Coordinates,
Dimensions: Dimensions,
Driver: Driver,
FAQ: FAQ,
General: General,
HazardousDetails: HazardousDetails,
Location: Location,
PrivacyPolicy: PrivacyPolicy,
PrivacyPolicySection: PrivacyPolicySection,
Section: Section,
Shipment: Shipment,
Terms: Terms,
TermsOfUse: TermsOfUse,
Timestamps: Timestamps,
TrackingUpdate: TrackingUpdate,
Truck: Truck
    }