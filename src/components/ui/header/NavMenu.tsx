import { MENU } from "@/lib/constants";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Divider,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  Skeleton,
  cn,
} from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import React from "react";
import AvatarDropdown from "./AvatarDropdown";

const NavMenu = () => {
  const pathname = usePathname();
  const { data, status } = useSession();
  const user = data?.user;
  const isLoading = status === "loading";
  return (
    <NavbarMenu>
      {MENU.map((item) => (
        <NavbarMenuItem key={item.route}>
          <Link
            className={cn("w-full", {
              "text-blue": !pathname.startsWith(item.route),
            })}
            href={item.route}
            size="lg"
          >
            {item.value}
          </Link>
        </NavbarMenuItem>
      ))}
      <Divider className="my-3" />
      <NavbarMenuItem>
        {!user && !isLoading && (
          <Button
            endContent={<FontAwesomeIcon icon={faSignIn} />}
            onPress={() => signIn()}
          >
            Sign In
          </Button>
        )}
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link size="lg" color="foreground">
          My Profile
        </Link>
      </NavbarMenuItem>
      {/* {isLoading && <Skeleton className="rounded-full w-[40px] h-[40px]" />}
        {user && (
          <AvatarDropdown
            name={user.name || ""}
            email={user.email || ""}
            image={user.image || ""}
          />
        )} */}
    </NavbarMenu>
  );
};

export default NavMenu;
