import { useRef, useEffect } from "react";

export function useFocus(deps = []) {
  const ref = useRef<HTMLInputElement | null>(null);

  const focus = () => {
    ref.current?.focus();
  };

  useEffect(focus, deps);

  return { ref: ref, focus };
}
