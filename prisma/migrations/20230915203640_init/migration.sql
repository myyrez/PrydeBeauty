-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "collection" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "discountPercentage" INTEGER NOT NULL,
    "listPrice" INTEGER NOT NULL,
    "listPriceCents" INTEGER NOT NULL,
    "unitsRemaining" INTEGER NOT NULL
);
