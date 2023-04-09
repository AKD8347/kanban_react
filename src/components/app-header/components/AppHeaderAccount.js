import './app-header-account.css'

import UserAvatar from "../../../assets/img/user-avatar.svg";
import AccountArrowDown from "../../../assets/img/account-arrow-down.svg";

import {useState} from "react";
import AppDropdown from "../../app-dropdown/AppDropdown";

function AppHeaderAccount() {
    const [isOpen, setIsOpen] = useState(false)

    const dropdownItems = ['Profile', 'Log Out']

    return (
        <div className={["app-header-account", isOpen ? "app-header-account--open" : ''].join(" ")}
             onClick={() => setIsOpen(!isOpen)}>
            <div className="app-header-account__avatar">
                <img src={UserAvatar}/>
                <img className="app-header-account__arrow" src={AccountArrowDown}/>
            </div>
            <AppDropdown value={isOpen} items={dropdownItems}></AppDropdown>
        </div>
    )
}

export default AppHeaderAccount