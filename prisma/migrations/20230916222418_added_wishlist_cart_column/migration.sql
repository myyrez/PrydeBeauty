-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "collection" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "discountPercentage" INTEGER NOT NULL,
    "listPrice" INTEGER NOT NULL,
    "listPriceCents" INTEGER NOT NULL,
    "unitsRemaining" INTEGER NOT NULL,
    "isInWishlist" BOOLEAN NOT NULL DEFAULT false,
    "isInCart" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Product" ("collection", "description", "discountPercentage", "id", "listPrice", "listPriceCents", "name", "unitsRemaining") SELECT "collection", "description", "discountPercentage", "id", "listPrice", "listPriceCents", "name", "unitsRemaining" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
