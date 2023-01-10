export class PurchaseOutput {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  itemId?: string;
  itemType?: string;
  cost?: number;
  newValue?: number;
  userId?: string;
  isSeen?: boolean;
  recentPurchaseDate?: Date;
}
