-- CreateTable
CREATE TABLE `Model` (
    `modelCode` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`modelCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Unit` (
    `plate` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `modelCode` VARCHAR(191) NOT NULL,
    `seatCount` INTEGER NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `year` INTEGER NOT NULL,

    PRIMARY KEY (`plate`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Unit` ADD CONSTRAINT `Unit_modelCode_fkey` FOREIGN KEY (`modelCode`) REFERENCES `Model`(`modelCode`) ON DELETE RESTRICT ON UPDATE CASCADE;
