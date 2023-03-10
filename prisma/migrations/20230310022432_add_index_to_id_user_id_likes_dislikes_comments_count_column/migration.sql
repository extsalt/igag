-- CreateIndex
CREATE INDEX "posts_id_userId_likes_dislikes_commentsCount_idx" ON "posts"("id", "userId", "likes", "dislikes", "commentsCount");
