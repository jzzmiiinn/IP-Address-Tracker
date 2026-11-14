import { useState } from "react";

interface SearchFormProps {
  onSearch: (ipAddress: string) => void;
}

export const SearchForm = ({ onSearch }: SearchFormProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  const isValidDomain = (value: string): boolean => {
    const domainRegex =
      /^(?=.{1,253}$)(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;

    return domainRegex.test(value);
  };

  const isValidIp = (value: string): boolean => {
    const parts = value.split(".");

    if (parts.length !== 4) return false;

    return parts.every((part) => {
      if (!/^\d+$/.test(part)) return false;

      const number = Number(part);

      return number >= 0 && number <= 255;
    });
  };

  const isValidSearchTerm = (value: string): boolean => {
    return isValidIp(value) || isValidDomain(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedValue = searchTerm.trim();

    if (!trimmedValue) {
      setError("Please enter a valid IP address or domain name.");
      return;
    }

    if (!isValidSearchTerm(trimmedValue)) {
      setError("Please enter a valid IP address or domain name.");
      return;
    }

    setError("");
    onSearch(trimmedValue);
  };

  return (
    <form className="w-full max-w-lg px-4" onSubmit={handleSubmit} noValidate>
      <div className="flex w-full">
        <input
          type="text"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "ip-error" : undefined}
          aria-label="Search for an IP address or domain"
          placeholder="Search for an IP address or domain"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
            if (error) setError("");
          }}
          className={`min-w-0 flex-1 rounded-l-lg bg-white px-4 py-3 text-sm text-gray-800 outline-none focus:ring-2 ${
            error ? "ring-2 ring-red-500" : "focus:ring-blue-500"
          }`}
        />

        <button
          type="submit"
          aria-label="Search"
          className="flex h-11 w-12 shrink-0 items-center justify-center rounded-r-lg bg-[hsl(0,0%,17%)] text-white transition-colors hover:bg-blue-600"
        >
          <img src="src/assets/icon-arrow.svg" alt="" className="h-4 w-4" />
        </button>
      </div>

      {error && (
        <p
          id="ip-error"
          role="alert"
          className="mt-2 text-left text-sm font-medium text-red-100"
        >
          {error}
        </p>
      )}
    </form>
  );
};
