export const getJWTSecret = (): string => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error(
      "No jwt secret provided, please check the environment variables"
    );
  }

  return secret;
};
