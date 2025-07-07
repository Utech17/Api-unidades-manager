-- postgres
-- CreateTable
CREATE TABLE "Model" (
    "modelCode" VARCHAR(191) PRIMARY KEY,
    "description" VARCHAR(191) NOT NULL
);

-- CreateTable
CREATE TABLE "Unit" (
    "plate" VARCHAR(191) PRIMARY KEY,
    "description" VARCHAR(191) NOT NULL,
    "modelCode" VARCHAR(191) NOT NULL,
    "seatCount" INTEGER NOT NULL,
    "type" VARCHAR(191) NOT NULL,
    "year" INTEGER NOT NULL,
    "image" VARCHAR(191),
    CONSTRAINT "Unit_modelCode_fkey" FOREIGN KEY ("modelCode") REFERENCES "Model"("modelCode") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- mysql
-- CreateTable
-- CREATE TABLE `Model` (
--     `modelCode` VARCHAR(191) PRIMARY KEY,
--     `description` VARCHAR(191) NOT NULL
-- );

-- CreateTable
-- CREATE TABLE `Unit` (
--     `plate` VARCHAR(191) PRIMARY KEY,
--     `description` VARCHAR(191) NOT NULL,
--     `modelCode` VARCHAR(191) NOT NULL,
--     `seatCount` INTEGER NOT NULL,
--     `type` VARCHAR(191) NOT NULL,
--     `year` INTEGER NOT NULL,
--     `image` VARCHAR(191),
--     CONSTRAINT `Unit_modelCode_fkey` FOREIGN KEY (`modelCode`) REFERENCES `Model`(`modelCode`) ON DELETE RESTRICT ON UPDATE CASCADE
-- );