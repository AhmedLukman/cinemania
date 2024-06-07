import { faMagnifyingGlass, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Input,
  Skeleton,
} from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";
import React from "react";
import AvatarDropdown from "./AvatarDropdown";

const NavEnd = () => {
  const { data, status } = useSession();
  const user = data?.user;
  const isLoading = status === "loading";
  return (
    <>
      <Input
        classNames={{
          base: "max-w-full sm:max-w-[10rem] h-10",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper:
            "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
        }}
        placeholder="Search..."
        size="sm"
        type="search"
        endContent={
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-[#cecece]"
          />
        }
      />
      {!user && !isLoading && (
        <Button
          onPress={() => signIn()}
          endContent={<FontAwesomeIcon icon={faSignIn} />}
          variant="flat"
          className="text-white hidden md:flex items-center justify-center"
        >
          Sign In
        </Button>
      )}
      {isLoading && <Skeleton className="rounded-full w-[40px] h-[40px]" />}
      {user && (
        <AvatarDropdown
          name={user.name || ""}
          email={user.email || ""}
          image={user.image || ""}
        />
      )}
    </>
  );
};

export default NavEnd;
