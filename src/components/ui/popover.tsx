import * as React from "react";

interface PopoverContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const PopoverContext = React.createContext<PopoverContextValue | null>(null);

export function Popover({
  children,
  open: openProp,
  onOpenChange,
  className,
}: React.PropsWithChildren<{
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}>) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  const controlled = openProp !== undefined;
  const open = controlled ? !!openProp : uncontrolledOpen;
  const setOpen = React.useCallback(
    (next: boolean) => {
      if (!controlled) setUncontrolledOpen(next);
      onOpenChange?.(next);
    },
    [controlled, onOpenChange]
  );

  return (
    <PopoverContext.Provider value={{ open, setOpen }}>
      <div className={className} style={{ position: "relative" }}>
        {children}
      </div>
    </PopoverContext.Provider>
  );
}

export function PopoverTrigger({
  children,
  asChild,
}: {
  children: React.ReactElement;
  asChild?: boolean;
}) {
  const ctx = React.useContext(PopoverContext);
  if (!ctx) return children;
  const child = React.Children.only(children) as React.ReactElement<{
    onClick?: (e: React.MouseEvent) => void;
  }>;
  const props: { onClick: (e: React.MouseEvent) => void } = {
    onClick: (e: React.MouseEvent) => {
      child.props?.onClick?.(e);
      ctx.setOpen(!ctx.open);
    },
  };
  return asChild ? (
    React.cloneElement(child, props)
  ) : (
    <button type="button" {...props}>
      {child}
    </button>
  );
}

export function PopoverContent({
  children,
  className,
  align,
}: React.PropsWithChildren<{ className?: string; align?: "start" | "end" }>) {
  const ctx = React.useContext(PopoverContext);
  const panelRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!ctx?.open) return;
    function handleOutside(e: MouseEvent | TouchEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        ctx?.setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [ctx?.open, ctx?.setOpen]);

  if (!ctx?.open) return null;
  return (
    <div
      ref={panelRef}
      className={className}
      style={
        {
          position: "absolute",
          top: "100%",
          marginTop: 8,
          [align === "end" ? "right" : "left"]: 0,
          zIndex: 50,
        } as React.CSSProperties
      }
      role="dialog"
    >
      {children}
    </div>
  );
}
