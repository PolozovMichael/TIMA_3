export const useAddress = (string: string) => {
  return `${string.substring(0, 6)}...${string.substring(string.length - 6)}`;
}
