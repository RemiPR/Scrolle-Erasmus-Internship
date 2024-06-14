// composables/useSidebar.js
import { ref, provide, inject } from "vue";

const sidebarLinksSymbol = Symbol("sidebarLinks");
const activeComponentSymbol = Symbol("activeComponent");

export function provideSidebar(sidebarLinks = [], initialComponent = null) {
  const activeComponent = ref(initialComponent);

  function setActiveComponent(component) {
    activeComponent.value = component;
  }

  provide(sidebarLinksSymbol, sidebarLinks);
  provide(activeComponentSymbol, {
    activeComponent,
    setActiveComponent,
  });
}

export function useSidebar() {
  const sidebarLinks = inject(sidebarLinksSymbol, []);
  const { activeComponent, setActiveComponent } = inject(
    activeComponentSymbol,
    {
      activeComponent: ref(null),
      setActiveComponent: () => {},
    }
  );

  return {
    sidebarLinks,
    activeComponent,
    setActiveComponent,
  };
}
