export const isUuidV4 = (maybeUuid: string): boolean => {
	const rxIsUuidV4 = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
	return rxIsUuidV4.test(maybeUuid);
};