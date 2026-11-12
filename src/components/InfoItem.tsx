interface InfoItemProps {
  title: string;
  value: string;
}

export const InfoItem = ({ title, value }: InfoItemProps) => {
  return (
    <article className="flex flex-col gap-3 p-4 md:border-r md:border-[hsl(0,0%,58%)] last:md:border-r-0">
      <h3 className="text-[hsl(0,0%,58%)] text-xs tracking-widest font-medium break-words min-w-0">
        {title.toUpperCase()}
      </h3>
      <p className="text-[hsl(0,0%,17%)] font-bold text-lg break-words min-w-0 md:text-2xl">
        {value}
      </p>
    </article>
  );
};
