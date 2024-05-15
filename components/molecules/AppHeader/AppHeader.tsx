import Logo from "@/components/atoms/Logo";
import { ModeToggle } from "@/components/ui/mode-toggle";

const AppHeader = () => (
  <header className="header px-8 py-5 flex justify-between items-center">
    <Logo />
    <ModeToggle />
  </header>
);

export default AppHeader;
