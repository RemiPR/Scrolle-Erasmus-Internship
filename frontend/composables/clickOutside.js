// composables/clickOutside.js
export default function clickOutside(el, binding, exclude) {
  el.clickOutsideEvent = function (event) {
    if (
      !(
        el === event.target ||
        el.contains(event.target) ||
        (exclude && exclude.contains(event.target))
      )
    ) {
      binding(event);
    }
  };
  document.addEventListener("click", el.clickOutsideEvent);
}

export function removeClickOutside(el) {
  if (el && el.clickOutsideEvent) {
    document.removeEventListener("click", el.clickOutsideEvent);
    delete el.clickOutsideEvent;
  }
}
