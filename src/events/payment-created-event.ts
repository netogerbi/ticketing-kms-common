import { Subjects } from "./subjects";

export interface PaymentCreatedEvent {
  subject: Subjects.PaymentCreatedEvent;
  data: {
    id: string;
    orderId: string;
    stripeId: string;
  };
}
