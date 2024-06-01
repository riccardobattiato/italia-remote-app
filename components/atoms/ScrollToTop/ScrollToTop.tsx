"use client";

import { ChevronUpIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const ButtonIcon = () => {
  const handlePress = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Button
      className="transition-all"
      variant="outline"
      size="icon"
      onClick={handlePress}
    >
      <ChevronUpIcon className="h-4 w-4" />
    </Button>
  );
};

export default ButtonIcon;
