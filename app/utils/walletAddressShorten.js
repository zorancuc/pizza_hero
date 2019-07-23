export const walletAddressShorten = str => {
  if (!str) return '';
  const res = `${str.substring(0, 5)}....${str.substring(
    str.length - 5,
    str.length,
  )}`;
  return res;
};
