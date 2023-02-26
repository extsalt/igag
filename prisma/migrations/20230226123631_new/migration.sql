-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "hasComments" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "impressionsCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "isNSFW" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isReported" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "postedAnonymously" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "identityProvider" TEXT NOT NULL DEFAULT 'credential',
ADD COLUMN     "image" TEXT,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "noOfPostsCreated" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "password" DROP NOT NULL;
