import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Person {
  first: string;
  last: string;
  age: number;
  year: number;
}

export default function UserCard({ person }: { person: Person }) {
  const { first, last, age, year } = person;

  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarFallback className="bg-primary text-primary-foreground">
              {first.charAt(0)}
              {last.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xl font-semibold">
              {first} {last}
            </h3>
            <p className="text-sm text-muted-foreground">Class of {year}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <Badge variant="outline">{age} years old</Badge>
          <Badge variant="outline">Year {year}</Badge>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/50 pt-2">
        <div className="text-sm text-muted-foreground">
          Member since {new Date().getFullYear() - year} years ago
        </div>
      </CardFooter>
    </Card>
  );
}
