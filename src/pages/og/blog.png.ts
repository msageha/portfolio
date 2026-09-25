import type { APIRoute } from "astro";
import { BLOG } from "../../data/site";
import { ogImageResponse } from "../../lib/og";

export const GET: APIRoute = () => ogImageResponse(BLOG.title, BLOG.description);
