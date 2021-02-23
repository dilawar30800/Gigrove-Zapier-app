const fetch = require("node-fetch");
const fetchToken=async function(z,bundle)
{
  const options = {
  url: 'https://gigrove.com/api/wp/v2/token',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body:{
 "api_key":bundle.authData.api_key,
  "api_secret": bundle.authData.api_secret
  }
}

return await z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;
    return results;
  });
}

const perform =async (z, bundle) => {
  const token=await fetchToken(z,bundle);
const options = {
  url: 'https://gigrove.com/api/request/v1/orders',
  method: 'GET',
  headers: {
    'Accept': 'application/json',
   'Authorization':'Bearer '+token.access_token
     },
  params: {
   
  },
  body:{
  }
}

return z.request(options)
  .then((response) => {
    response.throwForStatus();
    const results = response.json;   
    return results;
  });
};




// const perform = (z, bundle) => {
//   const options = {
//     url: 'https://gigrove.com/api/request/v1/orders',
//     method: 'GET',
//     headers: {
//       Accept: 'application/json',
//       Authorization: `Bearer ${bundle.authData.token}`,
//     },
//     params: {},
//   };
//   return z.request(options).then((response) => {
//     response.throwForStatus();
//     const results = response.json;

//     // You can do any parsing you need for results here before returning them

//     return results;
//   });
// };

