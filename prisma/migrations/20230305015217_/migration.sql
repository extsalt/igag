-- DropIndex
DROP INDEX "users_username_key";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "username" DROP NOT NULL,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");