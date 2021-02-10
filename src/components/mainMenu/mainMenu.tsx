import React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import Logo from "../../icons/logo";
import type { View } from "types";

import { selectMenu } from "../../store/actions"
import useUser from "../../../lib/useUser";
import fetchJson from "../../../lib/fetchJson";


import {
  MainMenuContainer,
  LogoContainer,
  Menu,
  MainItems,
  MenuItem,
  LogoutItem,
  WindowIcon,
  LayoutIcon,
  CategoryIcon,
  TagIcon,
  LogoutIcon,
} from "./styles";

type MainMenuProps = {
  selectedView: View | null;
  setSelectedView: React.Dispatch<React.SetStateAction<View | null>>;
};
const MainMenu: React.FC<MainMenuProps> = ({
  selectedView,
  setSelectedView,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { mutateUser } = useUser({ redirectTo: "/login" });

  return (
    <MainMenuContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Menu>
        <MainItems>
          <MenuItem
            button
            onClick={() => {
              setSelectedView("windows");
              dispatch(selectMenu("windows"));
            }}
            selected={selectedView === "windows"}
          >
            <WindowIcon />
          </MenuItem>
          <MenuItem
            button
            onClick={() => {
              setSelectedView("layouts");
              dispatch(selectMenu("layouts"));
            }}
            selected={selectedView === "layouts"}
            
          >
            <LayoutIcon />
          </MenuItem>
          <MenuItem
            button
            onClick={() => {
              setSelectedView("categories");
              dispatch(selectMenu("categories"));
            }}
            selected={selectedView === "categories"}
          >
            <CategoryIcon />
          </MenuItem>
          <MenuItem
            button
            onClick={() => {
              setSelectedView("tags");
              dispatch(selectMenu("tags"));
            }}
            selected={selectedView === "tags"}
          >
            <TagIcon />
          </MenuItem>
        </MainItems>
        <LogoutItem
          button
          onClick={async (e: any) => {
            e.preventDefault();
            await mutateUser(fetchJson("/api/logout", { method: "POST" }));
            router.push("/login");
          }}
        >
          <LogoutIcon />
        </LogoutItem>
      </Menu>
    </MainMenuContainer>
  );
};

export default MainMenu;
