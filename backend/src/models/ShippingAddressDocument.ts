export default interface ShippingAddressDocument extends Document {
  address: string;
  city: string;
  postalCode: string;
  country: string;
}
