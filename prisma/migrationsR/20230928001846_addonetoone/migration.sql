/*
  Warnings:

  - You are about to drop the column `isInCart` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `isInWishlist` on the `Product` table. All the data in the column will be lost.

*/
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
    "wishlistedById" INTEGER,
    "cartedById" INTEGER,
    "purchasedById" INTEGER,
    CONSTRAINT "Product_wishlistedById_fkey" FOREIGN KEY ("wishlistedById") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Product_cartedById_fkey" FOREIGN KEY ("cartedById") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Product_purchasedById_fkey" FOREIGN KEY ("purchasedById") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("collection", "description", "discountPercentage", "id", "listPrice", "listPriceCents", "name", "unitsRemaining") SELECT "collection", "description", "discountPercentage", "id", "listPrice", "listPriceCents", "name", "unitsRemaining" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
