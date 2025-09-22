const createOtpStore = () => {
    const pendingRegistrations = {};
    const cleanupExpiredRegistrations = () => {
        const now = Date.now();
        console.log('Running cleanup for expired registrations...');
        for (const email in pendingRegistrations) {
            if (pendingRegistrations[email].expiresAt < now) {
                delete pendingRegistrations[email];
                //console.log(`Cleaned up expired registration for: ${email}`);
            }
        }
    };
    setInterval(cleanupExpiredRegistrations, 15*60*1000);
    return {
        add: (email, data) => {
            pendingRegistrations[email] = data;
        },
        get: (email) => {
            return pendingRegistrations[email];
        },
        remove: (email) => {
            delete pendingRegistrations[email];
        }
    };
};

export const otpStore = createOtpStore();