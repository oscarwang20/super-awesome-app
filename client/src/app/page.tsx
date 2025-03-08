"use client";

import Image from "next/image";
import { useAuth } from "@/auth/AuthUserProvider";
import { signIn, signOut } from "@/auth/auth";
import { Button } from "@/components/ui/button";
import UserCard from "@/components/users/UserCard";
import { useState } from "react";
import { Person } from "../../../common/types";

export default function Home() {
  const { user } = useAuth();
  console.log(user);

  const people = useState<Person[]>([]);
  const fetchPeople = async () => {
    try {
      const response = await fetch("localhost:8080/api/people");
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-row w-full justify-center p-4">
      {user ? (
        <div className="flex flex-col items-center">
          <Button onClick={() => signOut()}>Sign out</Button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <Button className="w-fit" onClick={() => signIn()}>
            <div className="flex flex-row p-1 space-x-2">
              <Image src="/google.webp" alt="Google" width={20} height={20} />
              <p>Sign in with Google</p>
            </div>
          </Button>
          <UserCard
            person={{ first: "John", last: "Doe", age: 20, year: 2022 }}
          />
        </div>
      )}
    </div>
  );
}
