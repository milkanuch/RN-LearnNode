export const checkIsUserAdmin = (userEmail: string) => {
  const ADMIN_DOMAINS = ['nodeadmin.com', 'nodeadmin.ua'];
  const userDomain = userEmail.split('@')[1];

  return ADMIN_DOMAINS.includes(userDomain);
};
