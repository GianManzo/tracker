import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";

export const faIcons = () => {
  return library.add(faPlay, faStop);
};
