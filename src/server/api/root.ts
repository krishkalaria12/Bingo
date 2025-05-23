import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import { generateSocialPost } from "@/server/api/routers/create-post-ai";
import { updateSocialPost } from "@/server/api/routers/update-post-ai";
import { generateSocialImage } from "@/server/api/routers/create-image-post-api";
import { twitterRouter } from "@/server/api/routers/twitter";
import { youtubeRouter } from "@/server/api/routers/youtube-api";
import { youtubeScheduleRouter } from "@/server/api/routers/youtube-schedule";
import { twitterScheduleRouter } from "@/server/api/routers/twitter-schedule";
import { linkedinRouter } from "@/server/api/routers/linkedin";
import { linkedinScheduleRouter } from "@/server/api/routers/linkedin-schedule";
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    createPost: generateSocialPost,
    updatePost: updateSocialPost,
    generateImagePost: generateSocialImage,
    youtube : youtubeRouter,
    twitter: twitterRouter,
    youtubeSchedule: youtubeScheduleRouter,
    twitterSchedule: twitterScheduleRouter,
    linkedin: linkedinRouter,
    linkedinSchedule: linkedinScheduleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);