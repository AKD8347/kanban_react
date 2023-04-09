import './app-header.css'

import AppHeaderAccount from "./components/AppHeaderAccount";

function AppHeader() {
    return <header className="app-header">
        <div className="app-header__content">
            <h1 className="app-header__title">Awesome Kanban Board</h1>
            <AppHeaderAccount></AppHeaderAccount>
        </div>
    </header>
}

export default AppHeader;

