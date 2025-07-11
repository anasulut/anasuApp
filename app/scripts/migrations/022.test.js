import { TransactionStatus } from "@anasuapp/transaction-controller";
import migration22 from "./022";

const properTime = new Date().getTime();
const storage = {
  meta: {},
  data: {
    TransactionController: {
      transactions: [
        { status: TransactionStatus.submitted },
        { status: TransactionStatus.submitted, submittedTime: properTime },
        { status: TransactionStatus.confirmed }
      ]
    }
  }
};

describe("migration", () => {
  it("migrates submitted transactions with missing `submittedTime`", async () => {
    const migratedData = await migration22.migrate(storage);
    const [txMeta1, txMeta2, txMeta3] =
      migratedData.data.TransactionController.transactions;

    expect(migratedData.meta.version).toBe(22);
    
    expect(txMeta1.submittedTime).toBeDefined(); 
    expect(txMeta1.submittedTime).toBeGreaterThan(0);

    expect(txMeta2.submittedTime).toBe(properTime); 

    expect(txMeta3.submittedTime).toBeUndefined();
  });
});
