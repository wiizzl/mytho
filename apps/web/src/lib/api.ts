import { treaty } from "@elysiajs/eden";
import type { Server } from "@mytho/server";

import { env } from "@/lib/env";

export const API_URL = env.VITE_API_URL;
export const WS_URL = env.VITE_WS_URL;

export const api = treaty<Server>(API_URL);
