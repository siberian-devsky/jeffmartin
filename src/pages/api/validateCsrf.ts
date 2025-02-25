import type { APIRoute } from 'astro';
import { validateToken } from "../../utils/csrf";

export const POST: APIRoute = async ({ request, cookies }) => {
    const body = await request.json();
    const submittedToken = body.csrfToken;
    const storedToken = cookies.get("csrfToken")?.value;

    if (validateToken(submittedToken, storedToken)) {
        return new Response(JSON.stringify({ valid: true }), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
    } else {
        return new Response(JSON.stringify({ valid: false }), {
            status: 403,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
};