/*
  Warnings:

  - You are about to drop the column `hashedPsassword` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "hashedPsassword",
ADD COLUMN     "hashedPassword" TEXT;
