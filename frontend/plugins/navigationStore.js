// plugins/navigationStore.js
import { useNavigationStore } from "@/stores/navigationStore";

export default function ({ store }) {
  const navigationStore = useNavigationStore(store);
  navigationStore.setTitle("");
}
