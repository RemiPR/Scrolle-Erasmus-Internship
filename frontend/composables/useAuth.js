export const useAuth = () => {
  const parseAuthCookie = () => {
    try {
      const userCookie = useCookie("auth").value;
      if (userCookie) {
        const parsedUser = JSON.parse(
          userCookie.startsWith("j:") ? userCookie.slice(2) : userCookie
        );
        return parsedUser;
      } else {
        console.error("No cookies received");
      }
    } catch (error) {
      console.error("Error parsing auth cookie", error);
    }
  };

  return {
    parseAuthCookie,
  };
};
