import { useState } from "react";
import { useWindowSize } from "../customHook/windowSize";
import LeftMain from "./LeftMain";
import RightMain from "./RightMain";
import "./Main.css";

const Main = ({ user, pinnedTodos, unpinnedTodos, reload }) => {
  const [width] = useWindowSize();
  const [view, setView] = useState(true);
  const [active, setActive] = useState(true);

  return (
    <div className="main">
      {width > 400 ? (
        <div className="web-view">
          <LeftMain user={user} todos={unpinnedTodos} reload={reload} />
          <RightMain user={user} todos={pinnedTodos} reload={reload} />
        </div>
      ) : (
        <div className="mobile-view">
          <ul
            className="nav nav-tabs nav-justified mb-3"
            id="ex1"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${active && "active"}`}
                id="ex3-tab-1"
                data-mdb-toggle="tab"
                role="tab"
                aria-controls="tab-1"
                aria-selected="true"
                onClick={() => {
                  setView(true);
                  setActive(true);
                }}
              >
                My Todos
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${!active && "active"}`}
                id="ex3-tab-2"
                data-mdb-toggle="tab"
                role="tab"
                aria-controls="tab-2"
                aria-selected="false"
                onClick={() => {
                  setView(false);
                  setActive(false);
                }}
              >
                Pinned Todos
              </button>
            </li>
          </ul>

          {view ? (
            <LeftMain
              id="tab-1"
              className="tab-pane fade"
              user={user}
              todos={unpinnedTodos}
              reload={reload}
            />
          ) : (
            <RightMain
              id="tab-2"
              className="tab-pane fade"
              user={user}
              todos={pinnedTodos}
              reload={reload}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Main;
