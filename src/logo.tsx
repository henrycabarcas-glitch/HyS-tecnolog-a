import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <span className="font-headline font-extrabold text-3xl tracking-tighter text-primary">
        H
      </span>
      <span className="font-headline font-extrabold text-3xl tracking-tighter text-foreground">
        Y
      </span>
      <span className="font-headline font-extrabold text-3xl tracking-tighter text-accent">
        S
      </span>
      <div className="hidden md:block border-l-2 border-muted h-8 mx-3"></div>
      <span className="hidden md:block font-headline font-bold text-sm uppercase tracking-wide text-muted-foreground">
        Tecnología SAS
      </span>
    </Link>
  );
};

export default Logo;
