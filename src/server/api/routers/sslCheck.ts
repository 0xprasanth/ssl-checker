
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import axios from "axios";
import { env } from "@/env";
export interface SSLCheck {
    validity: boolean,
    expiration_date: string,
    issuer: string,
    subject: string,
    is_valid_for_domain: boolean,
    ca_valid: boolean,
    self_signed: boolean,
    revocation_status: string,
}

const domainCheck: SSLCheck[] = [];


export const sslCheckRouter = createTRPCRouter({

    checker: publicProcedure.input(z.object({domain: z.string()})).mutation(async ({ input }) => {
        const resp = await axios.post<SSLCheck>(`${env.NEXT_BACKEND_API}/ssl`, {domain: input.domain})
        domainCheck.push(resp.data)
        return resp.data

    }),

    getLatestSSLCheck: publicProcedure.query(() => {
        return domainCheck.at(-1) ?? null
    })
})