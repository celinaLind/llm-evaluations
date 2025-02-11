export function TypographyH1({ value }: { value: string }) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {value}
    </h1>
  );
}
export function TypographyH2({ value }: { value: string }) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {value}
    </h2>
  );
}

export function TypographyH3({ value }: { value: string }) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {value}
    </h3>
  );
}

export function TypographyH4({ value }: { value: string }) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {value}
    </h4>
  );
}

export function TypographyMuted({ value }: { value: string }) {
  return <p className="text-sm text-muted-foreground">{value}</p>;
}
