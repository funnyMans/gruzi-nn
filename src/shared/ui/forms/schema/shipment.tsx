import * as Yup from 'yup';

export const shipmentValidationSchema = Yup.object({
  description: Yup.string().required('Cargo description is required'),
  weight: Yup.number()
    .required('Weight is required')
    .positive('Weight must be positive')
    .min(1000),
  volume: Yup.number()
    .required('Volume is required')
    .positive('Volume must be positive'),
  dimensions: Yup.object({
    length: Yup.number().positive('Length must be positive'),
    width: Yup.number().positive('Width must be positive'),
    height: Yup.number().positive('Height must be positive'),
  }).notRequired(),
  costValue: Yup.number()
    .required('Cost value is required')
    .positive('Cost value must be positive'),
  currency: Yup.string(),
  isHazardous: Yup.boolean().required('Hazardous status is required'),
  cargoCategory: Yup.string().required('Cargo category is required'),

  // pickupLocation: Yup.object({
  //   address: Yup.string().required('Pickup address is required'),
  //   city: Yup.string().required('Pickup city is required'),
  //   state: Yup.string().required('Pickup state is required'),
  //   zip: Yup.string(),
  // }),
  // deliveryLocation: Yup.object({
  //   address: Yup.string().required('Delivery address is required'),
  //   city: Yup.string().required('Delivery city is required'),
  //   state: Yup.string().required('Delivery state is required'),
  //   zip: Yup.string(),
  // }),

  hazardousDetails: Yup.object({
    unNumber: Yup.string().test(
      'hazardous-required',
      'UN number is required',
      function (value) {
        const { isHazardous } = this.parent;
        if (isHazardous && !value) {
          return this.createError({ message: 'UN number is required' });
        }
        return true;
      }
    ),
    class: Yup.string().test(
      'hazardous-required',
      'Class is required',
      function (value) {
        const { isHazardous } = this.parent;
        if (isHazardous && !value) {
          return this.createError({ message: 'Class is required' });
        }
        return true;
      }
    ),
    packingGroup: Yup.string().test(
      'hazardous-required',
      'Packing group is required',
      function (value) {
        const { isHazardous } = this.parent;
        if (isHazardous && !value) {
          return this.createError({ message: 'Packing group is required' });
        }
        return true;
      }
    ),
  }),

  timestamps: Yup.object({
    scheduledPickup: Yup.string().required('Scheduled Pickup is required'),
    scheduledDelivery: Yup.string().required('Scheduled Delivery is required'),
  }),

  trackingUpdates: Yup.array()
    .of(
      Yup.object({
        timestamp: Yup.string().required('Timestamp is required'),
        location: Yup.object({
          latitude: Yup.number()
            .required('Latitude is required')
            .positive('Latitude must be positive'),
          longitude: Yup.number()
            .required('Longitude is required')
            .positive('Longitude must be positive'),
        }),
        status: Yup.string().required('Status is required'),
      })
    )
    .notRequired(),
});
