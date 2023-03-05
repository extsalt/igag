-- AlterTable
ALTER TABLE "comments" ADD CONSTRAINT "comments_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "posts" ADD CONSTRAINT "posts_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "tags" ADD CONSTRAINT "tags_pkey" PRIMARY KEY ("id");
