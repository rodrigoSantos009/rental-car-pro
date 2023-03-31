-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cars" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "doors" INTEGER NOT NULL,
    "passengers" INTEGER NOT NULL,
    "rentalPrice" REAL NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_cars" ("available", "created_at", "doors", "id", "model", "passengers", "rentalPrice", "updated_at", "year") SELECT "available", "created_at", "doors", "id", "model", "passengers", "rentalPrice", "updated_at", "year" FROM "cars";
DROP TABLE "cars";
ALTER TABLE "new_cars" RENAME TO "cars";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
