import React from "react";
import Link from "next/link";
import useUser from "../../lib/useUser";
import { useRouter } from "next/router";
import fetchJson from "../../lib/fetchJson";
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const Header = () => {
  const { user, mutateUser } = useUser();
  const router = useRouter();
  return (
    <header>
      <nav>
        <ul>
          {user?.isLoggedIn && (
            <>
              <li>
                <a
                  href="/api/logout"
                  onClick={async (e) => {
                    e.preventDefault();
                    await mutateUser(
                      fetchJson("/api/logout", { method: "POST" }),
                    );
                    router.push("/login");
                  }}
                >
                  <IconButton color="primary" size="small">
                    <ExitToAppIcon />
                  </IconButton>
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
      <style jsx>{`
        nav { 
          height: 100%
        }
        
        ul {
          display: flex;
          height: 100%;
          margin: 0;
          padding: 0;
          flex-direction: column;
          list-style: none;
        }

        li {
          display: flex;
          color: white; 
          background-color: white;
        }
        
        li:last-child {
          margin-top: auto;
        }

        header {
          color: #fff;
          background-color: #6B48FF;
          padding 0 1em 1em;
        }
      `}</style>
    </header>
  );
};

export default Header;
