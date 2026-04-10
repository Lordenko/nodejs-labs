import { delay } from "./delay.js";

interface UserProfile {
    id: string;
    name: string;
    email: string;
}

interface FetchUserProfilesParams {
    userIds: string[]
}

interface FetchUserProfileParams {
    userId: string
}

const fetchUserProfile = async (params: FetchUserProfileParams): Promise<UserProfile> => {
    const { userId } = params

    const randomMs = Math.floor((Math.random() * 100) + 50);

    await delay({ ms: randomMs })
    return { id: userId, name: `User ${userId}`, email: `user${userId}@example.com` }
}

export const fetchUserProfiles = async (params: FetchUserProfilesParams): Promise<UserProfile[]> => {
    const { userIds } = params

    const promises = userIds.map((userId) => fetchUserProfile({ userId }))
    return await Promise.all(promises)
}