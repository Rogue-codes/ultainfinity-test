interface ErrorData {
  count: number;
  code: number | null;
}

interface Data {
  bookings_current_last_3days: number;
  timeout_yesterday: number;
  zeroes_yesterday: number;
  avg_price_yesterday: number;
  clicks_current_last_hour: number;
  avg_price_last_hour: number;
  zeroes_last_hour: number | null;
  mobile_pessimizer: number;
  bookings_current_last_hour: number;
  searches_current_last_3days: number;
  bookings_previous_last_hour: number;
  str_yesterday: number;
  errors_yesterday: number;
  ctr_last_hour: number;
  gate_id: number;
  ctr_yesterday: number;
  searches_current_yesterday: number;
  bookings_previous_last_3days: number;
  zeroes_last_3days: number;
  clicks_previous_last_hour: number;
  timeout_last_3days: number;
  errors_last_3days: number;
  bookings_previous_yesterday: number;
  searches_previous_yesterday: number;
  searches_previous_last_hour: number;
  str_last_hour: number | null;
  clicks_previous_yesterday: number;
  avg_price_last_3days: number;
  searches_current_last_hour: number;
  web_pessimizer: number;
  ctr_last_3days: number;
  clicks_previous_last_3days: number;
  str_last_3days: number;
  timeout_last_hour: number | null;
  clicks_current_last_3days: number;
  bookings_current_yesterday: number;
  searches_previous_last_3days: number;
  errors_last_hour: number | null;
  clicks_current_yesterday: number;
}

export interface ResponseData {
  errors_last_3days: ErrorData[];
  errors_yesterday: ErrorData[];
  errors_last_hour: ErrorData[];
  data: Data[];
}
