import crypto from 'crypto';

/**
 * Generates a cryptographically secure random token
 */
export function generateToken(): string {
    return crypto.randomBytes(32).toString('hex');
}

/**
 * Validates that the provided token matches the one stored in the session/cookie
 */
export function validateToken(submittedToken: string | undefined, storedToken: string | undefined): boolean {
    if (!submittedToken || submittedToken !== storedToken) {
        return false;
    }
    
    // Use timing-safe comparison to prevent timing attacks
    return crypto.timingSafeEqual(
        Buffer.from(submittedToken),
        Buffer.from(storedToken)
    );
}