module.exports = {
  operation: {
    perform: perform,
    sample: {
      id: 5694447,
      parent_id: 0,
      status: 'completed',
      currency: 'USD',
      version: '3.6.4',
      prices_include_tax: false,
      date_created: '2020-07-09T17:32:27',
      date_modified: '2020-07-22T14:06:38',
      discount_total: '0',
      discount_tax: '0',
      shipping_total: '0.00',
      shipping_tax: '0',
      cart_tax: '0',
      total: '30.47',
      total_tax: '0',
      customer_id: 4562,
      order_key: 'wc_order_ygAejkS7i7bIp',
      billing: {
        first_name: 'Jason',
        last_name: 'Crawford',
        company: '',
        address_1: 'Some street name',
        address_2: '',
        city: 'Nottingham',
        state: '',
        postcode: 'N2 9ED',
        country: 'UK',
        email: 'vivneifer3932@gmail.com',
        phone: '0611855903',
      },
      shipping: {
        first_name: '',
        last_name: '',
        company: '',
        address_1: '',
        address_2: '',
        city: '',
        state: '',
        postcode: '',
        country: '',
      },
      payment_method: 'stripe_split',
      payment_method_title: 'Credit card',
      transaction_id: 'ch_1H31jdEXrwBEvbI5IwdWv5Zy',
      customer_ip_address: '79.101.57.172',
      customer_user_agent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
      created_via: 'checkout',
      customer_note: '',
      date_completed: '2020-07-22T14:06:38',
      date_paid: '2020-07-09T17:32:30',
      cart_hash: 'a5132729e920438b4d385d1a739ebf10',
      number: '5694447',
      meta_data: [
        { id: 386202, key: 'is_vat_exempt', value: 'no' },
        { id: 386203, key: '_wcfmmp_order_processed', value: 'yes' },
        { id: 386204, key: '_stripe_customer_id', value: 'cus_HcG77wuEYDr6UB' },
        {
          id: 386205,
          key: '_wcfmmp_stripe_split_pay_source_id',
          value: 'src_1H31jaEXrwBEvbI58NGdZKJ3',
        },
        {
          id: 386206,
          key: '_wcfmmp_stripe_intent_id',
          value: 'pi_1H31jcEXrwBEvbI5snsA1fV1',
        },
        { id: 386207, key: '_stripe_charge_captured', value: 'yes' },
        { id: 386208, key: '_stripe_fee', value: '1.18' },
        { id: 386209, key: '_stripe_net', value: '29.29' },
        { id: 386210, key: '_stripe_currency', value: 'USD' },
        {
          id: 386211,
          key: 'wcfmmp_stripe_split_pay_charge_type',
          value: 'transfers_charges',
        },
        { id: 386219, key: '_wcfm_new_order_notified', value: 'yes' },
        {
          id: 386220,
          key: '_wcpdf_invoice_settings',
          value: {
            number_format: { prefix: '', suffix: '', padding: '' },
            my_account_buttons: 'available',
            paper_size: 'letter',
            font_subsetting: false,
            header_logo: '',
            shop_name: { default: '' },
            shop_address: { default: '' },
            footer: { default: '' },
            extra_1: { default: '' },
            extra_2: { default: '' },
            extra_3: { default: '' },
          },
        },
        {
          id: 386221,
          key: '_wcfm_store_invoices',
          value: {
            '4562':
              '/home/runcloud/webapps/gigrove/wp-content/uploads/wcfm/vendor_invoice/4454c95ca2b2b298057cbcb3bdcbb566/2020/07/38d683e9e8df35d4d7a735428e00e082/invoice-000003.pdf',
          },
        },
        { id: 386222, key: '_wcfmmp_order_email_triggered', value: 'yes' },
        {
          id: 386223,
          key: 'wmc_order_info',
          value: {
            USD: {
              rate: '1',
              pos: 'left',
              decimals: '2',
              custom: '',
              hide: '0',
              is_main: 1,
            },
            GBP: {
              rate: '0.793',
              pos: 'left',
              decimals: '2',
              custom: '',
              hide: '0',
            },
            EUR: {
              rate: '0.882',
              pos: 'left',
              decimals: '2',
              custom: '',
              hide: '0',
            },
            CAD: {
              rate: '1.352',
              pos: 'left',
              decimals: '2',
              custom: '',
              hide: '0',
            },
            AUD: {
              rate: '1.432',
              pos: 'left',
              decimals: '2',
              custom: '',
              hide: '0',
            },
          },
        },
        {
          id: 386421,
          key: '_wcpdf_packing_slip_settings',
          value: {
            enabled: 1,
            paper_size: 'letter',
            font_subsetting: false,
            header_logo: '',
            shop_name: { default: '' },
            shop_address: { default: '' },
            footer: { default: '' },
            extra_1: { default: '' },
            extra_2: { default: '' },
            extra_3: { default: '' },
          },
        },
        { id: 386562, key: '_wcfm_membership_order_processed', value: 'yes' },
        { id: 386563, key: '_wcpdf_invoice_date', value: '1595419598' },
        {
          id: 386564,
          key: '_wcpdf_invoice_date_formatted',
          value: '2020-07-22 14:06:38',
        },
        { id: 386565, key: '_wcpdf_invoice_number', value: '5' },
        {
          id: 386566,
          key: '_wcpdf_invoice_number_data',
          value: {
            number: 5,
            formatted_number: '5',
            prefix: '',
            suffix: '',
            document_type: 'invoice',
            order_id: 5694447,
            padding: '',
          },
        },
      ],
      line_items: [
        {
          id: 1226,
          name: 'Design Print',
          product_id: 5694269,
          variation_id: 0,
          quantity: 1,
          tax_class: '',
          subtotal: '30.474938',
          subtotal_tax: '0',
          total: '30.474938',
          total_tax: '0',
          taxes: [],
          meta_data: [
            { id: 8665, key: '_vendor_id', value: '4562' },
            { id: 8666, key: '_wcfmmp_order_item_processed', value: '187' },
          ],
          sku: '',
          price: 30.474938,
        },
      ],
      tax_lines: [],
      shipping_lines: [],
      fee_lines: [],
      coupon_lines: [],
      date_created_gmt: '2020-07-09T15:32:27',
      date_modified_gmt: '2020-07-22T12:06:38',
      date_completed_gmt: '2020-07-22T12:06:38',
      date_paid_gmt: '2020-07-09T15:32:30',
    },
    outputFields: [
      { key: 'id', type: 'integer' },
      { key: 'parent_id', type: 'integer' },
      { key: 'status' },
      { key: 'currency' },
      { key: 'version' },
      { key: 'prices_include_tax', type: 'boolean' },
      { key: 'date_created' },
      { key: 'date_modified' },
      { key: 'discount_total' },
      { key: 'discount_tax' },
      { key: 'shipping_total' },
      { key: 'shipping_tax' },
      { key: 'cart_tax' },
      { key: 'total' },
      { key: 'total_tax' },
      { key: 'customer_id' , type: 'integer'},
      { key: 'order_key' },
      { key: 'billing__first_name' },
      { key: 'billing__last_name' },
      { key: 'billing__company' },
      { key: 'billing__address_1' },
      { key: 'billing__address_2' },
      { key: 'billing__city' },
      { key: 'billing__state' },
      { key: 'billing__postcode' },
      { key: 'billing__country' },
      { key: 'billing__email' },
      { key: 'billing__phone' },
      { key: 'shipping__first_name' },
      { key: 'shipping__last_name' },
      { key: 'shipping__company' },
      { key: 'shipping__address_1' },
      { key: 'shipping__address_2' },
      { key: 'shipping__city' },
      { key: 'shipping__state' },
      { key: 'shipping__postcode' },
      { key: 'shipping__country' },
      { key: 'payment_method' },
      { key: 'payment_method_title' },
      { key: 'transaction_id' },
      { key: 'customer_ip_address' },
      { key: 'customer_user_agent' },
      { key: 'created_via' },
      { key: 'customer_note' },
      { key: 'date_completed' },
      { key: 'date_paid' },
      { key: 'cart_hash' },
      { key: 'number' },
      { key: 'meta_data[]id' },
      { key: 'meta_data[]key' },
      { key: 'meta_data[]value' },
      { key: 'meta_data[]value__number_format__prefix' },
      { key: 'meta_data[]value__number_format__suffix' },
      { key: 'meta_data[]value__number_format__padding' },
      { key: 'meta_data[]value__my_account_buttons' },
      { key: 'meta_data[]value__paper_size' },
      { key: 'meta_data[]value__font_subsetting' },
      { key: 'meta_data[]value__header_logo' },
      { key: 'meta_data[]value__shop_name__default' },
      { key: 'meta_data[]value__shop_address__default' },
      { key: 'meta_data[]value__footer__default' },
      { key: 'meta_data[]value__extra_1__default' },
      { key: 'meta_data[]value__extra_2__default' },
      { key: 'meta_data[]value__extra_3__default' },
      { key: 'meta_data[]value__4562' },
      { key: 'meta_data[]value__USD__rate' },
      { key: 'meta_data[]value__USD__pos' },
      { key: 'meta_data[]value__USD__decimals' },
      { key: 'meta_data[]value__USD__custom' },
      { key: 'meta_data[]value__USD__hide' },
      { key: 'meta_data[]value__USD__is_main' },
      { key: 'meta_data[]value__GBP__rate' },
      { key: 'meta_data[]value__GBP__pos' },
      { key: 'meta_data[]value__GBP__decimals' },
      { key: 'meta_data[]value__GBP__custom' },
      { key: 'meta_data[]value__GBP__hide' },
      { key: 'meta_data[]value__EUR__rate' },
      { key: 'meta_data[]value__EUR__pos' },
      { key: 'meta_data[]value__EUR__decimals' },
      { key: 'meta_data[]value__EUR__custom' },
      { key: 'meta_data[]value__EUR__hide' },
      { key: 'meta_data[]value__CAD__rate' },
      { key: 'meta_data[]value__CAD__pos' },
      { key: 'meta_data[]value__CAD__decimals' },
      { key: 'meta_data[]value__CAD__custom' },
      { key: 'meta_data[]value__CAD__hide' },
      { key: 'meta_data[]value__AUD__rate' },
      { key: 'meta_data[]value__AUD__pos' },
      { key: 'meta_data[]value__AUD__decimals' },
      { key: 'meta_data[]value__AUD__custom' },
      { key: 'meta_data[]value__AUD__hide' },
      { key: 'meta_data[]value__enabled' },
      { key: 'meta_data[]value__number' },
      { key: 'meta_data[]value__formatted_number' },
      { key: 'meta_data[]value__prefix' },
      { key: 'meta_data[]value__suffix' },
      { key: 'meta_data[]value__document_type' },
      { key: 'meta_data[]value__order_id' },
      { key: 'meta_data[]value__padding' },
      { key: 'line_items[]id' },
      { key: 'line_items[]name' },
      { key: 'line_items[]product_id' },
      { key: 'line_items[]variation_id' },
      { key: 'line_items[]quantity' },
      { key: 'line_items[]tax_class' },
      { key: 'line_items[]subtotal' },
      { key: 'line_items[]subtotal_tax' },
      { key: 'line_items[]total' },
      { key: 'line_items[]total_tax' },
      { key: 'line_items[]meta_data[]id' },
      { key: 'line_items[]meta_data[]key' },
      { key: 'line_items[]meta_data[]value' },
      { key: 'line_items[]sku' },
      { key: 'line_items[]price' },
      { key: 'date_created_gmt' },
      { key: 'date_modified_gmt' },
      { key: 'date_completed_gmt' },
      { key: 'date_paid_gmt' },
    ],
  },
  key: 'new_order',
  noun: 'order',
  display: {
    label: 'New Order',
    description: 'Triggers when a  new order is created.',
    hidden: false,
    important: true,
  },
};
