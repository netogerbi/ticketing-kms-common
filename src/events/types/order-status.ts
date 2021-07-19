export enum OrderStatus {
  /**
   * Order created but ticket not reserved.
   */
  Created = "created",

  /**
   * Ticket not available ou user canceled.
   * Or order expires before payment.
   */
  Cancelled = "canceled",

  /**
   * Order successfully reserved the ticket.
   */
  AwaitingPayment = "awaiting:payment",

  /**
   * Order reserved the ticket and payment has been provided successfully.
   */
  Complete = "complete",
}
