-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "UserProduct" (
    "productId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "isWishlisted" BOOLEAN NOT NULL DEFAULT false,
    "isCarted" BOOLEAN NOT NULL DEFAULT false,
    "isPurchased" BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY ("productId", "userId"),
    CONSTRAINT "UserProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserProduct_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
