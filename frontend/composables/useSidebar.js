// composables/useSidebar.js
import { ref, provide, inject } from "vue";

const sidebarLinksSymbol = Symbol("sidebarLinks");
const additionalLinksSymbol = Symbol("additionalLinks");
const activeComponentSymbol = Symbol("activeComponent");
const teacherInfoSymbol = Symbol("teacherInfo");

export function provideSidebar(
  sidebarLinks = [],
  additionalLinks = [],
  initialComponent = null,
  teacherInfo = {}
) {
  const activeComponent = ref(initialComponent);

  function setActiveComponent(component) {
    activeComponent.value = component;
  }

  provide(sidebarLinksSymbol, sidebarLinks);
  provide(additionalLinksSymbol, additionalLinks);
  provide(activeComponentSymbol, {
    activeComponent,
    setActiveComponent,
  });
  provide(teacherInfoSymbol, teacherInfo);
}

export function useSidebar() {
  const sidebarLinks = inject(sidebarLinksSymbol, []);
  const additionalLinks = inject(additionalLinksSymbol, []);
  const { activeComponent, setActiveComponent } = inject(
    activeComponentSymbol,
    {
      activeComponent: ref(null),
      setActiveComponent: () => {},
    }
  );
  const teacherInfo = inject(teacherInfoSymbol, {});

  return {
    sidebarLinks,
    additionalLinks,
    activeComponent,
    setActiveComponent,
    teacherInfo,
  };
}
