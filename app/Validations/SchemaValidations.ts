
import { z } from "zod"

const issueSchema = z.object({
    title: z.string().min(5),
    description: z.string().min(5)
})


export { issueSchema }