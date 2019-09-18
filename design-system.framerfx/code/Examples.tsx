import { Override } from "framer";
import { theme } from "../../design-system/theme";

export function Color(): Override {
  return {
    whileTap: {
      background: theme.color.primary,
      radius: 0
    },
    transition: { duration: 4 }
  };
}
