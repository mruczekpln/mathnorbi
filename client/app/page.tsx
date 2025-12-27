import ThemeToggle from "@/components/homepage/theme-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import { Dice1, DicesIcon } from "lucide-react";

type Game = {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
};

export const GAMES: Game[] = [
  {
    id: "formula-rush",
    name: "Formula Rush",
    description:
      "Race against the clock to fill in the missing terms of famous algebraic identities like (a + b)².",
    imageSrc: "",
  },
  {
    id: "trig-master",
    name: "Trigonometry Master",
    description:
      "Analyze generated right-angled triangles and identify the correct sine, cosine, or tangent ratios.",
    imageSrc: "",
  },
];

export default function Page() {
  return (
    <>
      <ThemeToggle />

      <header className="pt-20 mb-20 flex flex-col gap-4 items-center px-8">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance ">
          mathnorbi.
        </h1>
        <p className="text-muted-foreground text-sm max-w-2xl text-center">
          An interactive math revision tool designed for speed and precision.
          Practice abbreviated multiplication formulas and basic trigonometry in
          a distraction-free, gamified environment.
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl w-full place-self-center px-8">
        {GAMES.map((game) => (
          <Card key={game.id} size="default">
            <CardHeader>
              <CardTitle>{game.name}</CardTitle>
              <CardDescription>{game.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href={`/games/${game.id}`}>Play</Link>
              </Button>
            </CardContent>
          </Card>
        ))}

        <Empty className="md:col-span-2">
          <EmptyHeader>
            <EmptyTitle>More games coming soon!</EmptyTitle>
            <EmptyDescription>
              Stay tuned for new math challenges and games to help you learn and
              have fun!
            </EmptyDescription>
          </EmptyHeader>

          <EmptyContent>
            <Button variant="outline">
              <DicesIcon></DicesIcon> Play a random game
            </Button>
          </EmptyContent>
        </Empty>
      </main>

      <footer className="absolute bottom-4 right-4">
        <p className="text-muted-foreground text-sm">
          mathnorbi. by{" "}
          <Link href="https://mruczek.pln" className="text-foreground">
            @mruczekpln
          </Link>
        </p>
      </footer>
    </>
  );
}
