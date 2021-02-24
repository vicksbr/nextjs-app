import React from "react";
import { useRouter } from "next/router";
import { connect, useDispatch } from "react-redux";

import type { View } from "types";
import { selectView, selectItem } from "store/actions";
import Logo from "icons/logo";

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

const WINDOWS_VIEW = "windows"
const LAYOUTS_VIEW = "layouts"
const CATEGORIES_VIEW = "categories"
const TAGS_VIEW = "tags"

type MainMenuProps = {
  selectedView: View | null;
};

const MainMenu: React.FC<MainMenuProps> = ({ selectedView }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { mutateUser } = useUser({ redirectTo: "/login" });

  const handleViewSelect = (toView: View) => {
    if (selectedView !== toView) {
      dispatch(selectView(toView))
      dispatch(selectItem(""))
      router.push(`/${toView}`)
    }
  }

  return (
    <MainMenuContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Menu>
        <MainItems>
          <MenuItem
            button
            onClick={() => handleViewSelect(WINDOWS_VIEW)}
            selected={selectedView === WINDOWS_VIEW}
          >
            <WindowIcon />
          </MenuItem>
          <MenuItem
            button
            onClick={() => handleViewSelect(LAYOUTS_VIEW)}
            selected={selectedView === LAYOUTS_VIEW}
          >
            <LayoutIcon />
          </MenuItem>
          <MenuItem
            button
            onClick={() => handleViewSelect(CATEGORIES_VIEW)}
            selected={selectedView === CATEGORIES_VIEW}
          >
            <CategoryIcon />
          </MenuItem>
          <MenuItem
            button
            onClick={() => handleViewSelect(TAGS_VIEW)}
            selected={selectedView === TAGS_VIEW}
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

const mapStateToProps = ({ selectedView }: { selectedView: View | null }) => ({
  selectedView,
});

export default connect(mapStateToProps)(MainMenu);
