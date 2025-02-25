import crypto from 'crypto';

// generate a token
export function generateToken(): string {
    return crypto.randomBytes(32).toString('hex');
}


// validate provided token matches the one stored in the session/cookie
export function validateToken(submittedToken: string | undefined, storedToken: string | undefined): boolean {
    if (!submittedToken || submittedToken !== storedToken) {
        return false;
    }
    
    // use timing-safe comparison to prevent timing attacks
    return crypto.timingSafeEqual(
        Buffer.from(submittedToken),
        Buffer.from(storedToken)
    );
}