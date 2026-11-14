import { SearchForm } from "./SearchForm";

interface HeaderProps {
  onSearch: (ipAddress: string) => void;
}

export const Header = ({ onSearch }: HeaderProps) => {
  return (
    <header className="flex flex-col items-center justify-center gap-4 bg-[url('src/assets/pattern-bg-mobile.png')] md:bg-[url('src/assets/pattern-bg-desktop.png')] bg-cover bg-no-repeat bg-center py-10 pb-14 md:py-12 md:pb-18">
      <h1 className="text-white font-bold text-3xl">IP Address Tracker</h1>
      <SearchForm onSearch={onSearch} />{" "}
    </header>
  );
};
